document.addEventListener("DOMContentLoaded", () => {
    const fields = document.querySelectorAll('#form :is(input, textarea)')
    const labels = document.querySelectorAll('#form label')
    fields.forEach((field, index) => {
        field.onchange = () => {
            if(field.value !== ''){
                labels[index].classList.add('active')
            }else {
                labels[index].classList.remove('active')
            }
        }
    })
})