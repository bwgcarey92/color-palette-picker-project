const getColorsBtn = document.getElementById('get-colors-btn')
const colorPicker = document.getElementById('color-picker')
const colorFormatSelect = document.getElementById('color-format-select')
const color1 = document.getElementById('color-block1')
const color2 = document.getElementById('color-block2')
const color3 = document.getElementById('color-block3')
const color4 = document.getElementById('color-block4')
const color5 = document.getElementById('color-block5')
const hexCode1 = document.getElementById('hex-code1')
const hexCode2 = document.getElementById('hex-code2')
const hexCode3 = document.getElementById('hex-code3')
const hexCode4 = document.getElementById('hex-code4')
const hexCode5 = document.getElementById('hex-code5')




getColorsBtn.addEventListener("click", function(e) {
    e.preventDefault()
    const hexColor = colorPicker.value.substring(1)
    const colorFormat = colorFormatSelect.value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorFormat}&count=5`)
        .then(res => res.json())
        .then(data => {
            const colorData = data.colors
            console.log(colorData[0].hex)
            color1.style.backgroundColor = colorData[0].hex.value
            hexCode1.textContent = colorData[0].hex.value
            color2.style.backgroundColor = colorData[1].hex.value
            hexCode2.textContent = colorData[1].hex.value
            color3.style.backgroundColor = colorData[2].hex.value
            hexCode3.textContent = colorData[2].hex.value
            color4.style.backgroundColor = colorData[3].hex.value
            hexCode4.textContent = colorData[3].hex.value
            color5.style.backgroundColor = colorData[4].hex.value
            hexCode5.textContent = colorData[4].hex.value
        })
    
})