import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgModule } from '@angular/core';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FormsModule } from '@angular/forms';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports:[
        SweetAlert2Module.forRoot(),
        InternationalPhoneNumberModule,
        Ng2TelInputModule,
        FormsModule,
        MatPasswordStrengthModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCpb1vBGtqyDsRJoMZtpKGCmjPLUv1SfP8'
        }),
        NgbModule
    ],
    exports: [
        SweetAlert2Module,
        InternationalPhoneNumberModule,
        Ng2TelInputModule,
        FormsModule,
        MatPasswordStrengthModule,
        AgmCoreModule,
        NgbModule
    ]
})
export class SharedModule {}