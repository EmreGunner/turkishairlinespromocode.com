"use client";

import { useEffect, useState } from 'react';
import { translations } from '@/lib/i18n/translations';

type Language = 'en' | 'tr' | 'ar';

export function useTranslation() {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      }
    }
    
    return value || key;
  };

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return { t, lang, changeLanguage };
}