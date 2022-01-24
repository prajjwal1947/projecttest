const APIKEY="57308d08ea3ca46df42106b1fa70844e";
const request={
 fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
 fetcahNetflixOrginals:`/discover/tv?api_key=${APIKEY}&with_network=213`,
 fetchTopRAted:`/movie/top_rated?api_key=${APIKEY}&language-US`,
 fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_generes=28`,
 fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_generes=35`,
 fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_generes=27`,
 fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_generes=10749`,
 fetchDocumentMovies:`/discover/movie?api_key=${APIKEY}&with_generes=99`

}
const baseURL="https://api.themoviedb.org/3";
export default request
