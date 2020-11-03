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

