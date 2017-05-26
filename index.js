function init() {

  getGuardianResponse();
  newsfeed = new Newsfeed();
  newsfeed.getHeadlines();

}

window.onload = init;
