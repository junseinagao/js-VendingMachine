const buttonTea = document.getElementById("button-tea");
const buttonCoke = document.getElementById("button-coke");

const displayLotTea = document.getElementById("lot-tea");
const displayLotCoke = document.getElementById("lot-coke");

const displayPriceTea = document.getElementById("price-tea");
const displayPriceCoke = document.getElementById("price-coke");
const input = document.getElementById("input-money");

const displayOutput = document.getElementById("out-item");

let items = {
  Tea: { Name: "お〜いお茶", Lot: 10, Price: 100 },
  Coke: { Name: "Coka Coke", Lot: 10, Price: 100 },
};

/**
 *
 * @param {object} item
 */
const setLot = (item) => {
  switch (item) {
    case items.Coke:
      displayLotTea.textContent = "在庫" + item.Lot + "個";
      break;

    case items.Tea:
      displayLotCoke.textContent = "在庫:" + item.Lot + "個";
      break;
  }
};

const setPrice = (item) => {
  switch (item) {
    case items.Coke:
      displayPriceTea.textContent = "値段:" + item.Price + "円";
      break;

    case items.Tea:
      displayPriceCoke.textContent = "値段:" + item.Price + "円";
      break;
  }
};
//displayLotCoke.textContent = "在庫:" + items.Coke.Lot + "個";
//displayPriceCoke.textContent = "値段:" + items.Coke.Price + "円";
//displayPriceTea.textContent = "値段" + items.Tea.Price + "円";

// 購入
const buy = (inputValue, item) => {
  const isInteger = checkMoney(inputValue); //入金額をチェックreturn boolean

  if (isInteger) {
    //整数ならTrue

    // 在庫があるかCHECK return boolean
    if (checkLots(item)) {
      //在庫あり
      minusItem(item); //在庫を減らす

      // INPUTから値段分を引く
      diffInput(item);

      // OUT ITEMに買った商品を表示
      displayItem(item);
    } else {
      //在庫が無い
    }
  } else {
    //返金処理
    alert("整数を入力しろ💢");
  }
};

const checkMoney = (value) => {
  //返り値:boolean
  return Number.isInteger(parseInt(value));
};

/**
 * 在庫を減らす。
 * @param {object} item
 */
const minusItem = (item) => {
  item.Lot--;
  setLot(item);
};

/**
 * 在庫がなかったらFalse
 * @param {object} item
 * @returns {boolean}
 */
const checkLots = (item) => {
  if (item.Lot < 1) {
    return false;
  }
  return true;
};

/**
 *
 * @param {object} item
 */
const diffInput = (item) => {
  if (input.value - item.Price < 0) {
    alert("金が足りねえ💢");
    return;
  }
  input.value -= item.Price;
};

/**
 * @param {object} item
 */
const displayItem = (item) => {
  displayOutput.textContent = item.Name;
};

buttonTea.onclick = () => {
  buy(input.value, items.Tea);
};

buttonCoke.onclick = () => {
  buy(input.value, items.Coke);
};

setLot(items.Tea);
setLot(items.Coke);
setPrice(items.Tea);
setPrice(items.Coke);
