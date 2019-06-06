console.log("ITS WORKING");

let filename = ["Charmeleon.png","Ivysaur.png", "Raichu.png","Wartortle.png"];

let imgs = document.getElementsByTagName('img');

for(imgElt of imgs)
{
    let r = Math.floor(Math.random() * filename.length);
    let src = 'Pokemon/' + filename[r];
    imgElt.src = chrome.extension.getURL(src);
    console.log(imgElt.src);
}