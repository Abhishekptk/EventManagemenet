({
	getAccountList: function(component) {
        debugger;
        var action = component.get('c.GetTickets');
        
         action.setCallback(this, function(response) {
          var state = response.getState();
             
           if (state === "SUCCESS"){
               debugger;
                var result = response.getReturnValue();
                var arrayMapKeys = [];
                for(var key in result){
                    arrayMapKeys.push({
                        key: key,
                     value: result[key]
                    });
                }
               debugger;
                component.set("v.TicketList", arrayMapKeys);
               console.log(arrayMapKeys);
               
            }
        });
        $A.enqueueAction(action);
    }  ,
    
 
})