declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': {
      'loading-anim-type'?: string;
      url?: string;
      className?: string;
      style?: React.CSSProperties;
      background?: string;
      'environment-image'?: string;
      'render-quality'?: string;
      renderer?: string;
      pbr?: string;
    }
  }
}

declare module '@splinetool/viewer' {
  const content: any;
  export default content;
} 