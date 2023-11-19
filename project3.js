const c1 = document.querySelector('.container1');
const c2 = document.querySelector('.container2');
const c3 = document.querySelector('.container3');
const c4 = document.querySelector('.container4');
const body = document.querySelector('body')

c1.addEventListener('click',function(e)
{
    if(e.target.className==="container1")
    {
        body.style.backgroundColor = "yellow"
    }

})

c2.addEventListener('click',function(e1)
{
    if(e1.target.className==="container2")
    {
        body.style.backgroundColor = "gray"
    }

})
c3.addEventListener('click',function(e2)
{
    if(e2.target.className==="container3")
    {
        body.style.backgroundColor = "green"
    }

})
c4.addEventListener('click',function(e3)
{
    if(e3.target.className==="container4")
    {
        body.style.backgroundColor = "red"
    }

})