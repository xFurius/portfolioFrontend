import "../css/skillComponent.css"

export default function SkillComonent({icon, text}){
    return(
        <>
            <div className="skill-main">
                <img src={icon} alt="skill icon" />
                <span>{text}</span>
            </div>
        </>
    )
}