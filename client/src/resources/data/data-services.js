import { inject } from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class DataServices {

	constructor(http) {
		this.httpClient = http;
		this.BASE_URL = "http://git.ucc.uwm.edu/";
	}

}
