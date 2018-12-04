import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';
@inject(DataServices)

export class foos {
constructor(data) {
        this.data = data;
        this.USER_SERVICE = 'foos';
    }
}

export class Home {
	constructor(){
		this.message = "dannys foos table goes here";
	}
}

