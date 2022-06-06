const plusClick = (target) => {
    document.getElementById("counter-" + target.id.split("-")[1]).value -= -1;
}

const minusClick = (target) => {
    const value = document.getElementById("counter-" + target.id.split("-")[1]).value;
    if (value >= 2) {
        document.getElementById("counter-" + target.id.split("-")[1]).value -= 1;
    }
}