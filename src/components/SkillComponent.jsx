import styles from "../css/skillComponent.module.css"

export default function SkillComonent({icon, text, onMouseMove, onMouseLeave}){
    return(
        <>
            <div className={styles.skill_main} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
                <img src={icon} alt="skill icon" />
                <span>{text}</span>
            </div>
        </>
    )
}