
let cblScore=()=>{
    let score=document.getElementById('cbl').value;

    let result;
    if(score>=800 && score<=850)
        result="Excellent";
    else if (score >=740 && score<800) 
        result="very Good";
    else if(score >=670 && score<740)
        result="Good";
    else if(score >=580 && score<670)
        result="Fair";
    else if(score<580 && score>0)
        result="Poor";

    else                                                     //cs assumes empty value  also a string
        result="";
    document.getElementById("result").innerHTML=result;
   
    if(result!="")
        alert(`Your credit score is ${result}`)


}
//validation

let validation=()=>{
    let a=document.getElementById('cbl').value;
    if(a==""){
        document.getElementById('span').innerHTML="*CBL score field is mandatory";
        return false;
    }
    return true;

}
//reset

let clearData=()=>{
    let score=document.getElementById('cbl').value;
    if(score!=""){                                                             //........
        let result=confirm("Are you want to clear the data..?");
        return result;
    }
    else
        return true;
}