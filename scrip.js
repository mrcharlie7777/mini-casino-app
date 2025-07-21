let balance = 100;
const emojis = ["🍒", "🍋", "🍇", "🍉", "⭐"];

function spin() {
  const slot = document.querySelectorAll("#slot span");
  let result = [];
  for (let i = 0; i < slot.length; i++) {
    let emoji = emojis[Math.floor(Math.random() * emojis.length)];
    slot[i].textContent = emoji;
    result.push(emoji);
  }

  if (result[0] === result[1] && result[1] === result[2]) {
    balance += 50;
    alert("🎉 You won 50 coins!");
  } else {
    balance -= 10;
    alert("Try again!");
  }

  document.getElementById("balance").textContent = `Balance: ${balance}`;
}
