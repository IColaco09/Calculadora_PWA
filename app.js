const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let current = "";

buttons.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.value) {
    current += btn.dataset.value;
    display.value = current;
  }

  if (btn.dataset.action === "clear") {
    current = "";
    display.value = "";
  }

  if (btn.dataset.action === "backspace") {
  display.value = display.value.slice(0, -1);
  }

  if (btn.dataset.action === "equals") {
    try {
      current = eval(current).toString();
      display.value = current;
    } catch {
      display.value = "Erro";
      current = "";
    }
  }
});

//Registrar SW(Service Worker)
if('serviceWorker' in navigator){
    navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no SW:", err));
}