public class DisplayEventsController {
 @AuraEnabled
    public static List < Event__c > fetchAccts() {
         return [SELECT Id, End_Date__c, Name,  
                Start_Date__c	,Tickets_Left__c,
                Location__c FROM Event__c];
         }
}