// Kiểm tra rỗng
const kiemTraRong = (value, selectorError, name) => {
  if (value.trim() === "") {
    document.getElementById(
      selectorError
    ).innerHTML = `${name} không được để trống! `;
    return false;
  }
  document.getElementById(selectorError).innerHTML = ``;
  return true;
};

// Kiểm tra Email
const kiemTraEmail = (value, selectorError, name) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(value)) {
    document.getElementById(selectorError).innerHTML = ``;
    return true;
  }
  document.getElementById(selectorError).innerHTML = `${name} không hợp lệ!`;
  return false;
};
// Kiểm tra độ dài password
const kiemTraDoDaiPass = (value, selectorError, name, min, max) => {
  if (value.length < min || value.length > max) {
    document.getElementById(
      selectorError
    ).innerHTML = `${name} từ ${min} đến ${max}`;
    return false;
  }
  document.getElementById(selectorError).innerHTML = ``;
  return true;
};

// Kiểm tra password confirm
const kiemTraPasswordConfirm = (value, valueConfirm, selectorError, name) => {
  if (value === valueConfirm) {
    document.getElementById(selectorError).innerHTML = ``;
    return true;
  }
  document.getElementById(
    selectorError
  ).innerHTML = `${name} không trùng với password`;
  return false;
};

// Kiểm tra chữ
const kiemTraTatCaChu = (value, selectorError, name) => {
  const regex = /^[A-Z a-z]+$/;
  if (regex.test(value)) {
    document.getElementById(selectorError).innerHTML = ``;
    return true;
  }
  document.getElementById(
    selectorError
  ).innerHTML = `${name} tất cả phải là chữ`;
  return false;
};

// Kiểm tra số
const kiemTraTatCaSo = (value, selectorError, name) => {
  const regex = /^\d+$/;
  if (regex.test(value)) {
    document.getElementById(selectorError).innerHTML = ``;
    return true;
  }
  document.getElementById(
    selectorError
  ).innerHTML = `${name} tất cả phải là số`;
  return false;
};
