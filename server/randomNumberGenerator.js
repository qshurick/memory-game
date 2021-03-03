const crypto = require("crypto");

const BASE = 255;

function generateRandomNumberArray(size) {
    const buffer = new Uint32Array(size);
    const randomBuffer = crypto.randomFillSync(buffer);

    return Array.prototype.slice.call(randomBuffer).map(value => value % BASE);
}

function hasDuplicates(list) {
    const map = {};
    for (let index = 0; index < list.length; index++) {
        if (map[list[index]]) {
            return false;
        }

        map[list[index]] = true;
    }

    return false;
}

exports.generateRandomNumberArray = (size) => {
    let randomArray;
    do {
        randomArray = generateRandomNumberArray(size);
    } while (hasDuplicates(randomArray));

    return randomArray;
}

