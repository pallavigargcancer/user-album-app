import Link from "next/link";
import { BreadcrumbProps } from "./breadcrumbProps.type";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav>
      <ul className="flex flex-wrap">
        {items.map((item, index) => (
          <li key={item.link}>
            {index > 0 && <span className="text-gray-500 ">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <>
                <Link href={item.link} className="text-blue-500 cursor-pointer">
                  {item.label}
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
