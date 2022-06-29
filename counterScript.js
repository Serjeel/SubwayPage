const plusClick = (target) => {
    const totalPrice = document.getElementById("total-price");
    const counter = document.getElementById("counter-" + target.id.split("-")[1]);
    console.log(totalPrice);
    if (totalPrice) {
        totalPrice.textContent /= counter.value;
        counter.value -= -1;
        totalPrice.textContent *= counter.value;
    } else {
        counter.value -= -1;
    }
}

const minusClick = (target) => {
    const totalPrice = document.getElementById("total-price");
    const counter = document.getElementById("counter-" + target.id.split("-")[1]);
    const value = document.getElementById("counter-" + target.id.split("-")[1]).value;
    if (value >= 2) {
        if (totalPrice) {
            totalPrice.textContent /= counter.value;
            counter.value -= 1;
            totalPrice.textContent *= counter.value;
        } else {
            counter.value -= 1;
        }
    }
}