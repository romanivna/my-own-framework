import { _ } from '../../tools/util'

export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.styles = config.styles;
        this.el = null;
    }

    render(){

        initStyles(this.styles);
        this.el = document.querySelector(this.selector);
        if (!this.el) throw new Error(`Component with selector ${this.selector} was'n found`);
        this.el.innerHTML = compileTemplate(this.template, this.data);

        initEvents.call(this);
    }
}

function initEvents() {
    if (_.isUndefined(this.events)) return;

    let events = this.events();
    Object.keys(events).forEach(key => {
        let listener = key.split(' ');
        this.el
            .querySelector(listener[1])
            .addEventListener(listener[0], this[events[key]].bind(this));


    });
}

function compileTemplate(template, data){

    if(_.isUndefined(data)) return template;

    let regexp = /\{{.*}}/g;

    template = template.replace(regexp, (str) => {
        let key = str.replace('{{', '').replace('}}', '').trim();
        return data[key]
    });

    return template
}

function initStyles(styles) {
    if(_.isUndefined(styles)) return;

    let style = document.createElement('style');
    style.innerHTML = styles;
    document.head.appendChild(style)
}