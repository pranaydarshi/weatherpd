function weather() {

    let city = document.getElementById("city").value
    let xhttp = new XMLHttpRequest();
    let temp = document.getElementById("temp");
    let xaxis = []
    let yaxis = []
    let error = document.getElementById("error")
    xhttp.onreadystatechange = function () {
        if(this.status == 404 && this.readyState == 4){
            error.innerHTML = `<p style="margin-left: 42%;font-size:20px"> Sorry Incorrect City Name <p>`
            document.getElementById("temp").innerHTML = "";
            document.getElementById("chartBox").innerHTML = "";
        }
        else if (this.status == 200 && this.readyState == 4) {

            let data = JSON.parse(xhttp.responseText);
            console.log(data)
            temp.innerHTML = `
        <style>
            p{
                margin-left: 42%;
                font-size: 20px;
            }
            table{
                width: 55%;
                margin-left: 17%;
            }
        </style>
        <table>
        <tr>
            <td>
                <p> COUNTY NAME : ${data.city.country}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p> MAXIMUM TEMPERATURE : ${data.list[0].main.temp_max} <sup>o</sup</p>
            </td>
        </tr>
        <tr>
            <td>
                <p> MINIMUM TEMPERATURE : ${data.list[1].main.temp_min} <sup>o</sup></p>
            </td>
        </table>

        `
            for (let i = 0; i < data.list.length; i = i + 8) {
                let date = data.list[i].dt_txt.split(" ");
                xaxis.push(date[0])
                yaxis.push(data.list[i].main.temp)

            }

        }
    }
    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e15c55a23793c294908375f6b427d0f0&units=metric`, false);
    xhttp.send();
    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xaxis,
            datasets: [{
                label: `TEMPERATURE OF ${city.toUpperCase()}`,
                data: yaxis,
                borderWidth: 1,
                backgroundColor: ['red','blue','orange','green','purple'],
                borderColor: ['black']
            }]
        },
      
    });

}


