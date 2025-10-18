import "../../css/projects.css"
import Slide from "../Slide"
import ProjectsIcon from "../../assets/projectsIcon.svg?react"
import arrow from "../../assets/arrow.svg"
import arrowR from "../../assets/arrowR.svg"
import { useEffect, useRef, useState } from "react";

export default function Projects(){
    const testRef = useRef(null)
    const [refChildN, setRefChildN] = useState(0)

    useEffect(()=>{
        setRefChildN(testRef.current.children.length)
    })

      const [index, setIndex] = useState(0);
    
      const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % refChildN);
      };
    
      const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + refChildN) % refChildN);
      };

    return(
        <>
            <div className="text-wrapper">
              <ProjectsIcon />
              <span>Projects</span>
              <p>Below you can see my projects with more to come</p>
            </div>
          <div className="slide-wrapper"> {/*tutaj zrobic zeby slide-track mial ustawiany width a podstawie tego ile slideow jest w srodku*/}
            <div className="slide-track" style={{ transform: `translateX(-${index * 750}px)` }} ref={testRef}>
                    <Slide img={"/image 31.png"} title={"portfolio website"} desc={"Portfolio website made using react.js"}/>
                    <Slide img={"/image 31.png"} text={"etst"}/>
            </div>
            </div>
            <div className="slide-control">
                <button onClick={prevSlide}><img src={arrowR} alt="" /></button>
                <button onClick={nextSlide}><img src={arrow} alt="" /></button>
            </div>
        </>
    )
}