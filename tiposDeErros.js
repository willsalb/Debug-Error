function ValidaArray(arr, num){
        try {
            if(!arr && !num) throw new ReferenceError ('Envie os parâmetros!');
            //ReferenceError representa um erro quando uma variável não existente é referenciada.

            if (typeof arr !== 'object')
            throw new TypeError ('Array precisa ser do tipo object');
            
            if (typeof num !== 'number')
            throw new TypeError ('Num precisa ser do tipo number');
            //TypeError é um erro de quando um valor não é do tipo esperado.

            if(arr.length !== num) throw new RangeError ('Tamanho inválido');
            /*RangeError cria uma instância representando um erro que ocorre quando um valor
            ou parâmetro numérico está fora de seus limites válidos.*/

            return arr;
        } 
        catch(e) {
            if (e instanceof ReferenceError) {
                console.log('ReferenceError!');
                console.log(e.message);
            }else if (e instanceof TypeError) {
                console.log('TypeError!');
                console.log(e.message);
            }else if(e instanceof RangeError) {
                console.log('RangeError!');
                console.log(e.message);
            } else {
                console.log('Tipo de erro não esperado:' + e);
            }
        }
}
console.log(ValidaArray([1, 2, 3, 4, 5], 5));