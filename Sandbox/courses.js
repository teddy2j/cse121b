const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections : [
        {
           sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: "TTh", instructor: "Bro T"
        },
        {
            sectionNum: 1, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A"
        }
    ]
}

function setNameAndCode(course) {
    let courseName = document.getElementById("courseName");
    let courseCode = document.getElementById("courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function setSectionsTable(sections) {
    let html = sections.map((section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`);
    document.getElementById("sections").innerHTML = html.join("");

}
setNameAndCode(aCourse);
setSectionsTable(aCourse.sections);