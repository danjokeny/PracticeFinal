import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';
@inject(DataServices)
export class Foo {
constructor(data) {
        this.data = data;
        this.USER_SERVICE = 'foo';
    }
}
