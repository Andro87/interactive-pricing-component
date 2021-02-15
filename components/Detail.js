import styles from "./Detail.module.scss";

export default function Detail(props) {
    const { info } = props;
    return (
        <div className={styles.wrap}>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                    fill="none"
                    stroke="#10D8C4"
                    stroke-width="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                />
            </svg>
            <p>{info}</p>
        </div>
    );
}
