class Display {
    constructor(displayvalor2, displayvalor1) {
        this.displayvalor1 = displayvalor1;
        this.displayvalor2 = displayvalor2;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valor1 = '';
        this.valor2 = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        }
    }

    borrar() {
        this.valor1 = this.valor1.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valor1 = '';
        this.valor2 = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valor2 = this.valor1 || this.valor2;
        this.valor1 = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valor1.includes('.')) return
        this.valor1 = this.valor1.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayvalor1.textContent = this.valor1;
        this.displayvalor2.textContent = `${this.valor2} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valor2 = parseFloat(this.valor2);
        const valor1 = parseFloat(this.valor1);

        if(isNaN(valor1) || isNaN(valor2)) return
        this.valor1 = this.calculadora[this.tipoOperacion](valor2, valor1);
    }
}