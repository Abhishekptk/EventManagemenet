public class BookTicketController {
 @AuraEnabled
    public static void createRecord (Ticket__c Ticket , string RecordID){
       try{
           
         if(Ticket != null){
                Ticket.Event__c = RecordID;
                Ticket.ID_of_event__c = RecordID;
                insert Ticket;
            }
         } catch (Exception ex){
            
        }
        
    }    
}