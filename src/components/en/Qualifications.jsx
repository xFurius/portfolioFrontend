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
            <div className={styles.wrapper}>
                <div>
                    <span style={{"--m-left": "-340px", "--w":"350px"}}>work experience</span>
                </div>
                <div className={styles.experience_wrapper}>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"JUL 2024 - present"} desc={"Infrastructure Monitoring Analyst, Capgemini"}/>
                        <div style={{"--w-left": "0%", "--t-align": "left"}}>
                            <ul>
                                <li>Monitoring client's infrastructure by reacting to alerts received on PagerDuty, SolarWinds Orion, mailbox and MonteCarlo</li>
                                <li>Monitoring workflows on Informatica and GCP Airflow</li>
                                <li>Managing backup jobs on NetBackup</li>
                                <li>Developing and maintaining chrome extension which automates some of the team's tasks and gathers data for reports</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"FEB 2024 - JUL 2024"} desc={"Service Desk Analys, Capgemini"}/>
                        <div style={{"--w-left": "10%", "--d": "rtl"}}>
                            <ul>
                                <li>Assisting users with technical problems via phone, email and remote connection</li>
                                <li>Tracking issues in ServiceNow</li>
                                <li>Taking care of incidents in a timely manner according to SLA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}