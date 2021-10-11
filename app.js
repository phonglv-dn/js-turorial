const mathFunction = ((a,b,math)=> {
    if (typeof a === 'number' && typeof b === 'number'){
        switch(math) {
            case '+':
                console.log(a,math,b,' = ',a + b)
                break;
            case '-':
                console.log(a,math,b,' = ',a - b)
                break;
            case '*':
                console.log(a,math,b,' = ',a * b)
                break;
            case '/':
                console.log(a,math,b,' = ',a / b)
                break;
        }
    } else
    console.log('Biến a và b phải là kiểu số')
})
mathFunction(3,4,'/');
mathFunction('4',4,'-');