// calculate tips and total

billCalculator = billArray => {
    const tipArray = [];
    const totalBill = [];
    let tip = 0;
    billArray.forEach(bill => {
        if (bill <= 50) {
            tip = bill * 0.2
            tipArray.push(tip);
        }
        if (bill > 50 && bill <= 100) {
            tip = bill * 0.15
            tipArray.push(tip);
        }
        if (bill > 100) {
            tip = bill * 0.1
            tipArray.push(tip);
        }
    })
    for (let i = 0; i < billArray.length; i++) {
        totalBill[i] = tipArray[i] + billArray[i];
    }
    console.log(tipArray);
    console.log(totalBill);

}

const bills = [25, 55, 255];

billCalculator(bills)