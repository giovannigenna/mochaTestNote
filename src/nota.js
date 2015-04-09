var Nota = function( testo ) {
    if(testo === undefined) { throw new Error() }

    this.testo = '' + testo;
}

module.exports = Nota
