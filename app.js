var student1 = {
  firstName: "Ali",
  LastName: "zakir",
  Age: "56",
  id: Math.random(),
};

var student2 = {
  firstName: "alisbha",
  LastName: "aryan",
  Age: "12",
  id: Math.random(),
};

var student3 = {
  firstName: "nahid",
  LastName: "zakir",
  Age: "46",
  id: Math.random(),
};

var student4 = {
  firstName: "Hussian",
  LastName: "ameen",
  Age: "24",
  id: Math.random(),
};

var student5 = {
  firstName: "Shahana",
  LastName: "Shahid",
  Age: "18",
  id: Math.random(),
};

var student6 = {
  firstName: "Hammad",
  LastName: "zubair",
  Age: "17",
  id: Math.random(),
};

var student7 = {
  firstName: "jani",
  LastName: "talha",
  Age: "23",
  id: Math.random(),
};

var student8 = {
  firstName: "Ali",
  LastName: "anjum",
  Age: "20",
  id: Math.random(),
};

var student9 = {
  firstName: "Hasnian",
  LastName: "zahid",
  Age: "53",
  id: Math.random(),
};

var student10 = {
  firstName: "Haris",
  LastName: "zain",
  Age: "56",
  id: Math.random(),
};
// console.log(student7);

var list = document.getElementById("list");
var totalstudent = document.getElementById("totalStudent");
var call = document.getElementById("coll");
var studentList = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
];

// console.log(studentList, 8);

function render() {
  list.innerHTML = "";
  totalstudent.innerHTML = studentList.length;
  for (i = 0; i < studentList.length; i++) {
    console.log(`${studentList[i].firstName} ${studentList[i].LastName}`);
    list.innerHTML += `<li> SNO : ${i + 1} First Name : ${
      studentList[i].firstName
    } Last Name ${studentList[i].LastName}  </li>`;
    coll.innerHTML += `
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${studentList[i].firstName}</td>
    <td>${studentList[i].LastName}</td>
    <td>${studentList[i].Age}</td>
    <td>${studentList[i].id}</td>
  </tr>`;
  }
}
render();
