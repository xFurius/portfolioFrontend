import "./css/nav.css"
import Globe from "./assets/globe.svg?react"
import LinkedIn from "./assets/linkedin.svg?react"
import GitHub from "./assets/github.svg?react"
import Mail from "./assets/mail.svg?react"

export default function Nav(){
    return(
        <>
        <div className='navbar'>
            <div className='lang'>
                <Globe/>
                <span>PL</span>
                <span>/</span>
                <span>EN</span>
            </div>
            <nav>
                <button>about me</button>
                <button>skills</button>
                <button>projects</button>
                <button>qualifications</button>
            </nav>
            <div className='links'>
                <LinkedIn/>
                <GitHub/>
                <Mail/>
            </div>
        </div>
        </>
    )
}