@istest
public class BookTicketControllerTest {
static testMethod void Method()
  {
    
      string ConID,  isname;
  Ticket__c ca = new Ticket__c();
 	 ca.name='Salesforce';
      ca.ID_of_event__c=ConID;
      insert ca;
      system.assertEquals(isname, Null);
      BookTicketController.createRecord( ca , ConID);
  }
}