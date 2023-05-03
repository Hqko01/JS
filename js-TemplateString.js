const framework1 = "Angular"
const framework2 = "React"
const framework3 = "Vue"

let sonuc = "frameworks: " + framework1 + " " + framework2 + " " + framework3 //x
console.log(sonuc)

let sonuc1 = `frameworks: ${framework1} ${framework2} ${framework3}` //x
console.log(sonuc1)

let html = `
<h1>${framework1}</h1>
<h2>${framework2}</h2>
<h3>${framework3}</h3>
`
console.log(html)