import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink";

const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ];

    // TEMPORARY
    var session = true
    var isAdmin = true

    return (
        <div className={styles.links}>
            {
                links.map(link=>(<NavLink item={link} key={link.title}/>))
            }
            {/* {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}{
                session ? (
                    <>
                        {
                            isAdmin && (
                                <NavLink item={{title: "Admin", path: "/admin"}}/>
                            )
                        }
                        <button>Logout</button>                    
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )
            } */}
        </div>
    )
}

export default Links

        {/* <NavLink item={{title: "Admin", path: "/admin"}}/> */}
        {/* <NavLink item={{title: "Login", path: "/login"}}/> */}