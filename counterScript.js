const plusClick = (target) => {
    const totalPrice = document.getElementById("price-modal");
    const counter = document.getElementById("counter-" + target.id.split("-")[1]);
    if (totalPrice) {
        totalPrice.textContent /= counter.value;
        //counters[target.id.split("-")[1] - 1] -= -1; Меняет каунтеры на всех вкладках. Нужен другой id
        counter.value -= -1;
        totalPrice.textContent *= counter.value;
    } else {
        counter.value -= -1;
    }
}

const minusClick = (target) => {
    const totalPrice = document.getElementById("price-modal");
    const counter = document.getElementById("counter-" + target.id.split("-")[1]);
    const value = document.getElementById("counter-" + target.id.split("-")[1]).value;
    if (value >= 2) {
        if (totalPrice) {
            totalPrice.textContent /= counter.value;
            //counters[target.id.split("-")[1] - 1] -= 1;
            counter.value -= 1;
            totalPrice.textContent *= counter.value;
        } else {
            counter.value -= 1;
        }
    }
}