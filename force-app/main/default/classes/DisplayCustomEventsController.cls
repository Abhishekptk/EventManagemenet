public class DisplayCustomEventsController {
@AuraEnabled
      public static List <Event__c> fetchAccts() {
        return [SELECT Id,  Start_Date__c,Total_Number_of_Tickets__c,
                Location__c,Subject__c, End_Date__c FROM Event__c limit 5000]; 
}
}