import React, { useState, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);

  const playPause = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    audioRef.current.volume = vol;
  };

  const seek = (e) => {
    const value = e.target.value;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (value / 100) * duration;
    setProgress(value);
  };

  const updateProgress = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  return (
    <div className="player-container">
      <h2>Music Player UI</h2>

      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onTimeUpdate={updateProgress}
      />

      {/* Play/Pause Button */}
      <button className="play-btn" onClick={playPause}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>

      {/* Progress Bar */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={seek}
        className="progress-bar"
      />

      {/* Volume Control */}
      <div className="volume-container">
        <label>🔊 Volume</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="volume-slider"
        />
      </div>
    </div>
  );
}