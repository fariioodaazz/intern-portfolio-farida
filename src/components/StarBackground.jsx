import { useEffect, useState } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    useEffect(() => {
        createStars();
        createMeteors();

        const handleResize = () => {
            createStars();
        };

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
    }, []);

    const createStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            const star = {
                id: i,
                size: Math.random() * 3 + 1 ,
                x: Math.random() *100 ,
                y: Math.random() *100 ,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            };
            newStars.push(star);
        }
        setStars(newStars);
    }
    const createMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            const meteor = {
                id: i,
                size: Math.random() * 2 +1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay : Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            };
            newMeteors.push(meteor);
        }
        setMeteors(newMeteors);
    };

    return <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
        {stars.map((star) => (
            <div key={star.id} className='star animate-pulse-subtle' style={{
                width: star.size + 'px',
                height: star.size + 'px',
                left: star.x + '%',
                top: star.y + '%',
                opacity: star.opacity,
                animationDuration: star.animationDuration + 's',
            }} />
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className='meteor animate-meteor' style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }} />
        ))}
    </div>
};