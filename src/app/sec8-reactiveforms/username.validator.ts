import { AbstractControl, Validator, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') >= 0 ) {
           // return { minLength: {requiredLength: 10, actualLength: control.value.length}}
            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
        setTimeout(() => {
            console.log('ok', control.value  === 'roja');
            if (control.value  === 'roja')  {
                return { shouldBeUnique: true };
            }
            return null;
        }, 2000);
        // if (control.value  === 'roja')  {
        //     return { shouldBeUnique: true };
        // }
        return null;
     }
}
