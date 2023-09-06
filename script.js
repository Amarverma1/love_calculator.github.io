function CalculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    
    if(name1==="" || name2 ===""){
        alert("please Enter both Names.");
    }

    const loverpercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${loverpercentage}%`;

    if (loverpercentage <30){
        result.innerHTML += "<br> Not a Great Match. Please change your partner !";
    }else if(loverpercentage>= 30 && loverpercentage < 70){
        result.innerHTML += "<br> Thair is potential. Give it a try!";
    }else{
        result.innerHTML += "<br> Great Match !";
    }
    
   
    
}