const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const slides = document.querySelectorAll('.sly-img')
const dots = document.querySelectorAll('.sly-btn')

let index = 0

const activedot = n => {
    for(let dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active')
}

const activeSlide = n => {
    for(let slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const curentslide = ind => {
    activeSlide (ind);
    activedot (ind);
}

const nextSlide = () => {
    if(index === slides.length - 1){
        index = 0;
        curentslide(index);
    }
    else{
        index++;
        curentslide(index);
    }
    
}

const prevSlide = () => {
    if(index === 0){
        index = slides.length - 1;
        curentslide(index);
    }
    else{
        index--;
        curentslide(index);
    }
}

dots.forEach((item, indDot) => {
    item.addEventListener('click', () => {
        index = indDot;
        curentslide(index);
    })
})

nextbtn.addEventListener('click', nextSlide)
prevbtn.addEventListener('click', prevSlide)

