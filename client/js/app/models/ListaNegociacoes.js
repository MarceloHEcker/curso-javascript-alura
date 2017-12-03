class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //this._armadilha(this);
        //Reflect.apply(this._armadilha, this._context, [this]);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    apagarLista() {
        this._negociacoes = [];
        //this.armadilha(this);
        //Reflect.apply(this._armadilha, this._context, [this]);
    }
}