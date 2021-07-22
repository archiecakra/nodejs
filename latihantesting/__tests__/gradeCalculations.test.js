const { TestWatcher } = require('jest');
const { averageExams, isStudentPassExam } = require('../gradeCalculation');

describe('grade calculations', () => {
  test('it should return exact average', () => {
    const listValue = [80, 100, 20, 100, 80];
    expect(averageExams(listValue)).toEqual(76);
  });
  
  test('it should handle non number', () => {
    const listValue = [80, 'a', 20, 100, 80];
    expect(() => averageExams(listValue)).toThrow();
  });

  // integration testing
  test('It should return exam passed status', () => {
    const listValue = [80, 100, 20, 100, 80];
    expect(isStudentPassExam(listValue, 'Archie')).toEqual(true);
  });
});