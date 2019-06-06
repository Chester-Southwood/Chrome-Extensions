function getword(info,tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText
    });
  }
  chrome.contextMenus.create({
    title: "Search afasfa : %s", 
    contexts:["image"], 
    id: "parent1"
  });

  chrome.contextMenus.create
  (
      {
          title: "child",
          contexts:["image"],
          onclick: getword,
          parentId: "parent1"
      }
  )