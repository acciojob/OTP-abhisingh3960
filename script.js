const codes = document.querySelectorAll(".code");
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9") {
      event.preventDefault();
      codes[idx].value = event.key;
      setTimeout(() => {
        codes[idx + 1] && codes[idx + 1].focus();
      }, 10);
    } else if (event.key === "Backspace") {
      event.preventDefault();
      codes[idx].value = "";
      setTimeout(() => {
        if (codes[idx - 1]) {
          codes[idx - 1].focus();
          codes[idx - 1].value = "";
        }
      }, 10);
    }
  });
});