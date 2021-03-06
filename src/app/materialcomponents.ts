import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatIconModule]
})
export class MaterialModule {}