@isTest
public class CreateEventControllerTest {
 static testMethod void testInsertAccount()
  {
   string ConID,  isname;
     Event__c ca = new Event__c();
 	 ca.name='Salesforce';
     insert ca;
      system.assertEquals(isname, Null);
       CreateEventController.createRecord( ca);
      
      

  }
}