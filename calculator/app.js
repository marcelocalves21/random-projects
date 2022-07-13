function result (myValue, equal=false) {
    let small = document.querySelector('.calculator-header small')
    let myMath = document.querySelector('.calculator-math')
    if(equal){
        let calc = small.textContent + myValue
        calc = calc.replace(/[^-()\d/*+.]/g, '')
        small.textContent = eval(calc)
        myMath.textContent = eval(calc)

    }else{
        small.textContent = small.textContent + myValue
    }
}

document.querySelectorAll('.col').forEach(item => {
    
    
    item.addEventListener('click', () => {
        let myMath = document.querySelector('.calculator-math')
        let small = document.querySelector('.calculator-header small')

        if(myMath.textContent.match(/\d+/g) && (item.textContent === '+' || item.textContent === '-' || item.textContent === '*' || item.textContent === '/')){
            small.textContent = ''
            let math = myMath.textContent + item.textContent
            result(math)
            myMath.textContent = ''

        }else if((myMath.textContent.match(/\d+/g) && item.textContent.match(/\d+/g)) && (myMath.textContent === small.textContent)){

            myMath.textContent = ''
            myMath.textContent= myMath.textContent + item.textContent
            small.textContent = ''
            

        }else if(item.textContent === 'C'){

            myMath.textContent = ""
            small.textContent = ''

        }else if (item.textContent === '.' && myMath.textContent.includes('.')){

            console.log('No')

        }else if(item.textContent === '+' || item.textContent === '-' || item.textContent === '*' || item.textContent === '/'){

            let math = myMath.textContent + item.textContent
            
            result(math)
            myMath.textContent = ''

        }else if(item.textContent === '='){

            result(myMath.textContent, true)

        }else{

            myMath.textContent= myMath.textContent + item.textContent

        }
    })
})
// let something = document.querySelector('.calculator-math').textContent
// console.log(something)

// var str = "12/5*9+9.4*2"
// console.log(str)
// console.log(eval(str))