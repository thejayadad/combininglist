let class1 = ["Joe", "Bob", "Jill", "Jazz"]
let class2 = ["Joy", "Jill", "Russell", "Kobe"]


let students = class1.concat(class2)

let allStudents = [...class1, ...class2]


let list = function (students){
    let item = document.getElementById("item")
    students.forEach(function(el) {
        let items = `
        <li>${el}</li>
        `;
        item.insertAdjacentHTML("afterbegin", items)
    })
}

list(allStudents)