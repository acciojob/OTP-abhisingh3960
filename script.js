//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('input', () => {
        if (code.value.length === 1 && index < codes.length - 1) {
            codes[index + 1].focused();
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && code.value === '' && index > 0) {
            codes[index - 1].focus();
        }
    });
});
