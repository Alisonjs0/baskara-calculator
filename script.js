function calcular() {
    let txta = document.getElementById('a')
    let txtb = document.getElementById('b')
    let txtc = document.getElementById('c')
    let res = document.getElementById('res')
    let a = Number(txta.value)
    let b = Number(txtb.value)
    let c = Number(txtc.value)
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        window.alert('Verfirique se os valores são validos')
        return
    }

    let delta = b**2 - 4*a*c

    if (delta < 0) {
        res.innerHTML = 'A equação não possui raizes reais'
        return
    }

    let raiz = Math.sqrt(delta)
    let baskara1 = ((b*(-1) + raiz) / (2*a)).toFixed(2)
    let baskara2 = ((b*(-1) - raiz) / (2*a)).toFixed(2)

    res.innerHTML = `O valor de delta equivale a ${delta}.<br> `
    res.innerHTML += `E as raizes da equação equivalem a ${baskara1} e ${baskara2}`
}