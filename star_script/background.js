console.log("Bookmarklet starting");


//var count = 0;

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab)
{

    let msg = {
        text: "pokemonActivate"
    }

    chrome.tabs.sendMessage(tab.id, msg);
console.log("FSF");
}