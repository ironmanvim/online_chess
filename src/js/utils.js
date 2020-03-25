export function convertUnicode(input) {
    return input.replace(/\\u(\w\w\w\w)/g,function(a,b) {
        let charcode = parseInt(b,16);
        return String.fromCharCode(charcode);
    });
}

export function loggerWrap(func, params) {
    console.log(`${func.name} start`);
    const returnValue = func(...params);
    console.log(`${func.name} end`);

    return returnValue;
}