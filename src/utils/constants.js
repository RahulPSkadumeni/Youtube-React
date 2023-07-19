export const GOOGLE_API_KEY = "AIzaSyBjTAmNqC5HXTbmnxQ-CvX0QSYMY8XFSJA";

export const LIVECHAT_COMMENT_COUNT = 20;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

export const YOUTUBE_VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_DESC_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id={}=" +
  GOOGLE_API_KEY;
