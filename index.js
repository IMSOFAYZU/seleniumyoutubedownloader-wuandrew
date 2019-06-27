const DRIVER = "geckodriver"; //chromedriver
const BROWSER = "firefox"; //chrome

var webdriver = require("selenium-webdriver");
require(DRIVER);

async function getElement(driver, locator, timeout){
    await driver.wait(webdriver.until.elementLocated(locator), timeout);
    return await driver.findElement(locator);
}

async function execute() {
    var builder = new webdriver.Builder();
    builder.forBrowser(BROWSER);
    var driver = builder.build();
}

execute();