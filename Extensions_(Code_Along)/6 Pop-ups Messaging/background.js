
function buttonClicked(tab)
{
    let msg = {txt: "defaultOption"}
    chrome.tabs.sendMessage(tab.id, msg);
}

chrome.browserAction.onClicked.addListener(buttonClicked);
