function findStudentIndex(students, searchStudent) {
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (students[middle] === searchStudent) {
      return middle;
    } else if (students[middle] < searchStudent) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
const searchStudent1 = "John";
const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
const searchStudent2 = "Andrew";
console.log(findStudentIndex(students1, searchStudent1));
console.log(findStudentIndex(students2, searchStudent2));

// ตอบคำถามตรงนี้จ้า
// ฺBinary search มี Big o เป็น O(log n) : logarithmic
