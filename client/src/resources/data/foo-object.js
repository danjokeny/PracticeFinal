import { inject } from 'aurelia-framework';
import { DataServices } from './data-services';
@inject(DataServices)
export class Foo {
    constructor(data) {
                this.data = data;
                this.USER_SERVICE = 'foo';
        };

    async getUsers() {
        let response = await this.data.get(this.USER_SERVICE);
        if (!response.error) {
            this.usersArray = response;
        } else {
            this.usersArray = [];
        }
    };

};
