const sequencia = {
    _valor : 1, //não é privado, mas por convencao é usado só aqui

    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}