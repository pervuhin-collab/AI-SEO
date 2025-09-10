import React from 'react';
import AnimatedElement from '../AnimatedElement';

const DiagramPill: React.FC<{ text: string, color: string, delay: number, initialState: string }> = ({ text, color, delay, initialState }) => (
    <AnimatedElement 
        delay={delay}
        initialState={initialState}
        finalState='opacity-100 translate-x-0 scale-100'
    >
        <div className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer ${color}`}>
            {text}
        </div>
    </AnimatedElement>
);

const Connector: React.FC<{delay: number, origin: 'origin-left' | 'origin-right'}> = ({delay, origin}) => (
    <AnimatedElement 
        delay={delay}
        initialState='opacity-0 scale-x-0'
        finalState='opacity-100 scale-x-100'
        className='flex-1 h-0.5 my-auto'
    >
        <div className={`w-full h-full bg-gray-300 ${origin}`}></div>
    </AnimatedElement>
);

const NewSeoDiagram: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full px-4 py-8">
            <div className="flex items-center w-full max-w-lg">
                <DiagramPill text="AEO" color="bg-cyan-500" delay={100} initialState='opacity-0 -translate-x-5' />
                <Connector delay={150} origin='origin-left' />
                <DiagramPill text="GEO" color="bg-indigo-900" delay={200} initialState='opacity-0 scale-75' />
                <Connector delay={250} origin='origin-left' />
                <DiagramPill text="AIO" color="bg-rose-500" delay={300} initialState='opacity-0 scale-75' />
                <Connector delay={350} origin='origin-left' />
                <DiagramPill text="SXO" color="bg-amber-500" delay={400} initialState='opacity-0 translate-x-5' />
            </div>
        </div>
    );
};

export default NewSeoDiagram;