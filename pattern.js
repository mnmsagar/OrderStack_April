// let n = prompt("Enter the Size of the Pattern");
// n= Number(n);
let n =5;
let pattern = "";
for (let i = 1; i <= n; i++) {

    for (let j = n; j > i; j--) {
        pattern =pattern+ " ";
    }

    for (let k = 0; k < i * 2 - 1; k++) {
        pattern = pattern + "*";
    }
    pattern = pattern+ "\n";
}

for (let i = 1; i <= n - 1; i++) {

    for (let j = 0; j < i; j++) {
        pattern =pattern + " ";
    }

    for (let k = (n - i) * 2 - 1; k > 0; k--) {
        pattern =pattern + "*";
    }
    pattern = pattern + "\n";
}
console.log(pattern);
