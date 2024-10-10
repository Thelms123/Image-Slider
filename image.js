const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft; 

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none": "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none": "block";
}
arrowIcons.forEach(icon=> {
    icon.addEventListener("click",()=> {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImg.clientWidth;
        setTimeout(() => showHideIcons(), 60);
            
        });

    });

const autoSlide = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth))
        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + 14;
        let valDiff = firstImgWidth - positionDiff;

        if(carousel.scrollLeft > prevScrollLeft) {
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiff: firstImgWidth;
        }
        
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiff: firstImgWidth;{

        }

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    if(isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);

document.addEventListener("mousemove", dragging);


}
