import { inject } from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class DataServices {

	constructor(http) {
		this.httpClient = http;
		this.BASE_URL = "http://git.ucc.uwm.edu/";

		this.httpClient.configure(config => {
			config
				.withBaseUrl(this.BASE_URL)
				.withDefaults({
				credentials: 'same-origin',
				headers: {
					'Accept': 'application/json',
					'X-Requested-With': 'Fetch'
				}
				})
				.withInterceptor({
				request(request) {
					console.log('Requesting ${request.method} ${request.url}');
					return request;
				},
				response(response) {
					console.log('Received ${response.status} ${response.url}');
					return response;
				}
				});
			});
	};

	get(url) {
		return this.httpClient.fetch(url)
			.then(response => response.json())
			.then(data => {
				return data;
			})
			.catch(error => {
				return error;
			});
	}


}