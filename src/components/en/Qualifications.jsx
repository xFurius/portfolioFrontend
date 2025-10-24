import QualComponent from "../QualComponent"
import QualIcon from "../../assets/qualIcon.svg?react"
import styles from "../../css/qualifications.module.css"

export default function Qualifications(){
    return(
        <>
            <div className={styles.qual_wrapper}>
                <QualIcon/>
                <span>qualifications</span>
                <p>Here you can see my work experience, education history as well as my certificates</p>
            </div>
            <div className={styles.work_wrapper}>
                <div>
                    <span>work experience</span>
                </div>
                <div className={styles.experience_wrapper}>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"JUL 2024 - present"} desc={"Infrastructure Monitoring Analyst, Capgemini"}/>
                    </div>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"JUL 2024 - present"} desc={"Infrastructure Monitoring Analyst, Capgemini"}/>
                    </div>
                </div>
            </div>
        </>
    )
}