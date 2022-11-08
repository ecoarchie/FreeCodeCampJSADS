function checkCashRegister(price, cash, cid) {
  const currUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  const totalInDrawer = cid
    .reduce((sum, cur) => sum + parseFloat(cur[1]), 0)
    .toFixed(2);
  const cidObj = Object.fromEntries(cid);
  const changeAmount = cash - price;

  if (changeAmount > totalInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  const possibleChangeCur = [];
  for (let [key, value] of Object.entries(currUnit).sort(
    (a, b) => a[1] - b[1]
  )) {
    if (value < changeAmount && cidObj[key] !== 0) {
      possibleChangeCur.unshift([key, value]);
    } else {
      continue;
    }
  }

  let tempChangeAmount = changeAmount;

  const result = possibleChangeCur.map(([unit, amount]) => {
    let unitsAmount =
      Math.floor(tempChangeAmount / amount) < cidObj[unit] / currUnit[unit]
        ? Math.floor(tempChangeAmount / amount) * currUnit[unit]
        : cidObj[unit];

    tempChangeAmount = Number((tempChangeAmount - unitsAmount).toFixed(2));
    return [unit, unitsAmount];
  });
  const filteredResult = result.filter(
    ([_unit, unitsAmount]) => unitsAmount > 0
  );

  if (filteredResult.reduce((sum, cur) => sum + cur[1], 0) < changeAmount) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (
    result.reduce((sum, cur) => sum + cur[1], 0) - totalInDrawer ===
    0
  ) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change: filteredResult };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
