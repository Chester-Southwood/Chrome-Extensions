console.log("Chrome extension go");

let paragraphs = document.getElementsByTagName('p');
for(elt of paragraphs)
{
    elt.innerHTML= 'Blame Joseph, Not Chester :p';
}
console.log("HI");