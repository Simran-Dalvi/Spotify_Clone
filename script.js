document.querySelectorAll(".songitem").forEach(item => {
    item.classList.remove("active");
})

clickedSong.classList.add("active")