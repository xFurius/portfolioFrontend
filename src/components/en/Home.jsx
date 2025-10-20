import "../../css/home.css"
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
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);

    const sections = [
        { ref: section1, id: 'aboutme' },
        { ref: section2, id: 'skills' },
        { ref: section3, id: 'projects' },
        { ref: section4, id: 'qual' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            const id = entry.target.dataset.id;
            const dot = document.getElementById(`dot-${id}`)
            const btn = document.getElementById(`btn-${id}`)

            if (dot && btn) {
                if (entry.isIntersecting) {
                    dot.classList.add('active');
                    btn.classList.add('active')
                } else {
                    dot.classList.remove('active');
                    btn.classList.remove('active')
                }
            }
            });
        },
        {
            threshold: 0.6,
        }
        );

        sections.forEach(({ ref, id }) => {
        if (ref.current) {
            ref.current.dataset.id = id;
            observer.observe(ref.current);
        }
        });

        return () => {
        sections.forEach( ref  => {
            if (ref.current) {
            observer.unobserve(ref.current);
            }
        });
        };
    });
        
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
                    <Divider className="divider"/>
                </section>
                <section ref={section2} id="section2">
                    <Skills/>
                    <Divider className="divider"/>
                </section>
                <section ref={section3} id="section3">
                    <Projects/>
                    <Divider className="divider"/>
                </section>
                <section ref={section4} id="section4">
                    <Qualifications/>
                </section>
            </main>
        </>
    )
}