console.log("Pokemon!");

let fileNames = [
    "drilbur.gif",
    "drowzee.gif",
    "druddigon.gif",
    "ducklett.gif",
    "dugtrio.gif",
    "dunsparce.gif",
    "duosion.gif",
    "durant.gif"
];

let imgs = document.getElementsByTagName("img");

for (element of imgs) {
    let randomIndex = Math.floor(Math.random() * fileNames.length);
    let imageFile = fileNames[randomIndex];
    element.src = chrome.extension.getURL("pokemonGifs/" + imageFile);
    console.log(element.src);
}