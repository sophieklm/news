(function(exports){

function Newsfeed() {
  this.headlines = [];
}

Newsfeed.prototype.getHeadlines = function(guardianResponse) {
  this.headlines = guardianResponse[0].response.results;
  return this.headlines;
};

exports.Newsfeed = Newsfeed;
})(this);
