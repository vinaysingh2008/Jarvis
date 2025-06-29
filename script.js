document.getElementById("chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const message = input.value;
  appendMessage("You", message, "user");
  input.value = "";

  const res = await fetch("/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: message }),
  });

  const data = await res.json();
  appendMessage("Jarvis", data.reply, "bot");
});

function appendMessage(sender, text, cls) {
  const msg = document.createElement("div");
  msg.className = cls;
  msg.textContent = `${sender}: ${text}`;
  document.getElementById("chat-box").appendChild(msg);
}
