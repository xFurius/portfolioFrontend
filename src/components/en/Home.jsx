import styles from "../../css/home.module.css"
import section from "../../css/sectionIndicator.module.css"
import nav from "../../css/nav.module.css"
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Qualifications from "../en/Qualifications"
import Projects from "./Projects";
import PortfolioSVG from "../../assets/portfolio.svg?react"
import Divider from "../../assets/sectionDvdr.svg?react"
import SectionIndicator from "../SectionIndicator";
import { useEffect, useRef } from "react";

export default function Home(){
    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)
    const section4 = useRef(null)

    const sections = [
        { ref: section1, id: 'aboutme' },
        { ref: section2, id: 'skills' },
        { ref: section3, id: 'projects' },
        { ref: section4, id: 'qual' },
    ];

    useEffect(() => {
        sections.forEach(({ref, id}) => {
            const thresholdValue = id === 'qual' ? 0.3 : 0.6

            const observer = new IntersectionObserver(entries => {
                entries.forEach(e => {
                    const id = e.target.dataset.id;
                    const dot = document.getElementById(`dot-${id}`)
                    const btn = document.getElementById(`btn-${id}`)

                    if (dot && btn) {
                        if (e.isIntersecting) {
                            dot.classList.add(section["dot_active"])
                            btn.classList.add(nav["active"])
                        } else {
                            dot.classList.remove(section["dot_active"])
                            btn.classList.remove(nav["active"])
                        }
                    }
                })
            },{
                threshold: thresholdValue,
            })

            if (ref.current) {
                ref.current.dataset.id = id
                observer.observe(ref.current)
            }
        })

        return () => {
            sections.forEach( ref  => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    })
        
    return(
        <>
            <SectionIndicator/>
            <section>
                <Nav/>
            </section>
            <main>
                <section>
                    <PortfolioSVG/>
                    <Divider/>
                </section>
                <section ref={section1} id="section1">
                    <AboutMe/>
                    <Divider className={styles.divider}/>
                </section>
                <section ref={section2} id="section2">
                    <Skills/>
                    <Divider className={styles.divider}/>
                </section>
                <section ref={section3} id="section3">
                    <Projects/>
                    <Divider className={styles.divider}/>
                </section>
                <section ref={section4} id="section4">
                    <Qualifications/>
                </section>
            </main>
        </>
    )
}