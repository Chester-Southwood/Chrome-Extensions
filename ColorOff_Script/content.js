chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {

    if (document.body.style.background == "black") {
        location.reload();
    }
    else { 
        imgs = document.getElementsByTagName("*");
        for (element of imgs) {
            if (element.style.borderColor != null) {
                element.style.borderColor = "white";
            }
            console.log(element.tagName)
            if (element.tagName != "IMG") {
                element.style.background = "black";
                element.style.color = "white";
            }
            else {
                element.style.background = "white";
                element.style.color = "black";
            }
            console.log(element);
        }

        document.textContent.style.color = white;
    }
}