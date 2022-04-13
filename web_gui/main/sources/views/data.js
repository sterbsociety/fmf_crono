import {JetView} from "webix-jet";
import {data} from "models/records";

export default class DataView extends JetView{
	config(){
		return { view:"datatable", autoConfig:true, css:"webix_shadow_medium",resizeColumn:true,resizeRow:true,scroll:true,css:"webix_data_border webix_header_border",};
	}
	init(view){
		view.parse(data);
	}
}
