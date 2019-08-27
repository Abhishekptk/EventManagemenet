({
	 doInit: function(component, event, helper) {
        //Call apex class method
        var action = component.get('c.getAttandee');
        action.setCallback(this, function(response) {
            //Get state of response
            var state = response.getState();
            if (state === "SUCCESS") {
                 component.set('v.EvntList', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})