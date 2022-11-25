const buttonTogleModal = document.querySelectorAll("[data-modal__control]")

for (let i = 0; i < buttonTogleModal.length; i++) {
    buttonTogleModal[i].addEventListener("click", function () {
        let valueDataModalControl = buttonTogleModal[i].getAttribute("data-modal__control")
        document.getElementById(valueDataModalControl).classList.toggle("show__modal")
    })
}