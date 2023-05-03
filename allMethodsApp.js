const students = [
    { name: 'HAKAN', point: 90 },
    { name: 'ICLAL', point: 40 }
]

const filtered = students.filter(student => student.point < 50)

const UpdatePoint = filtered.map(student => {
    return `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`
})

console.log(UpdatePoint)

const newNotes = students.filter(student => student.point < 50).map(student => `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`) //tek satırda yazılışı

console.log(newNotes)