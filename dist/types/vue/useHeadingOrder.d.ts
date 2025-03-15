import { HeadingOrderOptions } from '../core/checkHeadingOrder';
export interface UseHeadingOrderOptions extends HeadingOrderOptions {
    delay?: number;
}
export declare function useHeadingOrder({ delay, callback }?: UseHeadingOrderOptions): void;
