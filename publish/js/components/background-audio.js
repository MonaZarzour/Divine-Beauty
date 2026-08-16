const BACKGROUND_VOLUME = 0.12;

export const initBackgroundAudio = () => {
  const audio = document.querySelector("[data-background-audio]");
  const toggle = document.querySelector("[data-audio-toggle]");
  const label = toggle?.querySelector("[data-audio-label]");
  if (!audio || !toggle || !label) return;

  let musicEnabled = true;
  let interactionReceived = false;
  audio.volume = BACKGROUND_VOLUME;
  audio.muted = true;

  const updateToggle = () => {
    const audible = !audio.paused && !audio.muted;
    toggle.setAttribute("aria-pressed", String(audible));
    toggle.setAttribute("aria-label", audible ? "Slå av bakgrunnsmusikk" : "Start bakgrunnsmusikk");
    label.textContent = audible ? "Lyd av" : "Start musikk";
  };
  const beginMuted = async () => {
    try { await audio.play(); } catch { updateToggle(); }
  };
  const enableMusic = async () => {
    if (!musicEnabled) return;
    interactionReceived = true;
    audio.muted = false;
    try { await audio.play(); } catch { audio.muted = true; }
    updateToggle();
  };

  toggle.addEventListener("click", () => {
    if (audio.paused || audio.muted) {
      musicEnabled = true;
      enableMusic();
    } else {
      musicEnabled = false;
      audio.pause();
    }
  });
  audio.addEventListener("play", updateToggle);
  audio.addEventListener("pause", updateToggle);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) audio.pause();
    else if (musicEnabled && interactionReceived) enableMusic();
    else beginMuted();
  });
  const startAfterInteraction = (event) => {
    if (event.target.closest?.("[data-audio-toggle]")) return;
    enableMusic();
  };
  document.addEventListener("pointerdown", startAfterInteraction, { once: true });
  document.addEventListener("click", startAfterInteraction, { once: true });
  document.addEventListener("keydown", startAfterInteraction, { once: true });
  updateToggle();
  beginMuted();
};
