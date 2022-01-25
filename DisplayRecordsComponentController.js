({
    doInit : function(component, event, helper) {
        helper.getAccontRecord(component); // Calling Helper method
    },
    
    onHandler : function(component, event, helper) {
        helper.getSearchRecord(component); // Calling Helper method
    },
    
    sortByName: function(component, event, helper) {
        helper.sortBy(component, "Name");
    },
    
})