import './config/module-alias'
import { PuppeteerController } from '@/infra/controller/puppeteer-controller'

const puppet = new PuppeteerController()

puppet.scrapData().then(() => {

}).catch(() => {})
