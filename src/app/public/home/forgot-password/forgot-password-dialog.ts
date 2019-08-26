import { Component, OnInit, ViewEncapsulation, Inject, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseComponent } from '../../../common/commonComponents';

@Component({
    selector: 'forgot-password-dialog',
    templateUrl: 'forgot-password-dialog.html',
    styleUrls: ['forgot-password-dialog.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordDialog extends BaseComponent implements OnInit {

    forgotPasswordForm: FormGroup;

    constructor(inj: Injector, private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ForgotPasswordDialog>,
        @Inject(MAT_DIALOG_DATA) public data: {}) {
        super(inj);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        if (this.forgotPasswordForm.valid) {
            this.dialogRef.close();
            this.showSnackbar("S", "Link has been sent to your registered email Id.");
        } else {
            this.showSnackbar("E", "Something went wrong!");
        }
    }
}
