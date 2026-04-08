import { BasePage } from "./BasePage"

export class LoginPage extends BasePage {
    constructor(page) {
        super(page)
    }

    async launchpage()
    {
        await this.page.goto('https://practice.expandtesting.com/login')
    }
    async login(username,password) {
        await this.fill(await this.page.getByLabel('Username'),username)
        await this.fill(await this.page.getByLabel('password'), password)
        await this.click(await this.page.locator('#submit-login'))
    }
}