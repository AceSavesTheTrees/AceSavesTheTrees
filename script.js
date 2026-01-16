const pledgeBtn = document.getElementById("pledgeBtn");
const message = document.getElementById("message");

pledgeBtn.addEventListener("click", () => {
    message.textContent = "🌱 Thank you for pledging to protect the trees!";
});
