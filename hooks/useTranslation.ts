"use client";

import { useCallback } from 'react';
import { en, tr } from '@/translations';

// Define the structure of your translations
type TranslationType = typeof en;

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

export function useTranslation(locale: 'en' | 'tr' = 'en') {
  const translations = locale === 'en' ? en : tr;

  const t = useCallback((key: TranslationKey) => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value as string;
  }, [translations]);

  return { t };
}

// Add type safety for translation keys
export type { TranslationKey };