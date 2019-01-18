function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function (x, y) {
        console.log("x : " + x + "; y : " + y);
        return y - x;
    });
    return arr_num;
}

//console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));
var arr = Second_Greatest_Lowest([2, 4, 3, 5]);
console.log(arr);