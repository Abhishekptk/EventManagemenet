@isTest
public class DisplayEventsControllerTest {
    Public static testMethod  void testAccount(){
     
         string ConID,  isname;
  Event__c Evt = new Event__c();
  Evt.name='Salesfoce';
        Evt.Start_Date__c= System.today();
        Evt.End_Date__c =System.today();
        Insert Evt;
      system.assertEquals(isname, Null);
      DisplayEventsController.fetchAccts();
        
    }

}