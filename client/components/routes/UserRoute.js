import styles from "../../styles/UserRoute.module.css";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { useRouter } from 'next/router';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const UserRoute = ({ children }) => {
    const [state] = useContext(UserContext);
    const [ok, setOk] = useState(false);
    const router = useRouter();

    const getCurrentUser = async () => {
        try {
            const { data } = await axios.get('/current-user');
            if (data.ok) setOk(true);
        } catch (err) {
            setPageLoading(true);
            router.push("/signin");
        }
    }

    useEffect(() => {
        if (state && state.token) getCurrentUser();
    }, [state && state.token]);

    process.browser && state === null && setTimeout(() => {
        getCurrentUser();
    }, 1000);

    return !ok ? <div className={styles.loader}><CircularProgress disableShrink /></div> : <>{children}</>
}

export default UserRoute;