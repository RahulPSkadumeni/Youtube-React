import React, { useEffect, useState } from "react";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

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
  return (
    videos && (
      <div className="flex flex-wrap">
        <AddVideoCard info={videos[0]} />
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
