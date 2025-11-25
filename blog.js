const addBtn = document.getElementById("addBtn");

const blogs = [];

const addBtnFunc = async () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const name = username.value;
  const pass = password.value;
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

addBtn.addEventListener("click", addBtnFunc);
