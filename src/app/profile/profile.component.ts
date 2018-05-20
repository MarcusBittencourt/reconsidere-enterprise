import { Component, OnInit, Inject } from '@angular/core';
import { StartcenterComponent } from '../startcenter/startcenter.component';
import { Profile } from '../../models/profile';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Configurações do Perfil';

  constructor(private af: AngularFireDatabase) { }
  hidepassword: boolean;
  hidepasswordv: boolean;

  profile: Profile;
  backup: Profile;

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.af.object('/companies/eowyn/profile')
    .valueChanges()
    .subscribe(data => { this.profile = new Profile(data); });
  }

  saveChanges() {
    this.doBackup();
    this.af.object('/companies/eowyn/profile').update(this.profile);
  }

  doBackup() {
    this.af.object('/companies/eowyn/profile')
    .valueChanges()
    .subscribe(data => { this.backup = new Profile(data); });
    this.af.object('/companies/eowyn/profile_bkp').update(this.backup);
  }

  restoreBackup() {
    this.af.object('/companies/eowyn/profile_bpk')
    .valueChanges()
    .subscribe(data => {
      this.backup = new Profile(data);
      this.profile = new Profile(data);
    });
    this.af.object('/companies/eowyn/profile').update(this.backup);
  }

  changePassword() {}
  cancelSingnature() {}
  verifyPassword() {}

}
