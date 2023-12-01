//Part 1: Refactoring Old Code
//Solving using Object and Array
const personRawData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`

console.log("\n****PART1 Using known columns, objects and arrays\n\n");

let column1 = "";
let column2 = "";
let column3 = "";
let column4 = "";

//rowCounter
let rowCounter = 1;

// column columnCounter
let columnCounter = 1;

const personOutputArray = [];

//loop one character at a time
for (let i = 0; i < personRawData.length; i++) {

    //column delimiter
    if (personRawData[i] === ',') {
        columnCounter += 1;
        continue;
    }

    //rowCounter delimiter
    if (personRawData[i] === '\n' || i === personRawData.length - 1) {

        //create object to store everything in one place
        const personObj = {};
        personObj.id = column1;
        personObj.name = column2;
        personObj.occupation = column3;
        personObj.age = column4;

        //add to my array
        if (rowCounter > 1)
            personOutputArray.push(personObj);


        column1 = '';
        column2 = '';
        column3 = '';
        column4 = '';
        columnCounter = 1;
        rowCounter += 1;
        continue;
    }

    if (columnCounter === 1) {
        column1 = column1 + personRawData[i];
    }
    if (columnCounter === 2) {
        column2 = column2 + personRawData[i];
    }
    if (columnCounter === 3) {
        column3 = column3 + personRawData[i];
    }
    if (columnCounter === 4) {
        column4 = column4 + personRawData[i];
    }

}


console.log("PART1 OUTPUT BELOW");
for (let i = 0; i < personOutputArray.length; i++) {
    const currentPersonValue = personOutputArray[i];
    console.log(currentPersonValue.id + "," + currentPersonValue.name + "," + currentPersonValue.occupation + "," + currentPersonValue.age)
}

//END OF PART1

//Part 2: Expanding Functionality
//Solving using 2D Array

console.log("\n****PART2 2D array\n\n");

const rowWithColumns = [];

let singleRow = [];

let columnCount = 0;

//loop one character at a time
for (let i = 0; i < personRawData.length; i++) {

    const val = personRawData[i];
    //column delimiter
    if (val === ',') {
        columnCount++;
        continue;
    }

    //rowCounter delimiter
    if (val === '\n' || i === personRawData.length - 1) {
        rowWithColumns.push(singleRow);
        singleRow = [];
        columnCount = 0;
        continue;
    }
    singleRow[columnCount] = singleRow[columnCount] != undefined ? singleRow[columnCount] + val : val;
}

console.log(rowWithColumns);

//END OF PART2

//Part 3: Transforming Data
//Solve using object with lower case field names
//I am reusing my code from PART1

console.log("PART3 Output");
console.log(personOutputArray);

//END OF PART3

/////Part 4: Sorting and Manipulating Data
////1 Remove the last element from the sorted array.

const part4OutputArray = [];
personOutputArray.forEach(r => part4OutputArray.push(r));

part4OutputArray.slice(-1);

/// 2 .Insert the following object at index 1:
///{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
const berry = {
    id: "48", name: "Barry", occupation: "Runner", age: "25"
};
part4OutputArray.splice(1, 0, berry);

////3..Add the following object to the end of the array:
///{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
const bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
part4OutputArray[part4OutputArray.length - 1] = bilbo;
console.log("PART4 Output");
console.log(part4OutputArray);

let totalAge = 0;
part4OutputArray.forEach(r => {
    totalAge += parseInt(r.age);
});
const avgAge = totalAge / part4OutputArray.length;
console.log(`Average Age is ${avgAge}`);

//Part 5: Full Circle
let finalCsv = "ID,Name,Occupation,Age\\n";
for (let i = 0; i < part4OutputArray.length; i++) {
    const currentPersonValue = part4OutputArray[i];
    finalCsv += currentPersonValue.id + "," + currentPersonValue.name + "," + currentPersonValue.occupation + "," + currentPersonValue.age;
    if (i < part4OutputArray.length - 1) {
        finalCsv += "\\n";
    }
}
console.log("Final csv below");
console.log(finalCsv);