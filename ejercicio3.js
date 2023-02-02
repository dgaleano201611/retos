function myFunction(dataX, dataY){
    
    let resultado = dataX.toString() === dataY.toString() ? true : false;
    return resultado;

}

console.log(myFunction(new Date(2019, 0, 1), new Date(2019, 0, 1)));
console.log(myFunction(new Date('2020/01/01'), new Date('2020/01/02')));
console.log(myFunction(new Date(2019, 0, 1), new Date(2019, 1, 1)));
console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')));