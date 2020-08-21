burger=document.querySelector('.burger')
navlist=document.querySelector('.nav-list')
navbar=document.querySelector('.navbar')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    
})