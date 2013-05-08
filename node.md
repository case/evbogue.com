Node.js
=======

I deploy [Node.js](http://nodejs.org).

Evbogue.com is built on [Bitters](http://bitters.evbogue.com/), which is deployed using Node.js.

<a href="http://deployno.de"><img src="/images/deploy.jpg" width="210px" class="profile" style="float: right; margin-left: 1em;"></a>

I've created a resource called [Deploy Node](http://deployno.de). I created Deploy Node because I'm a technical writer, and I get a lot of questions about Node. 

As I was learning Node, I found the documentation around Node.js to be kind of sparse and scattered. In response, I put all of my collected notes into an easy to read resource to assist you as you learn to deploy Node.

Deploy Node is of course, deployed using Node.

Visit [deployno.de](http://deployno.de) to learn more.

<a href="http://evbogue.fetchapp.com/sell/sfasaixe/ppc"><button class="button">Buy Now | $37</button></a>

### Hello World!

Write your first Node.js HTTP server right now. First, Install [Node.js](http://nodejs.org).

Open your favorite text editor. For me, that's [Sublime Text 2](http://www.sublimetext.com/). And type...

	var http = require('http');

	http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World!');
		}).listen(3000);

	console.log('Your Node.js server is running at http://localhost:3000/');

Save this file as app.js. Find the file with your terminal and type

	$ node app.js

Visit [localhost:3000](http://localhost:3000) to see your Node.js server in realtime.

### Other resources

These are few resources I've enjoyed about Node.js are listed below. These are so good I can recommend them to you.

+ [Art of Node](https://github.com/maxogden/art-of-node) by Max Ogden -- An introduction to Node.js
+ [The Streams Handbook](https://github.com/substack/stream-handbook) by Substack -- focusing on how to create modular programs using Node.js streams

If you have specific question about Node.js, feel free to [email me](mailto:ev@evbogue.com)

There's a sizable community of Node.js developers on IRC. Visit [Freenode](irc://irc.freenode.net) and join #node.js. Watch the stream go by, or ask your specific question there.


