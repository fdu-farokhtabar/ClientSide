import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/models/account/auth.service';
import { TutorialModel } from 'src/app/core/models/tutorial/tutorial.model';
import { SharedDataService } from 'src/app/core/services/shareddata.service';
import { TutorialGrpcService } from 'src/app/core/services/tutorial-grpc.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  public Tutorials: Array<TutorialModel> = [];
  private accSub: Subscription | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private sharedData: SharedDataService, private account: AuthService, private Sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.account.IsValid();
    this.accSub = this.account.UserToken.subscribe(acc => {
      if (!acc || acc == "" || !this.account.HasPermissionToPage("Tutorial"))
        this.router.navigateByUrl('/');
    });
    this.LoadData();
    this.route.params.subscribe(() => {
      this.sharedData.SetMenuStatus(false)
    });
  }

  LoadData() {
    const tutorialService = new TutorialGrpcService(this.account);
    tutorialService.GetAll().then(data => {
      this.Tutorials = data;
    }).catch(data => {
    });
  }
  public SecureUrl(url: string): any {
    return this.Sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
