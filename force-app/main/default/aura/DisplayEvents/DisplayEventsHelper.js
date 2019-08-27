({
	getEventList: function(component) {
        var action = component.get('c.getEvents');
        var self = this;
        action.setCallback(this, function(actionResult) {
         component.set('v.Event', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
      },
})