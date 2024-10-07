import {describe, expect, test} from '@jest/globals';
import {mul, sum} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
describe("multiply module checks the multiply",()=>{
  test("ahould check multiplication of 1 And 2",()=>{
    const finalAnswer =mul(3,2)
    expect(finalAnswer).toBe(6) 
  })
})