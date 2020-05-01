describe('My first test', () => {
  let sut;

  beforeEach(()=> {
    sut = {};
  });

  it('test to check true is true', () => {
    //arrange
    sut.a = true

    //act
    sut.a=true

    //assert
    expect(sut.a).toBe(true);
  })

})
