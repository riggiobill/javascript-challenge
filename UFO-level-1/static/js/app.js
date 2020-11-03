// from data.js
var tableData = data;



// Create the function
function check_info(check) {
    console.log(`${check.city}: ${check.state}`);
}


// Call the function
tableData.forEach(check_info);

