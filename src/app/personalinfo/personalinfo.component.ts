import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PersonalInfoService } from "./personalinfo.service";

@Component({
  selector: "personalInfo-component",
  templateUrl: "personalinfo.component.html"
})
export class PersonalInfoComponent implements OnInit {
  rForm: FormGroup;
  post: any; // A property for our submitted form
  firstname: string = "";
  phone: string = "";
  email: string = "";
  lastname: string = "";
  jobTitle: string = "";
  organization: string = "";
  yearGraduation: string = "";
  collage: string = "";
  levelOfSd: string = "";
  yearPassed: string = "";
  highSchool: string = "";
  studentId: string = "";

  titleAlert: string = "This field is required";

  constructor(
    private fb: FormBuilder,
    private _personalInfoService: PersonalInfoService
  ) {
    this.rForm = fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      highSchool: "",
      studentId: "",
      yearPassed: "",
      levelOfSd: "",
      collage: "",
      yearGraduation: "",
      organization: "",
      jobTitle: "",
      validate: ""
    });
  }

  ngOnInit() {
    this.rForm.get("firstname").setValidators(Validators.required);
    this.rForm.get("lastname").setValidators(Validators.required);
    this.rForm.get("phone").setValidators(Validators.required);
    this.rForm.get("email").setValidators(Validators.required);
  }

  addPost(post) {
    console.log(post);
    this._personalInfoService
      .register(this.rForm.value)
      .subscribe(
        response => console.log("Success!", response),
        error => console.error("Error!", error)
      );
  }
}
