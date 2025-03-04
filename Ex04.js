let inputString = prompt("Nhập chuỗi:");
let searchChar = prompt("Nhập ký tự cần tìm:");

if (!inputString || !searchChar || searchChar.length !== 1) {
  alert("Vui lòng nhập chuỗi và một ký tự hợp lệ!");
} else {
  let result = inputString.includes(searchChar)
    ? `Ký tự '${searchChar}' được tìm thấy!`
    : `Ký tự '${searchChar}' không tồn tại.`;
  alert(result);
}
