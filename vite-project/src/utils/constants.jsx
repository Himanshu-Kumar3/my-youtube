
const API_KEY = "AIzaSyBsPhiM-w8veL6vOCMWbcgw6wMguVWUCvM"
export const YOUTUBE_VIDEO_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;



export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + API_KEY+"&q=" ;