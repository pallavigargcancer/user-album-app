import { AvatarProps } from "./avatar.type";

const Avatar = ({ image, name }: AvatarProps) => {
  const randomColors = [
    "bg-pink-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-blue-500",
    "bg-green-500",
  ];

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  return (
    <div
      className={`flex items-center justify-center w-12 h-12 ${randomColor} text-white rounded-full`}
    >
      {image ? (
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
      ) : (
        <span className="text-2xl font-semibold">{name && name[0]}</span>
      )}
    </div>
  );
};

export default Avatar;
