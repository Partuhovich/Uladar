const btns = document.querySelectorAll('.abaut__btn')
const texts = document.querySelectorAll('.abaut__inf__text')
let ind = 0;

const activebtn = n => {
    for(let btn of btns){
        btn.classList.remove('active__btn');
    }
    btns[n].classList.add('active__btn')
}

const activetext = n => {
    for(let text of texts){
        text.classList.remove('text-active');
    }
    texts[n].classList.add('text-active')
}

const curenttext = ind => {
    activetext (ind);
    activebtn (ind);
}

btns.forEach((item, indDot) => {
    item.addEventListener('click', () => {
        ind = indDot;
        curenttext(ind);
    })
})