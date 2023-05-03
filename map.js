const points = [10, 20, 30]

const newPoints = points.map(points => {
    return points +10
})

console.log(newPoints)

const studentPoint = [
    {name: 'Hakan', point: 90},
    {name: 'İcilal', point: 35}
]

const NewStudentPoints = studentPoint.map(student => {
    if(student.point < 50) {
        student.point += 20
        // return {name: student.name ,point: student.point +15}
        return student
    }
    else {
        return student
    }
})

console.log(NewStudentPoints)