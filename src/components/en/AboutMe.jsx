import styles from "../../css/aboutme.module.css"
import BeeSvg from "../../assets/bee.svg?react"

export default function AboutMe(){
    return(
        <>
        <div className={styles.about_wrapper}>
            <div>
                <BeeSvg/>
                <span>about me</span>
            </div>
            <div>
                <span>
                    I’m a Computer Science student with software engineering specialization at Lublin University of Technology.
                    I attended Technical School in Chełm during which i was a two times scholarship holder in “Lubelska Kuźnia Talentów” 
                    and graduated with technical diploma in software engineering. I'm a Full-Stack developer with emphasis on backend development. I recently passed a Certified Cloud Practitioner CLF-C02 certification and currently 
                    I’m preparing for Certified Solutions Architect - Associate SAA-C03 certificate. I'm always eager to learn new things and improve my skills.
                </span>
            </div>
        </div>
        </>
    )
}