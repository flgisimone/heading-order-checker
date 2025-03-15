import { onMounted, onUnmounted } from 'vue';
import { checkHeadingOrder, HeadingOrderOptions } from '../core/checkHeadingOrder';

export interface UseHeadingOrderOptions extends HeadingOrderOptions {
    delay?: number;
}

export function useHeadingOrder({ delay = 100, callback }: UseHeadingOrderOptions = {}) {
    let timeout: number;

    onMounted(() => {
        checkHeadingOrder({ callback });

        timeout = window.setTimeout(() => {
            checkHeadingOrder({ callback });
        }, delay);
    });

    onUnmounted(() => {
        clearTimeout(timeout);
    });
}
