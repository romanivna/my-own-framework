import {initComponents} from "./component/init-components";
import {initRouting} from "./routing/init-routing";

export class Module {
    constructor(config){        //config - object with info about modules we have
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap;
        this.routes = config.routes;
    }

    start(){
        initComponents( this.bootstrapComponent,this.components );
        initRouting(this.routes);
    }

}

