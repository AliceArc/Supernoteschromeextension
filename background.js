chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://my.supernotes.app/";
    chrome.tabs.create({ url: newURL });
});
