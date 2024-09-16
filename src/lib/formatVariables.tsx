export const highlightText = (text: string, words: string[]) => {
    const escapedWords = words.map(word => word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');

    return text.split(regex).map((part, index) =>
        regex.test(part) ? <strong key={index}>{part}</strong> : part
    );
};