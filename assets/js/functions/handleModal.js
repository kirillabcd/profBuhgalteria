export const modal = document.querySelector('.modal')
export const heroButton = document.querySelector('.hero-button-callback')
export const calcButton = document.querySelector('.calculator-button-callback')
export const modalCloseBtn = document.querySelector('.modal__close-button')

export const openModal = () => {
    modal.classList.add('modal--active')
    document.body.classList.add('lock-scroll')
}

export const closeModal = () => {
    modal.classList.remove('modal--active')
    document.body.classList.remove('lock-scroll')
}
