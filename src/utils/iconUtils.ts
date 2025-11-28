const iconMap: Record<string, string> = {
  react: 'magic-wand',
  typescript: 'scroll',
  javascript: 'scroll',
  node: 'tree',
  python: 'snake',
  java: 'cup',
  html: 'document',
  css: 'paint-brush',
  git: 'branch',
  github: 'branch',
  database: 'chest',
  api: 'network',
  web: 'globe',
  mobile: 'phone',
  game: 'dice',
  design: 'palette',
  ui: 'frame',
  ux: 'frame',
  frontend: 'shield',
  backend: 'server',
  fullstack: 'sword',
  cloud: 'cloud',
  docker: 'box',
  aws: 'cloud',
  linux: 'terminal',
  project: 'folder',
  experience: 'trophy',
  achievement: 'medal',
  skill: 'star',
  contact: 'envelope',
  email: 'envelope',
  linkedin: 'network',
  twitter: 'bird',
};

export function getIconPath(iconName: string): string {
  const normalizedName = iconName.toLowerCase().replace(/\s+/g, '-');
  const iconKey = Object.keys(iconMap).find(
    (key) => normalizedName.includes(key)
  );
  
  const iconFile = iconKey ? iconMap[iconKey] : 'default';
  return `/src/assets/icons/raven-fantasy/${iconFile}.png`;
}

export function getSkillIcon(skill: string): string {
  return getIconPath(skill);
}

export function getProjectIcon(projectType: string): string {
  return getIconPath(projectType);
}

export function getExperienceIcon(experienceType: string): string {
  return getIconPath(experienceType);
}

