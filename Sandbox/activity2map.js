let grades = ['A', 'B', 'A'];
function convertGrades(grade) {
    if (grade == "A") {
        return 4;
    }
    else {
        return 3;
    }
}
console.log(grades.map(convertGrades));

// activity 3 //

