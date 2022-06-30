const addToBasket = (target) => {
    /*  const button = document.getElementById("button-" + target.id.split("-")[1]);
      if (button.className !== "item-button-active") {
          Можно попробовать реализовать фильтрацию через display:none, чтобы не мучиться с воссозданием зелёных кнопок
          */

    const item = document.getElementsByClassName("order-items-block")[0];

    const orderItems = document.createElement("div");
    orderItems.className = "order-items";
    orderItems.id = "order-" + (item.childElementCount + 1)

    const orderTitle = document.createElement("p");
    orderTitle.className = "order-title";

    const orderAmount = document.createElement("p");
    orderAmount.className = "order-amount";

    const orderPrice = document.createElement("p");
    orderPrice.className = "order-price";

    const deleteIcon = document.createElement("img");
    deleteIcon.className = "deleteIcon";
    deleteIcon.id = "delete-" + (item.childElementCount + 1);
    deleteIcon.src = "i/trash.svg";

    const sum = document.getElementById("sum");

    const itemCounter = document.getElementById("counter-" + target.id.split("-")[1]);


    orderTitle.textContent = document.getElementById("item-name-" + target.id.split("-")[1]).textContent
    orderAmount.textContent = itemCounter.value;

    if (target.id.split("-")[1] === "modal") {
        orderPrice.textContent = document.getElementById("price-" + target.id.split("-")[1])
            .textContent + " руб.";
    } else {
        orderPrice.textContent = document.getElementById("price-" + target.id.split("-")[1])
            .textContent * orderAmount.textContent + " руб.";
    }

    orderItems.appendChild(orderTitle);
    orderItems.appendChild(orderAmount);
    orderItems.appendChild(orderPrice);
    orderItems.appendChild(deleteIcon);

    item.appendChild(orderItems);

    sum.textContent -= -orderPrice.textContent.split(' ')[0];

    deleteIcon.onclick = () => {
        document.getElementById("order-" + orderItems.id.split("-")[1]).remove();
        document.getElementById("sum").textContent -= orderPrice.textContent.split(" ")[0];

        for (let i = 0; i < item.childElementCount; i++) {
            document.getElementsByClassName("order-items")[i].id = "order-" + (i + 1);
            console.log(i);
        }
    }
    /*   button.className = "item-button-active";
       button.textContent = "В КОРЗИНЕ";

       const plusIcon = document.getElementById("counter-" + target.id.split("-")[1]).value -= -1;

       itemCounter.onchange = () => { //вместо этого прописать нажатие на иконки plus и minus

       }

   }*/
}

