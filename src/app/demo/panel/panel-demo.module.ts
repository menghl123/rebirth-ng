import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelDemoComponent } from './panel-demo.component';
import { RebirthNGModule } from '../../exports';

@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [PanelDemoComponent],
  declarations: [PanelDemoComponent],
  providers: [],
  entryComponents: [PanelDemoComponent]
})
export class PanelDemoModule {
}
