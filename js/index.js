
document.addEventListener('DOMContentLoaded',()=>{

const slides = document.querySelector('.slide')
const slideImg = document.querySelectorAll('.slide li')
let currentIndex = 0;
const slideCount = slideImg.length;
const visualPrev = document.querySelector('.visual_prev')
const visualNext = document.querySelector('.visual_next')
const slideWidth = 100 + '%'

slides.style.slideWidth = slideWidth * slideCount + '%';

function move(num){
    slides.style.left = -num * 100 + '%';
    currentIndex = num
}

visualPrev.addEventListener('click',()=>{
    if(currentIndex !==0){
        move(currentIndex -1)
    }
})

visualNext.addEventListener('click',()=>{
    if(currentIndex !== slideCount -1){
        move(currentIndex + 1)
    }
})





const schedule = document.querySelector('.schedule_slide')
const scheduleImg = document.querySelectorAll('.schedule_slide div')
let currentIndex2 = 0
const slideCount2 = scheduleImg.length;
const schePrev = document.querySelector('.sche_prev')
const scheNext = document.querySelector('.sche_next')
const slideWidth2 = 100 + '%'

schedule.style.slideWidth2 = slideWidth2 * slideCount2 + '%';

function sche(num){
    schedule.style.left = -num * 100 + '%'
    currentIndex2 = num
}

schePrev.addEventListener('click',()=>{
    if(currentIndex2 !== 0){
        sche(currentIndex2 -1)
    }
})

scheNext.addEventListener('click',()=>{
    if(currentIndex2 !== slideCount2 -1){
        sche(currentIndex2 + 1)
    }
})




const reco01 = document.querySelector('.recoSlide')
const recoImg01 = document.querySelectorAll('.recoSlide div')
let currentIndex3 = 0
const slideCount3 = recoImg01.length;
const recoPrev = document.querySelector('.reco_prev')
const recoNext = document.querySelector('.reco_next')
const slideWidth3 = 100 + '%'

reco01.style.slideWidth3 = slideWidth3 * slideCount3 + '%';

function reco(num){
    reco01.style.left = -num * 48 + '%'
    currentIndex3 = num
}

recoPrev.addEventListener('click',()=>{
    if(currentIndex3 !== 0) {
        reco(currentIndex3 -1)
    }
    if(currentIndex3 < 6) {
        recoNext.style.display='block'
    }
    if(currentIndex3 <= 0){
        recoPrev.style.display='none'
    }
})

recoNext.addEventListener('click',()=>{
    if(currentIndex3 !== slideCount3 -1) {
        reco(currentIndex3 + 1)
    }
    if(currentIndex3 >= 1) {
        recoPrev.style.display='block'
    }

    if(currentIndex3 >= 6){
        recoNext.style.display='none'
    }

})




const eventBanner = document.querySelector('.eventSlide')
const eventImg = document.querySelectorAll('.eventSlide div')
let currentIndex4 = 0;
const slideCount4 = eventImg.length;
const eventPrev = document.querySelector('.event_prev')
const eventNext = document.querySelector('.event_next')
const slideWidth4 = 100 + '%'

eventBanner.style.slideWidth4 = slideWidth4 * slideCount4 + '%';

if(matchMedia("screen and (min-width: 320px)and (max-width: 600px)").matches){
    function event01(num){
        eventBanner.style.left = -num * 100 + '%'
        currentIndex4= num
    }

    eventPrev.addEventListener('click',()=>{
    if(currentIndex4 !== 0){
            event01(currentIndex4 -1)
        }
    })

    eventNext.addEventListener('click',()=>{
    if(currentIndex4 !== slideCount4 -1){
            event01(currentIndex4 + 1)
        }
    })
} else if(matchMedia("screen and (min-width: 601px)").matches){


}











})