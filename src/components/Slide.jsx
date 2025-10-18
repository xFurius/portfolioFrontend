import "../css/slide.css"

export default function Slide({img, title, desc}){
    return(
        <>
            <div className="slide">
                <img src={img} alt="" />
                <div className="slide-info">
                    <span>{title}</span>
                    <span>{desc}</span>
                    <button>See more</button>
                </div>
            </div>
        </>
    )
}