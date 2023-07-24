import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  YOUTUBE_VIDEO_DETAILS_API,
  GOOGLE_API_KEY,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoCard from "./VideoCard";
import { ThumbsDown, ThumbsUp, Forward } from "lucide-react";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState([]);
  const [videoDetails, setVideoDetails] = useState();
  const [expanded, setExpanded] = useState(false);
  const [channelDetails, setChannelDetails] = useState([]);
  // console.log("VideoDetails", videoDetails);

  console.log("searchParams", searchParams);
  console.log("video info", video);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    console.log(">>>>>>>>");
    videoInfo();
    getRecomendedVideo();
  }, []);

  const videoInfo = async () => {
    try {
      const data = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=" +
          searchParams.get("v") +
          "&key=" +
          GOOGLE_API_KEY
      );

      const json = await data.json();
      console.log("first>>>>>>>>>>>>>>>", json.items[0].snippet);

      //channel details

      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${json.items[0].snippet.channelId}&key=${GOOGLE_API_KEY}`
      );
      const jsonTwo = await res.json();
      setChannelDetails(jsonTwo.items[0].snippet);

      setVideoDetails(json.items[0].snippet);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecomendedVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideoList(json.items);
  };

  // Monitor changes in videoDetails state and log its value when it changes
  useEffect(() => {
    console.log("VideoDetails updated:", videoDetails);
  }, [videoDetails]);
  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="flex w-full p-2">
      <div className="flex flex-col w-3/4">
        <div>
          <iframe
            className=""
            width="1100"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h1 className="text-left font-semibold text-3xl ">
            {" "}
            {videoDetails?.title}
          </h1>
          <div className="flex p-2 mt-1">
            <div className="flex   items-center">
              <h1>
                <img
                  className="h-10 my-8 rounded-full"
                  src={channelDetails.thumbnails?.high.url}
                />
              </h1>
              <h1 className="p-3">{videoDetails?.channelTitle}</h1>
              <h1 className="ml-4">
                <button className="bg-black p-3 rounded-full text-white">
                  Subscribe
                </button>
              </h1>
              <div className=" h-11 my-8 mx-12 flex bg-gray-200 rounded-3xl">
                <ThumbsUp className="mx-4 cursor-pointer my-3" />
                <ThumbsDown className="mx-4 cursor-pointer my-3" />
              </div>
              <div className=" h-11 my-8 bg-gray-200 flex rounded-3xl cursor-pointer">
                <Forward size={32} className="my-2 mx-2" />
                <h1 className="my-3 mx-2">Share</h1>
              </div>
            </div>
            <div></div>
          </div>
          {/* <div>
            <p>{videoDetails?.description}</p>
          </div> */}

          <div
            style={{
              height: expanded ? "auto" : "100px",
              overflow: "hidden",
            }}
          >
            <p>{videoDetails?.description}</p>
          </div>

          {videoDetails?.description && (
            <button
              className="text-center font-semibold"
              onClick={toggleExpanded}
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </div>

        <CommentsContainer />
      </div>
      <div className="w-full pr-2">
        <LiveChat />
        {videoList.slice(0, 5).map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCard info={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WatchPage;
