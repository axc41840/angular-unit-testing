import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('Heros Component', () => {
  let component: HeroesComponent;
  let HEROS;
  let mockHeroService;

  beforeEach(() => {
    HEROS = [
      {id:1, name: 'Spider Dude', strength: 8},
      {id:2, name: 'Mantastic', strength: 18},
      {id:3, name: 'WonderWomen', strength: 24}
    ];

    mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  })

  it('should delete a hero', () => {
    component.heroes = HEROS;
    mockHeroService.deleteHero.and.returnValue(of(true));

    component.delete(HEROS[2]);

    expect(component.heroes.length).toBe(2);
  })

})
