const container = document.querySelector(".container")


for (let i = 0; i < 16; i++) {
    const innerContainer = document.createElement("div")
    innerContainer.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-between;")
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div")
        square.setAttribute("style", "background-color: black; min-width: 42px; min-height: 42px;")
        innerContainer.appendChild(square)
    }
    container.appendChild(innerContainer)
}