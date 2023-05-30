import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// const image = require("../../assets/images/Hostshare-icon-green.png")
// const image1 = require("../../assets/images/Hostshare-logo-black.png")
// const images = [
//     image,
//     image1,
//     image,
// ];

const ListingCard = (props) => {
    const { 
        id, title, mainImage, city, country,rating, nightlyRate, secondImage, thirdImage, fourthImage, currency 
    } = props;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const images = [mainImage, secondImage, thirdImage, fourthImage];
    const totalSlides = images.length;

    // go to previous slide image
    const goToPreviousSlide = (event) => {
        event.stopPropagation();
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };
    // go to next slide image
    const goToNextSlide = (event) => {
        event.stopPropagation();
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <Box 
                className='rounded-lg' 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative">
                    <Box 
                        className="overflow-hidden rounded-lg" 
                        component={Link} 
                        to={`/rooms/${id}`} 
                        target='_blank'
                    >
                        <img
                            className="rounded-lg h-64 w-full object-cover transition-transform duration-500 transform"
                            loading="lazy"
                            src={images[currentSlide]}
                            alt="Carousel Slide"
                        />
                    </Box>


                    <div className="flex justify-center absolute inset-x-0 bottom-2.5">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <span
                                key={index}
                                className={
                                    classNames('h-2 w-2 rounded-full mx-1 cursor-pointer', {
                                        'bg-white': index === currentSlide,
                                        'bg-gray-300': index !== currentSlide,
                                    })
                                }
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>

                    {
                        isHovered && (
                            <>
                                <button
                                    className={
                                        classNames('absolute top-1/2 left-0 mt-[-1.5rem] ml-2 bg-white rounded-full z-30 p-1', {
                                            'hidden': currentSlide === 0,
                                            'block': currentSlide !== 0,
                                        })
                                    }
                                    onClick={goToPreviousSlide}
                                >
                                <KeyboardArrowLeft />
                                </button>
                                <button
                                    className={
                                        classNames('absolute top-1/2 right-0 mt-[-1.5rem] mr-2 bg-white rounded-full z-30 p-1', {
                                            'hidden': currentSlide === 3,
                                            'block': currentSlide !== 3,
                                        })
                                    }
                                    onClick={goToNextSlide}
                                >
                                    <KeyboardArrowRight />
                                </button>
                            </>

                        )
                    }            
                </div>
                <Box
                    component={Link} 
                    to={`/rooms/${id}`} 
                    target='_blank'
                >
                    <div className='flex justify-between'>
                        <h6 className='font-semibold'>{city}, {country}</h6>
                        <p className='font-semibold'>{rating}</p>
                    </div>
                    <p className='font-light'>At homme</p>
                    <p className='font-light'>At hgoldldld</p> <br />
                    <p>
                        <span className='font-semibold'>{currency}{nightlyRate}</span> <span className='font-normal'>night</span>
                    </p>
                </Box>
            </Box>
        </>
    );
};

export default ListingCard;
