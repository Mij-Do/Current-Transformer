let Current = document.getElementById("first");
let result = document.getElementById("second");
let select = document.getElementById("select");
let transform = document.getElementById("btn");

transform.addEventListener("click" , function() {
    let CurrentValue = Current.value;
    let selectValue = select.value;

    if (CurrentValue === " " || isNaN(parseInt(CurrentValue))) {
        console.log(false);
    } else if (!isNaN(parseInt(CurrentValue))) {
        window.sessionStorage.setItem("Current" , CurrentValue);
    }
    let getValue = window.sessionStorage.getItem("Current");

    
    // select the current
    if (selectValue === "USA") {
        result.value =  (getValue * 48.60).toFixed(2);
    } else if (selectValue === "EURO") {
        result.value =  (getValue * 53.21).toFixed(2);
    } else if (selectValue === "CNY") {
        result.value =  (getValue * 6.68).toFixed(2);
    } else if (selectValue === "KSA") {
        result.value = (getValue * 12.94).toFixed(2);
    } else if (selectValue === "UAE") {
        result.value = (getValue * 13.23).toFixed(2);
    }
});



