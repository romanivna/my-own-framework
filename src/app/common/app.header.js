import {WFMComponent} from "framework";

class AppHeader extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
     <nav>
    <div class="nav-wrapper teal lighten-3">
      <a href="#" class="brand-logo">Native framework</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#tabs">Tabs</a></li>
      </ul>
    </div>
  </nav>
    `
});