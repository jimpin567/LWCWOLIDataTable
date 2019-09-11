import { LightningElement, track, wire, api } from 'lwc';
import getRecords from '@salesforce/apex/WorkOrderDataTableController.getRecords';
import { getRecord } from 'lightning/uiRecordApi';

const columns = [
    { label: 'Line Item #', fieldName: 'LineItemNumber', type: 'number', cellAttributes: { alignment: 'center' }},
    { label: 'Description', fieldName: 'Description', type: 'Text' },
    { label: 'Item Type', fieldName: 'Item_Type__c', type: 'Text', cellAttributes: { alignment: 'center' }},
    { label: 'Quantity', fieldName: 'Quantity', type: 'number', cellAttributes: { alignment: 'center' }},
    { label: 'UOM', fieldName: 'Product_Qty_Unit_of_Measure_Formula__c', type: 'Text', cellAttributes: { alignment: 'center' }},
    { label: 'Product Cost', fieldName: 'Product_Cost__c', type: 'currency', cellAttributes: { alignment: 'center' }},
    { label: 'Markup %', fieldName: 'Markup__c', type: 'percent', cellAttributes: { alignment: 'center' }},
    { label: 'List Price', fieldName: 'ListPrice', type: 'currency', cellAttributes: { alignment: 'center' }},
    { label: 'Final Price', fieldName: 'UnitPrice', type: 'currency', cellAttributes: { alignment: 'center' }},
    { label: 'Extended', fieldName: 'Total_Price_Commercial__c', type: 'currency', cellAttributes: { alignment: 'center' }},
];

export default class WODatatableBasic extends LightningElement {
@api recordId;
@track data = [];
@track columns = columns;
@track tableLoadingState = true;
@wire(getRecords , { recordId: '$recordId' })
    wiredRecordsMethod({ error, data }) {
        if (data) {
            this.data  = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data  = undefined;
        }
        this.tableLoadingState  = false;
    }
}