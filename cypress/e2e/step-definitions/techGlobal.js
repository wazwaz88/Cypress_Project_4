const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const ProjectPage = require('../../pages/ProjectPage')


const projectPage = new ProjectPage();


Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
});


Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	projectPage.inventoryHeading().should('have.text', heading)
});


Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

    projectPage.tableHeaders().each(($el, index) => {
        cy.wrap($el.text().trim()).should('eq', arr[index])
    })
});


Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	projectPage.tableRows().each(($el, index) => {
		cy.wrap($el).should('have.text', arr[index])
	})
});


Then(/^the user should see the "([^"]*)" button is enabled$/, (string) => {
	switch(string) {
		case 'ADD PRODUCT':
			projectPage.addProductBtn().should('be.enabled')
			break;
		case 'X':
			projectPage.xButton().should('be.enabled')
			break;
		case 'SUBMIT':
			projectPage.submitButton().should('be.enabled')
		default:
		
	}
});


Then(/^the user should see the "([^"]*)" text displayed$/, (string) => {
	projectPage.total().should('have.text', string)
});


When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	switch(button) {
		case 'ADD PRODUCT':
			projectPage.clickAddProductBtn();
			break;
		case 'X':
			projectPage.xButton().click();
			break;
		default:

	}
});


Then(/^the user should see the "([^"]*)" modal with its heading$/, (heading) => {
	projectPage.modalHeading().should('have.text', heading)
	projectPage.modal().should('be.visible')
});


Then(/^the user should see the "([^"]*)" label$/, (string) => {
	switch(string) {
		case "Please select the quantity":
			projectPage.modalLabels().first().should('have.text', string)
			break;
		case "Please enter the name of the product":
			projectPage.modalLabels().eq(1).should('have.text', string)
			break;
		case "Please enter the price of the product":
			projectPage.modalLabels().last().should('have.text', string)
			break
		default:
	}
});


Then(/^the user should see the "([^"]*)" input box is enabled$/, (string) => {
	switch(string.toLowerCase()) {
		case 'Quantity'.toLowerCase():
			projectPage.modalInputs().first().should('have.attr', 'id', 'quantity')
			break;
		case 'Product'.toLowerCase():
			projectPage.modalInputs().eq(1).should('have.attr', 'id', 'product')
			break
		case 'Price'.toLowerCase():
			projectPage.modalInputs().last().should('have.attr', 'id', 'price')
			break
	}
});



Then(/^the user should not see the "([^"]*)" modal$/, (args1) => {
	projectPage.modal().should('not.exist')
});



When(/^the user enters the quantity as "([^"]*)"$/, (quantity) => {
	projectPage.enterQuantity(quantity)
});


When(/^the user enters the product as "([^"]*)"$/, (product) => {
	projectPage.enterProduct(product)
});


When(/^the user enters the price as "([^"]*)"$/, (price) => {
	projectPage.enterPrice(price)
});


Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat();

	projectPage.newRow().find('td').each(($el, index) => {
		cy.wrap($el).should('have.text', arr[index])
	})
});







