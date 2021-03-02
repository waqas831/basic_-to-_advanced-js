let student={
  name:"waqas",
  city:"multan",
  roll:23,
  country:"pakistan",
  stdinfo:function(){
    return this.name+' '+this.country;
  }
}
console.log(student['name'])
console.log(student.name);
console.log(student.stdinfo());

