function produceReport(){

    event.preventDefault();

    let data = [];

     data[0] = data["shed_A"] = parseInt(document.getElementById("shed_A").value);
     data[1] = data["shed_B"] = parseInt(document.getElementById("shed_B").value);
     data[2] = data["shed_C"] = parseInt(document.getElementById("shed_C").value);
     data[3] = data["shed_D"] = parseInt(document.getElementById("shed_D").value);

    //  totalProductionOfMilkInLitres
    let sumData = data.shed_A + data.shed_B + data.shed_C + data.shed_D;
    document.getElementById("outputData").innerHTML += "<br>"
    document.getElementById("outputData").innerHTML += "<h2>Total Milk In Litres Per Shed</h2>";
    document.getElementById("outputData").innerHTML += "<p>Your total milk production in shed A is " + data.shed_A + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your total milk production in shed B is " + data.shed_B + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your total milk production in shed C is " + data.shed_C + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your total milk production in shed D is " + data.shed_D + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your total milk production per day is " + sumData + " litres per day</p>";
    dailyIncome = sumData * 45;

    // dailyIncome
    document.getElementById("outputData").innerHTML += "<br>"
    document.getElementById("outputData").innerHTML += "<hr>"
    document.getElementById("outputData").innerHTML += "<h2>Daily Income</h2>";
    document.getElementById("outputData").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";
    document.getElementById("outputData").innerHTML += "<hr>"

    // weeklyIncome
    weeklyIncome = dailyIncome * 7
    document.getElementById("outputData").innerHTML += "<h2>Weekly Income</h2>";
    document.getElementById("outputData").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";
    document.getElementById("outputData").innerHTML += "<hr>"
    document.getElementById("outputData").innerHTML += "<br>"

    // incomeInLeapYearfeb29Days
    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome* 30;
    incomeDecember = dailyIncome * 31;

    // priceKsh45
    document.getElementById("outputData").innerHTML += "<h3>Your Total Income For Each Month </h3>";
    document.getElementById("outputData").innerHTML += "<p> Your total income for January will be Ksh. " + incomeJanuary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for February will be Ksh. " + incomeFebruary + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for March will be Ksh. " + incomeMarch + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for April will be Ksh. " + incomeApril + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for May will be Ksh. " + incomeMay + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for June will be Ksh. " + incomeJune + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for July will be Ksh. " + incomeJuly + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for August will be Ksh. " + incomeAugust + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for September will be Ksh. " + incomeSeptember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for October will be Ksh. " + incomeOctober + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for November will be Ksh. " + incomeNovember + " </p>"
    document.getElementById("outputData").innerHTML += "<p> Your total income for December will be Ksh. " + incomeDecember + " </p>"
    document.getElementById("outputData").innerHTML += "<br>"
    document.getElementById("outputData").innerHTML += "<hr>"

    // incomeInLeapYear366Days
    incomeInLeapYear = dailyIncome * 366;

    document.getElementById("outputData").innerHTML += "<h4>Total Income In A Leap Year</h4>";
    document.getElementById("outputData").innerHTML += "<p>Your total income in a leap year will be Ksh. " + incomeInLeapYear + " </p>";
    document.getElementById("outputData").innerHTML += "<hr>"
    document.getElementById("outputData").innerHTML += "<br>"

    // part B

    // New price is ksh.49.60
    newDailyIncome = sumData * 49.60;

    // incomeInLeapYearFeb29Days
    newIncomeJanuary = newDailyIncome * 31;
    newIncomeFebruary = newDailyIncome * 29;
    newIncomeMarch = newDailyIncome * 31;
    newIncomeApril = newDailyIncome * 30;
    newIncomeMay = newDailyIncome * 31;
    newIncomeJune = newDailyIncome * 30;
    newIncomeJuly = newDailyIncome * 31;
    newIncomeAugust = newDailyIncome * 31;
    newIncomeSeptember = newDailyIncome * 30;
    newIncomeOctober = newDailyIncome * 31;
    newIncomeNovember = newDailyIncome * 30;
    newIncomeDecember = newDailyIncome * 31;
    newIncomeInLeapYear = 366 * 49.60;

    // incomeDifferenceInEachMonth
    incomeJanuaryDifference = newIncomeJanuary - incomeJanuary;
    incomeFebruaryDifference = newIncomeFebruary - incomeFebruary;
    incomeMarchDifference = newIncomeMarch - incomeMarch;
    incomeAprilDifference = newIncomeApril - incomeApril;
    incomeMayDifference = newIncomeMay - incomeMay;
    incomeJuneDifference = newIncomeJune - incomeJune;
    incomeJulyDifference = newIncomeJuly - incomeJuly;
    incomeAugustDifference = newIncomeAugust - incomeAugust;
    incomeSeptemberDifference = newIncomeSeptember - incomeSeptember;
    incomeOctoberDifference = newIncomeOctober - incomeOctober;
    incomeNovemberDifference = newIncomeNovember - incomeNovember;
    incomeDecemberDifference = newIncomeDecember - incomeDecember;

    // incomeDifference
    document.getElementById("outputData").innerHTML += "<h4>Income Per Month For Price Change From Ksh.45 to Ksh.49.60 </h4>";
    document.getElementById("outputData").innerHTML += "<p>January: At price = Ksh. 45, you will earn: Ksh. " + incomeJanuary + ". At price = 49.60, you will earn Ksh. " + Math.ceil(newIncomeJanuary) + ",rounding off the value to the nearest shillings ,you will earn Ksh. " + Math.round(incomeJanuaryDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>February: At price = Ksh. 45, you will earn: Ksh. " + incomeFebruary + ". At price = 49.60, you will earn Ksh. " + Math. ceil(newIncomeFebruary) + ", rounding off the value to the nearest shillings ,you will earn Ksh. " + Math.round(incomeFebruaryDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>March: At price = Ksh. 45, you will earn: Ksh. " + incomeMarch + ". At price = 49.60, you  will earn Ksh. " + Math. ceil(newIncomeMarch) + ", rounding off the value to the nearest shillings ,you will earn Ksh." + Math.round(incomeMarchDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>April: At price = Ksh. 45, you will earn: Ksh. " + incomeApril + ". At price = 49.60, you will earn Ksh. " + Math. ceil(newIncomeApril) + ", rounding off the value to the nearest shillings ,you will earn Ksh. " + Math.round(incomeAprilDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>May: At price = Ksh. 45, you will earn: Ksh. " + incomeMay + ". At price = 49.60, you  will earn Ksh. " + Math. ceil(newIncomeMay) + ",rounding off the value to the nearest shillings ,you will earn Ksh.  " + Math.round(incomeMayDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>June: At price = Ksh. 45, you will earn: Ksh. " + incomeJune + ". At price = 49.60, you will earn Ksh. " + Math.ceil(newIncomeJune) + ", rounding off the value to the nearest shillings ,you will earn Ksh. " + Math.round(incomeJuneDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>July: At price = Ksh. 45, you will earn: Ksh. " + incomeJuly + ". At price = 49.60, you  will earn Ksh. " + Math.ceil(newIncomeJuly) + ", rounding off the value to the nearest shillings ,you will earn Ksh. " + Math.round(incomeJulyDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>August: At price = Ksh. 45, you will earn: Ksh. " + incomeAugust + ". At price = 49.60, you  will earn Ksh. " + Math.ceil(newIncomeAugust) + ", rounding off the value to the nearest shillings ,you will earn Ksh." + Math.round(incomeAugustDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>September: At price = Ksh. 45, you will earn: Ksh. " + incomeSeptember + ". At price = 49.60, you  will earn Ksh. " + Math.ceil(newIncomeSeptember) + ", rounding off the value to the nearest shillings ,you will earn Ksh." + Math.round(incomeSeptemberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>October: At price = Ksh. 45, you will earn: Ksh. " + incomeOctober + ". At price = 49.60, you will earn Ksh. " + Math.ceil(newIncomeOctober) + ", rounding off the value to the nearest shillings ,you will earn Ksh. " + Math.round(incomeOctoberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>November: At price = Ksh. 45, you will earn: Ksh. " + incomeNovember + ". At price = 49.60, you will earn Ksh. " + Math. ceil(newIncomeNovember) + ", rounding off the value to the nearest shillings ,you will earn Ksh. " + Math.round(incomeNovemberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "\n"
    document.getElementById("outputData").innerHTML += "<p>December: At price = Ksh. 45, you  will earn: Ksh. " + incomeDecember + ". At price = 49.60, you will earn Ksh. " + Math. ceil(newIncomeDecember) + ",rounding off the value to the nearest shillings ,you will earn Ksh.  " + Math.round(incomeDecemberDifference) + ".</p>";
    document.getElementById("outputData").innerHTML += "<br>"
}

// reset function

function resetPage(){

    document.getElementById("outputData").remove("innerHTML");
    location.reload();

}