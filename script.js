//initialization for class buttons
const depara = document.getElementById('depara');
const dname = document.getElementById('name');
const skill = document.getElementById('skiller');
const img = document.getElementById('img');
//the forwrd and back button 
const forward = document.getElementById('forward');
const back = document.getElementById('back');


    const handlePage = () => {

    if ( dname.innerHTML === 'Tanya Sinclair' ) {
        console.log('job done')
        depara.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`;
        dname.innerHTML='John Tarkpor';
        skill.innerHTML='Junior Front-end Developer';
        img.src='images/image-john.jpg';   
    }
    else{
        depara.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`;
        dname.innerHTML='Tanya Sinclair';
        skill.innerHTML='UX Engineer';
        img.src='images/image-tanya.jpg';

    }

    }

    forward.addEventListener('click',handlePage);
    back.addEventListener('click', handlePage);



