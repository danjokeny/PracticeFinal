import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
@inject(Router)
export class NavBar {
    constructor(router) {
        //this.authenticated = false;
        this.router = router;
    }
};
