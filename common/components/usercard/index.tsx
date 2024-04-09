
import { UserCardProps } from "./userCard.type";
import Avatar from "../avatar";
import Link from "next/link";

const UserCard = ({ imgSrc, name, userId }: UserCardProps) => {
  return (
    <div className="bg-gray-200 border border-solid border-red">
      <div className="w-48 md:w-64 flex items-center flex-col gap-4 p-4  rounded-md">
        <Avatar image={imgSrc} name={name} />
        <p className="text-center text-xs font-semibold text-gray-800">
          {name}
        </p>
        <Link
          className="bg-green-500 rounded-full text-white p-3 text-sm"
          href={`/${userId}/album`}
        >
          Show Album
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
