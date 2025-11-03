import QualComponent from "../QualComponent"
import QualIcon from "../../assets/qualIcon.svg?react"
import CertIcon from "../../assets/cert_icon.svg?react"
import styles from "../../css/qualifications.module.css"

export default function Qualifications(){
    return(
        <>
        <div className={styles.qual_wrapper}>
            <div>
                <QualIcon/>
                <span>kwalifikacje</span>
                <p>Tutaj możesz zobaczyć moje doświadczenie zawodowe, historię edukacji oraz moje certyfikaty.</p>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <span className={styles.wrapper_span_main} style={{"--m-left": "-135px", "--w":"150px", "--m-left-s": "-105px", "--w-s":"115px"}}>praca</span>
                </div>
                <div className={styles.experience_wrapper}>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"LIP 2024 - obecnie"} desc={"Infrastructure Monitoring Analyst, Capgemini"}/>
                        <div>
                            <ul>
                                <li>Monitorowanie infrastruktury klienta poprzez reagowanie na alerty otrzymane na PagerDuty, SolarWinds Orion, skrzynce pocztowej i MonteCarlo</li>
                                <li>Monitorowanie przepływów danych na Informatica i GCP Airflow</li>
                                <li>Zarządzanie kopiami zapasowymi na NetBackup</li>
                                <li>Programowanie i ulepszanie wtyczki do chrome automatyzującej część pracy zespołu i zbierającej dane do raportów</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"LUTY 2024 - LIP 2024"} desc={"Service Desk Analyst, Capgemini"}/>
                        <div style={{"--d": "rtl"}}>
                            <ul>
                                <li>Wsparcie użytkowników z technicznymi problemamim poprzez telefon, email i połączenia zdalne</li>
                                <li>Śledzenie problemów w ServiceNow</li>
                                <li>Zarządzanie indycentami zgodnie z SLA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <span className={styles.wrapper_span_main} style={{"--m-left": "-220px", "--w":"250px", "--m-left-s": "-170px", "--w-s":"190px"}}>edukacja</span>
                </div>
                <div className={styles.experience_wrapper}>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"PAŹ 2023 - obecnie"} desc={"Informatyka, Politechnika Lubelska"}/>
                        <div style={{"--w-left": "0%"}}>
                            <ul>
                                <li>Tytuł inżyniera Informatyki ze specjalizacją Inżynieria Oprogramowania</li>
                                <li>W toku nauki</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.qual_comp_wrapper}>
                        <QualComponent text={"WRZ 2019 - MAJ 2023"} desc={"Technik Programista, ZST Chelm"}/>
                        <div style={{"--w-left": "10%", "--d": "rtl"}}>
                            <ul>
                                <li>Ukończono z dyplomem technika programisty</li>
                                <li>Dwukrotny stypendysta Lubelskiej Kuźni Talentów</li>
                                <li>Drugie miejsce w ogólno-polskim finale olimpiady na innowację techniczną</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <span style={{"--m-left": "-245px", "--w":"255px", "--m-left-s": "-190px", "--w-s":"200px"}}>certyfikaty</span>
                </div>
                <div className={styles.cert_wrapper}>
                    <div>
                        <CertIcon/>
                        <span>AWS Certified Cloud Practicioner CLF-C02</span>
                    </div>
                    <div>
                        <CertIcon/>
                        <span>Kwalifikacja Zawodowa INF.03</span>
                    </div>
                    <div>
                        <CertIcon/>
                        <span>Kwalifikacja Zawodowa INF.04</span>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}