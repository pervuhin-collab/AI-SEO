import React from 'react';
import { SeoColumnData, PlaybookFrameworkItem } from '../types';
import AnimatedElement from './AnimatedElement';
import OldSeoDiagram from './diagrams/OldSeoDiagram';
import NewSeoDiagram from './diagrams/NewSeoDiagram';

const isPlaybookFrameworkItem = (item: any): item is PlaybookFrameworkItem => {
  return typeof item === 'object' && item !== null && 'name' in item && 'desc' in item;
};

const ContentCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${className}`}>
    <h3 className="text-lg font-semibold text-gray-700 mb-3">{title}</h3>
    {children}
  </div>
);

const ArrowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-gray-400 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


const SeoColumn: React.FC<{ data: SeoColumnData }> = ({ data }) => {
  const { theme, tag, title, playbook, diagramType, whatItLookedLike, problems, endGoal } = data;
  
  return (
    <div className="flex flex-col gap-8">
      <AnimatedElement>
        <div className="flex items-center gap-4">
          <span className={`px-5 py-2 rounded-full font-bold text-lg ${theme.tagBg} ${theme.tagText}`}>{tag}</span>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={100}>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <h3 className={`text-xl font-bold ${theme.titleColor} mb-2`}>{playbook.title}</h3>
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="font-semibold mb-3">Definition:</p>
            <p className="text-gray-600 mb-4">{playbook.definition}</p>
            <p className="font-semibold mb-3">Framework:</p>
            {Array.isArray(playbook.framework) && typeof playbook.framework[0] === 'string' ? (
                <div className="flex items-center flex-wrap">
                    {(playbook.framework as string[]).map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="font-medium text-gray-700 inline-block transition-transform duration-200 hover:scale-105">{item}</span>
                            {index < (playbook.framework as string[]).length - 1 && <ArrowIcon />}
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                <ul className="space-y-2">
                    {(playbook.framework as PlaybookFrameworkItem[]).map((item, index) => (
                        <li key={index} className="text-gray-700 p-1 rounded-md transition-all duration-200 hover:translate-x-1 hover:bg-gray-50">
                            <span className={`font-bold ${theme.highlightColor}`}>{item.name}</span>
                            <span className="text-gray-600">{item.desc}</span>
                        </li>
                    ))}
                </ul>
            )}
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={200}>
        {diagramType === 'old' ? <OldSeoDiagram /> : <NewSeoDiagram />}
      </AnimatedElement>

      <AnimatedElement delay={300}>
        <ContentCard title={whatItLookedLike.title}>
            <ul className="space-y-2">
                {whatItLookedLike.items.map((item, index) => (
                    <li key={index} className="flex items-start p-1 rounded-md transition-all duration-200 hover:translate-x-1 hover:bg-gray-50">
                        <span className={`mr-3 mt-1 text-lg ${theme.highlightColor}`}>→</span>
                        <span className="text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </ContentCard>
      </AnimatedElement>
      
      {problems && (
        <AnimatedElement delay={400}>
          <ContentCard title={problems.title}>
              <ul className="space-y-2">
                  {problems.items.map((item, index) => (
                      <li key={index} className="flex items-start p-1 rounded-md transition-all duration-200 hover:translate-x-1 hover:bg-gray-50">
                           <span className={`mr-3 mt-1 text-lg ${theme.highlightColor}`}>→</span>
                           <span className="text-gray-600">{item}</span>
                      </li>
                  ))}
              </ul>
          </ContentCard>
        </AnimatedElement>
      )}

      <AnimatedElement delay={problems ? 500 : 400}>
        <div className={`rounded-2xl p-6 shadow-lg text-white ${theme.endGoalBg}`}>
          <h3 className="text-lg font-semibold mb-2">{endGoal.title}</h3>
          <p className="font-medium text-lg">{endGoal.description}</p>
        </div>
      </AnimatedElement>

    </div>
  );
};

export default SeoColumn;