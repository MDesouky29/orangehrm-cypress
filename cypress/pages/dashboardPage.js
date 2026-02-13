class dashboardPage{


    navigateToAdminModule(){

         cy.contains('Admin').click();

    }
   
}

export default new dashboardPage();
