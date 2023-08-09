total.addEventListener('mouseenter', totalJobDescriptionOn);
total.addEventListener('mouseleave', totalJobDescriptionOff);
pizzaExpress.addEventListener('mouseenter', pizzaExpressJobDescriptionOn);
pizzaExpress.addEventListener('mouseleave', pizzaExpressJobDescriptionOff);
neptik.addEventListener('mouseenter', neptikJobDescriptionOn);
neptik.addEventListener('mouseleave', neptikJobDescriptionOff);

function neptikJobDescriptionOn(){
    const neptik = document.querySelector('#jobDescription');
    const neptikJobDescription1 = document.createElement('li');
    neptikJobDescription1.classList.add('neptikJobDescription');
    neptikJobDescription1.textContent = 'Gathered and cleansed large amounts of data, managed multiple inboxes, built daily email campaigns and monitored their performance. This required me to be organised and independent in managing my workload.';
    neptik.appendChild(neptikJobDescription1);
    const neptikJobDescription2 = document.createElement('li');
    neptikJobDescription2.classList.add('neptikJobDescription');
    neptikJobDescription2.textContent = 'Cut processing times across the whole team by independently developing a series of Macros. Implemented training for all team members and created workflows and guides to accompany them.';
    neptik.appendChild(neptikJobDescription2);
    const neptikJobDescription3 = document.createElement('li');
    neptikJobDescription3.classList.add('neptikJobDescription');
    neptikJobDescription3.textContent = 'Trained new members of the team and analysed subject lines used in marketing emails.';
    neptik.appendChild(neptikJobDescription3);
    const neptikJobDescription4 = document.createElement('li');
    neptikJobDescription4.classList.add('neptikJobDescription');
    neptikJobDescription4.textContent = 'Created monthly performance reports for clients before attending video calls. Gained confidence in communicating the relevant data and information to the client.';
    neptik.appendChild(neptikJobDescription4);
}

function neptikJobDescriptionOff(){
    const neptik = document.querySelector('#jobDescription');
    const neptikJobDescription1 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription1);
    const neptikJobDescription2 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription2);
    const neptikJobDescription3 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription3);
    const neptikJobDescription4 = document.querySelector('li')
    neptik.removeChild(neptikJobDescription4);
}


function pizzaExpressJobDescriptionOn(){
    const pizzaExpress = document.querySelector('#jobDescription');
    const pizzaExpressJobDescription1 = document.createElement('li');
    pizzaExpressJobDescription1.classList.add('pizzaExpressJobDescription');
    pizzaExpressJobDescription1.textContent = 'Took orders, ran food, made coffees and prepared desserts. It was full each weekend and during school holidays, so I got used to fast-paced work environments. This meant I became very good at multitasking and looking after a high number of tables at once.'
    pizzaExpress.appendChild(pizzaExpressJobDescription1);
    const pizzaExpressJobDescription2 = document.createElement('li');
    pizzaExpressJobDescription2.classList.add('pizzaExpressJobDescription');
    pizzaExpressJobDescription2.textContent = 'Often trained new members of the team, and left to run the restaurant floor.'
    pizzaExpress.appendChild(pizzaExpressJobDescription2);
}

function pizzaExpressJobDescriptionOff(){
    const pizzaExpress = document.querySelector('#jobDescription');
    const pizzaExpressJobDescription1 = document.querySelector('li')
    pizzaExpress.removeChild(pizzaExpressJobDescription1);
    const pizzaExpressJobDescription2 = document.querySelector('li')
    pizzaExpress.removeChild(pizzaExpressJobDescription2);
}


function totalJobDescriptionOn(){
    const total = document.querySelector('#jobDescription');
    const totalJobDescription1 = document.createElement('li');
    totalJobDescription1.classList.add('totalJobDescription');
    totalJobDescription1.textContent = 'Daily tasks involved data entry, checking high volumes of information and handling queries.'
    total.appendChild(totalJobDescription1);
    const totalJobDescription2 = document.createElement('li');
    totalJobDescription2.classList.add('totalJobDescription');
    totalJobDescription2.textContent = 'Communicated via email and phone call with key stakeholders daily, helping me to develop interpersonal and communication skills. I also worked from home for a large part of my time at Total and adapted to using Microsoft Teams to keep in touch with my colleagues.'
    total.appendChild(totalJobDescription2);
}

function totalJobDescriptionOff(){
    const total = document.querySelector('#jobDescription');
    const totalJobDescription1 = document.querySelector('li')
    total.removeChild(totalJobDescription1);
    const totalJobDescription2 = document.querySelector('li')
    total.removeChild(totalJobDescription2);
}


