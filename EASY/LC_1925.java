// BRUTE_FORCE APPROACH O(n^3)

/* 
class Solution {
    public int countTriples(int n) {
    int count = 0;
    for (int a = 1; a <= n; a++) {
        for (int b = 1; b <= n; b++) {
            for (int c = 1; c <= n; c++) {
                if ((a * a) + (b * b) == (c * c)) {
                    count++;
                }
            }
        }
    }
    return count;
    }
}

 */
// BETTER APPROACH O(N^2)

/* 
class Solution {
    public int countTriples(int n) {
        boolean[] isSq = new boolean[n * n + 1];

        for (int i = 1; i <= n; i++) {
            isSq[i * i] = true;
        }

        int count = 0;
        for (int a = 1; a <= n; a++) {
            for (int b = 1; b <= n; b++) {
                int c2 = a * a + b * b;
                if (c2 <= n * n && isSq[c2]) {
                    count++;
                }
            }
        }

        return count;
    }
}
*/
