import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
   templateUrl: "preferences.component.html"
})
export class PreferencesComponent {
  
  form: FormGroup;
  preferences = [
    {
     Id: 1,
     Name: "Voluntering",
     Checked: false
    },
    {
      Id: 2,
      Name: "News Letter",
      Checked: false
    },
    {
      Id: 3,
      Name: "Event Alert",
      Checked: false
    } ,
    {
      Id: 3,
      Name: "Articla/Offering",
      Checked: false
    }        
  ]

  constructor(private formBuilder: FormBuilder) {
    // this.form = this.formBuilder.group({
    //   preferences :this.preferences,
    // });
  }
   
    
    submitCheckBox() {
      console.log(this.preferences);
    }


}
