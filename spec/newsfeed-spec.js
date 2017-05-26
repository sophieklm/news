function testNewsfeedHasHeadlines() {
  console.log('Test article has a headline:');
  var headline = "Rob Finds APIs baffling";
  var newsfeed = new Newsfeed();

  assert.isConstructedFrom(newsfeed, Newsfeed);
  //assert.isEqual(newsfeed.headlines, headline);
}
testNewsfeedHasHeadlines();
