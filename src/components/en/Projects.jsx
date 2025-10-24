import styles from "../../css/projects.module.css"
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
            <div className={styles.text_wrapper}>
              <ProjectsIcon />
              <span>Projects</span>
              <p>Below you can see my projects with more to come</p>
            </div>
          <div className={styles.slide_wrapper}>
            <div className={styles.slide_track} style={{ transform: `translateX(-${index * 750}px)`, width: `${refChildN * 800}px` }} ref={testRef}>
              <Slide img={"/portfolioProject.png"} title={"portfolio website"} desc={"Portfolio website made using react.js"} href={"/en/projects/portfolio"}/>
            </div>
            </div>
            <div className={styles.slide_control}>
                <button onClick={prevSlide}><img src={arrowR} alt="" /></button>
                <button onClick={nextSlide}><img src={arrow} alt="" /></button>
            </div>
        </>
    )
}