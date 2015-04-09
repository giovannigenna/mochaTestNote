var Nota = function( testo ) {
    if(!testo) { throw new Error() }

    this.testo = testo;
}

module.exports = Nota
