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
    }
};

// Do not write or modify code below this line.
module.exports = _;