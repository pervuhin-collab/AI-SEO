
export interface Theme {
  tagBg: string;
  tagText: string;
  titleColor: string;
  highlightColor: string;
  endGoalBg: string;
}

export interface CardData {
  title: string;
  items: string[];
}

export interface PlaybookFrameworkItem {
  name: string;
  desc: string;
}

export interface SeoColumnData {
  theme: Theme;
  tag: string;
  title: string;
  playbook: {
    title: string;
    definition: string;
    framework: string[] | PlaybookFrameworkItem[];
  };
  diagramType: 'old' | 'new';
  whatItLookedLike: CardData;
  problems?: CardData;
  endGoal: {
    title: string;
    description: string;
  };
}
