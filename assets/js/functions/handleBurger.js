export const burgerButton = document.querySelector('.header__burger-button')
export const nav = document.querySelector('.header__nav')
export const navLinks = document.querySelectorAll('.header__menu-item')

export const handleBurger = () => {
    burgerButton.classList.toggle('header__burger-button--active')
    nav.classList.toggle('header__nav--active')
    document.body.classList.toggle('lock-scroll')
}

export const closeBurgerMenuOnLink = () => {
    if (nav.classList.contains('header__nav--active')) {
        burgerButton.classList.remove('header__burger-button--active')
        nav.classList.remove('header__nav--active')
        document.body.classList.remove('lock-scroll')
    }
}
