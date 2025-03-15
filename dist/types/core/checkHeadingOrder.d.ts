export interface HeadingOrderOptions {
    callback?: (message: string, context: {
        tag: string;
        text: string;
        id: string;
        lastLevel: number;
    }) => void;
}
export declare function checkHeadingOrder(options?: HeadingOrderOptions): void;
