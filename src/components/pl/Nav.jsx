import styles from "../../css/nav.module.css"
import Globe from "../../assets/globe.svg?react"
import LinkedIn from "../../assets/linkedin.svg?react"
import GitHub from "../../assets/github.svg?react"
import Mail from "../../assets/mail.svg?react"

export default function Nav(){
    const scrollIntoView = (id) => {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    }

    return(
        <>
        <div className={styles.wrapper}>
                <div className={styles.lang}>
                    <Globe/>
                    <span><a href="/pl/home">PL</a></span>
                    <span>/</span>
                    <span><a href="/en/home">EN</a></span>
                </div>
                <nav>
                    <button id="btn-aboutme" className={styles.nav_btn} onClick={() => scrollIntoView('section1')}>o mnie</button>
                    <button id="btn-skills" className={styles.nav_btn} onClick={() => scrollIntoView('section2')}>umiejętności</button>
                    <button id="btn-projects" className={styles.nav_btn} onClick={() => scrollIntoView('section3')}>projekty</button>
                    <button id="btn-qual" className={styles.nav_btn} onClick={() => scrollIntoView('section4')}>kwalifikacje</button>
                </nav>
                <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/mateusz-pszczoła-328a6327b" target="_blank"><LinkedIn/></a>
                    <a href="https://github.com/xFurius" target="_blank"><GitHub/></a>
                    <a href="mailto:pszczola.mateusz1@gmail.com" target="_blank"><Mail/></a>
                </div>
        </div>
        </>
    )
}