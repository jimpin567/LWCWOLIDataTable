import { LightningElement, track, wire, api } from 'lwc';
import getRecords from '@salesforce/apex/WorkOrderDataTableController.getRecords';
import { getRecord } from 'lightning/uiRecordApi';

const columns = [
    { label: 'Line Item #', fieldName: 'LineItemNumber', type: 'number' },
    { label: 'Description', fieldName: 'Description', type: 'Text' },
    { label: 'Item Type', fieldName: 'Item_Type__c', type: 'Text' },
    { label: 'Quantity', fieldName: 'Quantity', type: 'number' },
    { label: 'UOM', fieldName: 'Product_Qty_Unit_of_Measure_Formula__c', type: 'Text' },
    { label: 'Product Cost', fieldName: 'Product_Cost__c', type: 'currency' },
    { label: 'List Price', fieldName: 'ListPrice', type: 'currency' },
    { label: 'Overridden Price', fieldName: 'UnitPrice', type: 'currency' },
    { label: 'Final Unit Price', fieldName: 'UnitPrice_1__c', type: 'currency' },
    { label: 'Extended Subtotal', fieldName: 'Total_Price_Commercial__c', type: 'currency' },
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