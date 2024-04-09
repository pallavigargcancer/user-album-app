
import Link from "next/link";
import { ListItemProps } from "./listItemProps.type";

const ListItem = ({ title, id, userId }: ListItemProps) => {
  return (
    <Link
      className="flex items-center text-center border h-32 justify-center p-4 bg-slate-500 text-base font-medium text-white transition-background hover:bg-green-500"
      href={`/${userId}/album/${id}/photo`}
    >
      {title}
    </Link>
  );
};

export default ListItem;
