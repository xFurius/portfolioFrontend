import styles from "../../css/aboutme.module.css"
import BeeSvg from "../../assets/bee.svg?react"

export default function AboutMe(){
    return(
        <>
        <div className={styles.about_wrapper}>
            <div>
                <BeeSvg/>
                <span>o mnie</span>
            </div>
            <div>
                <span>
                    Jestem studentem informatyki ze specjalizacją inżynieria oprogramowania na Politechnice Lubelskiej.
                    Uczęszczałem do Technikum nr 2 w Chełmie podczas którego byłem dwukrotnym stypendystą Lubelskiej Kuźni Talentów i skończyłem je uzyskując tytuł technika programisty.
                    Jestem programista Full-Stack skupiającym się na backendzie. Niedawno uzyskałem certyfikat AWS Certified Cloud Practitioner CLF-C02 i obecnie uczę się do AWS Certified Solutions Architect - Associate SAA-C03.
                    Zawsze jestem chętny do nauki nowych rzeczy i doskonalenia swoich umiejętności.
                </span>
            </div>
        </div>
        </>
    )
}