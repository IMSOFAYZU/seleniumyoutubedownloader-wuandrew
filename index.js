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

    var firstVideoLinkContainer=await getElement(driver, webdriver.By.tagName("ytd-video-renderer"), 3000);
    var firstVideoLink=await firstVideoLinkContainer.findElement(webdriver.By.tagName("a"));
    var href=await firstVideoLink.getAttribute("href");

    await driver.get("https://www.safetoconvert.com/convert-youtube-video");
    var urlElement=await getElement(driver, webdriver.By.name("s"), 3000);
    urlElement.sendKeys(href);

    var convertButton=await getElement(driver, webdriver.By.className("fa-search"), 3000);
    await convertButton.click();

}

execute();