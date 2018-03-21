import { WFMComponent, router } from "framework";

class HeaderLogoComponent extends WFMComponent {
    constructor(config){
        super(config);

        this.data = {
            title: 'Card Title',
            linkTitle: 'goToTabs'
        }
    }
};

export const headerLogoComponent = new HeaderLogoComponent({
   selector: 'app-header-logo',
   template: `
     <div class='header-logo'>
       <div class="wrapper-logo">
       </div>
        <div class="logo">
            <img src="http://svaskalver.ru/wp-content/uploads/2017/04/Svaskalver-1.png"/>
        </div>
     </div>
`,
    styles: `
        .header-logo {
            width: 100%;
            height: 40%;
            background: url('https://www.stihi.ru/pics/2015/05/18/881.jpg');
            background-size: cover;
        }
        
        .logo {
        position: relative;
        top: 30px;
        margin: auto;
             max-width: 40%;
             height: 90%;
        z-index: 2;
            text-align: center;
        }
        
        .logo img {
            max-width: 100%;
            max-height: 90%;
            margin: auto;
        }
        
        .wrapper-logo{
        position: absolute;
            width: 100%;
            height: 40%;
            background: white;
            opacity: 0.4;
        }
`
});