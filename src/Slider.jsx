// Updated Slider.js
import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const slides = [/* your slides array */];

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
        };
        
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Infinite loop logic
    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div className="slides" style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` 
            }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="slide">
                        <h2>{slide.content}</h2>
                    </div>
                ))}
            </div>
            {/* Navigation buttons */}
        </div>
    );
};


export default Slider;
