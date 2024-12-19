function maxPathSum(matrix) {
    const n = matrix.length;     //rows
    const m = matrix[0].length;   //coloumn

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const directAbove = matrix[i - 1][j];
            const leftDiagonal = j > 0 ? matrix[i - 1][j - 1] : 0;
            const rightDiagonal = j < m - 1 ? matrix[i - 1][j + 1] : 0;

            matrix[i][j] += Math.max(directAbove, leftDiagonal, rightDiagonal);
        }
    }

    return Math.max(...matrix[n - 1]);
}

matrix = [
    [12, 22, 5, 0, 20, 18],
    [0, 2, 5, 25, 18, 17],
    [12, 10, 5, 4, 2, 1],
    [3, 8, 2, 20, 10, 8]
]
console.log(maxPathSum(matrix));
