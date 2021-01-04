let colorList = ["rgb(38, 70, 83)", "rgb(42, 157, 143)", "rgb(233, 196, 106)", "rgb(244, 162, 97)", "rgb(231, 111, 81)", "rgb(97, 176, 255)"]
let init = () => {
    elements.forEach(item => {
        item.style.setProperty('background', colorList[Math.floor(Math.random() * colorList.length)])
    })
}

let elements = document.querySelectorAll('.mydiv');

elements.forEach(item => {
    item.addEventListener('click', event => {
        let actual = item.style.background
        let random = colorList[Math.floor(Math.random() * colorList.length)]
        console.log(actual + random)
        while (actual == random) {
            random = colorList[Math.floor(Math.random() * colorList.length)]

        }
        item.style.setProperty('background', random)
    })
  })

  init();
