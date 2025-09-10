import React from 'react';
import AnimatedElement from '../AnimatedElement';
import { KeywordResearchIcon, CompetitorResearchIcon, OnPageIcon, OffPageIcon, MeasureResultsIcon, ImproveResultsIcon, WebIcon } from '../icons/IconComponents';

const DiagramItem: React.FC<{ icon: React.ReactNode, text: string, position: string, delay: number }> = ({ icon, text, position, delay }) => (
    <AnimatedElement className={`absolute ${position} flex flex-col items-center text-center w-24 group`} delay={delay}>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-2 transition-transform duration-300 group-hover:scale-110 cursor-pointer">
            {icon}
        </div>
        <span className="text-xs font-medium text-gray-600">{text}</span>
    </AnimatedElement>
);

const Spokes: React.FC = () => (
    <>
        <AnimatedElement 
            initialState='opacity-0 scale-0'
            finalState='opacity-100 scale-100'
            className="absolute inset-0 flex items-center" 
            delay={100}
        >
            <div className="w-full h-0.5 bg-gray-300/70"></div>
        </AnimatedElement>
        <AnimatedElement 
            initialState='opacity-0 scale-0'
            finalState='opacity-100 scale-100'
            className="absolute inset-0 flex items-center" 
            delay={150}
        >
            <div className="w-full h-0.5 bg-gray-300/70 rotate-60"></div>
        </AnimatedElement>
        <AnimatedElement 
            initialState='opacity-0 scale-0'
            finalState='opacity-100 scale-100'
            className="absolute inset-0 flex items-center" 
            delay={200}
        >
            <div className="w-full h-0.5 bg-gray-300/70 -rotate-60"></div>
        </AnimatedElement>
    </>
);


const OldSeoDiagram: React.FC = () => {
    return (
        <div className="relative h-80 md:h-96 w-full flex items-center justify-center my-4">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
                <Spokes />

                <AnimatedElement className="absolute inset-0 flex items-center justify-center" delay={0}>
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-lg text-white animate-subtle-pulse">
                        <WebIcon />
                    </div>
                </AnimatedElement>
                
                <DiagramItem icon={<KeywordResearchIcon />} text="Keyword Research" position="top-0 left-1/2 -translate-x-1/2" delay={100} />
                <DiagramItem icon={<CompetitorResearchIcon />} text="Competitor Research" position="top-1/4 right-0 translate-x-1/4" delay={200} />
                <DiagramItem icon={<OnPageIcon />} text="On-Page Optimization" position="bottom-1/4 right-0 translate-x-1/4" delay={300} />
                <DiagramItem icon={<OffPageIcon />} text="Off-Page Optimization" position="bottom-0 left-1/2 -translate-x-1/2" delay={400} />
                <DiagramItem icon={<MeasureResultsIcon />} text="Measure Results" position="bottom-1/4 left-0 -translate-x-1/4" delay={500} />
                <DiagramItem icon={<ImproveResultsIcon />} text="Improve Results" position="top-1/4 left-0 -translate-x-1/4" delay={600} />
            </div>
        </div>
    );
};

export default OldSeoDiagram;