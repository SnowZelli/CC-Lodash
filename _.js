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
    }
};

// Do not write or modify code below this line.
module.exports = _;