import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

type SubItem = {
    href: string;
    children: string
}

export default function NavItemMob({ href, children, sub }: { href: string, children: string, sub?: SubItem[] }) {
    if (sub === undefined) {
        return (
            <Link href={href} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{children}</Link>
        );
    } else {
        return (
            <div className="group text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition ease-out">
                {children} <FaAngleDown className="inline ml-2"/>
                <div className="scale-y-0 h-0 group-hover:scale-y-100 origin-top group-hover:h-auto mt-2 ml-4 transition ease-out">
                    {sub.map((subs) => <Link className="hover:text-gray-300 bg-gray-700 hover:bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium text-left" href={subs.href}>{subs.children}</Link>)}
                </div>
            </div>
        )
    }

}