class basePage {

selectDropdown(label, value) {
  cy.contains(label)
    .parents('.oxd-input-group')
    .find('.oxd-select-text')
    .click();

  cy.contains('.oxd-select-option', value).click();
  
}

fillInputField(label, value) {
  cy.contains(label)
    .parents('.oxd-input-group')
    .find('input')
    .type(value);
}

assertSuccessToast(message) {
    cy.get('.oxd-toast').should('contain', message)
  }

  randomName(prefix) {
    return `${prefix}_${Math.floor(Math.random() * 100000)}`;
  }
  
  
}


export default new basePage();