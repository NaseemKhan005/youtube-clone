import Image from "next/image";
import Link from "next/link";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constats";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  videos: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <div key={videoId} className="w-full cursor-pointer">
        <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
          {/* thumbnail image */}
          <Image
            src={snippet.thumbnails.high.url || demoThumbnailUrl}
            width={358}
            height={180}
            alt={snippet.title}
            loading="lazy"
            className="w-full h-[180px] rounded-2xl object-cover object-center"
          />

          <div className="mt-2 flex items-center gap-3">
            <div>
              {/* channel image */}
              <Link href={`/channel/${snippet.channelId}`}>
                <Image
                  src={snippet.thumbnails.high.url && demoProfilePicture}
                  width={80}
                  height={80}
                  alt="thumbnail"
                  loading="lazy"
                  className={`${
                    snippet.title.length > 60
                      ? "w-[44.1px] lg:w-[65px]"
                      : "w-[35px]"
                  } bg-black object-cover object-center rounded-full`}
                />
              </Link>
            </div>

            {/* video details */}
            <div className="flex flex-col gap-1">
              <h2 className="font-[500] text-[1.05rem]">
                {snippet.title.length >= 60
                  ? `${
                      snippet.title.slice(0, 63) || demoVideoTitle.slice(0, 63)
                    }...`
                  : `${snippet.title || demoVideoTitle.slice(0, 60)}`}
              </h2>
              <p className="text-sm font-[500] text-[#8A8A8A] flex gap-1 items-center">
                {snippet.channelTitle || demoChannelTitle}
                <CheckCircleIcon className="text-sm text-[#606060]" />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
