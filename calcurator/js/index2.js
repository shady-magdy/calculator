let input = document.getElementById("input")

function display(val) {
    input.value += val

}

function calculate() {
    try {
        input.value = eval(input.value)
    } catch (error) {
        input.value = "error"
    }

}

function cleardisplay() {

    input.value = ""

}
document.addEventListener("keyup", function (e) {
    if (e.key == "1") {
        display(e.key)

    } else if (e.key == "2") {
        display(e.key)
    } else if (e.key == "3") {
        display(e.key)
    } else if (e.key == "4") {
        display(e.key)
    } else if (e.key == "5") {
        display(e.key)
    } else if (e.key == "6") {
        display(e.key)
    } else if (e.key == "7") {
        display(e.key)
    } else if (e.key == "8") {
        display(e.key)
    } else if (e.key == "9") {
        display(e.key)
    } else if (e.key == "0") {
        display(e.key)
    } else if (e.key == "Enter") {
        calculate()
    } else if (e.key == "c") {

    } else if (e.key == "*") {
        display(e.key)
    }else if (e.key == "+"){
        display(e.key)
    }else if (e.key == "-"){
        display(e.key)
    }else if (e.key == "/"){
        display(e.key)
    }else if (e.key == "Backspace"){
        cleardisplay()
    }
    
    



})