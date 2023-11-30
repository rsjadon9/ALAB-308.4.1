const personRawData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`

console.log("\n****Using known columns, objects and arrays\n\n");

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

console.log(personOutputArray);

for (let i = 0; i < personOutputArray.length; i++) {
    const currentPersonValue = personOutputArray[i];
    console.log(currentPersonValue.id + "," + currentPersonValue.name + "," + currentPersonValue.occupation + "," + currentPersonValue.age)
}

//////Part Two

onsole.log("\n****Now with multi-dimentional array\n\n");

const rowWithColumns = [];

let singleRow = [];

let columnCount = 0;

//loop one character at a time
for (let i = 0; i < personRawData.length; i++) {

    //column delimiter
    if (personRawData[i] === ',') {
        columnCount++;
        continue;
    }

    //rowCounter delimiter
    if (personRawData[i] === '\n' || i === personRawData.length - 1) {
        rowWithColumns.push(singleRow);
        singleRow = [];
        columnCount = 0;
        continue;
    }
    singleRow[columnCount] = singleRow[columnCount] != undefined ? singleRow[columnCount] + personRawData[i] : personRawData[i];
}

for (let i = 0; i < rowWithColumns.length; i++) {
    const singleRow = rowWithColumns[i];
    let rowValue = "";
    for (let j = 0; j < singleRow.length; j++) {
        rowValue += rowValue.length > 0 ? "," + singleRow[j] : singleRow[j];
    }
    console.log(rowValue);

}



