import React, {useRef, useState} from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';

import './Intro.css';

export const Intro = () => {
    const [playVideo, setPlayVideo] = useState<boolean>(false);
    let vidRef = useRef<HTMLVideoElement | null>(null);

    const handleVideo = () => {
        setPlayVideo(prevState => !prevState);
    };

    if (playVideo) {
        vidRef.current?.play();
    } else {
        vidRef.current?.pause();
    }

    return (
        <div className="app__video">
            <video
                src={require('../../assets/meal.mp4')}
                ref={vidRef}
                loop
                controls={false}
                muted
                className="video-js"
            />
            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={handleVideo}
                >
                    {playVideo
                        ? <BsPauseFill color="#fff" fontSize={30}/>
                        : <BsFillPlayFill color="#fff" fontSize={30}/>
                    }
                </div>
            </div>
        </div>
    );
};
