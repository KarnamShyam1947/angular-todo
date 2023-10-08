import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from "@angular/material/select"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from '@angular/material/core'

@NgModule({
    exports:[
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
    ]
})
export class MaterialModule {}