export default function QualComponent({text, desc}){
    return(
        <>
            <div>
                <span>{text}</span>
                <span>{desc}</span>
                <button>See more</button>
            </div>
        </>
    )
}