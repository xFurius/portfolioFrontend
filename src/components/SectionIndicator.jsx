import "../css/SectionIndicator.css"

export default function SectionIndicator(){
    return(
        <>
        <div className="dot-indicator">
            <span id="dot-aboutme" className="dot"></span>
            <span id="dot-skills" className="dot"></span>
            <span id="dot-projects" className="dot"></span>
            <span id="dot-qual" className="dot"></span>
        </div>
        </>
    )
}