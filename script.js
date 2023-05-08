// ? slider
let step = 0
// ? counter for innerHTML
let counter = 1

// ? all content
const content = document.querySelectorAll('.content')
// ? content.length
let contentLength = content.length



// ? controllers next
const next = document.querySelector('.step-next')

next.addEventListener('click', () => {
if(contentLength >= step) {
    step = step + 1
    counter = counter + 1
} 

    contentDisplay()
    stepLineHtml()
})



// ? function for display this step content

const contentDisplay = () => {
    if(step == (contentLength)) {
        step = 0
        counter = 1

        content.forEach((item) => {
            item.classList.add('none')
        })

        setTimeout((function() {
            content.forEach((item) => {
                item.classList.remove('none')
            })
        }), 750)
    }
    
    content.forEach((el, index) => {
        el.style.transform = `translate(0, calc(${step} * (-100%)))`
    })
}

contentDisplay()


// ? innerHTML

const stepStart = document.querySelector('.step-start')
const stepEnd = document.querySelector('.step-end')
const stepLine = document.querySelector('.line')


const stepLineHtml = () => {
    stepStart.innerHTML = `0${counter}`
    stepEnd.innerHTML = `0${contentLength}`
    stepLine.style.height = `calc(200px / ${contentLength})`
    stepLine.style.top = `calc((100% * ${step}) / ${contentLength})`
}

stepLineHtml()


// ? preloader
const section = document.querySelector('.section')
const preloader = document.querySelector('.preloader')

window.onload = function () {
    window.setTimeout(function() {
        section.classList.remove('none')
        preloader.classList.add('none__preview')
    }, 1500)
}


