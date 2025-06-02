let calc1= ()=>{
    let num1=eval(document.getElementById("n1").value);
    let num2=eval(document.getElementById("n2").value);
    let res=num1+num2;
    document.getElementById("result").value=res;

}
let calc2= ()=>{
    let num1=eval(document.getElementById("n1").value);
    let num2=eval(document.getElementById("n2").value);
    let res=num1-num2;
    document.getElementById("result").value=res;

}
let calc3= ()=>{
    let num1=eval(document.getElementById("n1").value);
    let num2=eval(document.getElementById("n2").value);
    let res=num1*num2;
    document.getElementById("result").value=res;

}
let calc4= ()=>{
    let num1=eval(document.getElementById("n1").value);
    let num2=eval(document.getElementById("n2").value);
    let res=num1/num2;
    document.getElementById("result").value=res;

}
let calc5= ()=>{
    let num1=eval(document.getElementById("n1").value);
    let num2=eval(document.getElementById("n2").value);
    let res=num1%num2;
    document.getElementById("result").value=res;

}