const students = [
    {name:"Hakan", passed: true},
    {name:"İcilal", passed: false}
]

const passingStudents = students.filter(students => {
    return !students.passed
})

console.log(passingStudents)