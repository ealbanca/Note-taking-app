import '../scripts/script.js';

describe('showAlert', () => {
    beforeEach(() => {
        // Set up a minimal DOM with a form element, since showAlert inserts before form
        document.body.innerHTML = '<form></form>';
        // @ts-ignore
        global.form = document.querySelector('form');
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('should add an alert div with the correct message and class', () => {
        // @ts-ignore
        showAlert('Test message', 'success');
        const alertDiv = document.querySelector('.message.success');
        expect(alertDiv).not.toBeNull();
        expect(alertDiv?.textContent).toBe('Test message');
    });

    it('should remove the alert div after 3.5 seconds', () => {
        jest.useFakeTimers();
        // @ts-ignore
        showAlert('Test message', 'success');
        let alertDiv = document.querySelector('.message.success');
        expect(alertDiv).not.toBeNull();

        // Fast-forward 3.5 seconds
        jest.advanceTimersByTime(3500);

        alertDiv = document.querySelector('.message.success');
        expect(alertDiv).toBeNull();
        jest.useRealTimers();
    });
});