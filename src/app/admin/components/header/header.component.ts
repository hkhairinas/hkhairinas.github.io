import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { DataService } from 'src/app/services/data.service';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  resumeDownloadLink = '#'; //Add Download Link here
  LinkedinLink = 'https://www.linkedin.com/in/hkhairinas/'; // Add Linkedin Link here
  GithubLink = 'https://github.com/hkhairinas'; // Add Github Link here
  TwitterLink = 'https://twitter.com/HKhairinas'; // Add Linkedin Link here

  messagesCount$: Observable<any>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.messagesCount$ = this.dataService.getMessagesCount();
  }

  public logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/'], { relativeTo: this.route }))
      .catch((err) => {
        console.log('Error logging out: ', err.message);
        this.router.navigate(['/'], { relativeTo: this.route });
      });
  }
}
