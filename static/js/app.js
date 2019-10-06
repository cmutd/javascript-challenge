// from data.js
var tableData = data;

// load table
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

// =========================  First basic search part================== //

// set button variables
var first_filter=d3.select("#f-filter-btn");
var first_reset=d3.select("#f-reset-btn");

// set input box variables
var first_input=d3.select("#datetime");


// filter function
var submit=first_filter

submit.on("click",function(){
    d3.event.preventDefault();
    var first_inputV=first_input.property("value");
    console.log(first_inputV)

    var response=tableData.filter(data=>data.datetime===first_inputV);
    result(response)
})


// reset function
var reset=d3.select("#f-reset-btn")
reset.on("click",function(){
    tbody.html("")
    result(tableData)
})


// =========================  second advance search part================== //
// set variables
var value=d3.select("#value");
var criter=d3.select("#criteria")
var add=d3.select("#add")
var addB=d3.select("#add-btn")
var reset=d3.select("#reset-btn");
var secFilter=d3.select("#filter-btn");
var resetC=d3.select("#resetCriteria-btn")


//var values=[];
//var criteria=[]
var filter={}
// get the dropdown value

addB.on("click",function(){
    var items=criter.property("value")
    var v=value.property("value").trim();
     if (items==="Date"){
        items=items.trim()
    }
    else{
        v=v.toLowerCase()
    }
    add.append("li")
     .text(items+":"+v)

     filter[items]=v
     //console.log(filter)
       //criteria.push(items);
       //values.push(v)
})

resetC.on("click",function(){
    add.selectAll("li").remove()
    criter.property("value","")
    value.property("value","")
    //values=[];
    //criteria=[]
    filter={}

})

