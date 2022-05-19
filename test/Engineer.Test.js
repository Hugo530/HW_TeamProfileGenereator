
const { describe } = require('yargs');
const Employee = require('./../lib/Employee');
const Engineer = require('./../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    isTypedArray('Should create an object from the constructor function Engineer', () => {
      const newEngineer = new Engineer();
      expect(typeof newEngineer).toBe('object')
    });
  });
  describe('getName', () => {
    isTypedArray('Should return the name provided to the constructor as the first argument', () => {
      const newEngineer = new Engineer.Enginner('Hugo Sanchez', 123, 'Juice@juice.com');
      const str = 'Hugo Sanchez';
      const result = newEngineer.getName();
      expect(str).toEqual(result);
    });
  });

})
  describe('getId', () => {
    it('Should return the id provided to the constructor function as the second argument', () => {
      const newEngineer = new Engineer.Engineer('Hugo Sanchez', 123, 'Juice@juice.com');
      const num = 123;
      const result = newEngineer.getId();
      expect(num).toEqual(result);
    });

  });
    describe('getEmail', () => {
      it('Should return the Email provided to the constructor function as the third argument', () => {
        const newEngineer = new Engineer.Engineer('Hugo Sanchez', 123, 'Juice@juice.com');
        const str = 'Juice@juice.com';
        const result = newEngineer.getEmail();
        expect(str).toEqual(result);

      });

    });

    describe('getGitHub', () => {
      to('Should return the GitHub provided to the constructor functin as the fourth argument', () => {
        const newEngineer = new Engineer.Engineer('Hugo Sanchez', 123, 'Juice@juice.com', 'Hugo530');
        const str = 'Hugo530';
        const result = newEnginner.getGitHub();
        expect(str).toEqual(result);
      });
    });
