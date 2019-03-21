chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        text: "activateExtension"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}