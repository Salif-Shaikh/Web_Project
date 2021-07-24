function getValue(data) {
    return data && data.value && parseInt(data.value);
}

function getid() {
    let cell1 = document.getElementById("01");
    let cell2 = document.getElementById("02");
    let cell3 = document.getElementById("03");
    let cell4 = document.getElementById("04");
    let cell5 = document.getElementById("05");
    let cell6 = document.getElementById("06");
    let cell7 = document.getElementById("07");
    let cell8 = document.getElementById("08");
    let cell9 = document.getElementById("09");
    let cell10 = document.getElementById("10");
    let cell11 = document.getElementById("11");
    let cell12 = document.getElementById("12");

    const total = getValue(cell1) + getValue(cell2) + getValue(cell3) + getValue(cell4) + getValue(cell5) + getValue(cell6) + getValue(cell7) + getValue(cell8) + getValue(cell9) + getValue(cell10) + getValue(cell11) + getValue(cell12);
    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML = (total / 400 * 100);
    document.getElementById("remark").innerHTML = Remark(total);
};

function Remark(tot) {
    if (tot>400) {
        document.getElementById("remark").style.color = "black"
        return "INVALID!";
        
    }


    if (tot >= 300) {
        document.getElementById("remark").style.color = "green"
        return "EXCELENT!";
    } else if (tot <= 300 && tot >= 125) {
        document.getElementById("remark").style.color = "yellow"
        return "GOOD!";
    } else if (tot < 125) {
        document.getElementById("remark").style.color = "red"
        return "BAD!";
    } else {
        document.getElementById("remark").style.color = "black"
        return "Invalid"
    }
}



