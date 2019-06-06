let nums = document.getElementsByTagName('img'); 

for(let i = 0; i < nums.length; i++)
{
    nums[i].addEventListener('click', function (other) {
        console.log(other.path[0]);
        let temp = other.path[0]
        let str = temp.style.width;
        let num = Number(str.substr(0, str.length - 1));
        console.log(num);
        if(num === "" || isNaN(num))
        {
            other.path[0].style.width = "25%";
        }
        else if(num !== 100)
        {
            other.path[0].style.width = (num + 25) + "%";
        }
        else
        {
            other.path[0].style.width = "";
        }
        console.log(other.path[0]);

      }, false);
}



