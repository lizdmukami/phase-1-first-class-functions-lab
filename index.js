const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2) 
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = (array) => {
    return array.slice(2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (interger) => {
    return (function fareMultiplier() {
        return interger ** 2
    })
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3
}

const selectDifferentDrivers = (array, fun) => fun(array)