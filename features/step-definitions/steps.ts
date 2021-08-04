import { Given, When, Then } from '@cucumber/cucumber';

import HomePage from '../pageobjects/home.page';


const pages = {
    home: HomePage
}

Given(/^(?:.*) is at the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(/^she searches for the toy (\w+)$/, async (name) => {
    await HomePage.searchFor(name);
});

Then(/^she should see search result for the toy (\w+)$/, async (name) => {
   // await expect(HomePage.searchResults.toBeExisting());
    await expect(HomePage.searchResults).toHaveTextContaining(name);
});

