### What's in your stack?

Over the past few months, my stack has evolved in significant ways. I moved from running Mac OS X on a Mac laptop, to running Arch Linux on an Acer S3 (which is itself an under $400 Intel device without too much bling. 

I figured it might be interesting to you if I wrote a little bit about what I'm using in my stack, so you can have a specific perspective to compare your current stack.

Your stack is the software you pile on top of your computer hardware to do interesting things. These days, most people are deploying using various Linux-based stacks such as Ubuntu, Debian, or Arch Linux. More people are running Linux on their laptops now than did six months ago. 

Let me take you through how I built my stack, from the ground up.

**1.** Arch Linux VPS

I started deploying an Arch Linux VPS using [Digital Ocean](https://www.digitalocean.com/?refcode=26d8ed49730d) (rewards link). These are only 5 dollars, and deploy with one click. Digital Ocean emails the root password to me, I log in and customize the Arch Linux installation to suit my needs. I create a non-root user, and change all of my passwords to keep things secure. 

Then I type

	$ pacman -Syu 

To update the entire system to the latest and greatest of Arch Linux. I've written more about Arch Linux in [Deploy Arch](http://arch.evbogue.com).

**2.** Node.js

Using Arch Linux, it's easy to install Node.js. I just type

	$ pacman -S nodejs

This downloads and installs the latest stable version of Node. To verify it's been installed type

	$ node -v
	v0.10.17

I use Node.js to create tiny web servers. evbogue.com is running on Node using Express, Jade, Stylus, and Embittered. I call this specific node web server configuration [Bitters](http://bitters.evbogue.com). 

**3.** Bitters

To get my web server up and running on my vps, I first clone it

	$ git clone git@github.com:evbogue/evbogue.com.git
	$ cd evbogue.com
	$ npm install
	$ node app.js 

Now my web server is running. When I navigate to [http://localhost:8080](http://localhost:8080), I can see a local copy of evbogue.com. Whenever I change something, I can reload this in a web browser to see the changes.

For me, see [Deploy Node](http://deploy.evbogue.com)

**4.** Enlightenment

I'm using Enlightenment as my desktop environment on top of Arch Linux. I discovered Enlightenment through Terminology, a brilliant little terminal emulater with a tad of flash. [Watch Terminology in action](https://www.enlightenment.org/p.php?p=about/terminology&l=en) 

The Arch Linux wiki describes Enlightenment as [efficient yet breathtaking](https://wiki.archlinux.org/index.php/Enlightenment). I agree.

To install the stable version of Enlightenment type

	$ pacman -S enlightenment17

If you're just using a VPS you probably won't have a very great experience using Enlightenment over an Internet connection. Install Arch Linux on your local machine for a Tron-like experience.

<img src="/images/stack.jpg" class="profile" style="width: 100%;" />

What's in your stack? Email me [ev@evbogue.com](mailto:ev@evbogue.com)
