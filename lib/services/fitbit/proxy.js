var Fitbit = require('fitbit-js');

exports.proxy = function(auth, req, res) {
  var fb = Fitbit(auth.consumerKey, auth.consumerSecret);
  req.query.token = {
    oauth_token: auth.token,
    oauth_token_secret: auth.tokenSecret
  };
  fb.apiCall(req.method, req.url, req.query, function(err, js) {
    if(err) return res.json(err, 500);
    res.json(js);
  });
}
