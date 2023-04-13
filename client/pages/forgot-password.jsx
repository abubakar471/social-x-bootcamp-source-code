import styles from "../styles/Signup.module.css";
import AuthForm from "../components/forms/AuthForm";
import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";

const ForgotPassword = ({ setPageLoading }) => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [state, setState] = useContext(UserContext);
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPageLoading(true);
        try {
            setLoading(true);
            const { data } = await axios.post(`/forgot-password`, {
                email, newPassword, secret
            });
            if (data.error) {
                alert(data.error);
                setLoading(false);
                setPageLoading(false);
            } else {
                alert(data.success);
                console.log(data);
                router.push("/signin");
                setPageLoading(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (state && state.token) {
        router.push("/");
        setPageLoading(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section className={styles.hero}>
                    <img className={styles.heroImg} src="/images/image2.jpg" />
                </section>
                <section className={styles.form}>
                    <h1 className={styles.formHeading}>Forgot your Social X account password?</h1>
                    <ForgotPasswordForm
                        email={email}
                        setEmail={setEmail}
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}
                        handleSubmit={handleSubmit}
                    />
                </section>

            </div>
        </div>
    )
}

export default ForgotPassword