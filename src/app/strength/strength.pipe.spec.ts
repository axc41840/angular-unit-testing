import { StrengthPipe } from './strength.pipe';

describe('Strength pipe testing', () => {

  it('verify if value 5 returns 5 (weak)', () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)');
  })

  it('verify if value 15 returns 15 (strong)', () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(15)).toEqual('15 (strong)');
  })
})
