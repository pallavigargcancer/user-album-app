"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/common/components/breadcrumb";
import NoDataFound from "@/common/components/nodatafound";
import PhotoCard from "@/common/components/photocard";
import Loader from "@/common/components/loader";
import { PhotoProps } from "./photoProps.type";
import { PhotoRes } from "@/common/services/api.type";
import { getPhotosForId } from "@/common/services/api";

const Photo = ({ params }: PhotoProps) => {
  const [photos, setPhotos] = useState<PhotoRes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPhotos();
  }, [params]);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const data = await getPhotosForId(params.albumId || "");
      if (!data.error) {
        setPhotos(data.result);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
    setLoading(false);
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Albums", link: `/${params.userId}/album` },
    { label: "Photos", link: "" },
  ];

  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <Breadcrumb items={breadcrumb} />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        Photos
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex w-full justify-center">
          {photos.length > 0 ? (
            <div className="grid w-full gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
              {photos.map((photo, index) => (
                <PhotoCard key={index} text={photo.title} image={photo.url} />
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
        </div>
      )}
    </div>
  );
};

export default Photo;
