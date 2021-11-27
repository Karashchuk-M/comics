import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                Данные не отображаются.
            </p>
        </>
    )
}

export default ErrorMessage;