let cblScore=()=>
{
    let result;
    let score=document.getElementById("cbl").value;
    if(score>=800 && score<=850)
        result="Excellent";
    else if (score >=740 && score<800) 
        result="very Good";
    else if(score >=670 && score<740)
        result="Good";
    else if(score >=580 && score<670)
        result="Fair";
    else if(score<580)
        result="Poor";
    else
        result="Invalid input";
    document.getElementById("result").innerHTML=result;

    

}