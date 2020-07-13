function toggle(){
    var trailer = document.querySelector('.trailer');
    var video = document.querySelector('iframe');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}