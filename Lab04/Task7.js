'use strict'

function ages(persons) {
    const data = {};

    for (const name in persons) {
        data[name] = persons[name].died - persons[name].born;
    }

    return data;
}

const persons = {
    Shevchenko: { born: 1814, died: 1861 },
    Dante: { born: 1265, died: 1321 },
    Justinian: { born: 482, died: 565 },
    Hendrix: { born: 1942, died: 1970 },
};

console.log(ages(persons));