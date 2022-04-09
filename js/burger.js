const burger = document.querySelector('.burger')

burger.addEventListener('click', () =>{
    if(burger.classList.contains('active-burger')){
        burger.classList.remove('active-burger')
    }
    else{
     burger.classList.add('active-burger')   
    }
    
})