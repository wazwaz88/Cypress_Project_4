class ProjectPage {

    //locators
    inventoryHeading(){
        return cy.get('.is-size-3')
    }

    tableHeaders(){
        return cy.get('tr > th')
    }

    tableRows(){
        return cy.get('tr > td')
    }

    addProductBtn(){
        return cy.get('#add_product_btn')
    }

    total(){
        return cy.get('#total_amount')
    }

    modal(){
        return cy.get('.modal-card')
    }

    modalHeading(){
        return cy.get('#modal_title')
    }

    modalLabels(){
        return cy.get('section label')
    }

    modalInputs(){
        return cy.get('section input')
    }

    xButton(){
        return cy.get('.delete')
    }

    submitButton(){
        return cy.get('#submit')
    }

    newRow(){
        return cy.get('tbody > tr:last-child')
    }

    //methods
    clickAddProductBtn(){
        this.addProductBtn().click()
    }

    enterQuantity(quantity){
        this.modalInputs().first().type(quantity + '{enter}')
    }

    enterProduct(product){
        this.modalInputs().eq(1).type(product + '{enter}')
    }

    enterPrice(price){
        this.modalInputs().last().type(price + '{enter}')
    } 

    
}

module.exports = ProjectPage