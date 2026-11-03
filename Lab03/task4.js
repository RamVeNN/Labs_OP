'use strict';

function methods(iface) {
    const names = [];

    for (const name in iface) {
        if (typeof iface[name] === 'function') {
            names.push([name, iface[name].length]);
        }
    }

    return names;
}

const iface = {
    m1: x => [x],
    m2: function (x, y) { return [x, y]; },
    m3(x, y, z) { return [x, y, z]; }
};

console.log(methods(iface));