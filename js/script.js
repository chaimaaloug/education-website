let navbar = document.querySelector('.header .navBar');

document.querySelector('#menuBtn').onclick = () => {
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
}


let mainVid = document.querySelector('.mainVideo');

document.querySelectorAll('course3 .box .video video').forEach(vid => {
    vid.onclick = () => {
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
        
    }
});


document.querySelector('#closeVid').onclick = () => {
      mainVid.classList.remove('active');
}




