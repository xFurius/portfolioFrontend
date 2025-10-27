import QualComponent from "../QualComponent"
import QualIcon from "../../assets/qualIcon.svg?react"
import CertIcon from "../../assets/cert_icon.svg?react"
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
                <div>
                    <span style={{"--m-left": "-230px", "--w":"250px"}}>education</span>
                </div>
                <div className={styles.experience_wrapper}>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"SEP 2023 - present"} desc={"Computer Science, Lublin University of Technology"}/>
                        <div style={{"--w-left": "0%", "--t-align": "left"}}>
                            <ul>
                                <li>Bachelor's degree in Computer Science with Software Engineering specialization</li>
                                <li>Currently enrolled</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"AUG 2019 - MAY 2023"} desc={"Software Engineering, ZST Chelm"}/>
                        <div style={{"--w-left": "10%", "--d": "rtl"}}>
                            <ul>
                                <li>Graduated with technical diploma in Software Engineering</li>
                                <li>Two times "Lubelska Kuźnia Talentów" scholarship holder</li>
                                <li>Second place in Poland-wide contest finale for technical innovation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <span style={{"--m-left": "-270px", "--w":"300px"}}>certificates</span>
                </div>
                <div className={styles.cert_wrapper}>
                    <div>
                        <CertIcon/>
                        <span>AWS Certified Cloud Practicioner CLF-C02</span>
                    </div>
                    <div>
                        <CertIcon/>
                        <span>INF.03 Professional Qualification</span>
                    </div>
                    <div>
                        <CertIcon/>
                        <span>INF.04 Professional Qualification</span>
                    </div>
                </div>
            </div>
        </>
    )
}