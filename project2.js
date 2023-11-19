const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    
    const Hindi = parseInt(document.querySelector('#Hindi').value);
    const English = parseInt(document.querySelector('#English').value);
    const Maths= parseInt(document.querySelector('#Maths').value);
    const Science = parseInt(document.querySelector('#Science').value);
    const Social = parseInt(document.querySelector('#Social').value);
    const Optional = parseInt(document.querySelector('#Optional').value);
    
    const marks = (Hindi+English+Maths+Science+Social+Optional);
    const result = document.querySelector('.calculate')

    const per = (marks/600)*100
    result.innerHTML = `your percentage is ${per}`
    
}
)
