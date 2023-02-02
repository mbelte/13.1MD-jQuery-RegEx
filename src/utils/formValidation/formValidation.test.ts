import { isValidName, isValidEmail, isValidPassword } from "./formValidation";

describe('isValidName', () => {
    it('should return false', () => {
        const result = isValidName('a');

        expect(result).toEqual(false);
    });

    it('should return false', () => {
        const result = isValidName('a1234');

        expect(result).toEqual(false);
    });

    it('should return false', () => {
        const result = isValidName('Martins1234');

        expect(result).toEqual(false);
    });

    it('should return true', () => {
        const result = isValidName('Mārtiņš');

        expect(result).toEqual(true);
    });
});

describe('isValidEmail', () => {
    it('should return false', () => {
        const result = isValidEmail('address');

        expect(result).toEqual(false);
    });

    it('should return false', () => {
        const result = isValidEmail('address@');

        expect(result).toEqual(false);
    });

    it('should return false', () => {
        const result = isValidEmail('address@domain');

        expect(result).toEqual(false);
    });

    it('should return false', () => {
        const result = isValidEmail('@ddre!ss@domain.com');

        expect(result).toEqual(false);
    });

    it('should return true', () => {
        const result = isValidEmail('address132@domain.com');

        expect(result).toEqual(true);
    });

    it('should return true', () => {
        const result = isValidEmail('aDdreSs@domain.com');

        expect(result).toEqual(true);
    });
});

describe('isValidPassword', () => {
    it('should return false', () => {
        const result = isValidPassword('password');

        expect(result).toEqual(false);
    });

    it('should return false', () => {
        const result = isValidPassword('password123');

        expect(result).toEqual(false);
    });

    it('should return true', () => {
        const result = isValidPassword('qwerty1@');

        expect(result).toEqual(true);
    });
});