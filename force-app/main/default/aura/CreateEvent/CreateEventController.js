({
	handleClick : function(component, event, helper) {
	 var RecordID =component.get("v.recordId");
        var Event = component.get("v.Event");
        
        if($A.util.isEmpty(Event.Name) || $A.util.isUndefined(Event.Name)){
            alert('Please Enter Name');
            return;
        }
          if($A.util.isEmpty(Event.Location__c) || $A.util.isUndefined(Event.Location__c)){
            alert('Please Enter Location');
            return;
        }
          if($A.util.isEmpty(Event.Start_Date__c) || $A.util.isUndefined(Event.Start_Date__c)){
            alert('Please Enter Start Date');
            return;
        }
          if($A.util.isEmpty(Event.Start_Time__c) || $A.util.isUndefined(Event.Start_Time__c)){
            alert('Please Enter Start Date');
            return;
        }
        if($A.util.isEmpty(Event.End_Time__c) || $A.util.isUndefined(Event.End_Time__c)){
            alert('Please Enter End Time');
            return;
        }
        if($A.util.isEmpty(Event.End_Date__c) || $A.util.isUndefined(Event.End_Date__c)){
            alert('Please Enter End Date ');
            return;
        }
        if($A.util.isEmpty(Event.Total_Number_of_Tickets__c) || $A.util.isUndefined(Event.Total_Number_of_Tickets__c)){
            alert('Please Enter Total Number of Tickets');
            return;
        }
        
         if($A.util.isEmpty(Event.Subject__c) || $A.util.isUndefined(Event.Subject__c)){
            alert('Please Enter Total Number of Tickets');
            return;
        }
         var action = component.get("c.createRecord");
         action.setParams({
            Event : Event,
             RecordID :RecordID
        });
        
        action.setCallback(this,function(a){
            var state = a.getState();
            
            if(state == "SUCCESS"){
        var newEvent = {'sobjectType': 'Event__c',
                                    'Start_Date__c': '', 
                                    'Start_Time__c': '',  
                                    'End_Time__c': '',    'End_Date__c': '', 'Location__c': '', 
                         'Total_Number_of_Tickets__c': '',  'Subject__c': '',  
                          };
                
                 component.set("v.Event",newEvent);
               helper.showToast(component, event,helper);
              } else if(state == "ERROR"){
                alert('Please try later');
            }
        });
        
		  $A.enqueueAction(action);
    }
})