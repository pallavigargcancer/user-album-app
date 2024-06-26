"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/common/components/breadcrumb";
import NoDataFound from "@/common/components/nodatafound";
import ListItem from "@/common/components/listitem";
import Loader from "@/common/components/loader";
import { AlbumProps } from "./albumProps.type";
import { AlbumsType } from "@/common/services/api.type";
import { getAlbumsForId } from "@/common/services/api";

const Album = ({ params }: AlbumProps) => {
  const [albums, setAlbums] = useState<AlbumsType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAlbums();
  }, [params]);

  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const data = await getAlbumsForId(params.userId || "");
      if (!data.error) {
        setAlbums(data.result);
      }
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
    setLoading(false);
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Album", link: "" },
  ];

  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <Breadcrumb items={breadcrumb} />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        Albums
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid w-full h-full  gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center">
          {albums.length > 0 ? (
            albums.map((album) => (
              <ListItem
                key={album.id}
                title={album.title}
                id={album.id}
                userId={params.userId}
              />
            ))
          ) : (
            <NoDataFound />
          )}
        </div>
      )}
    </div>
  );
};

export default Album;
