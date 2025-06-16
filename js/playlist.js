// Script Playlist
  const player = document.getElementById('player');
  const playlist = document.getElementById('playlist');
  const nowPlaying = document.getElementById('nowPlaying');

  function updateNowPlaying() {
    nowPlaying.textContent = '🎵 Sedang Diputar: ' + playlist.options[playlist.selectedIndex].text;
  }

  // Event saat user pilih lagu
  playlist.addEventListener('change', function () {
    player.src = this.value;
    player.play();
    updateNowPlaying();
  });

  // Auto next ke lagu berikutnya
  player.addEventListener('ended', function () {
    const currentIndex = playlist.selectedIndex;
    const nextIndex = (currentIndex + 1) % playlist.options.length;
    playlist.selectedIndex = nextIndex;
    player.src = playlist.value;
    player.play();
    updateNowPlaying();
  });

  // Tunggu interaksi pertama agar bisa autoplay
  document.addEventListener('DOMContentLoaded', function () {
    updateNowPlaying();
    const enableAudio = () => {
      player.play().catch(() => {
        // autoplay masih diblokir, tapi kita udah coba
      });
      document.removeEventListener('click', enableAudio);
    };
    document.addEventListener('click', enableAudio); // trigger pertama
  });
