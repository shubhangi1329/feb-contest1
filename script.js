/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

 arr.map(function(value){
  if(value.marks>50){
    console.log(value);
  }
 })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.lo
  arr.forEach(function(value){
    if(value.marks>50){
      console.log(value);
    }
  })
}

function addData() {
  //Write your code here, just console.log

  var stud={id:4,name:"susan",age:"20",marks:45}
  arr.push(stud)
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log

  var fin=arr.filter(function(value){
    if(value.marks>50)
    return value;
  })
  console.log(fin);
}

function concatenateArray() {
  //Write your code here, just console.log

  var arr2=[{id:101,name:"shubhi",age:"20",marks:95}, {id:102, name:"kumud",age:"25", marks:93}, {id:103, name:"siddhi", age:"24",marks:25}]
  var res=arr.concat(arr2)
  console.log(res);

}
