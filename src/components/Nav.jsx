import "../css/nav.css"
import Globe from "../assets/globe.svg?react"
import LinkedIn from "../assets/linkedin.svg?react"
import GitHub from "../assets/github.svg?react"
import Mail from "../assets/mail.svg?react"

export default function Nav(){
    const scrollIntoView = (id) => {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    }

    return(
        <>
        <div className="wrapper">
            <div>
            <div className='lang'>
                <Globe/>
                <span>PL</span>
                <span>/</span>
                <span>EN</span>
            </div>
            <nav>
                <button id="btn-aboutme" onClick={() => scrollIntoView('section1')}>about me</button>
                <button id="btn-skills" onClick={() => scrollIntoView('section2')}>skills</button>
                <button id="btn-projects" onClick={() => scrollIntoView('section3')}>projects</button>
                <button id="btn-qual" onClick={() => scrollIntoView('section4')}>qualifications</button>
            </nav>
            <div className='links'>
                <a href="https://www.linkedin.com/in/mateusz-pszczoła-328a6327b" target="_blank"><LinkedIn/></a>
                <a href="https://github.com/xFurius" target="_blank"><GitHub/></a>
                <a href="mailto:pszczola.mateusz1@gmail.com" target="_blank"><Mail/></a>
            </div>
            </div>
        </div>
        </>
    )
}