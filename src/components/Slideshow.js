import { useState, useEffect } from "react";
export default function Slideshow() {
    let imgs = ['img/pic1.png', 'img/pic2.png'];
    const [index, setIndex] = useState(0);
    useEffect(() => {setIndex(0)}, []);
    const next = () => {(index === imgs.length - 1) ? setIndex(0) : setIndex(index + 1)};
    const prev = () => {(index === 0) ? setIndex(imgs.length - 1) : setIndex(index - 1)};
    return(
        <div className="slideshow">
            <img className="main" src={imgs[index]} alt="Pic" style={{width:'100%'}} />
            <div className="actions">
                <button onClick={prev}>&#10094;</button>
                <button onClick={next}>&#10095;</button>
            </div>
        </div>
    )
}