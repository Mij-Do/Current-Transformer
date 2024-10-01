let usaCurrent = document.getElementById("first");
let result = document.getElementById("second");
let transform = document.getElementById("btn");

transform.addEventListener("click" , function() {
    let usaCurrentValue = usaCurrent.value;
    if (usaCurrentValue === " " || isNaN(parseInt(usaCurrentValue))) {
        console.log(false);
    } else if (!isNaN(parseInt(usaCurrentValue))) {
        window.sessionStorage.setItem("usaCurrent" , usaCurrentValue);
    }
    let getValue = window.sessionStorage.getItem("usaCurrent");
    result.value =  getValue * 50;
});




