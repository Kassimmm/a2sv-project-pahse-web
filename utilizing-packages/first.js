const _ = require("lodash");

const arr = [2, 6, 9, 2, 5, 8, 1, 0, 5, 8];    // defining the array
console.log(arr);

const sortedArr = _.sortBy(arr);   // sorting the array using lodash
console.log("Sorted arr: ", sortedArr);

const filteredArr = _.filter(arr, (num) => num > 5);   // filtering the array to get integers greater than 5 using lodash
console.log("Filtered arr: ", filteredArr);

const maxVal = _.max(arr);         // finding the maximum value in the array using lodash
console.log("Maximum value: ", maxVal);

const chunkedArr = _.chunk(arr, 2);     // splitting the array into chunks using lodash
console.log("Chunked arr: ", chunkedArr);


const squaredArr = _.map(arr, (num) => num * num); // Transform each element in an array
console.log("Squared arr: ", squaredArr);

const sum = _.reduce(arr, (acc, num) => acc + num, 0); // Reduce the array to a single value eg. sum
console.log("Sum of arr: ", sum);


const arr2 = [3, 4, 5, 6];
const unionArr = _.union(arr, arr2);  // Combine unique elements from multiple arrays:
console.log("Union of arr and arr2: ", unionArr);


const arr3 = [5, 6, 7, 8];
const intersectionArr = _.intersection(arr, arr3);  // Find common elements between multiple arrays
console.log("Intersection of arr and arr3: ", intersectionArr);


const differenceArr = _.difference(arr, arr3);  //  Find elements in the first array that are not in the second array
console.log("Difference between arr and arr3: ", differenceArr);



// defining the saved changes function
function savedChanges() {
    console.log("Changes have been saved");
}

const debounceSaved = _.debounce(savedChanges, 2000);

// calling the debounce function
debounceSaved();
