/**
 * The Back command causes the browser to traverse one step backward
 * in the joint session history of the current top-level browsing context.
 * This is equivalent to pressing the back button in the browser chrome or calling `window.history.back`.
 *
 * @alias browser.back
 * @see https://w3c.github.io/webdriver/#dfn-back
 */
import type DevToolsDriver from '../devtoolsdriver'

export default async function back (this: DevToolsDriver) {
    delete this.currentFrame
    const page = this.getPageHandle()
    if (!page) {
        throw new Error('Couldn\'t find page')
    }

    await page.goBack()
    return null
}