"use client";
import { useEffect, useRef, useState } from "react";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoVolumeMedium } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

import styles from "./styles.module.scss";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [plaing, setPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState(1.0);
  const [hoverVolume, setHoverVolume] = useState(false);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleUpdateTime = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", handleUpdateTime);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("timeupdate", handleUpdateTime);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);
  function play() {
    setPlay(true);
    audioRef.current?.play();
  }
  function pause() {
    setPlay(false);
    audioRef.current?.pause();
  }
  // function muted() {
  //   audioRef.current?.muted();
  // }
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = secs < 10 ? `0${secs}` : `${secs}`;
    return `${minutesString}:${secondsString}`;
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(event.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(event.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className={styles.audio}>
      <audio
        ref={audioRef}
        controls
        preload="none"
        src="/audio23.m4a"
        className={styles.audio__audio}
      ></audio>

      <div className={styles.audio__audioPlaing}>
        {plaing ? (
          <FaPause className={styles.audio__play} onClick={pause} />
        ) : (
          <FaPlay className={styles.audio__play} onClick={play} />
        )}
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          step="0.01"
          value={currentTime}
          onChange={handleSeek}
          className={styles.audio__duration}
        />
        {/* <div className={styles.article__duration}>
              <span className={styles.article__spend}></span>
            </div> */}
        <span>{formatTime(duration)}</span>
        <div className={styles.audio__volumeWrapper}>
          <IoVolumeMedium
            className={styles.audio__volumeIcon}
            onMouseEnter={() => setHoverVolume(true)}
            onMouseDown={() => setHoverVolume(false)}
          />
          {hoverVolume && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className={styles.audio__volume}
            />
          )}
        </div>
        <a href="/audio23.m4a" download className={styles.audio__download}>
          <IoMdDownload />
        </a>
      </div>
    </div>
  );
};
export default Player;
