/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



function convert(){
    let inputValue = document.getElementById("user-number")
    const userLength = document.getElementById("user-length")
    const userVolume = document.getElementById("user-volume")
    const userMass = document.getElementById("user-mass")
   



    userLength.textContent = `${inputValue.value} meters = ${(inputValue.value*3.281).toFixed(3)} feet | ${inputValue.value} feet = ${(inputValue.value/3.281).toFixed(3)} meters`
    userVolume.textContent = `${inputValue.value} liters = ${(inputValue.value*0.264).toFixed(3)} gallons | ${inputValue.value} gallons = ${(inputValue.value/0.264).toFixed(3)} liters`
    userMass.textContent = `${inputValue.value} kilos = ${(inputValue.value*2.204).toFixed(3)}  pounds | ${inputValue.value} pounds = ${(inputValue.value/2.204).toFixed(3)} kilos`
    inputValue.value = ""}

  


