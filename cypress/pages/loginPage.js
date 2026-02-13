import adminData from "../fixtures/adminData.json";

class LoginPage {

    visit(){
        cy.visit("/");
    }

    enterUsername(username){

        cy.get('input[name=username]').type(username);
    }

    enterPassword(password){

        cy.get('input[name=password]').type(password);
    }

    clickOnLoginButton(){
        cy.get('button[type=submit]').click();
    }

login(){
    this.visit();
    this.enterUsername(adminData.login.username);
    this.enterPassword(adminData.login.password);
    this.clickOnLoginButton();
}

verifyLoginSuccess() {
    cy.url().should("include", "/dashboard");
  }

}
export default new LoginPage();