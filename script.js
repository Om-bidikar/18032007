// ===== Change the password here =====
const PASSWORD = "1832007";

// ===== Playful "no" screen messages — cycles each time she taps No =====
const nopeMessages = [
  { h: "How dare you 😤", s: "There's no escaping this one, Chiku." },
  { h: "Nooo come back!", s: "It only gets better from here, promise." },
  { h: "Okay, one more try?", s: "I made this just for you — give it a chance." },
  { h: "Fine, I'll wait 🥺", s: "But I'm not going anywhere." },
];
let nopeIndex = 0;

function showScene(id) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// --- lock screen ---
const lockForm = document.getElementById('lock-form');
const passwordInput = document.getElementById('password-input');
const lockError = document.getElementById('lock-error');

lockForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (passwordInput.value.trim() === PASSWORD) {
    lockError.classList.remove('show');
    showScene('scene-ask');
  } else {
    lockError.classList.add('show');
    passwordInput.value = '';
    passwordInput.focus();
  }
});

// --- consent screen ---
document.getElementById('btn-yes').addEventListener('click', () => showScene('scene-happy'));
document.getElementById('btn-no').addEventListener('click', () => {
  const msg = nopeMessages[nopeIndex % nopeMessages.length];
  nopeIndex++;
  document.getElementById('nope-heading').textContent = msg.h;
  document.getElementById('nope-sub').textContent = msg.s;
  showScene('scene-nope');
});
document.getElementById('btn-goback').addEventListener('click', () => showScene('scene-ask'));

// --- happy -> letter ---
document.getElementById('btn-to-letter').addEventListener('click', () => showScene('scene-letter'));

// --- envelope ---
const envelopeBtn = document.getElementById('envelope-btn');
const letterText = document.getElementById('letter-text');
envelopeBtn.addEventListener('click', () => {
  envelopeBtn.classList.add('open');
  setTimeout(() => letterText.classList.add('show'), 350);
});

// --- letter -> gallery ---
document.getElementById('btn-to-gallery').addEventListener('click', () => showScene('scene-gallery'));

// --- gallery -> gift ---
document.getElementById('btn-to-gift').addEventListener('click', () => showScene('scene-gift'));

// --- gift box -> hug ---
document.getElementById('gift-btn').addEventListener('click', () => {
  showScene('scene-hug');
  launchConfetti();
});

// --- confetti burst on final scene ---
function launchConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  const emojis = ['🎉', '💖', '✨', '🌸', '💛'];
  for (let i = 0; i < 28; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    span.style.fontSize = (0.9 + Math.random() * 0.9) + 'rem';
    container.appendChild(span);
  }
}
