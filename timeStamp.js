const startDate = new Date('08/26/2022 22:00:00')
const now = new Date()
console.log(startDate)

const diff = now.getTime() - startDate.getTime()
console.log(diff)

const mins = Math.round(diff/1000/60)
const hours = Math.round(mins/60)
const date = Math.round(hours/24)
const years = Math.round(date/365)
console.log(mins)
console.log(hours)
console.log(date)
console.log(years)
console.log('-------------')
console.log(new Date(diff)) //timestamp tarihe çevirme