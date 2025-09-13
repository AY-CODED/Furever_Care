// src/components/TopTicker.jsx
import React, { useEffect, useState } from "react";

const TopTicker = () => {
    const [time, setTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const location = "Lagos, Nigeria"; // Example, can be dynamic
    const updates = [
        "New pet adoption event this weekend!",
        "Check out our latest pet food deals!",
        "Vet appointments available online.",
    ];

    return (
        <div className="w-full bg-pink-100 border-b border-purple-300 overflow-hidden mt-7">
            <div className="whitespace-nowrap animate-marquee py-2 px-4 flex items-center gap-8 text-sm sm:text-base text-purple-700 font-medium">
                <span>📍 {location}</span>
                <span>🕒 {time.toLocaleTimeString()}</span>
                {updates.map((u, i) => (
                    <span key={i}>🔔 {u}</span>
                ))}
            </div>

            {/* Tailwind animation for marquee */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-marquee {
                    display: inline-block;
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default TopTicker;
