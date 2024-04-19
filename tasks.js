//AXALI METODI

//1 davaleba
// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];

// //თქვენი დავალებაა ამ მასივიდან ამოიღოთ პირველი 5 ელემენტი და ჩაწეროთ მასივში:
// const firstFive = [];

// for (let i = 0; i < 5; i++) {
//   firstFive[firstFive.length] = array[i];
// }
// console.log(firstFive);

//2 DAVALEBA

//თქვენი დავალებაა ამ მასივიდან ამოიღოთ ბოლო 5 ელემენტი და ჩაწეროთ მასივში:
// const lastFive = [];

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];

// for (let i = array.length - 5; i < array.length; i++) {
//   lastFive[lastFive.length] = array[i];
// }
// console.log(lastFive);

//3 DAVALEBA

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// //თქვენი დავალებაა ამ მასივიდა ამოიღოთ ყველა ელემენტი გარდა პირველი 2-ისა და ჩაწეროთ მასივში:
// const newArray = [];

// for (let i = 2; i < array.length; i++) {
//   newArray[newArray.length] = array[i];
// }

// console.log(newArray);

//4 DAVALEBA

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// //თქვენი დავალებაა ამ მასივიდა ამოიღოთ ყველა ელემენტი გარდა ბოლო 2-ისა და ჩაწეროთ მასივში:

// const newArray = [];

// for (let i = 0; i < array.length - 2; i++) {
//   newArray[newArray.length] = array[i];
// }

// console.log(newArray);

//5 DAVALEBA
//pirveli ramdenime

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// const n = 2;

// //თქვენი დავალებაა ამ მასივიდან ამოიღოთ პირველი n ელემენტი და ჩაწეროთ მასივში
// const newArray = [];

// for (let i = 0; i < n; i++) {
//   newArray[newArray.length] = array[i];
// }
// console.log(newArray);

//6 DAVALEBA
//bolo ramdenime

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// const n = 2;
// //თქვენი დავალებაა ამ მასივიდან ამოიღოთ ბოლო n ელემენტი და ჩაწეროთ მასივში
// const newArray = [];

// for (let i = array.length - n; i < array.length; i++) {
//   newArray[newArray.length] = array[i];
// }
// console.log(newArray);

//7 DAVALEBA
//პირველი n-is გარდა

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// const n = 3;

// //თქვენი დავალებაა ამ მასივიდან ამოიღოთ ყველა ელემენტი გარდა პირველი n-ისა და ჩაწეროთ მასივში:
// const newArray = [];

// for (let i = n; i < array.length; i++) {
//   newArray[newArray.length] = array[i];
// }
// console.log(newArray);

//8 DAVALEBA

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// const n = 3;

// //თქვენი დავალებაა ამ მასივიდან ამოიღოთ ყველა ელემენტი გარდა ბოლო n-ისა და ჩაწეროთ მასივში:
// const newArray = [];

// for (let i = 0; i < array.length - n; i++) {
//   newArray[newArray.length] = array[i];
// }
// console.log(newArray);

//9 DAVALEBA

const universities = [
  {
    university: "University of Oxford",
    location: "Oxford, England",
    established: 1096,
    departments: [
      { name: "Physics", chair: "Dr. Emily Stark" },
      { name: "Philosophy", chair: "Dr. John Locke" },
    ],
    notable_alumni: [
      { name: "Stephen Hawking", degree: "PhD, Physics" },
      { name: "Oscar Wilde", degree: "BA, English" },
    ],
  },
  {
    university: "Harvard University",
    location: "Cambridge, MA, USA",
    established: 1636,
    departments: [
      { name: "Economics", chair: "Dr. Lisa Genova" },
      { name: "Biology", chair: "Dr. Charles Darwin" },
    ],
    notable_alumni: [
      { name: "Barack Obama", degree: "JD, Law" },
      { name: "Mark Zuckerberg", degree: "Dropped out" },
    ],
  },
  {
    university: "Stanford University",
    location: "Stanford, CA, USA",
    established: 1885,
    departments: [
      { name: "Computer Science", chair: "Dr. Ada Lovelace" },
      { name: "Chemical Engineering", chair: "Dr. Marie Curie" },
    ],
    notable_alumni: [
      { name: "Elon Musk", degree: "BS, Physics" },
      { name: "Reed Hastings", degree: "MS, Computer Science" },
    ],
  },
  {
    university: "University of Tokyo",
    location: "Tokyo, Japan",
    established: 1877,
    departments: [
      { name: "Law", chair: "Dr. Kenji Fuji" },
      { name: "Medicine", chair: "Dr. Yoko Ono" },
    ],
    notable_alumni: [
      { name: "Shinzo Abe", degree: "Political Science" },
      { name: "Kazuo Ishiguro", degree: "Bachelor in English" },
    ],
  },
  {
    university: "University of Cape Town",
    location: "Cape Town, South Africa",
    established: 1829,
    departments: [
      { name: "Anthropology", chair: "Dr. Nelson Mandela" },
      { name: "Astronomy", chair: "Dr. Sarah Fortune" },
    ],
    notable_alumni: [
      { name: "Desmond Tutu", degree: "Master's in Theology" },
      { name: "Elon Musk", degree: "Attended, did not graduate" },
    ],
  },
];

// const universityNames = [];
// for (let i = 0; i < universities.length; i++) {
//   universityNames[i] = universities[i].university;
// }
// console.log(universityNames);

//მოცემულ ობიექტს გადაურბინეთ ფორ ლუპით და const universityNames = []  <<< ამ არაიში ჩასეტეთ ყველა უნივერისიტეტის სახელი
// console.log(universityNames); // expected output
// [
//   "University of Oxford",
//   "Harvard University",
//   "Stanford University",
//   "University of Tokyo",
//   "University of Cape Town",
// ];

//Bonus davaleba: unda gamoiyenot chanestili for loopi anu ori for loop

const departmentNames = [];
let counter = 0;
//<< ამ არაიში უნდა ჩასეტოთ ყველა დეპარტამენტი

for (let i = 0; i < universities.length; i++) {
  // console.log(universities[i].departments);
  const departments = universities[i].departments;
  for (let b = 0; b < departments.length; b++) {
    departmentNames[counter] = departments[b].name;
    counter++;
  }
}
console.log(departmentNames);

// const departmentNames = [];
// console.log(departments)[ // expected output :
//   ("Physics",
//   "Philosophy",
//   "Economics",
//   "Biology",
//   "Computer Science",
//   "Chemical Engineering",
//   "Law",
//   "Medicine",
//   "Anthropology",
//   "Astronomy")
// ];
