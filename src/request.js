const ApiKey = "b146d01c85c5b597a768c2bff75fa99c";
const request = {
  fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
  fetchRomannceMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,
};
export default request;
