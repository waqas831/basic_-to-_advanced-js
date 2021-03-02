console.log("1)addition            2)substraction");
console.log("3)multiplication         4)division");
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

switch(choice){
  case 1:
   console.log(add(a,b));
   break;
   case 2:
    console.log(sub(a,b));
    break;
    case 3:
     console.log(mul(a,b));
     break;
     case 4:
      console.log(div(a,b));
      break;
      default:
      console.log("invalid choice");
      break;
}