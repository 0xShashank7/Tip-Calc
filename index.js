const btn = document.querySelector(".btn")
const error = document.querySelector(".error")

const tip = document.querySelector(".tip")
const total = document.querySelector(".total")

btn.addEventListener("click",calculateTip) 

    function calculateTip(){
    const bill = document.querySelector(".bill").value
    const rate = document.querySelector(".rate").value

    if(bill === "" || rate===""){
        error.style.display = "block"
        hideError()
    } else if (isNaN(bill)){
        error.innerHTML = "Please enter a number"
        error.style.display= "block"
        hideError()
    } else {
        let tipAmount = Math.floor(bill*rate)
        tip.innerHTML = `Tip Amount: ${tipAmount}`

        let totalAmount = Number(bill) + tipAmount
        total.innerHTML = `Total Amount: ${totalAmount}`
    }
}

function hideError() {
    setTimeout(() => {
      error.style.display = "none"
    }, 3000)
  }