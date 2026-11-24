//your JS code here. If required.

const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.onclick = function () {
    let num = Number(input.value);

    // First Promise: Wait 2 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            output.innerText = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })

    // Second Promise: Multiply by 2
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data * 2;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 2000);
        });
    })

    // Third Promise: Subtract 3
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data - 3;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })

    // Fourth Promise: Divide by 2
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data / 2;
                output.innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })

    // Fifth Promise: Add 10
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data + 10;
                output.innerText = `Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    });
};
