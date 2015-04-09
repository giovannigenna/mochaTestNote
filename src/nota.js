var Nota = function( testo ) {
    if(testo === undefined) { throw new Error() }

    this.testo = '' + testo;
}

Nota.prototype.tag = function() {
    var tag = [];

    if(this.testo) {
        tag = this.testo.split(' ');
    }

    return tag;
}


module.exports = Nota
