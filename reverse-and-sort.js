const names = ['HAKAN', 'ICLAL']
const puan = [90, 40]

const students = [
    { name: 'HAKAN', point: 90 },
    { name: 'ICLAL', point: 40 }
]

names.sort() //alfabatik

console.log(names)

names.reverse() //ters

console.log(names)

puan.sort()

console.log(puan)

puan.sort((a, b) => b - a)

console.log(puan)


students.sort((a, b) => {
    if (a.point > b.point) {
        return -1
    }

    else if (b.point < a.point) {
        return 1
    }

    else {
        return 0
    }
})

console.log(students)

students.sort((a, b) => b.point - a.point)

console.log(students)
