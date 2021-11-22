var xhr = new XMLHttpRequest();


xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);

        //Get all the countries from Asia continent /region using Filter function
        let data1 = t.filter(t => t.region === "Asia").map(t=>t.name);

        console.log(data1)

        //Get all the countries with a population of less than 2 lakhs using Filter function
        var data2 = t.filter(function (t) {
            if(t.population < "200000")
            {
            return t.name
            }
            else
            {
                return false
            }
        }).map(t=>t.name);
        console.log(data2)

        //Print the following details name, capital, flag using forEach function

        t.forEach(element => {
            console.log(
                `Name :${element.name},Capital:${element.capital},Flag:${element.flag}`)
        });

        //Print the total population of countries using reduce function

        let total=t.reduce((acc,t)=>acc+t.population,0);
        console.log(total)

        //Print the country which uses US Dollars as currency.

        var data4 = t.filter((element) => 
        element.currencies.some((currencies) => currencies.code == "USD")).map(t=>t.name);
        console.log(data4)        

    } 
    else {

        console.log("Data is not available");

    }
};

xhr.send();

//https://docs.google.com/document/d/1iza9j-P6zsN0gZ9ZVuNH0lMxdUeuAYfaGMPvyWL_IcY/edit  