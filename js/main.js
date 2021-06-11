let myLinks = document.getElementById('links'),
    myUl = document.querySelector('.navbar ul'),
    header = document.querySelector('header'),
    fixedBtn = document.getElementById('fixed-btn');

myLinks.addEventListener('click', function(){
    this.classList.toggle('active');
})

document.onscroll = function(){
    header.classList.toggle('sticky', window.scrollY > 0);
}

window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 500){
        fixedBtn.style.display = 'block';
    } else{
        fixedBtn.style.display = 'none';
    }
};

fixedBtn.addEventListener('click', ()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});