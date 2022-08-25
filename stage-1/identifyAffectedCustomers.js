//Read file contents from latest-customers.txt
//Convert data retrieved to an array with each line (customer) represented by an element
//Remove the header (first element)
//Convert each array element into an customer data object
//Filter data by checking age of each customer
//Stringify customer data and append to new text file

function identifyAffectedCustomers() {
  const fs = require("fs/promises");

  //Read file contents from latest-customers.txt
  const latestCustomersData = fs
    .readFile("./stage-1/latest-customers.txt", "utf8")
    .then((originalData) => {
      //Retrieve data from text file
      return originalData;
    })
    .then((originalData) => {
      //Convert retreived data to an array of data entries
      let dataEntriesArray = originalData.split("\n");
      return dataEntriesArray;
    })
    .then((dataEntriesArray) => {
      //Remove data header
      let newDataEntriesArray = dataEntriesArray.slice(1);
      return newDataEntriesArray;
    })
    .then((newDataEntriesArray) => {
      affectedCustomersArray = [];

      //Convert each element (string) in the array into a customer data object
      newDataEntriesArray.forEach((dataEntry) => {
        customer = dataEntry.split(",");
        //Convert age data (string) to a number
        customer[1] = parseInt(customer[1]);

        //Filter data by checking age of each customer and push to affectedCustomersArray
        if (customer[1] >= 40 && customer[1] <= 59) {
          affectedCustomersArray.push(customer);
        }
      });

      //Stringify each element and append to new text file
      affectedCustomersArray.forEach((affectedCustomer) => {
        let stringifiedCustomer = JSON.stringify(affectedCustomer);

        //Cleans up data by removing square notations, double quotes, backslashes
        let contentToAppend = stringifiedCustomer.replace(/[\\[\]"]+/g, "");

        //Appends to newly created text file by running test file identifyAffectedCustomers.test, using Jest command "npm test <test filename>"
        return fs.appendFile(
          "./stage-1/affected-customers.txt",
          contentToAppend + "\n"
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });

  return latestCustomersData;
}
module.exports = identifyAffectedCustomers;
