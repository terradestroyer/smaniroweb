import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

type SubItem = {
    href: string;
    children: string
}

export default function NavItemDes({ href, children, sub }: { href: string, children: string, sub?: SubItem[] }) {
    if (sub === undefined) {
        return (
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm lg:text-base font-medium text-center" href={href}>{children}</Link>
        );
    } else {
        return (
            <div className="relative group text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm lg:text-base font-medium text-center">
                {children} <FaAngleDown className="inline"/>
                <div className="scale-y-0 group-hover:scale-y-100 absolute left-0 z-10 w-48 mt-2 origin-top shadow-lg rounded-md focus:outline-none transition-transform ease-out">
                    {sub.map((subs) => <Link className="text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm lg:text-base font-medium text-left" href={subs.href}>{subs.children}</Link>)}
                </div>
            </div>
        )
    }

}