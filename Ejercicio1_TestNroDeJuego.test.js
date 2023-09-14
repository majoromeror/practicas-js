//Arrange
NroDeJuegoAnterior=5
//Act
NroDeJuegoActual=NroDeJuegoAnterior+1
//Assert
//test(1<=NroDeJuegoActual<=10)
//test(NroDeJuegoActual==NroDeJuegoAnterior+1)
test('NroDeJuegoActual', () => {
    expect(NroDeJuegoActual).toBeGreaterThanOrEqual(1);
    expect(NroDeJuegoActual).toBeLessThanOrEqual(10);
    expect(NroDeJuegoActual).toEqual(NroDeJuegoAnterior+1);
});