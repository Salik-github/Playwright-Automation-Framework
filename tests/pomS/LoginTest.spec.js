import { test, expect } from './fixture'
import testdata from '../../utils/testdata.json';
import { allure } from 'allure-playwright';

test.describe('Login Page funcationality', () => {
    for (const users of testdata.validData) {
        test(`verify valid login:${users.username}`, async ({ loginpage }) => {
            await allure.description('Verify user can log in with correct credentials');
            await allure.tags('smoke', 'login');
            await loginpage.launchpage();
            await loginpage.login(users.username, users.password);
        })
    }

})