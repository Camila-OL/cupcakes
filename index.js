let bt = document.querySelectorAll('button')
let car = document.querySelector('.car')
let im = document.querySelector('.imag')

for(let n = 0; n < bt.length; n++) {
    const but = bt[n]
    
    but.addEventListener('click', () => {
        car.style.display = 'flex'
        let prod = document.createElement('li')
        prod.innerHTML = but.accessKey
        car.appendChild(prod)

        let ig = document.createElement('img')
        ig.src = but.childNodes[1].accessKey 
        car.appendChild(ig)

        let bR = document.createElement('button')
        bR.innerHTML = '<span> remover item </span>'
        car.appendChild(bR)
        bR.style.marginTop = '50%'
        bR.style.backgroundColor = '#d42834'
        bR.style.padding = '10px'
        bR.style.borderRadius = '50%'
        bR.style.cursor = 'pointer'

        bR.addEventListener('click', () => {
            car.removeChild(prod)
            car.removeChild(ig)
            bR.style.display = 'none'
        })
    })
}