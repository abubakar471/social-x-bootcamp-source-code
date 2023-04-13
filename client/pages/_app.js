import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import styles from "../styles/PageLoader.module.css";
import Navbar from "../components/Navbar";
import OrgFooterTag from "../components/OrgFooterTag";
import { UserProvider } from "../context/UserContext";
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // const [pageLoading, setPageLoading] = useState(true);

  // useEffect(() => {
  //   setPageLoading(false);
  // }, [process.browser && window.location.pathname]);


  return (
    <UserProvider>
      {/* {pageLoading && <LinearProgress className={styles.pageLoaderContainer} />} */}
      <Navbar />
      <Component {...pageProps} />
      <OrgFooterTag />
    </UserProvider>
  )
}
