import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage"; 
import adminPage from "../pages/adminPage";
import basePage from "../pages/basePage"; 



describe("Admin Full Flow", () =>{


  it("Login, Add and Delete User with count verification", () =>{
  
    
    
    cy.fixture("adminData").then((adminData) => {
      
      const uniqueUsername = basePage.randomName(adminData.user.username);
      
      // Login
      loginPage.login();
      loginPage.verifyLoginSuccess();

      // Navigate to Admin Module
      dashboardPage.navigateToAdminModule();

      // Count before adding user
      adminPage.getRecordsCount().then((beforeCount) => {

      // Add User
      adminPage.clickAddButton();
      adminPage.fillUserForm(uniqueUsername);

      // Verify toast and count after adding user
      basePage.assertSuccessToast(adminData.message.SuccessfullySaved);

      // Count after adding user
      adminPage.getRecordsCount().then((afterCount) => {
      expect(afterCount).to.eq(beforeCount + 1);

      // Search user
      adminPage.searchByUsername(uniqueUsername);

      // Delete user
      adminPage.deleteUser();

      // Verify delete toast
      basePage.assertSuccessToast(adminData.message.SuccessfullyDeleted);
      dashboardPage.navigateToAdminModule();

      // Verify count decreased
      adminPage.getRecordsCount().then((finalCount) => {
      expect(finalCount).to.eq(beforeCount);  
      
        
      });
    });
  });
      
      
      
    });
  })

});