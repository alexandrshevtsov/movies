const API_KEY: string = 'fb7bb23f03b6994dafc674c074d01761';
const API_URL: string = 'http://api.themoviedb.org';

export const getMovieDetails = async (id: number) => {
    const response = await fetch(`${API_URL}/3/movie/${id}?api_key=${API_KEY}`);
    return await response.json();
};

export const getMovies = async (query: string, page: number) => {
    const response = await fetch(`${API_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
    return await response.json();
};
