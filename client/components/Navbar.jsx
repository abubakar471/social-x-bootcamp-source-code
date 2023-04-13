import styles from "../styles/Navbar.module.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
    const [current, setCurrent] = useState("");
    const [state, setState] = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname])

    const handleSignout = () => {
        window.localStorage.removeItem("user");
        setState(null);
        router.push("/signin");
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <Link className={styles.logoContainer} onClick={() => setPageLoading(true)} href="/" passHref>
                    <img className={styles.logo} src="/images/logo3.png" />
                    <span className={styles.logoText}>Social X</span>
                </Link>

                <div>
                    {state !== null ? (
                        <>
                            <div className="dropdown">
                                <a className="btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {state && state.user && state.user.username}
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item"
                                            href="/user/dashboard"
                                            passHref>
                                            {state && state.user && state.user.username}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item"
                                            href="/user/profile/update"
                                            passHref>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" style={{ cursor: "pointer" }} onClick={handleSignout}>Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <button>
                                <Link
                                    href="/signup"
                                    passHref>Sign Up</Link>
                            </button>
                            <button>
                                <Link
                                    href="/signin"
                                    passHref>Sign In</Link>
                            </button>
                        </>
                    )}
                </div>
            </div>


        </div>
    )
}

export default Navbar