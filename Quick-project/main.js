const toggle = document.querySelector('.ham-button')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible')
})

window.onscroll = function(){
    scrolling()
}

function scrolling(){
    if(document.body.scrolltop >= 20 || document.documentElement.scrollTop >= 20){
        document.getElementById("scrollBtn").style.display = "block";
    }else {
        document.getElementById('scrollBtn').style.display = 'none';
    }
}