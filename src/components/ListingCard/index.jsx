import React, { useState } from 'react';
import classNames from 'classnames';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const image = require("../../assets/images/Hostshare-icon-green.png")
const image1 = require("../../assets/images/Hostshare-logo-black.png")
const images = [
    image,
    image1,
    image,
];

const ListingCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <div className='border'>
                <div className="relative">
                    <div className="overflow-hidden rounded-lg border">
                        <img
                            className="rounded-lg h-64 w-full object-cover transition-transform duration-500 transform"
                            src={images[currentSlide]}
                            alt="Carousel Slide"
                        />
                    </div>

                    <div className="flex justify-center mt-2 absolute inset-x-0 bottom-2.5">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <span
                                key={index}
                                className={
                                    classNames('h-2 w-2 rounded-full mx-1 cursor-pointer', {
                                        'bg-blue-400': index === currentSlide,
                                        'bg-gray-300': index !== currentSlide,
                                    })
                                }
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>

                    <button
                        className="absolute top-1/2 left-0 mt-[-1.5rem] ml-3 bg-white rounded-full"
                        onClick={goToPreviousSlide}
                    >
                       <KeyboardArrowLeft />
                    </button>
                    <button
                        className="absolute top-1/2 right-0 mt-[-1.5rem] mr-3 bg-white rounded-full"
                        onClick={goToNextSlide}
                    >
                        <KeyboardArrowRight />
                    </button>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <h6>Hello</h6>
                        <p>4.5 / 10</p>
                    </div>
                    <p>At homme</p>
                    <p>At hgoldldld</p> <br />
                    <p><span>455</span> vllll</p>
                </div>
            </div>
        </>
    );
};

export default ListingCard;