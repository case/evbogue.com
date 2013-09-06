
exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com v0.28.6 Stable' });
};

exports.digitalocean = function(req, res){
  res.render('digitalocean', { title: 'Evbogue.com | Deploy with Digital Ocean' });
};

exports.workcation = function(req, res){
  res.render('workcation', { title: 'Evbogue.com | My summer workcation'});
};

exports.stack = function(req, res){
  res.render('stack', { title: 'Evbogue.com | What\'s in your stack?' });
};

exports.maccentricity = function(req, res){
  res.render('maccentricity', { title: 'Evbogue.com | Maccentricity' });
};

exports.systemd = function(req, res){
  res.render('systemd', { title: 'Evbogue.com | Keep shit up with systemd' });
};
