public class AccountList {
    @AuraEnabled
    public static List < Event > fetchAccts() {
         return [SELECT Id, Subject, What.Type,  
                StartDateTime,EndDateTime,
                Location,  whatId FROM Event limit 1000];
         }
   }