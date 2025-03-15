export interface HeadingOrderOptions {
    callback?: (message: string, context: { tag: string; text: string; id: string; lastLevel: number }) => void;
}

export function checkHeadingOrder(options?: HeadingOrderOptions): void {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let lastLevel = 0;

    headings.forEach((heading) => {
        const currentLevel = parseInt(heading.tagName.replace('H', ''), 10);
        const text = heading.textContent?.trim() || '';
        const elementId = heading.getAttribute('id') || 'No ID';

        if (currentLevel < lastLevel) {
            const message = `⚠️ Heading order issue: Found a ${heading.tagName} ("${text}") after a heading of lower level (H${lastLevel}). [ID: ${elementId}]`;

            if (options?.callback) {
                options.callback(message, { tag: heading.tagName, text, id: elementId, lastLevel });
            } else {
                console.warn(message);
            }
        }

        lastLevel = currentLevel;
    });
}
