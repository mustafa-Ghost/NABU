document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(`[data-href]`)
    const transition = document.querySelector('.transition')
    function initilize(){
        transition.className = 'transition end'
        setTimeout(() => {
            transition.style.transition = '0s'
            transition.className = 'transition initial'
            setTimeout(() => {
                transition.style.transition = 'cubic-bezier(.7,.37,.67,.92) .5s'
            }, 50);
        }, 700)
    }
    function transitionStart(href){
        transition.className = 'transition start'
        setTimeout(() => {
            window.location = href
        }, 500);
    }
    links.forEach(link => {
        link.onclick = () => {
            const href = link.getAttribute("data-href")
            transitionStart(href)
        }
    })

    initilize()
    const navBtns = document.querySelectorAll('nav .nav-btn')
    navBtns.forEach((btn) => {
        const line = document.createElement('div')
        line.classList.add('hover')
        btn.appendChild(line)
        btn.onmouseover = () => {
            line.classList.add("line-middle")
        }
        btn.onmouseleave = () => {
            if(line.classList.contains('line-middle')){
                line.classList.add("line-after")
            }
            setTimeout(() => {
                line.className = 'hover'
            }, 300);
        }
    })


    const servicesBtn = document.querySelector("nav #services")
    const dropdown = document.querySelector("nav .dropdown")
    const sidebar = document.querySelector("nav .nav-btns")
    servicesBtn.querySelector(".content").onclick = () => {
        dropdown.classList.toggle("active")
        servicesBtn.classList.toggle('dropdown-active')
    }


    const sidebarToggler = document.querySelector('nav .open-btn')

    sidebarToggler.onclick = () => {
        sidebarToggler.classList.toggle('close')
        sidebar.classList.toggle('active')
    }


    const observerElements = document.querySelectorAll('.observer-elements')
    observerElements.forEach(element => {
        const options = {
            threshold:.25,
            rootMargin:"0px",
            root:null
        }

        const animation = entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    element.classList.add('active')
                }
            })
        }
        const observer = new IntersectionObserver(animation, options)
        observer.observe(element)
    })

    const pentTitle = document.querySelectorAll(".transition-title")
    pentTitle.forEach((title) => {
        const letters = title.querySelectorAll("div")
        letters.forEach((ltr, index) => {
            const transition = (index + 1) * Math.pow(10, -1)
            ltr.style.transition = transition + 's'
        })
    })
})