// from data.js
var tableData = data;


var tbody=d3.select("tbody");

// appends a table

function result(filterData){
    tbody.html("")
    filterData.forEach(report => {
    var row=tbody.append("tr");
    Object.entries(report).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value);
    });
});
}


result(tableData)


 // select input element
var inputDate=d3.select("#datetime")
var inputCity=d3.select("#City")
var inputState=d3.select("#state")
var inputCountry=d3.select("#country")
var inputShape=d3.select("#shape")

// select submit button
var submit=d3.select("#filter-btn")

submit.on("click",function(){
    d3.event.preventDefault()
    var inputDateV=inputDate.property("value").trim().toLowerCase();
    var inputCityV=inputCity.property("value").trim().toLowerCase();
    var inputStateV=inputState.property("value").trim().toLowerCase();
    var inputCountryV=inputCountry.property("value").trim().toLowerCase();
    var inputShapeV=inputShape.property("value").trim().toLowerCase();
    //console.log(inputDateV)

    var response=tableData.filter(data=>data.datetime===inputDateV);
    var response=tableData.filter(data=>data.city===inputCityV);
    var response=tableData.filter(data=>data.state===inputStateV);
    var response=tableData.filter(data=>data.country===inputCountryV);
    var response=tableData.filter(data=>data.shape===inputShapeV);
    //console.log(response)
    result(response)
    console.log(inputCityV)
})


// select reset buttom
var reset=d3.select("#reset-btn")
reset.on("click",function(){
    tbody.html("")
    result(tableData)
})

