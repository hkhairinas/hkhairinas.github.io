import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  isLoading = false;
  isSucessful = false;
  formClassState = 'ui equal width form segment';

  contactMeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    contactNumber: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(12),
      // Validators.pattern(
      //   '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'
      // ),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(200),
    ]),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void { }

  public sendEmail() {
    this.toggleLoading();
    this.dataService.saveContactDetails(this.contactMeForm.value)
      .then(() => {
        this.toggleSuccess();
      })
      .catch(err => {
        console.error('An error has occured: ', err.message);
      })
      .finally(() => {
        this.contactMeForm.reset();
        if (!this.isSucessful) {
          this.toggleLoading();
        }
      });
  }

  public toggleLoading() {
    if (this.isLoading) {
      this.isLoading = false;
      this.formClassState = 'ui equal width form segment';
    } else {
      this.isLoading = true;
      this.formClassState = 'ui equal width form loading segment';
    }
  }

  public toggleSuccess() {
    if (this.isSucessful) {
      this.isSucessful = false;
      this.formClassState = 'ui equal width form segment';
    } else {
      this.isSucessful = true;
      this.formClassState = 'ui equal width form segment success';
    }
  }

  public hideSuccess(): boolean {
    return this.contactMeForm.touched;
  }
}

