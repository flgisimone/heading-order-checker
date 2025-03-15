import { onMounted, onUnmounted } from 'vue';
import { checkHeadingOrder } from './index.js';

function useHeadingOrder({ delay = 100, callback } = {}) {
    let timeout;
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

export { useHeadingOrder };
