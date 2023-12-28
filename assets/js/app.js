import { handleHeroSlider } from './functions/handleHeroSlider.js'
import {
    updateValue,
    operationsRange,
    operationsNumber,
    employesRange,
    employesNumber,
} from './functions/linkRangeInputs.js'

import { handleCalculator } from './functions/handleCalculator.js'

import {
    handleBurger,
    burgerButton,
    navLinks,
    closeBurgerMenuOnLink,
    insertContacts,
} from './functions/handleBurger.js'

handleHeroSlider()

const linkRangeAndNumberInputs = () => {
    operationsRange.addEventListener('input', () => updateValue(operationsNumber, operationsRange))
    operationsNumber.addEventListener('input', () => updateValue(operationsRange, operationsNumber))
    employesRange.addEventListener('input', () => updateValue(employesNumber, employesRange))
    employesNumber.addEventListener('input', () => updateValue(employesRange, employesNumber))
}

linkRangeAndNumberInputs()

handleCalculator()

insertContacts()

burgerButton.addEventListener('click', () => handleBurger())

navLinks().forEach((link) => link.addEventListener('click', () => closeBurgerMenuOnLink()))
