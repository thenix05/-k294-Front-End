import styles from "./about.module.css"

export default function AboutPage() {
    console.log(styles)
    return(
        <div className={styles.AboutPage}>
            <h1>About page!</h1>

            <div className={styles.container}>
                <h2>JSX</h2>
            </div>

            <div className={styles.content}>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                </p>
            </div>
        </div>
    );
}