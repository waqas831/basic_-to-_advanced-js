let names=['waqas','usman','rizwan','najam','usama','saad','aslam'];
console.log(names[0])
console.log(names[5]);
for (let i=0;i<names.length;i++){
  console.log(i,names[i]);
}
let fruits=new Array('banana','apple','strawberry','orange','strawberry');
for(let i=0;i<fruits.length;i++){
  for (let j=0;j<names.length;j++){
    console.log(i,j,names[i],fruits[i])
  }
}
//methods in js
//convert array into string
console.log(names.toString());
//pop the last element in array
console.log(names.pop());
//insert the value in first index
console.log(names.shift("hahaaha"));
//remove the ist element in array
console.log(names.unshift());
//insert the value in first index
console.log(names.push("never"));
//it slice thr array
console.log(names.slice(1,3));
//combine two arrays together
let combine=names.concat(fruits);
console.log(combine);
//reverse the array
console.log(names.reverse());
//sort array in alphabatically order
console.log(names.sort());
