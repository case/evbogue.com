### Keep shit up with systemd

systemd is one of those super cool things no one ever talks about. Because it's very low level, and sits right before the kernel in a couple of Linux distros. It's a rare human who dares to venture this low into their stack.

#### What is systemd?

systemd is a new(ish) way of starting, enabling, disabling, and stopping processes running on a Linux system. It's also a great way to restart processes when they fail.

This makes systemd ideal to [Deploy Node](http://deploy.evbogue.com), because Node has this tendency to fail at unexpected times when it runs across a request it doesn't understand or it is accessed by a very old browser. Who knows or cares what brings your Node down, let's just keep it up. Then you won't have to wake up in the middle of the night to make sure your Node is still online.

Once you get into systemd, you might find its functionality oddly familiar if you're a current or former Mac user. This is because the closest other piece of software to systemd in the world is launchd, which was pioneered at Apple back when Apple pioneered things.

#### Choosing a Linux distro with systemd installed

systemd is a pretty low level ingredient to a Linux distro, so you can't just install it when you need it. systemd needs to start the kernel, so if your distro doesn't use systemd you can't just force systemd upon it. It's probably easier to switch to a distro that has systemd at its core than to force systemd ontop of *cough* Ubuntu *cough*.

systemd was pioneered at Fedora, so if you're using Fedora you're golden with systemd. Ubuntu does not support systemd. As of the latest version of Debian, Weezy, you can use systemd with Debian -- with some issues. You can also use systemd with OpenSUSE.

I, of course, use [Arch Linux](http://arch.evbogue.com) with systemd.

#### Why use systemd?

Fire up an Linux vps right now. Now deploy anywhere between five to 100 Node.js applications. Now type this into your terminal

	reboot

Uh oh. Shit. Now you have to start all of those processes again from scratch. What's a good way to start them all again? The answer is systemd.

With systemd you just write a unit file to tell the process what to do. I've put all of my systemd unit files in a [Git repo](https://github.com/evbogue/systemd-units) so you can see how the work.

Let's write an easy-to-deploy unit file for a Node.js application. In this case, [Bitters](http://bitters.evbogue.com).

First, open a new file at the appropriote location

	$ sudo vim /etc/systemd/system/bitters.service

And type the unit file.

	[Service]
	ExecStart=/usr/bin/node /home/evbogue/bitters/app.js
	Restart=always
	StandardOutput=syslog
	SyslogIdentifier=bitters
	User=evbogue
	Group=nobody
	Environment=PATH=/usr/bin/node:/usr/bin:/usr/local/bin

	[Install]
	WantedBy=multi-user.target

I start this service

	$ sudo systemctl start bitters.service

Now Bitters is running at port 7777.

To instruct this service to start every time my systemd reboots, I type 

	$ sudo systemctl enable bitters.service

If anything goes wrong, view the syslog output

	$ sudo journalctl -u bitters.service

Congrats! You're now keeping shit up with systemd. 

Now go and take a nap, your process will still be alive when you wake up.
