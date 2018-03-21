import { headerLogoComponent } from './pages/home-page.component';
import { tabsPageComponent } from './pages/tabs/tabs-page.component';
import { tabsHelloComponent } from './pages/tabs/tabs-hello.component';
import {notFound} from "./common/not-found.component";
import {appMain} from "./pages/home/home";

export const appRoutes = [
    {
        path: '',
        component: [
            headerLogoComponent,
            appMain
            ]
    },
    {
        path: 'tabs',
        component: [
            tabsPageComponent,
            tabsHelloComponent
            ]
    },
    {
        path: '**',
        component: notFound
    }

];

