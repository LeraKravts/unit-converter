/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



function convert(){
    const inputValue = document.getElementById("user-number").value
    const userLength = document.getElementById("user-length")
    const userVolume = document.getElementById("user-volume")
    const userMass = document.getElementById("user-mass")

    userLength.textContent = `${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters`
    userVolume.textContent = `${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} liters`
    userMass.textContent = `${inputValue} kilos = ${(inputValue*2.204).toFixed(3)}  pounds | ${inputValue} pounds = ${(inputValue/2.204).toFixed(3)} kilos`
  
}

