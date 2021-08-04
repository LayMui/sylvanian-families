import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () { return $('#search-input') }
    get searchResults () { return $('#search-results') }

   
    /**
     * a method to encapsule automation code to interact with the page
     */
    async searchFor(name: string) {
        await this.inputSearch.setValue(name);   
        await browser.keys("\uE007"); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('home');
    }
}

export default new HomePage();
