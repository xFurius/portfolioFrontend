import { useEffect, useRef } from "react"
import "../css/skillComponent.css"

export default function SkillComonent({icon, text, onMouseMove, onMouseLeave}){
    return(
        <>
            <div className="skill-main" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
                <img src={icon} alt="skill icon" />
                <span>{text}</span>
            </div>
        </>
    )
}