"use client";

import { useCallback } from 'react';
import { translations } from '@/lib/i18n/translations';

export function useTranslation() {
  const locale = 'en';

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  }, [locale]);

  return { t };
}