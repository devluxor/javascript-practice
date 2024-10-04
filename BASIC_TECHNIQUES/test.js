function compareArrays(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length || 
      Object.keys(arrayA).join() !== Object.keys(arrayB).join()) {
    return false;
  }

  let sortedA = [...arrayA].sort();
  let sortedB = [...arrayB].sort();
  
  // alternative using strings
  if (sortedA.join('') !== sortedB.join('')) return false;

  for (let i = 0; i < sortedA.length; i += 1) {
    let elementA = sortedA[i];
    let elementB = sortedB[i];
    if (isNaN(elementA) && !isNaN(elementB)) return false;
    else if (isNaN(elementA) && isNaN(elementB)) continue;
    else if (elementA !== elementB) return false;
  }

  return true;
}

console.log(compareArrays([1, 3, 3, null, undefined, true, false, Infinity, NaN], 
  [1, 2, 3, null, undefined, true, false, Infinity, NaN]))