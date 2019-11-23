chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://supernotes.app/";
    chrome.tabs.create({ url: newURL });
});