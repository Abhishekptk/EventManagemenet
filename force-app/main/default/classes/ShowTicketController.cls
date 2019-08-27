public class ShowTicketController {
 @AuraEnabled
    Public static Map<string, List<Ticket__C>> GetTickets(){
        Map<string, List<Ticket__C>> data = new Map<string, List<Ticket__C>>();  
        List<Event> events = [SELECT subject FROM Event limit 1000];
        for(Event evnt : events){
            // System.debug('Event Name-'+evnt.subject);
            list<Ticket__C>  TicketListaa = [select Name from Ticket__c where ID_of_event__c = : evnt.id ];
            for(Ticket__C  TicketLista : TicketListaa ){
            //System.debug('Ticket Name 00-'+data);
            }
            data.put(evnt.subject,TicketListaa);
        }
        System.debug('Ticket Name-'+data); 
        return data;
    }
}