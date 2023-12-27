export const burgerButton = document.querySelector('.header__burger-button')
export const nav = document.querySelector('.header__nav')

export const handleBurger = () => {
    burgerButton.classList.toggle('header__burger-button--active')
    nav.classList.toggle('header__nav--active')
    document.body.classList.toggle('lock-scroll')
}
