import { PageoneComponent } from "../components/pageone/pageone.component";
import { PagetwoComponent } from "../components/pagetwo/pagetwo.component";
import { ChildComponent } from "../components/child/child.component";
import { Routes } from "@angular/router";

export const appRoutes:Routes = [
    {path:"",component:PageoneComponent},
    {path:"page_two",component:PagetwoComponent,
     children:[ {path:"child/:message",component:ChildComponent},
                {path:"child/:message",component:ChildComponent}]}
];