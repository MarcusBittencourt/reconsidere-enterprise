import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { EOWYN_URL } from '../app.apis';

@Component({
  selector: 'app-codegen',
  templateUrl: './codegen.component.html',
  styleUrls: ['./codegen.component.css']
})
export class CodegenComponent implements OnInit {

  type = 'url';
  codes: any;
  material: string;
  enterprise: string;
  quantity: number;

  constructor(private af: AngularFireDatabase) {
  }

  createQRCodes() {
    for (let gen = 0; gen < this.quantity; gen++) {
      const key = this.af.createPushId();
      this.af.list('/qrcodes').set(key, this.generateCode(this.enterprise, this.material, key));
    }
  }

  private generateCode(enterprise: string, material: string, id: string): any {
    return {
      url: EOWYN_URL + `${enterprise}/${material}/${id}`,
      status: 'pending',
      creationDate: new Date().toLocaleDateString(),
      key: id
    };
  }

  discontinue(key: string, code: any) {
    this.af.list('/qrcodes').update(key, {status: 'discontinued'});
  }

  track(key: string) {}

  ngOnInit() {
    this.codes = this.af.list('/qrcodes').valueChanges();
  }

}
