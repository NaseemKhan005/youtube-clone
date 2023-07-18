"use client";
import { fetchFromApi } from "@/app/utils/FetchFromApi";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${slug}`).then((data) =>
      setChannelDetails(data.items[0])
    );

    fetchFromApi(`search?channelId=${slug}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [slug]);
  console.log(channelDetails);
  console.log(videos);

  return (
    <section className="relative">
      <div className="relative">
        page
        {/* <Image
          src={`${channelDetails.brandingSettings.image.bannerExternalUrl}`}
          width={300}
          height={300}
          alt="alt"
        /> */}
        {/* <h1>{channelDetails.brandingSettings.channel.title}</h1> */}
      </div>
    </section>
  );
};

export default Page;
