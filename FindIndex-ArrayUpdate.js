const points = [70, 75, 25, 35, 10, 80, 97]

const arrayIndex = points.findIndex(point => point == 35)
points[arrayIndex] = 45

console.log(points)

const students = [
    {name: 'Iclal', point: 40},
    {name: 'Hakan', point: 90}
]

const objectIndex = students.findIndex(student => student.name == 'Hakan')
students[objectIndex].name == 'HAKAN'
console.log(students)