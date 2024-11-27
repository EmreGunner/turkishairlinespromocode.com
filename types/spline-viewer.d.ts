declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'loading-anim-type'?: 'spinner' | 'none';
      'loading-anim-color'?: string;
      'background-color'?: string;
      url?: string;
      'events-target'?: 'global' | 'local';
      'auto-rotate'?: boolean;
      'ambient-light'?: number;
      onLoad?: (event: Event) => void;
    };
  }
} 