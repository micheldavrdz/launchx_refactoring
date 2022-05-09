const FizzbuzzService = require('../../../lib/services/FizzbuzzService');

describe('Unit test for FizzbuzzService class', () => {
    test('Test case 1 - Check if FizzbuzzService applies "FIZZ" correctly', () => {
        const explorer1 = { name: 'Explorer 1', score: 3 };   
        const explorer2 = { name: 'Explorer 2', score: 4 };
        const explorer3 = { name: 'Explorer 3', score: 5 };
        const explorer4 = { name: 'Explorer 4', score: 15 };

        expect(FizzbuzzService.applyValidationInExplorer(explorer1).trick).toBe('FIZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer2).trick).not.toBe('FIZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer3).trick).not.toBe('FIZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer4).trick).not.toBe('FIZZ');
    });

    test('Test case 2 - Check if FizzbuzzService applies "BUZZ" correctly', () => {
        const explorer1 = { name: 'Explorer 1', score: 3 };   
        const explorer2 = { name: 'Explorer 2', score: 4 };
        const explorer3 = { name: 'Explorer 3', score: 5 };
        const explorer4 = { name: 'Explorer 4', score: 15 };

        expect(FizzbuzzService.applyValidationInExplorer(explorer1).trick).not.toBe('BUZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer2).trick).not.toBe('BUZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer3).trick).toBe('BUZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer4).trick).not.toBe('BUZZ');
    });

    test('Test case 3 - Check if FizzbuzzService applies "FIZZBUZZ" correctly', () => {
        const explorer1 = { name: 'Explorer 1', score: 3 };   
        const explorer2 = { name: 'Explorer 2', score: 4 };
        const explorer3 = { name: 'Explorer 3', score: 5 };
        const explorer4 = { name: 'Explorer 4', score: 15 };

        expect(FizzbuzzService.applyValidationInExplorer(explorer1).trick).not.toBe('FIZZBUZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer2).trick).not.toBe('FIZZBUZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer3).trick).not.toBe('FIZZBUZZ');
        expect(FizzbuzzService.applyValidationInExplorer(explorer4).trick).toBe('FIZZBUZZ');
    });

    test('Test case 4 - Check if FizzbuzzService returns explorer score if the value isn\'t a multiple of 3, 5 or 3 AND 5', () => {
        const explorer1 = { name: 'Explorer 1', score: 3 };   
        const explorer2 = { name: 'Explorer 2', score: 4 };
        const explorer3 = { name: 'Explorer 3', score: 5 };
        const explorer4 = { name: 'Explorer 4', score: 15 };

        expect(FizzbuzzService.applyValidationInExplorer(explorer1).trick).not.toBe(4);
        expect(FizzbuzzService.applyValidationInExplorer(explorer2).trick).toBe(4);
        expect(FizzbuzzService.applyValidationInExplorer(explorer3).trick).not.toBe(4);
        expect(FizzbuzzService.applyValidationInExplorer(explorer4).trick).not.toBe(4);
    });

    test('Test case 5 - Check if applyValidationInNumber identifies numbers and then applies FizzBuzz', () => {
        expect(FizzbuzzService.applyValidationsInNumber(3)).toBe('FIZZ');
        expect(FizzbuzzService.applyValidationsInNumber(4)).toBe(4);
        expect(FizzbuzzService.applyValidationsInNumber(5)).toBe('BUZZ');
        expect(FizzbuzzService.applyValidationsInNumber(15)).toBe('FIZZBUZZ');
        expect(FizzbuzzService.applyValidationsInNumber(0)).toBe('FIZZBUZZ'); // In theory this should be FIZZBUZZ since 0 is a multiple of 3 and 5
        expect(FizzbuzzService.applyValidationsInNumber('Michel')).toBe('This value is not a number, please try again');
        expect(FizzbuzzService.applyValidationsInNumber(NaN)).toBe('This value is not a number, please try again');
        expect(FizzbuzzService.applyValidationsInNumber(undefined)).toBe('This value is not a number, please try again');
        expect(FizzbuzzService.applyValidationsInNumber(null)).toBe('This value is not a number, please try again');
    });
});