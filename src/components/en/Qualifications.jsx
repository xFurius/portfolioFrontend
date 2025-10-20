import QualComponent from "../QualComponent"
import QualIcon from "../../assets/qualIcon.svg?react"
import "../../css/qualifications.css"

export default function Qualifications(){
    return(
        <>
            <div className="qual-wrapper">
                <QualIcon/>
                <span>qualifications</span>
                <p>Here you can see my work experience, education history as well as my certificates</p>
            </div>
            <div className="work-wrapper">
                <div className="work-span-wrapper">
                    <span>work experience</span>
                </div>
                <div className="experience-wrapper">
                    <div className="qual-comp-wrapper">
                        <QualComponent text={"JUL 2024 - present"} desc={"Infrastructure Monitoring Analyst, Capgemini"}/>
                    </div>
                    <div className="qual-comp-wrapper">
                        <QualComponent text={"JUL 2024 - present"} desc={"Infrastructure Monitoring Analyst, Capgemini"}/>
                    </div>
                </div>
            </div>
        </>
    )
}