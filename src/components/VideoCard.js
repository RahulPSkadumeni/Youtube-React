import React from "react";

const VideoCard = (info) => {
  // console.log(info);
  // const details = info.info;
  // console.log(details, "HAKJHKHKA");
  // const { snippet, statistics } = details;
  // const { channelTitle, title, thumbnails } = snippet;
  // console.log(channelTitle, "channelTitle");
  return (
    <div className=" m-2 p-2  w-96   ">
      <img
        className="rounded-3xl p-4"
        src={info?.info?.snippet?.thumbnails?.medium?.url}
        alt={info?.info?.snippet.thumbnails?.default.url}
      />
      <div className="flex flex-"></div>
      <div>
        <ul className="m-3">
          <li className="font-semibold py-2  ">{info?.info?.snippet?.title}</li>
          <li className="text-gray-800 ">
            {info?.info?.snippet?.channelTitle}
          </li>
          <li>{info?.info?.statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="border-green-300">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
