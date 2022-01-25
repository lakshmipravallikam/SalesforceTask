({
    getAccontRecord : function( component ) {
        
        var action = component.get("c.getAccountRecord"); //Calling Apex class controller 'getAccountRecord' method
        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            var result = JSON.stringify(response.getReturnValue());
            if (component.isValid() && state === "SUCCESS")
                component.set("v.accLst", response.getReturnValue());  // Adding values in Aura attribute variable.   
        });
        $A.enqueueAction(action);
    },
    
    getSearchRecord : function( component ) {
        var myAttribute=component.get("v.searchRecord");
        
        var action = component.get("c.getSearchRecord"); //Calling Apex class controller 'getAccountRecord' method
        if(myAttribute!=undefined){
            
            action.setParams({ "strName" : myAttribute });
        }
        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            var result = JSON.stringify(response.getReturnValue());
            if (component.isValid() && state === "SUCCESS")
                component.set("v.accLst", response.getReturnValue());  // Adding values in Aura attribute variable.   
        });
        $A.enqueueAction(action);
    },
    sortBy: function(component, field) {
        
        var sortAsc = component.get("v.sortAsc"),
            
            sortField = component.get("v.sortField"),
            
            records = component.get("v.allAccounts");
        
        sortAsc = sortField != field || !sortAsc;
        
        records.sort(function(a,b){
            
            var t1 = a[field] == b[field],
                
                t2 = (!a[field] && b[field]) || (a[field] < b[field]);
            
            return t1? 0: (sortAsc?-1:1)*(t2?1:-1);
            
        });
        
        component.set("v.sortAsc", sortAsc);
        
        component.set("v.sortField", field);
        
        component.set("v.accLst", records);
        
        this.renderPage(component);
        
    }
    
})