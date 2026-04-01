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
    {timestamp:"2:56" ,songName: "How It,s Done - Hunter/X", filePath : "songs/1.mp3" , coverPath: "cover/1.jpg"},
    {timestamp:"3:14" ,songName: "Golden - Hunter/X", filePath : "songs/2.mp3" , coverPath: "cover/2.jpg"},
    {timestamp:"2:30" ,songName: "Soda Pop - Saja Boys", filePath : "songs/3.mp3" , coverPath: "cover/3.jpg"},
    {timestamp:"3:02" ,songName: " Takedown - Hunter/X", filePath : "songs/4.mp3" , coverPath: "cover/4.jpg"},
    {timestamp:"3:11" ,songName: "Your Idol - Saja Boys", filePath : "songs/5.mp3" , coverPath: "cover/5.jpg"},
    {timestamp:"3:08" ,songName: "Free - Rumi, Jinu", filePath : "songs/6.mp3" , coverPath: "cover/6.jpg"},
    {timestamp:"4:10" ,songName: "What It Sounds Like - Hunter/X", filePath : "songs/7.mp3" , coverPath: "cover/7.jpg"},
    {timestamp:"2:46" ,songName: "Stratergy - TWICE", filePath : "songs/8.mp3" , coverPath: "cover/8.jpg"},
]

let songIndex = 0; // always start song from 0th index
let masterPlayButton = document.getElementById("masterPlayButton");
let myProgressBar = document.getElementById("songprogress");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songitem"));
let masterSongName = document.getElementById("mastersongname");

let audioElement = new Audio(src = `songs/${songIndex + 1}.mp3`);

// produce name and cover from list
songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerText = songs[i].timestamp;
});

// Master Play-Pause Clicker
masterPlayButton.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlayButton.classList.remove('fa-circle-play');
        masterPlayButton.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
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

// Progress bar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
});

// Helper for song-item-play button
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        // element.classList.remove("active");
    });
};

// Play songs in the list
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // select the song
        // e.target.classList.add("active")
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlayButton.classList.remove('fa-circle-play');
        masterPlayButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

// master previous button
document.getElementById("previous").addEventListener('click', ()=>{
    if (songIndex <= 0){
        songIndex = 7;
    }
    else{
        songIndex -= 1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex +1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlayButton.classList.remove('fa-circle-play');
    masterPlayButton.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

// master next button
document.getElementById("next").addEventListener('click', ()=>{
    if (songIndex >= 7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlayButton.classList.remove('fa-circle-play');
    masterPlayButton.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});