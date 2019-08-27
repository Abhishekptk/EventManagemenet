trigger CountTotalTicketSold on Ticket__c(after insert, after update, after delete, after undelete) {
    //---> above handling all states which could see a contact added to or removed from an account
   
    //---> on delete we use Trigger.Old, all else, Trigger.new
    List<Ticket__c> Ticket = Trigger.isDelete ? Trigger.old : Trigger.new;

    //---> the Set class rocks for finding the unique values in a list
    Set<Id> acctIds = new Set<Id>();
   
    for (Ticket__c c : Ticket) {
     //yes, you can have a contact without an account
        if (c.Event__c != null) {
            acctIds.add(c.Event__c);
        }
    }
   
    List<Event__c> acctsToRollup = new List<Event__c>();
    
    //****** Here is the Aggregate query...don't count in loops, let the DB do it for you*****
    for (AggregateResult ar : [SELECT Event__c AcctId, Count(id) ContactCount 
                               FROM Ticket__c 
                               WHERE Event__c in: acctIds 
                               GROUP BY Event__c]){
        Event__c a = new Event__c();
        a.Id = (Id) ar.get('AcctId'); //---> handy trick for updates, set the id and update
        a.Tickets_Sold__c = (Integer) ar.get('ContactCount');
        acctsToRollup.add(a);
    }
    
    //----> probably you'll want to do a little more error handling than this...but this should work. 
    update acctsToRollup;

}