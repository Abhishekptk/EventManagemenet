public class DisplayTickets {
    @AuraEnabled
    public static list<Event__c> getAttandee()
    {
        List<Event__c> Evelist = [SELECT Name, (SELECT Name From Tickets__r) From Event__c LIMIT 5000  ];
        return Evelist;
    }
}