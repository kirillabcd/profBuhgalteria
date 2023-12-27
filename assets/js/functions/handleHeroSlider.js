const sliderRow = document.querySelector('.hero__cards')
const slides = document.querySelectorAll('.hero__card')
let sliderCounter = 0
let interval
let intervalDuration = 3000
const slideWidth = () => document.querySelectorAll('.hero__card')[0].offsetWidth

export const handleHeroSlider = () => {
    cloneSlides()
    startSliderInterval()

    sliderRow.addEventListener('mouseenter', () => {
        pauseSlider()
    })

    sliderRow.addEventListener('mouseleave', () => {
        startSliderInterval()
    })
}

const cloneSlides = () => {
    slides.forEach((slide) => {
        const clone = slide.cloneNode(true)
        sliderRow.append(clone)
    })
}

const mooveSlider = () => {
    sliderCounter++
    sliderRow.style.transition = '0.3s ease'
    sliderRow.style.transform = `translateX(${(-slideWidth() - 20) * sliderCounter}px)`
}

const restartSlider = () => {
    sliderCounter = 0
    sliderRow.style.transition = 'none'
    sliderRow.style.transform = `translateX(${(-slideWidth() - 20) * sliderCounter}px)`
}

const startSliderInterval = () => {
    if (window.innerWidth <= 768) {
        intervalDuration = 6000
    }
    interval = setInterval(() => {
        mooveSlider()
        if (sliderCounter === 6) {
            restartSlider()
        }
    }, intervalDuration)
}

const pauseSlider = () => {
    clearInterval(interval)
}
