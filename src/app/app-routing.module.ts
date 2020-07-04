import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { InventoryComponent } from './components/inventory/inventory.component';


const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'logs', component: MainContentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InventoryComponent, MainContentComponent];