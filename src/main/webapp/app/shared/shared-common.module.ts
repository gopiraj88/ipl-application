import { NgModule } from '@angular/core';

import { IplApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IplApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IplApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IplApplicationSharedCommonModule {}
