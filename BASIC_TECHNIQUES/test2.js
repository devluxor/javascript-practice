let array = [1, 2, 3, 4];
let subarrays = [];
let subarrayMinSize = 2;
for (let i = 0; i < array.length; i += 1) {
  for (let j = i + 3; j <= array.length; j += 1) {
    subarrays.push(array.slice(i, j))
  }
}

subarrays // => 
