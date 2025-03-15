import { HeadingOrderOptions } from '../core/checkHeadingOrder';
export interface UseHeadingOrderOptions extends HeadingOrderOptions {
    delay?: number;
}
export declare const useHeadingOrder: ({ delay, callback }?: UseHeadingOrderOptions) => void;
