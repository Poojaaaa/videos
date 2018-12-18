import axios from "axios";

const KEY = "AIzaSyBF0_pkHMr3AIoZQiHBgazAOmCAWFm3kn0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
