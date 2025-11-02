declare module "react-lottie" {
  import * as React from "react";

  export interface Options {
    loop?: boolean;
    autoplay?: boolean;
    animationData?: any;
    rendererSettings?: {
      preserveAspectRatio?: string;
    };
  }

  export interface LottieProps {
    options: Options;
    height?: number;
    width?: number;
    isStopped?: boolean;
    isPaused?: boolean;
    speed?: number;
    segments?: number[];
    direction?: number;
    ariaRole?: string;
    ariaLabel?: string;
    isClickToPauseDisabled?: boolean;
    title?: string;
    style?: React.CSSProperties;
    eventListeners?: Array<{
      eventName: string;
      callback: () => void;
    }>;
  }

  const Lottie: React.FC<LottieProps>;
  export default Lottie;
}
