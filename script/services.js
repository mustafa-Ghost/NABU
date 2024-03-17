window.addEventListener("DOMContentLoaded", () => {
    const heroImages = document.querySelectorAll('#services .hero .images img')
    const methodsContainer = document.querySelector('#services .methods .content')
    const methodsContainerY = methodsContainer.offsetTop
    const servicesImage = document.querySelector("#services .fields img")
    const fields = document.querySelector("#services .fields").offsetTop
    window.addEventListener("scroll", () => {
        const y = window.scrollY
        const transY = y/200
        heroImages.forEach(img => {
            img.style.margin = `${transY}rem`
        })
        servicesImage.style.transform = `translateY(-${((y - fields)/200) * 4}rem) scale(1.7)`
        // console.log(fields, document.querySelector("#services .fields").offsetTop)
        const cubeAnimation = entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const boxY = y - methodsContainerY
                    if(boxY >= 0){
                        const brightness = boxY/80 * 10
                        const rotationDegree = boxY/4.505832248263889
                        if(brightness <= 100){
                            const faces = methodsContainer.querySelectorAll('.face')
                            faces.forEach(face => {
                                face.style.filter = `brightness(${100 - brightness}%)`
                            })
                        }
                        const cube = methodsContainer.querySelector('.cube')
                        cube.style.transform = `rotateY(${rotationDegree}deg)`
                        if (boxY >= 100){
                            swiper.slideTo(1)
                        }
                        if(boxY >= 350){
                            swiper.slideTo(2)
                        }
                        if(boxY >= 550){
                            swiper.slideTo(3)
                        }
                        if (boxY < 100) {
                            swiper.slideTo(0)
                        }
                    }
                }
            })
        }
        const options = {
            rootMargin:"0px",
            root:null,
            threshold:1
        }
        const observer = new IntersectionObserver(cubeAnimation, options)
        observer.observe(methodsContainer)


        const redTeamBenefits = document.querySelector("#services .red-team-benefits .container .content ul")
        const redTeamBenefitsY = document.querySelector("#services .red-team-benefits").offsetTop
        const offset = y - redTeamBenefitsY
        function changeActiveBenefit(index){
            const bnfs = document.querySelectorAll("#services .red-team-benefits .container .content ul li")
            bnfs.forEach(b => b.classList.remove('active'))
            bnfs[index].classList.add('active')
        }
        if(offset >= 0){
            const offsetY = offset/7.56500244140625
            if(offsetY <= 80){
                const redTeamTransformY = 80 - offsetY 
                redTeamBenefits.style.transform = `translateY(${redTeamTransformY}vh)`
                if(redTeamTransformY <= 40){
                    changeActiveBenefit(0)
                }
                if(redTeamTransformY <= 20){
                    changeActiveBenefit(1)
                }
                if(redTeamTransformY <= 5){
                    changeActiveBenefit(2)
                }
            }
        }
    })
})