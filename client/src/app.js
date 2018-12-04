export class App {
  constructor() {
    this.message = 'Hello Professor! This is Dannys Practice Final';
  };

  configureRouter(config, router) {
    this.router = router;
    config.map([
      {
        route: ['', 'home'],
        moduleId: './modules/home',
        name: 'home'
      },
      {
        route: ['foos'],
        moduleId: './modules/foos',
        name: 'foos'
      }
    ]);
  }
}
