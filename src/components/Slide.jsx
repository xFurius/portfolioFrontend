import styles from "../css/slide.module.css"

export default function Slide({img, title, desc, href}){
    return(
        <>
            <div className={styles.slide}>
                <img src={img} alt="" />
                <div className={styles.slide_info}>
                    <span>{title}</span>
                    <span>{desc}</span>
                    <button><a href={href}>See more</a></button>
                </div>
            </div>
        </>
    )
}