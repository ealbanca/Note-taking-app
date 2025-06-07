import '../scripts/script.js';

// Test for the showAlert function
describe('showAlert', () => {
    beforeEach(() => {
        document.body.innerHTML = '<form></form>';
        // @ts-ignore
        global.form = document.querySelector('form');
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });
    // Check if the showAlert message is displayed correctly
    it('should add an alert div with the correct message and class', () => {
        // @ts-ignore
        showAlert('Test message', 'success');
        const alertDiv = document.querySelector('.message.success');
        expect(alertDiv).not.toBeNull();
        expect(alertDiv?.textContent).toBe('Test message');
    });
    // Check if the alert is removed after 3.5 seconds
    it('should remove the alert div after 3.5 seconds', () => {
        jest.useFakeTimers();
        // @ts-ignore
        showAlert('Test message', 'success');
        let alertDiv = document.querySelector('.message.success');
        expect(alertDiv).not.toBeNull();

        jest.advanceTimersByTime(3500);

        alertDiv = document.querySelector('.message.success');
        expect(alertDiv).toBeNull();
        jest.useRealTimers();
    });
});