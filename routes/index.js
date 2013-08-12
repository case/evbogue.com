
exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com v0.28.6 Stable' });
};

exports.digitalocean = function(req, res){
  res.render('digitalocean', { title: 'Evbogue.com | Deploy with Digital Ocean' });
};
