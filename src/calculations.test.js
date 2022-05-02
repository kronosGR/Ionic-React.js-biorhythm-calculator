import { calculateBiorhythms } from './calculations';

it('calculate the physical biorhythm', () => {
  const { physical } = calculateBiorhythms('1995-01-01', '2020-02-18');
  expect(physical).toBeCloseTo(0.5196);
});

it('calculate emotional', () => {
  const { emotional } = calculateBiorhythms('1995-01-01', '2020-02-18');
  expect(emotional).toBeCloseTo(-0.901);
});

it('calculate intellectual', () => {
  const { intellectual } = calculateBiorhythms('1995-01-01', '2020-02-18');
  expect(intellectual).toBeCloseTo(0.8146);
});
