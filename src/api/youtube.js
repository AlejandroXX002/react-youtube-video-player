import axios from "axios";
const KEY = "AIzaSyDUpPhYfUBn-gcv7j96XsYb3ZSdx4qb330";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
