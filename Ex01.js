let n = prompt("Mời bạn nhập một số N từ bàn phím: ");
let tong = 0;

if (n == "" || n <= 0 || n - parseInt(n) != 0) {
  console.log("Số N phải là số nguyên dương và không chứa ký tự.");
} else {
  for (let i = 1; i <= n; i++) {
    tong += i;
  }
  console.log("Tổng từ 1 đến " + n + " là: " + tong);
}
console.log("tong tu 1 den n" + n + "là: " + tong);
