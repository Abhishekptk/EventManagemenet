public class ShowTickets {
@AuraEnabled
    Public static void GetTickets(){
        
        list<Ticket__C> TicketList = new List<Ticket__c>();
        TicketList = [select Id ,Name,  ID_of_event__c, Number_of_Tickets__c 
                      from Ticket__c limit 5000 ];
        Map<Id,Ticket__C > Idmap = New Map<Id,Ticket__C> ();
        
            
    }
}