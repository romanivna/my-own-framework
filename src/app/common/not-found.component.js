import {WFMComponent} from "framework";

class NotFound extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: `
    <div class="not-found">
        <div>
        <h2 class="pink darken-1">404 Not Found</h2>
        <a href="#">Go to Main</a>
        </div>
</div>
    `,
    styles: `
    .not-found {
        display:flex; 
        align-items: center; 
        justify-content: center;
        }
`
});