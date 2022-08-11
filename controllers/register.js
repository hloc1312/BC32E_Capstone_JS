// getElement
const getElement = (id) => {
  return document.getElementById(id);
};

const inputs = document.querySelectorAll(
  ".form-group input[type='text'], .form-group input[type='password']"
);

const radioButtons = document.querySelectorAll(
  ".form-group input[name='gender']"
);
console.log({ radioButtons });

// lấy value từ form input
const getValueForm = () => {
  const register = new Register();

  inputs.forEach((input) => {
    const { name, value } = input;

    register[name] = value;
  });

  radioButtons.forEach((val) => {
    const { name, value } = val;
    if (val.checked) {
      if (value === "male") {
        register[name] = true;
      } else {
        register[name] = false;
      }
    }
  });

  return register;
};

getElement("btnSubmit").onclick = (e) => {
  e.preventDefault();
  const register = getValueForm();
  const passwordConfirm = getElement("passwordConfirm").value;
  let valid = true;

  valid &=
    kiemTraRong(register.email, "error_email", "Email") &
    kiemTraRong(register.password, "error_password", "Password") &
    kiemTraRong(passwordConfirm, "error_password_confirm", "Password Confirm") &
    kiemTraRong(register.name, "error_name", "Name") &
    kiemTraRong(register.phone, "error_phone", "Phone");

  if (!valid) {
    return;
  }
  valid &= kiemTraEmail(register.email, "error_email", "Email");
  if (!valid) {
    return;
  }

  valid &= kiemTraDoDaiPass(
    register.password,
    "error_password",
    "Password",
    6,
    8
  );
  if (!valid) {
    return;
  }

  valid &= kiemTraPasswordConfirm(
    register.password,
    passwordConfirm,
    "error_password_confirm",
    "Password Confirm"
  );
  if (!valid) {
    return;
  }

  valid &= kiemTraTatCaChu(register.name, "error_name", "Name");
  if (!valid) {
    return;
  }

  valid &= kiemTraTatCaSo(register.phone, "error_phone", "Phone");
  if (!valid) {
    return;
  }

  const promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: register,
  });

  promise.then((result) => {
    console.log(result);
    const textStatus = getElement("status");
    textStatus.innerHTML = result.data.message;
    textStatus.style.color = "green";
    textStatus.style.fontWeight = "bold";
  });

  promise.catch((err) => {
    console.log(err);
    const textStatus = getElement("status");
    textStatus.innerHTML = "Đăng ký tài khoản thất bại!";
    textStatus.style.color = "red";
    textStatus.style.fontWeight = "bold";
  });
};
