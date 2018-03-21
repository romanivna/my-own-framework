import { WFMComponent } from "framework";

class TabsHelloComponent extends WFMComponent {
    constructor(config){
        super(config);

        this.data = {
            firstButtonName: 'Say Hello',
            secondButtonName: 'Say Goodbye'
        }
    }



    events(){
        return {
            'click .btn-hello' : 'onHelloClick',
            'click .btn-bye' : 'onByeClick'
        }
    }

    onHelloClick({target}) {
        alert('Hello!')
    }

    onByeClick({target}) {
        alert('Goodbye!')
    }
};

export const tabsHelloComponent = new TabsHelloComponent({
    selector: 'app-tabs-hello',
    template: `
<div class="btn-block">
<a class="waves-effect waves-light btn-large btn-hello">{{ firstButtonName}}</a>
<a class="waves-effect waves-light btn-large btn-bye">{{ secondButtonName}}</a>
</div>
        
`,
    styles: `
        .btn-block{
            width: 40%;
            margin: auto;
            text-align: center;
        }
`
});