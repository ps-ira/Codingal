document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('result');

    window.setScreenValue = function (value) {
        inputField.value = value;
    };

    window.clearScreen = function () {
        inputField.value = "";
    };
}
);
