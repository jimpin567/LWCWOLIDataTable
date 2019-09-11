public with sharing class WorkOrderDataTableController {
    @AuraEnabled(Cacheable = true)
    public static List<WorkOrderLineItem> getRecords(String recordId) {
        List<WorkOrderLineItem> workOrderLineItems = [SELECT 
        LineItemNumber, Description, Product_cost__c, PricebookEntryId, Product_Name__c, 
        Quantity, Product_Number__c, Item_Type__c, ListPrice, Unit_Price_Commercial__c, 
        Product_Qty_Unit_of_Measure_Formula__c, UnitPrice, UnitPrice_1__c, Total_Price_Commercial__c, Markup__c
        FROM WorkOrderLineItem
        WHERE WorkOrderId =: recordId];
        return workOrderLineItems;
    }
}