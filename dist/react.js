import { useEffect } from 'react';
import { checkHeadingOrder } from './index.js';

const useHeadingOrder = ({ delay = 100, callback } = {}) => {
    useEffect(() => {
        checkHeadingOrder({ callback });
        const timeout = setTimeout(() => {
            checkHeadingOrder({ callback });
        }, delay);
        return () => clearTimeout(timeout);
    }, []);
};

export { useHeadingOrder };
