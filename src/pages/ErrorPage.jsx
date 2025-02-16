import styles from './ErrorPage.module.css'
function ErrorPage() {
    return (
        <div className={styles.error}>
            <img src="../error.jpg"  alt="404 Error"/>
        </div>
    )
}

export default ErrorPage
