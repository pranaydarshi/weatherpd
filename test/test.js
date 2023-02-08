let city="";
    function weather(){
        city=document.getElementById("city").value;
    let xhttp=new XMLHttpRequest();
       let label = [];
       let yaxis = [];
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let data=JSON.parse(xhttp.responseText);
            console.log(data)
            div2.innerHTML+=`Country Name: ${data.city.country}`;
           temp_min.innerHTML+="Min Temp:"+`${data.list[0].main.temp_max}`+" C"+"<br>";
           temp_max.innerHTML+="Max Temp:"+`${data.list[0].main.temp_min}`+" C"+"<br>";
        //    for(i=0;i<40;i+=8)
        //    {
        //     console.log(`working`)
        //        var date = data.list[i].dt_txt.split(" ");
        //        label.push(date[0]);
        //        yaxis.push(data.list[i].main.temp);
        //    }
        }
       
    xhttp.open("GET",`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e15c55a23793c294908375f6b427d0f0&units=metric`,false);
    xhttp.send();
   
    } 
    
   
}