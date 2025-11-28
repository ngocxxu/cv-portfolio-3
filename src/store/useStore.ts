import { create } from 'zustand';

interface UIState {
  menuOpen: boolean;
  activeSection: string;
  setMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
}

interface AnimationState {
  characterPosition: { x: number; y: number };
  setCharacterPosition: (position: { x: number; y: number }) => void;
  effects: string[];
  addEffect: (effect: string) => void;
  removeEffect: (effect: string) => void;
}

interface ThemeState {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

type AppState = UIState & AnimationState & ThemeState;

export const useStore = create<AppState>((set) => ({
  menuOpen: false,
  activeSection: 'about',
  setMenuOpen: (open) => set({ menuOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
  
  characterPosition: { x: 0, y: 0 },
  setCharacterPosition: (position) => set({ characterPosition: position }),
  effects: [],
  addEffect: (effect) => set((state) => ({ effects: [...state.effects, effect] })),
  removeEffect: (effect) => set((state) => ({ 
    effects: state.effects.filter((e) => e !== effect) 
  })),
  
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}));

