import fs from "node:fs/promises";
import inquirer from "inquirer";
import { bankAnswer } from "./Bank.js";

const getUsers = async () => {
  try {
    const userRawData = await fs.readFile("users.json", "utf-8");
    const parsed = JSON.parse(userRawData);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const login = async () => {
  const { username, password } = await inquirer.prompt([
    { type: "input", name: "username", message: "Enter your username" },
    { type: "password", name: "password", message: "Enter your password" },
  ]);

  const users = await getUsers();
  const user = users.find(
    (value) => value.username === username && value.password === password
  );

  if (!user) {
    console.log("❌ Username эсвэл password буруу байна!");
    return login(); // Retry login instead of calling auth()
  }

  console.log("✅ Амжилттай нэвтэрлээ!");
  return bankAnswer(users, user);
};

const signup = async () => {
  const { username, password, passwordVerify } = await inquirer.prompt([
    { type: "input", name: "username", message: "Enter your username" },
    { type: "password", name: "password", message: "Enter your password" },
    {
      type: "password",
      name: "passwordVerify",
      message: "Enter your password again",
    },
  ]);

  if (password !== passwordVerify) {
    console.log("❌ Password баталгаажуулалт амжилтгүй боллоо!");
    return signup();
  }

  const users = await getUsers();
  const existingUser = users.find((value) => value.username === username);

  if (existingUser) {
    console.log("❌ Энэ username аль хэдийн бүртгэгдсэн байна!");
    return signup();
  }

  users.push({ username, password, balance: 0 });
  await fs.writeFile("users.json", JSON.stringify(users, null, 2), "utf-8");

  console.log("✅ Амжилттай бүртгүүллээ!");
  return login();
};

const auth = async () => {
  const { authOption } = await inquirer.prompt([
    {
      type: "list",
      name: "authOption",
      message: "Login or Signup?",
      choices: ["Login", "Signup"],
    },
  ]);

  if (authOption === "Login") {
    return login();
  } else {
    return signup();
  }
};

auth();
