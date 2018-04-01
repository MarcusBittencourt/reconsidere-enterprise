export class Profile {

  basic = {
    name: '',
    location: '',
    cnpj: ''
  };

  assistance = {
    consultant: '',
    workload: '',
    visit: '',
    attendance: ''
  };

  production = {
    paper: false,
    plastic: false,
    glass: false,
    metal: false,
    isopor: false,
    fat: false,
    eletronic: false,
    organic: false,
    inorganic: false
  };

  account = {
    password: '',
    authtype: 'email'
  };

  signature = {
    payment: 0,
    salary: ''
  };

  constructor(data) {
    this.basic = data.basic;
    this.assistance = data.assistance;
    this.account = data.account;
    this.production = data.production;
    this.signature = data.signature;
  }

}
