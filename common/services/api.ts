import axios from "axios";
import { END_POINTS } from "./constant";
import { AlbumsType, PhotoRes, UserType } from "./api.type";

export const getUsers = async () => {
  try {
    const result: any = await axios.get<UserType[]>(END_POINTS.users);
    return {
      result: result.data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
      result: [],
    };
  }
};

export const getAlbumsForId = async (userId: number | string) => {
  try {
    const result: any = await axios.get<AlbumsType[]>(
      `${END_POINTS.albums}?userId=${userId}`
    );
    return {
      result: result.data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

export const getPhotosForId = async (albumId: number | string) => {
  try {
    const result: any = await axios.get<PhotoRes>(
      `${END_POINTS.photos}?albumId=${albumId}`
    );
    return {
      result: result.data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};
