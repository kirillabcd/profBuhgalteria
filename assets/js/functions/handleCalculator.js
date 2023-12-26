const radio = document.querySelectorAll('.real-radio')
const chekedRadio = () => document.querySelector('.real-radio:checked')
const priceValue = document.querySelector('.price__price-value')
const operationsRange = document.querySelector('.operation-range')
const employesRange = document.querySelector('.employes-range')
const operationsNumber = document.querySelector('.operation-number')
const employesNumber = document.querySelector('.employes-number')

const zeroRadio = document.querySelector('.zero')

const perOperation = 100
const perEmploye = 500

export const handleCalculator = () => {
    updatePriceValue()

    radio.forEach((input) => input.addEventListener('change', () => updatePriceValue()))

    operationsRange.addEventListener('input', () => updatePriceValue())
    operationsNumber.addEventListener('input', () => updatePriceValue())

    employesRange.addEventListener('input', () => updatePriceValue())
    employesNumber.addEventListener('input', () => updatePriceValue())
}

const updatePriceValue = () => {
    let totalPrice = 0
    if (chekedRadio() === zeroRadio) {
        totalPrice = +chekedRadio().value
        operationsRange.disabled = true
        operationsNumber.disabled = true
        employesRange.disabled = true
        employesNumber.disabled = true

        operationsRange.value = 20
        employesRange.value = 2
        operationsNumber.value = 20
        employesNumber.value = 2
    } else {
        operationsRange.disabled = false
        operationsNumber.disabled = false
        employesRange.disabled = false
        employesNumber.disabled = false
        totalPrice =
            +chekedRadio().value +
            +operationsRange.value * perOperation +
            +employesRange.value * perEmploye
    }

    priceValue.textContent = `${totalPrice.toLocaleString('Ru-RU')} ₽`
}
