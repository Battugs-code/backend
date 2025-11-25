import inquirer from "inquirer";
import fs from "node:fs/promises";

export const bankAnswer = async (users, user) => {
  while (true) {
    const { bankOption } = await inquirer.prompt([
      {
        type: "list",
        name: "bankOption",
        message: "Select an option",
        choices: [
          { name: "Deposit", value: "deposit" },
          { name: "Withdraw", value: "withdraw" },
          { name: "History all", value: "history" },
          { name: "History deposit", value: "history-deposit" },
          { name: "History withdraw", value: "history-withdraw" },
          { name: "Check balance", value: "check-balance" },
          { name: "Exit", value: "exit" },
        ],
      },
    ]);

    switch (bankOption) {
      case "deposit":
        await deposit(users, user);
        break;
      case "withdraw":
        await withdraw(users, user);
        break;
      case "history":
        await allHistory(user);
        break;
      case "history-deposit":
        await depositHistory(user);
        break;
      case "history-withdraw":
        await withdrawHistory(user);
        break;
      case "check-balance":
        await checkBalance(user);
        break;
      case "exit":
        process.exit();
    }
  }
};

const updateUser = async (users, user, amount, type) => {
  await fs.writeFile("users.json", JSON.stringify(users, null, 2), "utf-8");

  let history = {};
  try {
    const historyRawData = await fs.readFile("history.json", "utf-8");
    history = JSON.parse(historyRawData);
  } catch {
    history = {};
  }

  const userHistories = history[user.username] || [];

  userHistories.push({
    type,
    amount,
    balanceBefore: user.balance - amount,
    balanceAfter: user.balance,
  });

  history[user.username] = userHistories;

  await fs.writeFile("history.json", JSON.stringify(history, null, 2), "utf-8");

  console.log("✅ Амжилттай хийгдлээ!");
};

const deposit = async (users, user) => {
  const { amount } = await inquirer.prompt([
    { type: "number", name: "amount", message: "Хэдэн төгрөг оруулах вэ?" },
  ]);

  user.balance += amount;
  await updateUser(users, user, amount, "deposit");
};

const withdraw = async (users, user) => {
  const { amount } = await inquirer.prompt([
    { type: "number", name: "amount", message: "Хэдэн төгрөг авах вэ?" },
  ]);

  if (amount > user.balance) {
    console.log("❌ Таны дансны үлдэгдэл хүрэлцэхгүй байна!");
    return;
  }

  user.balance -= amount;
  await updateUser(users, user, amount, "withdraw");
};

const checkBalance = async (user) => {
  console.log(`💰 Таны үлдэгдэл: ${user.balance}₮`);
};

const allHistory = async (user) => {
  let history = {};
  try {
    const data = await fs.readFile("history.json", "utf-8");
    history = JSON.parse(data);
  } catch {}
  console.log(history[user.username] || []);
};

const withdrawHistory = async (user) => {
  let history = {};
  try {
    const data = await fs.readFile("history.json", "utf-8");
    history = JSON.parse(data);
  } catch {}
  const withdraws = (history[user.username] || []).filter(
    (h) => h.type === "withdraw"
  );
  console.log(withdraws);
};

const depositHistory = async (user) => {
  let history = {};
  try {
    const data = await fs.readFile("history.json", "utf-8");
    history = JSON.parse(data);
  } catch {}
  const deposits = (history[user.username] || []).filter(
    (h) => h.type === "deposit"
  );
  console.log(deposits);
};
