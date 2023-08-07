total.addEventListener('mouseenter', totalJobDescriptionOn);
total.addEventListener('mouseleave', totalJobDescriptionOff);
pizzaExpress.addEventListener('mouseenter', pizzaExpressJobDescriptionOn);
pizzaExpress.addEventListener('mouseleave', pizzaExpressJobDescriptionOff);
neptik.addEventListener('mouseenter', neptikJobDescriptionOn);
neptik.addEventListener('mouseleave', neptikJobDescriptionOff);

function totalJobDescriptionOn(){
    const total = document.querySelector('#jobDescription');
    const totalJobDescription = document.createElement('totalJobDescription');
    totalJobDescription.classList.add('totalJobDescription');
    totalJobDescription.textContent = 'content';
    total.appendChild(totalJobDescription);
}

function totalJobDescriptionOff(){
    const total = document.querySelector('#jobDescription');
    const totalJobDescription = document.querySelector('totalJobDescription')
    total.removeChild(totalJobDescription);
}


function pizzaExpressJobDescriptionOn(){
    const pizzaExpress = document.querySelector('#jobDescription');
    const pizzaExpressJobDescription = document.createElement('pizzaExpressJobDescription');
    pizzaExpressJobDescription.classList.add('pizzaExpressJobDescription');
    pizzaExpressJobDescription.textContent = ''
    pizzaExpress.appendChild(pizzaExpressJobDescription);
}

function pizzaExpressJobDescriptionOff(){
    const pizzaExpress = document.querySelector('#jobDescription');
    const pizzaExpressJobDescription = document.querySelector('pizzaExpressJobDescription')
    pizzaExpress.removeChild(pizzaExpressJobDescription);
}


function neptikJobDescriptionOn(){
    const neptik = document.querySelector('#jobDescription');
    const neptikJobDescription = document.createElement('neptikJobDescription');
    neptikJobDescription.classList.add('neptikJobDescription');
    neptikJobDescription.textContent = 'poo'
    neptik.appendChild(neptikJobDescription);
}

function neptikJobDescriptionOff(){
    const neptik = document.querySelector('#jobDescription');
    const neptikJobDescription = document.querySelector('neptikJobDescription')
    neptik.removeChild(neptikJobDescription);
}


