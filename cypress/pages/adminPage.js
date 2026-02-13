import basePage from "./basePage";
import adminData from "../fixtures/adminData.json";

class adminPage  {

    getRecordsCount(){
        return cy.get('.orangehrm-horizontal-padding.orangehrm-vertical-padding')
                  .invoke("text")
      .then((text) => {
        const match = text.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }
    )};

    clickAddButton(){
        cy.get('.orangehrm-header-container > .oxd-button').click();
    }


    clickDeleteButton(){
        cy.get('button[title="Delete"]').click();
    }

    clickSaveButton(){
        cy.get('button[type="submit"]').click();
    }   

    fillUserForm(uniqueUsername){
        
    
        basePage.selectDropdown("User Role", adminData.user.userRole);
        basePage.selectDropdown("Status",   adminData.user.status);
        basePage.fillInputField("Employee Name", adminData.user.employee);
        cy.wait(2000); // Wait for suggestions to load
        cy.get('[role="listbox"]').click();
        basePage.fillInputField("Username", uniqueUsername);
        basePage.fillInputField("Password", adminData.user.password);
        basePage.fillInputField("Confirm Password", adminData.user.confirmPassword);
        this.clickSaveButton();
        basePage.assertSuccessToast(adminData.message.SuccessfullySaved);
    
    }

    searchByUsername(uniqueUsername) {
            cy.get('input.oxd-input').eq(1).clear().type(uniqueUsername);
            cy.contains('button', 'Search').click();
    }

    deleteUser(){
            cy.get('button').find('.oxd-icon.bi-trash').click();
            cy.get('button.oxd-button--label-danger').click();
    }
}

export default new adminPage();
