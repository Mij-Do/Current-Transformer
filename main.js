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
        result.value =  getValue * 50;
    } else if (selectValue === "EURO") {
        result.value =  getValue * 52;
    } else if (selectValue === "CNY") {
        result.value =  getValue * 6;
    }
});



