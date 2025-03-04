let n = prompt("Mời bạn nhập một số N từ bàn phím: ");
n = parseInt(n);

if (n == "" || n <= 0 || n - parseInt(n) != 0) {
  console.log("Số N phải là số nguyên dương và không chứa ký tự.");
} else {
  console.log("Các số chia hết cho 5 từ 1 đến " + n + " là:");
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}
