import puppeteer, { type Browser, type Page } from 'puppeteer'

export class PuppeteerController {
  async scrapData (): Promise<any> {
    const page = await this.initialize()
    await page.goto('https://www.linkedin.com/')
    await page.setViewport({ width: 1080, height: 1024 })
    await page.type('#session_key', 'huhiqhjzqldrmeiedo@cazlv.com')
    await page.type('#session_password', 'pwUKZ33w3cLGrJv')
  }

  private async initialize (): Promise<Page> {
    const browser = await this.createBrowser()
    return await browser.newPage()
  }

  private async createBrowser (): Promise<Browser> {
    return await puppeteer.launch({ headless: false })
  }
}
