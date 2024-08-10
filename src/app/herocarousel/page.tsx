"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const heroSlides = [
    {
        title: "Healthy & Hearty",
        description: "Savor the flavor of wellness! We present more than 1000+ menu variations as if enjoying restaurant-style dishes every day!",
        backgroundImage: "url(https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    },
    {
        title: "Healthy & Hearty",
        description: "Savor the flavor of wellness! We present more than 1000+ menu variations as if enjoying restaurant-style dishes every day!",
        backgroundImage: "url(https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    },
    {
        title: "Healthy & Hearty",
        description: "Savor the flavor of wellness! We present more than 1000+ menu variations as if enjoying restaurant-style dishes every day!",
        backgroundImage: "url(https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    }
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: heroSlides[currentIndex].backgroundImage }}>
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div className="relative z-10 text-center text-white p-6 pt-12">
                <div className="max-w-md mx-auto">
                    <h1 className="mb-5 pt-12 text-5xl font-extrabold text-white">{heroSlides[currentIndex].title}</h1>
                    <p className="mb-5 text-lg text-white">{heroSlides[currentIndex].description}</p>
                    <button className="btn btn-light py-2 px-4 rounded">
                        <Link href="/about-us">About Us</Link>
                    </button>
                </div>
            </div>
            {/* Navigation buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-5"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-5"
            >
                &gt;
            </button>
        </div>
    );
};

export default HeroCarousel;
