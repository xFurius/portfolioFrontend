import styles from "../css/SectionIndicator.module.css"

export default function SectionIndicator(){
    return(
        <>
        <div className={styles.dot_indicator}>
            <span id="dot-aboutme" className={styles.dot}></span>
            <span id="dot-skills" className={styles.dot}></span>
            <span id="dot-projects" className={styles.dot}></span>
            <span id="dot-qual" className={styles.dot}></span>
        </div>
        </>
    )
}