import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Detail from "../components/Detail";
import { useEffect, useState } from "react";

export default function Home() {
    const [value, setValue] = useState(0);
    const [discount, setDiscount] = useState(false);
    function getViews(price) {
        if (price === 0 || price < 20) {
            return "10K";
        }
        if ((price >= 20) & (price < 40)) {
            return "50K";
        }

        if ((price >= 40) & (price < 60)) {
            return "100K";
        }
        if ((price >= 60) & (price < 80)) {
            return "500K";
        }
        return "1k";
    }

    function getPrice(price) {
        if (price === 0 || price < 20) {
            return "8";
        }
        if ((price >= 20) & (price < 40)) {
            return "12";
        }

        if ((price >= 40) & (price < 60)) {
            return "16";
        }
        if ((price >= 60) & (price < 80)) {
            return "24";
        }
        return "36";
    }

    function getDiscount(price) {
        if (price === 0 || price < 20) {
            return "72";
        }
        if ((price >= 20) & (price < 40)) {
            return "108";
        }

        if ((price >= 40) & (price < 60)) {
            return "144";
        }
        if ((price >= 60) & (price < 80)) {
            return "216";
        }
        return "324";
    }

    const Number = () => {
        const views = getViews(value);
        return <span className={styles.views}>{views} </span>;
    };

    const Cost = () => {
        const cost = getPrice(value);
        return <span className={styles.price}>${cost}</span>;
    };

    const Total = () => {
        const Annual = getDiscount(value);
        return <span className={styles.price}>${Annual}</span>;
    };

    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.intro}>
                <h2>Simple, traffic-based pricing</h2>
                <p>Sign-up for our 30-day trial. No credit card required. </p>
            </div>

            <div className={styles.container}>
                <div className={styles.slider_wrap}>
                    <div className={styles.main_info}>
                        <div className={styles.info_wrap}>
                            <p>{Number(value)} PAGEVIEWS</p>
                            <p className={styles.order}>
                                {discount ? Total(value) : Cost(value)}/
                                {discount ? "year" : "month"}
                            </p>
                        </div>
                        <div className={styles.bar_wrap}>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                className={styles.slider}
                                onChange={e => setValue(e.target.value)}
                            />

                            <div
                                className={styles.select}
                                style={{ left: value + "%" }}
                            >
                                <div className={styles.select_button}></div>
                            </div>
                            <div
                                className={styles.progress_bar}
                                style={{ width: value + "%" }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className={styles.time}>
                    <p>Monthly Billing</p>

                    <div className={styles.switcher}>
                        <input
                            id="switch"
                            type="checkbox"
                            className={styles.input}
                            title="switch"
                            onChange={e => setDiscount(e.target.checked)}
                        />
                        <label htmlFor="switch" className={styles.label} />
                    </div>
                    <p>Yearly Billing</p>
                    <p className={styles.discount}>
                        25% <span>discount</span>
                    </p>
                </div>

                <hr className={styles.line}></hr>

                <div className={styles.details_wrap}>
                    <div className={styles.details}>
                        <Detail info="  Unlimited websites" />
                        <Detail info="100% data ownership" />
                        <Detail info="Email reports" />
                    </div>

                    <button
                        type="button"
                        title="button"
                        className={styles.button}
                    >
                        Start my trial
                    </button>
                </div>
            </div>
        </div>
    );
}
