const song = document.querySelector("#birthdaySong");
const musicToggle = document.querySelector("#musicToggle");
const musicLabel = document.querySelector("#musicLabel");
const songPicker = document.querySelector("#songPicker");
const songHint = document.querySelector("#songHint");
const modal = document.querySelector("#letterModal");
const openButtons = [document.querySelector("#openLetter"), document.querySelector("#openLetterTop")];
const closeButtons = [document.querySelector("#closeLetter"), document.querySelector("#letterDone")];

let chosenLocalSong = false;

function updateMusicButton(isPlaying) {
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicLabel.textContent = isPlaying ? "Pause our song" : "Play our song";
  musicToggle.querySelector(".music-icon").textContent = isPlaying ? "Ⅱ" : "♫";
}

async function playSong() {
  try {
    await song.play();
    updateMusicButton(true);
    songHint.textContent = "Enjoy the music ♡";
    window.setTimeout(() => { songHint.style.opacity = "0"; }, 3500);
  } catch (error) {
    // If assets/song.mp3 is missing, offer the visitor a way to select their own audio file.
    songHint.textContent = "No song file found yet. Choose your song from this device.";
    songHint.style.opacity = "1";
    songPicker.click();
  }
}

musicToggle.addEventListener("click", async () => {
  if (song.paused) {
    await playSong();
  } else {
    song.pause();
    updateMusicButton(false);
  }
});

song.addEventListener("ended", () => updateMusicButton(false));
song.addEventListener("pause", () => updateMusicButton(false));
song.addEventListener("play", () => updateMusicButton(true));

songPicker.addEventListener("change", () => {
  const file = songPicker.files && songPicker.files[0];
  if (!file) return;
  const localUrl = URL.createObjectURL(file);
  song.src = localUrl;
  chosenLocalSong = true;
  songHint.textContent = `Selected: ${file.name}. This selection is for this browser session only.`;
  songHint.style.opacity = "1";
  playSong();
});

function openLetter() {
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#closeLetter").focus();
}
function closeLetter() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
openButtons.forEach(button => button.addEventListener("click", openLetter));
closeButtons.forEach(button => button.addEventListener("click", closeLetter));
modal.querySelector(".modal-backdrop").addEventListener("click", closeLetter);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeLetter();
});

document.querySelector("#wishButton").addEventListener("click", () => {
  document.querySelector("#wishResult").textContent = "Wish sent! May your year be full of magic. ✨";
  const colors = ["#c4b5fd", "#f0abdc", "#fbd38d", "#93c5fd", "#a7f3d0"];
  for (let i = 0; i < 85; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * .7}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 3500);
  }
});

// Allow visitor to hide the helper message by clicking it.
songHint.addEventListener("click", () => { songHint.style.opacity = "0"; });
