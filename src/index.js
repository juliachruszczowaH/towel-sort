// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix && matrix.length !== 0) {
        matrix.map((current, index, arr) => {
            if (index % 2 === 1) {
                current = arr[index].reverse();
            }
        });
        result = [].concat(...matrix);
    }

    return result;
};
