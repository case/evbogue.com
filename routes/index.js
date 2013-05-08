
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com | Node.js and Technical Writing deployed by Ev Bogue' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About | Ev Bogue'});
};

exports.oldshit = function(req, res){
  res.render('oldshit', { title: 'Buy my old shit | Ev Bogue'});
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

exports.kickbacks = function(req, res){
  res.render('kickbacks', { title: 'Kickbacks | Ev Bogue'});
};

exports.gittip = function(req, res){
  res.render('gittip', { title: 'Gittip | Ev Bogue'});
};