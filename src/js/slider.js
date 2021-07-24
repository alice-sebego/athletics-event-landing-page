/**
 * Handle all functions of event's user who navigate on the slider
 * @class Slider
 */
export default class Slider{

    index = 0;

    /**
     * @constructor
     * @param {HTMLAllCollection} imgSlides 
     * @param {HTMLButtonElement} nextBtn 
     * @param {HTMLButtonElement} previousBtn 
     * @param {HTMLAllCollection} circles 
     * @param {number} indexArrImg 
     */
    constructor(imgSlides, nextBtn, previousBtn, circles, indexArrImg){
        this.imgSlides = imgSlides;
        this.nextBtn = nextBtn;
        this.previousBtn = previousBtn;
        this.circles = circles;
        this.indexArrImg = indexArrImg;
    }

    get next(){
        return this.nextBtn;
    }

    get previous(){
        return this.previousBtn;
    }

    get imgOfSlides(){
        return this.imgSlides;
    }

    /**
     * Display next image on the slider
     * @method nextSlide
     */
    nextSlide = () => {
        if(this.index < this.indexArrImg){
    
            this.imgSlides[this.index].classList.remove("active");
            this.index ++;
            this.imgSlides[this.index].classList.add("active");
        
        } else if(this.index === this.indexArrImg){
    
            this.imgSlides[this.index].classList.remove("active");
            this.index = 0;
            this.imgSlides[this.index].classList.add("active");
    
        }
    
        for(let i = 0; i < this.circles.length; i++){
            if(this.circles[i].getAttribute("data-clic") - 1 === this.index){
                this.circles[i].classList.add("active-circle");
            } else {
                this.circles[i].classList.remove("active-circle");
            }
        }
    }

    /**
     * Display previous image on the slider
     * @method previousSlide
     */
    previousSlide = () => {
        if(this.index > 0){
    
            this.imgSlides[this.index].classList.remove("active");
            this.index --;
            this.imgSlides[this.index].classList.add("active");
        
        } else if(this.index === 0){
    
            this.imgSlides[this.index].classList.remove("active");
            this.index = this.indexArrImg;
            this.imgSlides[this.index].classList.add("active");
            
        }
    
        for(let i = 0; i < this.circles.length; i++){
            if(this.circles[i].getAttribute("data-clic") - 1 === this.index){
                this.circles[i].classList.add("active-circle");
            } else {
                this.circles[i].classList.remove("active-circle");
            }
        }
    }

    /**
     * Navigate on the slider with keyboard
     * @method keypressed
     * @param {Event} event 
     */
    keypressed = event => {

        switch (event.key) {
            case "ArrowLeft":
                this.previousSlide();
                break;
            case "ArrowRight":
                this.nextSlide();
                break;
        }
    
    }

    /**
     * Navigate on the slider with click on a circle that display a img depending this data-clic
     * @method handleCircles
     */
    handleCircles = () => {

        let circlesList = this.circles;
        let imgList = this.imgSlides;
        let indexImg = this.index;
        
        for(let circle of this.circles){

            circle.addEventListener("click", function(){
            
                for(let i = 0; i < circlesList.length; i++){
                    circlesList[i].classList.remove("active-circle");  
                }
                this.classList.add("active-circle");
                imgList[indexImg].classList.remove("active");
                indexImg = this.getAttribute("data-clic") - 1;
                imgList[indexImg].classList.add("active");

            });
        }

    }
}