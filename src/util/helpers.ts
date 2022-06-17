export const textSlice = (str: string, characterCount = 100) => {
  return str.replace(/(<([^>]+)>)/gi, "").slice(0, characterCount);
};
