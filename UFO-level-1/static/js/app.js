// from data.js
var tableData = data;

// Double check to make sure data is loaded properly
// by using a forEach function and a basic console log
// reporting function.

// Create the function
function check_info(check) {
    console.log(`${check.city}: ${check.state}`);
}


// Call the function
tableData.forEach(check_info);


// Create reference variable for the table body using D3.js
//var table = d3.select("#ufo-table");
var tbody = d3.select("#ufo-table");



function createTable(tableData) {
    // Having the variable for tbody, we can create 
    // and modify rows of data.
    console.log("Test sucesss 2");
    console.log(tableData);
    tableData.forEach(function(ufoInfo){
        var row = tbody.append("tr");

        console.log("Test success 3");
        // Append a data value to the row for 
        // each of the required info columns

        //datetime
        row.append("td").attr('scope','row').text(ufoInfo.datetime);
        row.append("td").text(ufoInfo.city);
        row.append("td").text(ufoInfo.state);
        row.append("td").text(ufoInfo.country);
        row.append("td").text(ufoInfo.shape);
        row.append("td").text(ufoInfo.comments);
    });


}




// Uses D3.js to select the submit button
var submitButton = d3.select("#filter-btn");


// Event listener and in-line function to handle
// click event on the Submit button
submitButton.on("click", function() {
    var row = d3.select("tbody").selectAll("td");
    row.remove();

    // Make sure the page doesn't refresh on entry
    d3.event.preventDefault();
    

    // Using D3, extract and select the datetime element and value
    var DatetimeElement = d3.select("#datetime");
    var DatetimeValue = DatetimeElement.property("value");


    // Prepares and filters the data based on the input date,
    // then returns by calling the createTable function.
    let filterData =  tableData;
    var filteredData = filterData.filter(tbody => tbody.datetime === DatetimeValue);

    console.log("Test success 1");
    console.log(DatetimeValue);
    createTable(filteredData);

});