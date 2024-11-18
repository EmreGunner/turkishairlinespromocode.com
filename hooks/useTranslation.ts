"use client";

import { useCallback } from 'react';
import { translations } from '@/lib/i18n/translations';

// Define the structure of your translations
type TranslationType = typeof translations.en;

// Helper type to get all possible nested paths
type NestedKeys<T> = T extends object 
  ? { [K in keyof T]: K extends string 
      ? T[K] extends object 
        ? `${K}.${NestedKeys<T[K]>}` 
        : K 
      : never 
    }[keyof T] 
  : never;

type TranslationKey = NestedKeys<TranslationType>;

export function useTranslation(locale: 'en' | 'tr' | 'ar' = 'en') {
  const currentTranslations = translations[locale];

  const t = useCallback((key: TranslationKey) => {
    const keys = key.split('.');
    let value: any = currentTranslations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value as string;
  }, [currentTranslations]);

  return { t };
}

// Add type safety for translation keys
export type { TranslationKey };