// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(flair="*") {
    return function(param="special") {
        return `You are ${flair}${param}${flair}!`
    }
};

let Calculator = {
    add: function(x, y) {
            return x + y
    },
    subtract: function(x, y) {
        return x - y
    },
    multiply: function(x, y) {
        return x * y
    },
    divide: function(x, y) {
        return x / y
    }
};

function actionApplyer(int, arr) {
    let x = int;

    for (let i = 0; i < arr.length; i++) {
        x = arr[i](x)
    }

    return x
};