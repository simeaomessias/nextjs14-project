"use client";

import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

const NavLink = ({item}) => {

    const pathName = usePathname();

    return (
        // <Link href={item.path} className={`${styles.container} ${pathName === item.path} && styles.active`}>
        <Link href={item.path} className={`${pathName === item.path ? styles.active : styles.container}`}>
            {item.title}
        </Link>
    )
}

export default NavLink