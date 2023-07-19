import React, { useEffect, useState } from "react";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();

      // console.log(json);
      setVideos(json.items);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(videos[0], "haiiiii");
  return !videos[0] ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      <AddVideoCard info={videos[0]} />
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard loading="lazy" info={video} />
        </Link>
      ))}
    </div>
    // <Shimmer />
  );
};

export default VideoContainer;
