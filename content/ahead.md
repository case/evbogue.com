### Getting ahead with Arch Linux and Systemd

I decided earlier this year July would be 'get ahead month'. I thought I was going to write a daily letter to help you get ahead. But then I realized it'd probably be more beneficial to me if I were to get ahead of you, and then report back later with what I've been up to.

I've been off the grid. When the Snowden/NSA thing broke, first I said 'fuck', then I said 'fuck it', and I jumped on an Amtrak heading towards an undisclosed location in the woods. Why fight the tide? People are growing ever more suspicious that their activities online are being monitored. Unencrypted conversations, money, everything. We live in a surveillence state. Duh.

The only thing you can do when people are suspicious of the Internet is head to the woods and learn some new shit.

I started July with two goals. 

1. Get Arch Linux installed on my machine.
2. Learn systemd

I have accomplished the first goal. After an epic four days of wrasting with my Macbook Pro, I finally got Arch Linux to take.

The benefit of Arch Linux is clear to anyone who's spent five minutes reading about it. When you type

	 $ pacman -Syu

the entire system updates to the newest version of everything. Every single package goes to the latest build. 

This leads to a more advanced and resilient system. Instead of waiting 6 months for Ubuntu to release their 'next big thing' (and have them maybe break everything) with Arch Linux everything on the system changes a little bit every day. 

A few days ago I got the latest version of Git. When the new version of Node.js comes out I'll get the latest version (as soon as the kid maintaining the arch Linux package updates the build.)

With Arch Linux, I'm always at the edge of what is possible. I'm always on the latest version.

Systemd is the other way I'm getting ahead of you this month. For those who don't know anything about Systemd, it's a new process manager for Linux. When my computer starts up, the first thing that starts is Syslinux, which boots the Linux kernel, which boots systemd, which starts everything else. 

Systemd is process #1. I'm most interested in it because with Systemd I can make sure all of the processes on my computer or my vps stay up.

For example. On the 4th of July, I was featured not once, but twice on the front page of Hacker News for "Distributed Everything". If you haven't been on the front page of Hacker News, then you haven't experienced the Hacker News Effect. Which is the flood of people who hit your site all at once.

It turns out, when my site was getting hit by thousands of people, the http server I'm running hit up against something that's called ulimit. It limits how many times a program is allowed to touch the disk. The http server crashed and I was left without a site during a crucial moment.

If I'd had systemd running, it would have noticed if one of my processes was down and restarted it.

Instead I had to log into my vps and keep hitting restart on the http router every time it crashed until the traffic leveled off.

What else have I been up to? Drinking beers. Eating bratwurst. Hanging out on IRC.

I've been having some trouble with my SMTP server. It's unclear if it's the router I'm using, being in the woods, or if the United States government doesn't want the population to communicate over email anymore. 
Regardless, if you've needed to get in touch about something specific, the best way might be to catch me on IRC. On occasion I hang out in #node.js and #gittip as well as #bitters on Freenode.

+ [Arch Linux](https://www.archlinux.org/)
+ [Systemd](http://freedesktop.org/wiki/Software/systemd/)

-Ev<br />
*July 19 2013<br />
Undisclosed location*
