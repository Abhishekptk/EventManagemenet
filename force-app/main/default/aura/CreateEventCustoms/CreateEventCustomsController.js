({
	fetchAccounts : function(component, event, helper) {
        debugger;
        component.set('v.mycolumns', [
           {label: 'ID', fieldName: 'linkName', type: 'url', 
            typeAttributes: {label: { fieldName: 'Subject' }, target: '_blank'}},
           {label: 'Location', fieldName: 'Location', type: 'Text'},
            {label: 'Start Date', fieldName: 'StartDateTime', type: 'Subject'},
            {label: 'End Date', fieldName: 'EndDateTime', type: 'Subject'},
            
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