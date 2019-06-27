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

    await driver.get("https://www.youtube.com/?gl=TW&hl=zh-TW");
    var searchBox=await getElement(driver, webdriver.By.name("search_query"), 3000);
    await searchBox.sendKeys("復仇者");
    var searchButton=await getElement(driver, webdriver.By.id("search-icon-legacy"), 3000);
    await searchButton.click();
}

execute();