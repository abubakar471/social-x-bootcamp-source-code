import styles from "../styles/OrgFooterTag.module.css";

const OrgFooterTag = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <hr className={styles.hr} />
                <p className={styles.footerText}>Social X -Powered By Coxas</p>
            </div>
        </div>
    )
}

export default OrgFooterTag