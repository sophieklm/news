function testArticleHasAHeadline() {
  console.log('Test article has a headline');
  var article, headline;
  article = new Article();
  headline = "Rob Finds APIs baffling"

  assert.isConstructedFrom(article, Article);
  assert.isEqual(article.getHeadline(), headline);
}
testArticleHasAHeadline();
