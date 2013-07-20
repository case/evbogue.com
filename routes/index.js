
exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com v0.28.6 Stable' });
};

exports.ahead = function(req, res){
  res.render('ahead', { title: 'Evbogue.com | Getting ahead with Arch Linux and Systemd' });   
};


