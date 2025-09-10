
import React from 'react';
import AnimatedElement from './AnimatedElement';

const Footer: React.FC = () => {
    return (
        <footer className="mt-16 text-center">
            <AnimatedElement delay={300}>
                <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                    <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
                        <span className="text-2xl mr-2">🔄</span> The future of visibility = <span className="underline decoration-wavy decoration-blue-500">being chosen by AI.</span>
                    </p>
                </div>
            </AnimatedElement>
        </footer>
    );
};

export default Footer;
