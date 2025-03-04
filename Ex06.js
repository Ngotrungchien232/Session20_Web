let number = parseInt(prompt("Nhập một số nguyên:"));

if (isNaN(number) || number < 2) {
  alert(number + " không phải số nguyên tố!");
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  alert(number + (isPrime ? " là" : " không phải") + " số nguyên tố!");
}
