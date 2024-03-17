document.addEventListener("DOMContentLoaded", () => {


    const words = document.querySelectorAll("#home .hero .content .word-content")
    words.forEach(word => {
        const sections = word.querySelectorAll('section')
        sections.forEach(section => {
            const letters = section.querySelectorAll('div')
            letters.forEach((ltr, index) => {
                const transition = (index + 1) * Math.pow(10, -1)
                ltr.style.transition = `${transition}s transform, .3s opacity`
            })
        })
        word.onmouseover = () => {
            words.forEach(w => w.style.opacity = .4)
            word.style.opacity = 1
        }
        word.onmouseleave = () => {
            words.forEach(w => w.style.opacity = 1)
        }
    })

    const about = document.querySelector("#home .about")
    window.addEventListener('scroll', () => {
        const arrow = document.querySelector("#home .about .container .image-side .icon")
        const image = document.querySelector("#home .about .image img")

        const y = window.scrollY
        const aboutY = y - 800
        if (aboutY >= 0){
            const deg = aboutY/100
            
            if(aboutY/5 <= 90){
                arrow.style.transform = `rotate(-${aboutY/5}deg)`
            }
            
            image.style.transform = `translateY(${(deg)}rem) scale(1.7)`
        }
    })

    // const achivements = document.querySelector("#home .achivements")
    // const servicesBtn = document.querySelector("#home .servicesBtn")
    // const achivementsRect = achivements.getBoundingClientRect()
    // window.addEventListener("mousemove", (e) => {
    //     const boundBox = servicesBtn.getBoundingClientRect()
    //     const halfWidth = boundBox.width / 2
    //     const strength = 40
    //     const x = e.pageX - halfWidth
    //     const y = e.pageY - 1600 + (halfWidth/1.5)

    //     const newX = ((e.clientX - boundBox.left)/servicesBtn.offsetWidth) - 0.5
    //     const newY = ((e.clientY - boundBox.top)/servicesBtn.offsetWidth) - 0.5
    //     servicesBtn.style.left = x + 'px'
    //     servicesBtn.style.top = y + 'px'
    // })
});
