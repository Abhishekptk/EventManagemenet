public class CreateEventController {
 @AuraEnabled
    public static void createRecord (Event__c Event ){
       try{
            if(Event != null){
                insert Event;
            }
         } catch (Exception ex){
            
        }
        
    }    
}