const coffeeItems = require('./coffee_data.js')

//All of the drinks on the menu
const allDrinks = coffeeItems.map(coffee => coffee.name)
console.log(allDrinks)


//All drinks less than and equal to 5
const cheapDrinks = coffeeItems.filter(coffee => coffee.price <=5 ? true : false)
console.log(cheapDrinks)


//Drinks with prices of even number
const evenDrinks = coffeeItems.filter(coffee => coffee.price % 2 === 0 ? true : false)
console.log(evenDrinks)

//Total of drinks if you bought everyone
const totalPrice = coffeeItems.reduce((accumulator, coffee) => {
    return accumulator + coffee.price
}, 0)
console.log('Total Price: ', totalPrice)

//All seasonal drinks
const seasonalDrinks = coffeeItems.map((coffee) => {
    if (coffee.seasonal) {
      return (`${coffee.name} with imported beans`) }
})
console.log(seasonalDrinks)
