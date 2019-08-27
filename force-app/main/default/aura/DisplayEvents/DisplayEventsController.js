({
	fetchAccounts : function(component, event, helper) {
        debugger;
        component.set('v.mycolumns', [
           {label: 'Name', fieldName: 'linkName', type: 'url', 
            typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}},
           {label: 'Location', fieldName: 'Location__c', type: 'Text'},
            {label: 'Start Date', fieldName: 'Start_Date__c', type: 'Subject'},
            {label: 'End Date', fieldName: 'End_Date__c', type: 'Subject'},  
        ]);
            
      var action = component.get("c.fetchAccts");
            var recordID = component.get("v.recordId");
           
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var records =response.getReturnValue();
                records.forEach(function(record){
                    record.linkName = '/'+record.Id;
                });
                component.set("v.EventList", records);
            }
        });
        $A.enqueueAction(action);
    },
           

     })