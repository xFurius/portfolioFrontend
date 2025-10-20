import "../css/slide.css"

export default function Slide({img, title, desc, href}){
    return(
        <>
            <div className="slide">
                <img src={img} alt="" />
                <div className="slide-info">
                    <span>{title}</span>
                    <span>{desc}</span>
                    <button><a href={href}>See more</a></button>
                </div>
            </div>
        </>
    )
}