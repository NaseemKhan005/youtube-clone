import Image from "next/image";
import React from "react";
import { demoChannelTitle, demoProfilePicture } from "../utils/constats";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ channelDetails }) => {
  return (
    <>
      <div
        key={channelDetails.id.videoId}
        className="w-full h-full flex items-center justify-center flex-col gap-2"
      >
        <Link href={`/channel/${channelDetails.id.channelId}`}>
          <Image
            src={
              channelDetails.snippet.thumbnails.high.url || demoProfilePicture
            }
            width={120}
            height={120}
            alt={channelDetails.snippet.title}
            loading="lazy"
            className="object-contain object-center rounded-full w-full"
          />
          <h2 className="w-full flex gap-1 items-center justify-center text-lg font-semibold">
            {channelDetails.snippet.title || demoChannelTitle}
            <CheckCircleIcon className="text-sm text-[#606060] mt-1" />
            {channelDetails?.statistics?.subscriberCount
              ? `${(
                  <p className="text-sm font-[500] text-[#8A8A8A]">
                    {channelDetails?.statistics?.subscriberCount} Subscribers
                  </p>
                )}`
              : ""}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default ChannelCard;
