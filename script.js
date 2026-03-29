// document.querySelectorAll(".songitem").forEach(item => {
//     item.classList.remove("active");
// })

// clickedSong.classList.add("active")

console.log("Welcome to song player");

/*
NOTE:
Option 1 — Add a favicon (recommended)

Just add this inside your <head>:

<link rel="icon" href="favicon.ico" type="image/x-icon">

Then:

Put a file named favicon.ico in your project root
*/

// Initialize the varibales

//  Song list
let songs = [
    {songName: "How It,s Done - Hunter/X", filePath : "songs/1.mp3" , coverPath: "cover/1.jpg"},
    {songName: "Golden - Hunter/X", filePath : "songs/2.mp3" , coverPath: "cover/2.jpg"},
    {songName: "Soda Pop - Saja Boys", filePath : "songs/3.mp3" , coverPath: "cover/3.jpg"},
    {songName: " Takedown - Hunter/X", filePath : "songs/4.mp3" , coverPath: "cover/4.jpg"},
    {songName: "Your Idol - Saja Boys", filePath : "songs/5.mp3" , coverPath: "cover/5.jpg"},
    {songName: "Free - Rumi, Jinu", filePath : "songs/6.mp3" , coverPath: "cover/6.jpg"},
    {songName: "What It Sounds Like - Hunter/X", filePath : "songs/7.mp3" , coverPath: "cover/7.jpg"},
    {songName: "Stratergy - TWICE", filePath : "songs/8.mp3" , coverPath: "cover/8.jpg"},
]

let songIndex = 0; // always start song from 0th index
let masterPlayButton = document.getElementById("masterPlayButton");
let myProgressBar = document.getElementById("songprogress");
let gif = document.getElementById("gif");

let audioElement = new Audio(src = "songs/1.mp3");

// Master Play-Pause Clicker
masterPlayButton.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlayButton.classList.remove('fa-circle-play');
        masterPlayButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlayButton.classList.remove("fa-circle-pause");
        masterPlayButton.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});


// Listen to event
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});
