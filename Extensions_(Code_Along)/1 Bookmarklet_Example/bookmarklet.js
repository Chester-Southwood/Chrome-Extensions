(
    function()
    {
        console.log("Bookmarklet Starting");
        let paragraphs = document.getElementsByTagName('p');
        for(let i = 1; i < paragraphs.length; i++)
        {
            paragraphs[i].innerHTML = 'kitten';
        }
    }
)();


