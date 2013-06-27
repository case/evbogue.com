
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com v0.28.6 Stable' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About | Ev Bogue'});
};

exports.writing = function(req, res){
  res.render('writing', { title: 'Writing | Ev Bogue'});
};

exports.node = function(req, res){
  res.render('node', { title: 'Node.js | Ev Bogue'});
};

exports.arch = function(req, res){
  res.render('arch', { title: 'Arch Linux | Ev Bogue'});
};

exports.gittip = function(req, res){
  res.render('gittip', { title: 'Gittip | Ev Bogue'});
};

exports.haters = function(req, res){
  res.render('haters', { title: 'Haters | Ev Bogue'});
};

exports.odyssey = function(req, res){
  res.render('odyssey', { title: 'The Odyssey | Ev Bogue'});
};

exports.letters = function(req, res){
  res.render('letters', { title: 'Letters | Ev Bogue'});
};

exports.hireme = function(req, res){
  res.render('hireme', { title: 'Hire me | Ev Bogue'});
};