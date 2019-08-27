({
	closeGlobalAction : function(component , event) {
		 var dismissActionPanel = $A.get("e.force:closeQuickAction"); 
dismissActionPanel.fire();
	},
    
    showToast : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success!",
        "message": "Your Ticket Book Suucessfully"
    });
    toastEvent.fire();
},
  
    
})