//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["movie1", "movie2", "movie3"]
for (let i = 0; i < movies.length; i++) {
    document.querySelector("h2").innerText += `${movies[i]}, `;
}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
// let nums = [1, 2, 3, 4, 5]
// for (let i = 0; i < nums.length; i++) {
//     nums[i] += 3;
// }
// console.log(nums)

//Find the average of all the numbers from question three
let nums = [1, 2, 3, 4, 5];
let average = 0;
for (let i = 0; i < nums.length; i++) {
    average += nums[i];
}
console.log(average / nums.length)
