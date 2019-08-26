import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, Inject, Injector, Directive } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseComponent } from '../../../common/commonComponents';
// import { MatSlideToggleChange } from '@angular/material';

@Component({
    selector: 'register-dialog',
    templateUrl: 'register-dialog.html',
    styleUrls: ['register-dialog.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterDialog extends BaseComponent implements OnInit {

    isLinear = true;
    personalForm: FormGroup;
    accountForm: FormGroup;
    passwordHide = true;
    confirmPasswordHide = true;
    isPasswordFocus = false;
    strengthValue = "";
    isPasswordMatch = false;
    isAcceptTC = false;
    maxDate: any;
    // locationForm: FormGroup;
    completedForm: FormGroup;

    constructor(inj: Injector, private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<RegisterDialog>,
        @Inject(MAT_DIALOG_DATA) public data: {}) {
        super(inj);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.createForm();
        this.setMaxDate();
    }

    createForm() {
        this.personalForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            aboutMe: [''],
            gender: [''],
            dob: ['', [Validators.required]]
        });
        this.personalForm.controls['gender'].setValue('M');
        this.accountForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]]
        });
        this.completedForm = this.formBuilder.group({
            acceptTermsAndCondition: [''],
            subscribeNewsLetters: [''],
        });
        // this.locationForm = this.formBuilder.group({
        //     email: ['', [Validators.required, Validators.email]]
        // });
        // this.completeForm = this.formBuilder.group({
        //     email: ['', [Validators.required, Validators.email]]
        // });
    }

    // onSubmit() {
    //     if (this.registerForm.valid) {
    //         this.dialogRef.close();
    //         this.showSnackbar("S", "Link has been sent to your registered email Id.");
    //     } else {
    //         this.showSnackbar("E", "Something went wrong!");
    //     }
    // }

    telInputObject(event) {
        console.log('click', event);
    }
    onCountryChange(event) {
        console.log('click', event);
    }
    hasError(event) {
        console.log('click', event);
    }
    getNumber(event) {
        console.log('click', event);
    }
    onStrengthChanged(event) {
        if (event <= 30) {
            this.strengthValue = "Poor";
        } else if (event >= 31 && event <= 60) {
            this.strengthValue = "Good"
        } else if (event >= 61 && event <= 90) {
            this.strengthValue = "Strong"
        } else {
            this.strengthValue = "Super strong"
        }
        console.log('click', event);
    }
    // resetConfirmPassword(){
    //     this.accountForm.controls['confirmPassword'].setValue('');
    // }

    setMaxDate() {
        let now = this.moment(); // add this 2 of 4
        var subtractDate = now.subtract(10, 'years').format();
        this.maxDate = new Date(subtractDate);
    }

    async signInWithGoogle() {
        var response = await this.socialSignInWithGoogle();
        console.log("response", response);
    }

    async signInWithFB() {
        var response = await this.socialSignInWithFB();
        console.log("response", response);
    }
}
