export class BasePage{
    constructor(page)
    {
        this.page= page 
    }
    async click(selector)
    {
        await selector.click()
    }
    async fill (selector,value)
    {
        await selector.fill(value);
    }
}