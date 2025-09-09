weatherurl ="https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35&lang=kr"


openwurl ="https://api.openweathermap.org/data/2.5/weather?"


usercity = "seoul"
city= "q=" + usercity
openurl2 = "&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35&lang=kr"

function getweather(){
    // alert("getweather가 수행됨")

    usercity = txtcity.value
    $.ajax({

        type: "GET",
        url: openwurl + "q=" + usercity + openurl2

    }).done(function(response){

        // alert("성공했습니다")
        // alert("온도는=" + response.main.temp +" 바람속도는 "+ response.wind.speed + " 날씨는 " +response.weather[0].description)
        // console.log(response)

        txtMsg.value = response.name +"의 현재 날씨는 다음과 같습니다"
                    + "\n온도는 " + response.main.temp 
                    +"\n바람속도는 "+ response.wind.speed 
                    + "\n날씨는 " +response.weather[0].description

    }).fail(function(error){
        alert("실패했습니다")
        console.log(error)
    });
}

getweather()