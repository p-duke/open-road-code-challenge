import { convertDate, convertScore } from '../helpers';

const createdUTC = 1512958978;
const now = 1512970064425;

describe('convertDate', () => {
  it('should calculate time elapsed in hours', () => {
    expect(convertDate(createdUTC)).toContain('3 hours ago');
  });
});

const score = 32113;

describe('convertScore', () => {
  it('should round off the scores to the thousands', () => {
    expect(convertScore(score)).toContain('32.1k');
  });
});
