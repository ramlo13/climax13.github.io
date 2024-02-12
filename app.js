let clima ={
    apikey:"83ed1d9dfc605bd0ebf03937faf4bd71",
    fetchClima:function(ciudad){
     fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + ciudad
        + "&units=metric&appid="
        + this.apikey
     )
     .then((response)=>{
        return response.json();
     })
     .then((data)=>this.mostrarClima(data));
    },
    mostrarClima:function(data){
        const{temp} = data.main;
        document.querySelector("#temp").innerHTML = temp + " &#8451"
    }
}

let ciudad = document.querySelector("#ciudad");
ciudad.addEventListener("change", function(){
    clima.fetchClima(ciudad.value)
})

clima.fetchClima("Acapulco");