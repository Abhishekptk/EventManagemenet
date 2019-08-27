({
  showToast : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success!",
        "message": "Your Event created Successfully"
    });
    toastEvent.fire();
       $A.get('e.force:refreshView').fire();
  }
})