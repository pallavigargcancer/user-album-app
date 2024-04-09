
import { PhotoCardProps } from "./photoCardProps.type";

const PhotoCard = ({ image, text}: PhotoCardProps) => {
  return (
    <div className="group relative">
      <img
        src={image}
        alt={text}
        className="w-full h-auto rounded-md"
      />
      <div className="absolute inset-0 p-4 text-center flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
        {text}
      </div>
    </div>
  );
};

export default PhotoCard;
