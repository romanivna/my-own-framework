import {WFMComponent} from "framework";

class AppMain extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const appMain = new AppMain({
    selector: 'app-main',
    template: `
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="card">
            <div class="card-image">
              <img src="http://ostrov-na-donu.ru/wp-content/uploads/2016/03/IMG_8178-1800x1800.jpg">
              <span class="card-title">Hello World!</span>
            </div>
            <div class="card-content">
              <p>This is a test SPA.<br>
              There can be any text. Including your advertising.<br>
              All rights reserved.</p>
            </div>
            <div class="card-action">
              <a href="#tabs">Have fun</a>
            </div>
          </div>
        </div>
      </div>
    `
});