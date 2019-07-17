const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number,lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if(end === undefined) {
            end = start;
            start = 0;
        }
        if(start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        if(number >= start && number < end){
            return true;
        } else {
            return false;
        }
    },
    words(str) {
        return str.split(' ');
    },
    pad(str, length) {
        if(str.length >= length) {
            return str;
        }
        const beginPadding = Math.floor((length - str.length)/2);
        const endPadding = length - str.length - beginPadding;
        const paddedString =' '.repeat(beginPadding) + str + ' '.repeat(endPadding);
        return paddedString;
    },
    has(object, key) {
        if(object[key]) {
            return true;
        } else {
            return false;
        }
    },
    invert(object) {
        let invObj = {};
        for(let key in object) {
            const originalValue = object[key];
            invObj = {originalValue: key};
        }
        return invObj;
    },
    findKey(object, predicate) {
        for(let key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            if(predicateReturnValue) {
                return key;
            }
        }
        undefined;
        return undefined;
    },
    drop(arr,n) {
        if(n === undefined) {
            n = 1;
        }
        let newArr = arr.slice(n);
        return newArr;
    }
};

// Do not write or modify code below this line.
module.exports = _;