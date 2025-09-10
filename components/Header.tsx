
import React from 'react';
import AnimatedElement from './AnimatedElement';

const Header: React.FC = () => {
    return (
        <header className="text-center text-white">
            <AnimatedElement>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    Old SEO <span className="text-rose-300">≠</span> New SEO
                </h1>
            </AnimatedElement>
            <AnimatedElement delay={200}>
                <p className="mt-4 text-xl md:text-2xl text-blue-200">
                    Stop chasing rankings. Start engineering visibility.
                </p>
            </AnimatedElement>
        </header>
    );
}

export default Header;
