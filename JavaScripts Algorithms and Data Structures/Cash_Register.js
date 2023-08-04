function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let change = cash - price; // Calculate the change due
  let changeArray = []; // Store the change to be given

  let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0); // Calculate the total cash-in-drawer

  if (totalCID < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }; // Insufficient funds in the cash drawer
  } else if (totalCID === change) {
    return { status: "CLOSED", change: cid }; // Cash drawer has exact change, return all the cash in drawer
  } else {
    cid = cid.reverse(); // Reverse the cash-in-drawer array for iteration

    for (let elem of cid) {
      const unit = elem[0];
      const unitValue = currencyValues[unit];
      let unitAmount = 0;

      // Keep deducting the current currency unit until it's not possible anymore or there's no more of it in the drawer
      while (change >= unitValue && elem[1] > 0) {
        change -= unitValue;
        elem[1] -= unitValue;
        unitAmount += unitValue;
        change = Math.round(change * 100) / 100; // Round change to 2 decimal places to avoid floating-point precision issues
      }

      if (unitAmount > 0) {
        changeArray.push([unit, unitAmount]); // Add the currency unit and the amount given in change
      }
    }

    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }; // Unable to give exact change
    }

    return { status: "OPEN", change: changeArray }; // Return the change due
  }


}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
