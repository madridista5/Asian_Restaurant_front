import React, {useRef} from 'react';
import {BsArrowRightShort, BsArrowLeftShort, BsInstagram} from 'react-icons/bs';
import {SubHeading} from "../../components";

import './Gallery.css';

const images = [
    '../../assets/gallery01.png',
    '../../assets/gallery02.png',
    '../../assets/gallery03.png',
    '../../assets/gallery04.png',
];

export const Gallery = () => {
    const scrollRef = useRef<HTMLHeadingElement>(null);

    const handleScroll = (direction: string) => {
        const {current} = scrollRef;

        if(direction === 'left' && current !== null) {
            current.scrollLeft -= 300;
        } else if(current !== null) {
            current.scrollLeft += 300;
        }
    };

    return (
        <div className="app__gallery flex__center">

            <div className="app__gallery-content">
                <SubHeading title="Instagram"/>
                <h1 className="headtext__cormorant">Galeria</h1>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {images.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={index}>
                            <img src={require(`../../assets/gallery0${index+1}.png`)} alt="gallery_image"/>
                            <BsInstagram className="gallery__image-icon"/>
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrow">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => handleScroll('left')}/>
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => handleScroll('right')}/>
                </div>
            </div>

        </div>
    );
};
