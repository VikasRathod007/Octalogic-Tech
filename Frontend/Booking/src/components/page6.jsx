import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

function Page6() {
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <Confetti width={dimensions.width} height={dimensions.height} />
            <h1 style={{ fontSize: '3rem', color: '#4caf50' }}>Booking Confirmed!</h1>
            <p style={{ fontSize: '1.5rem' }}>Thank you for your booking. We look forward to serving you!</p>
        </div>
    );
}

export default Page6;
