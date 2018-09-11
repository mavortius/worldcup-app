export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'FIFA WC 2018';

    config.map([
      {route: ['', 'home'], name: 'home', moduleId: 'home/app-home', title: 'Home'}
    ]);
  }
}
