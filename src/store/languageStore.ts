import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'th';

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === 'en' ? 'th' : 'en',
        })),
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);
