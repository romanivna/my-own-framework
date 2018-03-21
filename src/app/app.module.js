import { WFMModule } from "framework";
import { appComponent } from "./app.component"
import {appHeader} from "./common/app.header";
import {appRoutes} from "./app.routes";
import {headerLogoComponent} from "./pages/home-page.component";

class AppModule  extends WFMModule {
    constructor(config){
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
        headerLogoComponent
    ],
    bootstrap: appComponent,
    routes: appRoutes
});