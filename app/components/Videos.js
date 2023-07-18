"use client";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/FetchFromApi";
import Image from "next/image";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import CircularProgress from "@mui/material/CircularProgress";

const Videos = ({ selectedCategory }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    try {
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
        setVideos(data.items)
      );
    } catch (error) {
      console.log(error);
    }
  }, [selectedCategory]);

  return (
    <>
      {videos.length >= 1 ? (
        <section className="px-2 w-full overflow-x-hidden">
          <div className="sm:pl-56">
            <h1 className="text-3xl font-semibold capitalize">
              {selectedCategory} <span className="text-primary">Videos</span>
            </h1>

            <div className="flex flex-wrap gap-x-3 gap-y-10">
              {videos.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="2xl:w-[24%] lg:w-[32%] md:w-[49%] w-full"
                  >
                    {item.id.videoId && <VideoCard videos={item} />}
                    {item.id.channelId && <ChannelCard channelDetails={item} />}
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-screen -z-50">
          <CircularProgress className="text-primary" />
        </div>
      )}
    </>
  );
};

export default Videos;
