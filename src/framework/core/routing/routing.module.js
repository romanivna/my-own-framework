import {_} from "../../tools/util";
import {router} from "./router";
import {renderComponent} from "../component/render-component";
export class RoutingModule {
    constructor(routes){
        this.routes = routes;
    }

    init(){
        window.addEventListener('hashchange', renderRoute.bind(this));
        renderRoute.call(this);
    }
}

function renderRoute(){
    let url = router.getUrl();
    let route = this.routes.find(r => r.path === url);
    if (_.isUndefined(route)) {
        route = this.routes.find(r => r.path === '**')
    }
    console.log(route)
    if (Array.isArray(route.component)) {
        let sel = '';
        route.component.forEach((e) => {
            sel += `<${e.selector}></${e.selector}>`;
        });

        document.querySelector('router-outlet').innerHTML = sel;
        route.component.forEach((e) => {
            e.render()
        });
        console.log('there')
    } else {
        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        route.component.render()
    }

}