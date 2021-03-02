console.log("some other loops concept");
function add(a,b)
{
  let add=a+b;
  return add;
}
function sub(a,b)
{
  let sub=a-b;
  return sub;
}
function mul(a,b)
{
  let mul=a*b;
  return mul;
}
function div(a,b)
{
  let div=a/b;
  return div;
}

let choice=prompt("enter your choice");
let a=prompt("enter first number");
let b=prompt("enter second number");
if(choice==1)
{
  console.log(add(a,b));
}
else if(choice==2)
{
  console.log(sub(a,b));
}
else if(choice==3)
{
  console.log(mul(a,b));
}
else if(choice==4)
{
  console.log(div(a,b));
}
else
{
  console.log("invalid choice");
}

