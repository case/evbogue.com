### Deploying to Digital Ocean

<a href="https://www.digitalocean.com/?refcode=26d8ed49730d"><img src="/images/digitalocean.png" class="profile" style="float: right; margin-left: 1em; background: white;" /></a>

One of the biggest learning experiences I've had over the past year has been learning to deploy to a VPS.

A VPS is a virtual private server. It's a tiny virtual computer hosted inside a rack of servers somewhere in the world. 

Most people use Linux to deploy to a VPS. I started using Ubuntu, then switched to Arch Linux after I fell in love with 

	$ pacman -Syu

I started experimenting with a VPS by buying server time using Bitcoin somewhere in Germany. This was pretty expensive, but I had Bitcoins and I wanted to spend them at the time.

Then I heard about [Digital Ocean](https://www.digitalocean.com/?refcode=26d8ed49730d) (rewards link), and made the switch to their droplet based model of deploying VPSes.

The biggest benefit of using Digital Ocean is their droplets base droplets are only $5 a month for 512 of RAM. This should be more than enough to get you started learning how to use a VPS.

Digital Ocean is a New York-based company. As I'm writing this, they have two New York-based servers, one in Amsterdam, and another in San Francisco. The VPS hosting this website is on NY1, Digital Ocean's first group of servers.

Digital Ocean makes it very easy to fire up a VPS. You just name it, pick the amount of memory you want, then choose an operating system.


I usually choose Arch Linux at $5 a month.

Then you'll get an email to your inbox with your droplet IP address and root password.

To log into your vps, type

	$ ssh root@192.168.1.1
	password:

You'll be prompted for a password, and then you can do whatever you want with your new VPS. 

The first thing I usually do is type 

	$ pacman -Syu
	$ pacman -S git
	$ pacman -S nodejs

I use my [Digital Ocean](https://www.digitalocean.com/?refcode=26d8ed49730d) (rewards link) VPS to deploy tiny Node.js servers. I wrote more about how to do this in [Deploy Node](http://deploy.evbogue.com/).

Right now you're visiting my website on a Digital Ocean droplet. I'm deploying my website using [Bitters](http://bitters.evbogue.com) a simple-as-possible git-based realtime website built on Node.js, Express, Jade and Stylus.
