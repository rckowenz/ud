function enterPortal() {
  const audio = new Audio('mos.mp3');
  const typing = document.getElementById('typing');
  const cursor = document.getElementById('cursor');
  const texts = ["fnqs", "lol", "/sword"];
  let textIndex = 0;
  let charIndex = 0;
  audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
  audio.play();
  document.getElementById('enter-portal').style.display = "none";
  document.getElementById('body-div').classList.remove('hidden');
  function type() {
      if (charIndex < texts[textIndex].length) {
          typing.textContent = texts[textIndex].slice(0, charIndex + 1);
          charIndex++;
      } else {
          charIndex = 0;
          textIndex++;
          if (textIndex >= texts.length) {
              textIndex = 0;
          }
      }
  }
  setInterval(type, 115);
}
function cord() {
  window.location.href = "https://discord.gg/sword";
}
document.getElementById('typing').addEventListener('click', cord);