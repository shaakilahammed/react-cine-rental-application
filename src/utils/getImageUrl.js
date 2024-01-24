export const getImageUrl = (imageUrl) => {
  return new URL(`../assets/movie-covers/${imageUrl}`, import.meta.url).href;
};
