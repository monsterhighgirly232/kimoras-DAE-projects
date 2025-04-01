// 🎵 Play Background Music
function playMusic() {
    const audio = document.getElementById("background-music");
    if (audio) {
        audio.play();
    } else {
        console.error("Audio element not found!");
    }
}
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
});


// 📸 Load Gallery Page
function loadGallery() {
    const galleryFrame = document.getElementById("galleryFrame");
    if (galleryFrame) {
        galleryFrame.src = "pictures.html"; // Load gallery page
        galleryFrame.style.display = "block"; // Show iframe
    } else {
        console.error("Gallery frame not found!");
    }
}

function loadPage(page) {
    // Hide all sections
    document.getElementById("home").style.display = "none";
    document.getElementById("galleryFrame").style.display = "none";
    document.getElementById("aboutFrame").style.display = "none";

    if (page === "gallery") {
        document.getElementById("galleryFrame").src = "gallery.html"; // Make sure the file exists
        document.getElementById("galleryFrame").style.display = "block";
        document.getElementById("galleryFrame").scrollIntoView({ behavior: "smooth" });
    } else if (page === "about") {
        document.getElementById("aboutFrame").src = "about.html"; // Make sure this file exists
        document.getElementById("aboutFrame").style.display = "block";
        document.getElementById("aboutFrame").scrollIntoView({ behavior: "smooth" });
    } else {
        document.getElementById(page).style.display = "block";
    }
}


// 🎵 Song Playlist
const songs = [
    { name: "Song 1", src: "music.mp3" },
    { name: "Song 2", src: "chun-li.mp3" },
    { name: "Song 3", src: "umbrella.mp3" },
    { name: "Song 4", src: "diamonds.mp3" },
    { name: "Song 5", src: "Obsesión.mp3" },
    { name: "Song 6", src: "pillsmpotions.mp3" },
    { name: "Song 7", src: "readyornot.mp3" },
    { name: "Song 8", src: "strangers.mp3" },
    { name: "Song 9", src: "canttakemyeyesoffyou.mp3" },
    { name: "Song 10", src: "bodakyellow.mp3" },
    { name: "Song 11", src: "mesaytara.mp3" },
    { name: "Song 12", src: "murdershewrote.mp3" },
    { name: "Song 13", src: "hotgirl.mp3" },
];

let currentSongIndex = 0;
let isShuffle = false;
let isRepeat = false;

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const shuffleStatus = document.getElementById("shuffleStatus");
    const repeatStatus = document.getElementById("repeatStatus");

    if (!audioPlayer || !playPauseBtn || !shuffleStatus || !repeatStatus) {
        console.error("Some elements are missing!");
        return;
    }

    // 🎵 Load and Play Song
    function playSong(index) {
        currentSongIndex = index;
        audioPlayer.src = songs[currentSongIndex].src;
        audioPlayer.play();
        playPauseBtn.textContent = "Pause"; // Update button text
    }

    // ▶️ Play/Pause Toggle
    playPauseBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    // ⏭ Next Song
    function nextSong() {
        if (isRepeat) {
            playSong(currentSongIndex);
        } else if (isShuffle) {
            playSong(getRandomSongIndex());
        } else {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            playSong(currentSongIndex);
        }
    }

    // ⏮ Previous Song
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(currentSongIndex);
    }

    // 🔀 Toggle Shuffle Mode
    function toggleShuffle() {
        isShuffle = !isShuffle;
        shuffleStatus.textContent = isShuffle ? "ON" : "OFF";
    }

    // 🔁 Toggle Repeat Mode
    function toggleRepeat() {
        isRepeat = !isRepeat;
        repeatStatus.textContent = isRepeat ? "ON" : "OFF";
    }

    // 🎵 Auto-Play Next Song When Current Ends
    audioPlayer.onended = function () {
        nextSong();
    };

    // 🎵 Pick a Random Song (for Shuffle)
    function getRandomSongIndex() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        return randomIndex;
    }

    // 🚀 Auto-play First Song on Load
   // ✅ Load the first song on page load
function loadFirstSong() {
    audioPlayer.src = songs[currentSongIndex].src;
    audioPlayer.load(); // Ensure the player loads the song
}

// ✅ Play or Pause Toggle (Fixing Play Button)
playPauseBtn.addEventListener("click", function () {
    if (!audioPlayer.src) {
        loadFirstSong(); // Load a song if none is set
    }
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
});

// ✅ Load the first song when the page loads
loadFirstSong();

});
loadPage('about');

