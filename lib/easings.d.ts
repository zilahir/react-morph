import { Easing } from 'types';
export declare const createEaseIn: (power: number) => (t: number) => number;
export declare const createEaseOut: (power: number) => (t: number) => number;
export declare const createEaseInOut: (p: any) => (t: any) => number;
export declare const createReversed: (easing: Easing) => (t: number) => number;
export declare const easeInSin: (t: number) => number;
export declare const easeOutSin: (t: number) => number;
export declare const easeInOutSin: (t: number) => number;
export declare const easeIn: (t: number) => number;
export declare const easeOut: (t: number) => number;
export declare const easeInOut: (t: any) => number;
export declare const linear: (x: number) => number;
