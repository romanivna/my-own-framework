export class Module {
    constructor(config){        //config - object with info about modules we have
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap
    }

    start(){
        this.initComponents()
    }

    initComponents(){
        this.bootstrapComponent.render();
        this.components.forEach(c => c.render())
    }
}