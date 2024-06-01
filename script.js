let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <offset + height){
            navLinks.forEach(link => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
let progres = document.getElementById("progres");
            let song = document.getElementById("song");
            let ctrlIcon = document.getElementById("progres");

            song.onloadedmetadata = function(){
                progres.max = song.duration;
                progres.value = song.currentTime;
            }

            function playPause(){
                if(ctrlIcon.classList.contains("fa-pause")){
                    song.pause();
                    ctrlIcon.classList.remove("fa-pause");
                    ctrlIcon.classList.add("fa-play");
                }
                else{
                    song.play();
                    ctrlIcon.classList.add("fa-pause");
                    ctrlIcon.classList.remove("fa-play");
                }
            }

            if(song.play()){
                setInterval(()=>{
                    progres.value = song.currentTime
                },500);
            }
            progres.onchange = function(){
                song.play();
                song.currentTime = progres.value;
                ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");
            }



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}