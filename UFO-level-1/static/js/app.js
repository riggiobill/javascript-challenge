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
var tbody = d3.select("#ufo-tbody");



function createTable(tableData) {
    // Having the variable for tbody, we can create 
    // and modify rows of data.

    tableData.forEach(function(ufoInfo) {
        var row = tbody.append("tr");

        // Append a data vallue to the row for 
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


    // ultimately this in-line function will call createTable using
    // data filtered with the date collected from the submit button
});