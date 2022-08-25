const data = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [23, 50, 63, 90, 10, 30, 155, 23, 18],
  [133, 60, 23, 92, 6, 7, 168, 16, 19],
  [30, 43, 29, 10, 50, 40, 99, 51, 12],
];

function findIndex(dataArray) {
  //Check if argument passed is a valid array, if not return null
  if (dataArray === null || dataArray.length === 0) {
    return null;
  } else if (Array.isArray(dataArray)) {
    //If it is a valid array, iterate through each element (row) of the array

    //Store the central indices identified in a variable
    let centralIndice = [];

    for (let i = 0; i < dataArray.length; i++) {
      //Store sums on left and right of each row in variables
      let leftIntegerSum = 0;
      let rightIntegerSum = 0;
      let leftCounter = 0;
      let rightCounter = 0;
      let integerCounter = 0;

      //For each row array, iterate through each element (integer) of the array
      for (let j = 0; j < dataArray[i].length; j++) {
        //Add first integer to leftIntegerSum, increment leftCounter and integerCounter by 1
        if (j === 0) {
          leftIntegerSum = dataArray[i][j];
          leftCounter += 1;
          integerCounter += 1;
        }
        //Add last integer to rightIntergerSum, increment rightCounter and integerCounter by 1
        else if (j === dataArray[i].length - 1) {
          rightIntegerSum = dataArray[i][dataArray[i].length - 1];
          rightCounter += 1;
          integerCounter += 1;
        }

        //If sum on left is greater than sum on right, add the next outermost integer on the right to rightIntegerSum and increment rightCounter and integerCounter by 1
        if (leftIntegerSum > rightIntegerSum && integerCounter < 8) {
          rightIntegerSum += dataArray[i][8 - rightCounter];
          rightCounter += 1;
          integerCounter += 1;
        }
        //Otherwise, add the next outermost integer on the left to leftIntegerSum and increment leftCounter and integerCounter by 1
        else if (rightIntegerSum > leftIntegerSum && integerCounter < 8) {
          leftIntegerSum += dataArray[i][leftCounter];
          leftCounter += 1;
          integerCounter += 1;
        }
        //When the integerCounter reaches 8, check if the sum on both sides are equal. If they are not equal, push null to centralIndice array. If they are equal, push the cental index to centralIndice array.
        else {
          if (leftIntegerSum !== rightIntegerSum && integerCounter === 8) {
            centralIndice.push(null);
          } else if (
            leftIntegerSum === rightIntegerSum &&
            integerCounter === 8
          ) {
            centralIndice.push(dataArray[i].indexOf(dataArray[i][leftCounter]));
          }
        }
      }
    }
    //Return all the outputs are stored in the centralIndice array
    console.log(centralIndice, "CENTRAL INDICES");
    return centralIndice;
  }
}

module.exports = findIndex;
