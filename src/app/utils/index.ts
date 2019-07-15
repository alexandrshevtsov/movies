export const stringToInteger = (src: string, fallback: number = 0): number => {
  if (/^\+?\d+$/.test(src)) return parseInt(src);
  return fallback;
};
