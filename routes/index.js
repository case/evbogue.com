
exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com v0.28.6 Stable' });
};

exports.ahead = function(req, res){
  res.render('ahead', { title: 'Evbogue.com | Getting ahead with Arch Linux and Systemd' });   
};

exports.about = function(req, res){
  res.render('about', { title: 'Evbogue.com | About Ev Bogue' });
};

exports.fiveyears = function(req, res){
  res.render('fiveyears', { title: 'Evbogue.com | The next 5 years in technology' });
};

exports.digitalocean = function(req, res){
  res.render('digitalocean', { title: 'Evbogue.com | Deploy with Digital Ocean' });
};
