import styles from "../../css/skills.module.css"
import SkillsIcon from "../../assets/skillsIcon.svg?react"
import SkillComponent from "../SkillComponent"

export default function Skills(){
    const tilt = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rX = (x - centerX) / centerX;
        const rY = (y - centerY) / centerY;

        const rotateX = (rY * 25).toFixed(2);
        const rotateY= (-rX * 25).toFixed(2);

        e.currentTarget.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;

        const posXPercent = (x / bounds.width) * 100;
        const posYPercent = (y / bounds.height) * 100;

        e.currentTarget.style.background = `radial-gradient(circle at ${posXPercent}% ${posYPercent}%, #191F3F 10%, #090915 80%)`;
    };

    const reset = (e) => {
        e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        e.currentTarget.style.background = `#090915`;
    }

    return(
        <>
            <div className={styles.skills_wrapper}>
                <div>
                    <SkillsIcon />
                    <span>umiejętności</span>
                    <p>Jestem programistą Fullstack skupiającym się na backendzie i rozwiązaniach na chmurze</p>
                </div>
                <div className={styles.skill_flex}>
                    <SkillComponent icon={"/skillsIcons/javaIcon.svg"} text={"java"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/goIcon.svg"} text={"go"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/jsIcon.svg"} text={"javascript"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/pythonIcon.svg"} text={"python"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/sqlIcon.svg"} text={"sql"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/htmlIcon.svg"} text={"html"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/cssIcon.svg"} text={"css"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/springIcon.svg"} text={"spring boot"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/ginIcon.svg"} text={"go gin"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/reactIcon.svg"} text={"react"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/awsIcon.svg"} text={"aws"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/gitIcon.svg"} text={"git"} onMouseMove={tilt} onMouseLeave={reset}/>
                    <SkillComponent icon={"/skillsIcons/rabbitIcon.svg"} text={"rabbitmq"} onMouseMove={tilt} onMouseLeave={reset}/>
                </div>
            </div>
        </>
    )
}