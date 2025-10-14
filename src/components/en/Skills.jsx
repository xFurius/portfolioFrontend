import "../../css/skills.css"
import SkillsIcon from "../../assets/skillsIcon.svg?react"
import SkillComponent from "../SkillComponent"

export default function Skills(){
    return(
        <>
        <div className="skills-wrapper">
                <div>
                    <SkillsIcon />
                    <span>skills</span>
                    <p>BASIC ASS TEXT</p>
                </div>
                <div className="skills-row">
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"java"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"go"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"javascript"}/>
                </div>
                <div className="skills-row row">
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"python"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"sql"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"html"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"css"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"spring boot"}/>
                </div>
                <div className="skills-row row">
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"go gin"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"react"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"aws"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"git"}/>
                    <SkillComponent icon={"/skillsIcons/skillsIcon.svg"} text={"rabbitmq"}/>
                </div>
        </div>
        </>
    )
}