import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  signednum: number;
  dummy: number;
  input: string;
  output: number;
  outcome: boolean;

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;

    if (
      charCode !== 45 &&
      (charCode < 48 ||
        charCode > 57 ||
        this.signednum > 99 ||
        this.signednum < -99)
    ) {
      console.log("charCode restrictrd is " + charCode);

      return false;
    }

    return true;
  }
  answere() {
    this.outcome = false;
    if (this.signednum % 1 == 0) {
      this.outcome = true;
      this.output = this.signednum;
    }
  }
}

/*  if (charCode !== 45&&(
        charCode < 48 ||
        charCode > 57 ||
        this.signednum > 99 ||
        this.signednum < -99
      )) {
     
      console.log("charCode restrictrd is " + charCode);
        return false;
    }

    return true;
  

*/
