"use client";
import { useEffect, useRef, useState } from "react";

import { FaPlayCircle, FaPlay, FaPause } from "react-icons/fa";
import { IoVolumeMedium } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

import styles from "./article.module.scss";

interface numberType {
  number: number;
}

const Article: React.FC<numberType> = ({ number }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [plaing, setPlay] = useState<boolean>(false);
  const [openMusic, setOpenMusic] = useState<boolean>(false);
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
    setOpenMusic(true);
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
    <article className={styles.article}>
      <header className={styles.article__header}>
        <span className={styles.article__headerNew}>New</span>
        <div className={styles.article__categories}>Business</div>
        <time dateTime="18-01-2024 19:00" className={styles.article__date}>
          Jan 18, 2024
        </time>
      </header>
      <h2 className={styles.article__title}>
        <span className={styles.article__number}>{number}</span> - How to
        rapidly test any experience!
      </h2>
      <p className={styles.article__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean
        placerat mauris nisl Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu
        dui. Aenean placerat mauris nisl
      </p>
      <div className={styles.article__audioWrapper}>
        <audio
          ref={audioRef}
          controls
          preload="none"
          src="/audio23.m4a"
          className={styles.article__audio}
        ></audio>
        {openMusic ? (
          <div className={styles.article__audioPlaing}>
            {plaing ? (
              <FaPause className={styles.article__play} onClick={pause} />
            ) : (
              <FaPlay className={styles.article__play} onClick={play} />
            )}
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              step="0.01"
              value={currentTime}
              onChange={handleSeek}
              className={styles.article__duration}
            />
            {/* <div className={styles.article__duration}>
              <span className={styles.article__spend}></span>
            </div> */}
            <span>{formatTime(duration)}</span>
            <div className={styles.article__volumeWrapper}>
              <IoVolumeMedium
                className={styles.article__volumeIcon}
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
                  className={styles.article__volume}
                />
              )}
            </div>
            <a
              href="/audio23.m4a"
              download
              className={styles.article__download}
            >
              <IoMdDownload />
            </a>
          </div>
        ) : (
          <div className={styles.article__frontPlay} onClick={play}>
            <FaPlayCircle className={styles.article__playIcon} />
            <span>listen now</span>
          </div>
        )}
      </div>
    </article>
  );
};
export default Article;
