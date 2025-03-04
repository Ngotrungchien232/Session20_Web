let a = prompt("Mời bạn nhập số a: ");
let b = prompt("Mời bạn nhập số b: ");

a = parseFloat(a);
b = parseInt(b);

if (isNaN(a) || isNaN(b) || b < 0) {
  console.log("Vui lòng nhập vào các số hợp lệ. Số b phải là số nguyên dương.");
} else {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }

  console.log(`${a} lũy thừa ${b} là: ${result}`);
}
