/**
 * @author Gilad Manor
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
  	id: "com.wikibrains.chrome.app",
    bounds: {
      width: 1290,
      height: 950
    }
  });
});