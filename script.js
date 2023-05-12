const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const body = document.querySelector('.container');

function controlTransition(){

    for(let i = 0; i<secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.activeBtn');
            currentBtn[0].className = currentBtn[0].className.replace('activeBtn', '');
            this.className += ' activeBtn';
        })
    }

    body.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;

        if (id){
            secBtn.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById (id);
            element.classList.add('active');
        }
    })

    const themeBtn = document.querySelector('.themeBtn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('lightTheme');
    })

}

controlTransition();