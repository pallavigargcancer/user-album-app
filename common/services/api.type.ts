export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
  };
  
  export type AlbumsType = {
    id: number;
    userId: number;
    title: string;
  };
  
  export type PhotoRes = {
    url: string;
    title: string;
  };
  