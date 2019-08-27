({
	handleClick : function (component, event, helper) {
        var RecordID =component.get("v.recordId");
        var Ticket = component.get("v.Ticket");
        
        if($A.util.isEmpty(Ticket.Name) || $A.util.isUndefined(Ticket.Name)){
            alert('Please Enter Name');
            return;
        }
          if($A.util.isEmpty(Ticket.Age__c) || $A.util.isUndefined(Ticket.Age__c)){
            alert('Please Enter Age');
            return;
        }
          if($A.util.isEmpty(Ticket.Address__c) || $A.util.isUndefined(Ticket.Address__c)){
            alert('Please Enter Address');
            return;
        }
          if($A.util.isEmpty(Ticket.Company__c) || $A.util.isUndefined(Ticket.Company__c)){
            alert('Please Enter Company');
            return;
        }
         var action = component.get("c.createRecord");
         action.setParams({
            Ticket : Ticket,
             RecordID :RecordID
        });
        
        action.setCallback(this,function(a){
            var state = a.getState();
            
            if(state == "SUCCESS"){
        var newTicket = {'sobjectType': 'Ticket__c',
                                    'Number_of_Tickets__c': '',
                                    'Name__c': '',
                                    'Age__c': '', 
                         'Company__c': '', 'Address__c' :''
                          };
                
                 component.set("v.Ticket",newTicket);
               helper.showToast(component, event,helper);
                 helper.closeGlobalAction(component, event);
              } else if(state == "ERROR"){
                alert('Please try later');
            }
        });
        
		  $A.enqueueAction(action);

	},
     cancelBtn : function(component, event, helper) {
        helper.closeGlobalAction(component, event);
        
     }
})