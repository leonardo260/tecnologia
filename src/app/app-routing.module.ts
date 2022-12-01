import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './pages/tecnologia/listar-producto/listar-producto.component';

const routes: Routes = [
  {path: "", component: ListarProductoComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
