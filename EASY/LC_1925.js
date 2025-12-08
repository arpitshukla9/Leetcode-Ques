const n = 10;
// let count = 0;


// BRUTE_FORCE APPROACH O(n^3)

/*
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    for (let c = 1; c <= n; c++) {
      if ((a * a) + (b * b) === (c * c)) {
        count++;
      }
    }
  }
}
console.log(count);
*/

// Better Approach O(n^2)

const isSq = new Array((n * n) + 1).fill(false);

for (let i = 1; i <= n; i++) {
    isSq[i * i] = true;
}

let count = 0;

// 2. Iterate a and b
for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
        
        // Calculate the hypothetical c squared
        let c2 = (a * a) + (b * b);
        
        // Check two conditions:
        // A. The sum is within the bounds of n^2 (meaning c <= n)
        // B. The sum is actually a perfect square (exists in our lookup table)
        if (c2 <= n * n && isSq[c2]) {
            count++;
            // Optional: Print the triple to verify
            // console.log(`Found: ${a}, ${b}, ${Math.sqrt(c2)}`);
        }
    }
}

console.log(count);