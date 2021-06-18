//To be displayed on the homepage

export default function Slideshow() {
    // var slideIndex = 1;
    // const showSlides = (n) => {
    //     var i;
    //     var slides = document.getElementsByClassName("slides");
    //     var dots = document.getElementsByClassName("dots");
    //     if(n > slides.length) slideIndex = 1
    //     if(n < 1) slideIndex = slides.length
    //     for(i = 0; i < slides.length; i++) slides[i].style.display = "none";
    //     for(i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += "active";
    // }
    // showSlides(slideIndex);
    // const plusSlides = (n) => showSlides(slideIndex += n);
    // const currSlide = (n) => showSlides(slideIndex = n);
    return (
        <div>
            (Slideshow WIP)
            <div class="slideshow">
                <div class="slides fade">
                    <img src='img/pic1.png' style={{width:'100%'}} alt="Pic 1" />
                    <div class="text">Pic 1</div>
                </div>
                <div class="slides fade">
                    <img src='img/pic2.png' style={{width:'100%'}} alt="Pic 2" />
                    <div class="text">Pic 2</div>
                </div>
                {/* <a class="prev" onclick={plusSlides(-1)} href='/#'>&#10094;</a>
                <a class="next" onclick={plusSlides(-1)} href='/#'>&#10095;</a> */}
            </div>
            <div style={{'text-align': 'center'}}>
                {/* <span class="dot" onClick={currSlide(1)} />
                <span class="dot" onClick={currSlide(2)} /> */}
            </div>
        </div>
    );
}