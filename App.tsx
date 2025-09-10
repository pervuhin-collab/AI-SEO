
import React from 'react';
import { SeoColumnData } from './types';
import SeoColumn from './components/SeoColumn';
import Header from './components/Header';
import Footer from './components/Footer';

const oldSeoData: SeoColumnData = {
  theme: {
    tagBg: 'bg-rose-500',
    tagText: 'text-white',
    titleColor: 'text-rose-600',
    highlightColor: 'text-rose-500',
    endGoalBg: 'bg-rose-500',
  },
  tag: 'SEO',
  title: 'Traditional SEO',
  playbook: {
    title: 'The Outdated Playbook',
    definition: 'Ranking in Google was the only metric. Page one = success.',
    framework: ['Stuff keywords', 'Collect backlinks', 'Optimize for bots'],
  },
  diagramType: 'old',
  whatItLookedLike: {
    title: 'What It Looked Like:',
    items: [
      'Keyword stuffing everywhere',
      'Thin content could rank',
      'More volume = more traffic',
      'Gaming algorithms',
      'Bots > humans',
    ],
  },
  problems: {
    title: 'Problems:',
    items: [
      'Rankings vanish after updates',
      'Traffic = fragile & shallow',
      'Zero citations in AI tools',
      'Authority was assumed, not earned.',
    ],
  },
  endGoal: {
    title: 'End Goal:',
    description: 'Page-one rankings + clicks.',
  },
};

const newSeoData: SeoColumnData = {
  theme: {
    tagBg: 'bg-indigo-900',
    tagText: 'text-white',
    titleColor: 'text-indigo-900',
    highlightColor: 'text-indigo-900',
    endGoalBg: 'bg-indigo-900',
  },
  tag: 'LLM SEO',
  title: 'AI SEO',
  playbook: {
    title: 'The AI-First Playbook',
    definition: 'Visibility now = being retrieved, cited & trusted by AI + Google.',
    framework: [
      { name: 'GEO', desc: '– Generative Engine Optimization' },
      { name: 'AEO', desc: '– Answer Engine Optimization' },
      { name: 'AIO', desc: '– AI Integration Optimization' },
      { name: 'SXO', desc: '– Search Experience Optimization' },
    ],
  },
  diagramType: 'new',
  whatItLookedLike: {
    title: 'What It Looks Like:',
    items: [
      'Your brand mentioned in AI answers',
      'Content clusters structured for retrieval',
      'Proof-based authority (data, case studies, original insights)',
      'Optimized for humans and AI models',
    ],
  },
  endGoal: {
    title: 'End Goal:',
    description: 'Retrieval → Citation → Trust → Compounding Visibility',
  },
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#2D69B4] text-gray-800 antialiased">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Header />
        <main className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <SeoColumn data={oldSeoData} />
          <SeoColumn data={newSeoData} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
