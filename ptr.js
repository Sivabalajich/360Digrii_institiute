let validation=()=>{
    let p=document.getElementById('p').value;
    let t=document.getElementById('t').value;
    let r=document.getElementById('r').value;
    if(p=="")
    {
        document.getElementById('span1').innerHTML="*Enter principal amount";
    }
    if(t=="")
        {
            document.getElementById('span2').innerHTML="*Enter tenure";
        }
    if(r=="")
        {
            document.getElementById('span3').innerHTML="*Enter rate in rupees";
        }
    

    let res=(p*t*r)/100;
    document.getElementById("result").value=res;

    
}