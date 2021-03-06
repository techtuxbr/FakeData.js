var Person = require('./data/person');
var Internet = require('./data/internet');
var CompanyDataFDJS = require('./data/company');
var JsonDataFaker = {
  name(gender = "all"){
    if(gender == "all" || gender != "male" && gender != "female"){
      if(this.getRandNumber(1,2) == 1){
          return this.getMaleFirstName() + " " + this.getMaleLastName();
      }else{
          return this.getFemaleFirstName() + " " + this.getFemaleLastName();
      }
    }else if (gender == "male") {
      return this.getMaleFirstName() + " " + this.getMaleLastName();
    }else if(gender == "female"){
      return this.getFemaleFirstName() + " " + this.getFemaleLastName();
    }
  },

  firstName(gender = "all"){
    if(gender == "all" || gender != "male" && gender != "female"){
      if(this.getRandNumber(1,2) == 1){
          return this.getMaleFirstName();
      }else{
          return this.getFemaleFirstName();
      }
    }else if (gender == "male") {
      return this.getMaleFirstName();
    }else if(gender == "female"){
      return this.getFemaleFirstName()
    }
  },

  lastName(gender = "all"){
    if(gender == "all" || gender != "male" && gender != "female"){
      if(this.getRandNumber(1,2) == 1){
          return this.getMaleLastName();
      }else{
          return this.getFemaleLastName();
      }
    }else if (gender == "male") {
      return this.getMaleLastName();
    }else if(gender == "female"){
      return this.getFemaleLastName();
    }
  },

  username(){
    return Internet.username[this.getRandNumber(0,Internet.username.length)]
  },

  email(){
    return this.username() + this.getRandNumber(0,999) + "@" + Internet.email[this.getRandNumber(0,Internet.email.length)]
  },

  emailDomain(){
    return Internet.email[this.getRandNumber(0,Internet.email.length)]
  },

  companyEmail(){
    var companyDomain = this.companyName()
    companyDomain = companyDomain.trim()
    companyDomain = companyDomain.toLowerCase() + Internet.domainExtension[this.getRandNumber(0,Internet.domainExtension.length)]
    companyDomain = this.myTrim(companyDomain)
    return this.username() + this.getRandNumber(0,999) + "@" + companyDomain
  },

  domain(){
    return this.username() + Internet.domainExtension[this.getRandNumber(0,Internet.domainExtension.length)]
  },

  ipv4(){
    return this.getRandNumber(1,255) + "." + this.getRandNumber(0,255) + "." + this.getRandNumber(0,255) + "." + this.getRandNumber(0,255)
  },

  ipv4Local(){
    return this.getRandNumber(5,25) + "." + this.getRandNumber(0,255) + "." + this.getRandNumber(0,80) + "." + this.getRandNumber(0,20)
  },

  companyName(){
    return CompanyDataFDJS.companyNames[this.getRandNumber(0,CompanyDataFDJS.companyNames.length)]
  },

  getRandNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  },

  getMaleFirstName(){
    var name = Person.namesMale[this.getRandNumber(0,Person.namesMale.length)];
    var trimPos = name.search(" ");
    return name.slice(0,trimPos);
  },

  getMaleLastName(){
    var name = Person.namesMale[this.getRandNumber(0,Person.namesMale.length)];
    var trimPos = name.search(" ");
    return name.slice(trimPos+1,name.length);
  },

  getFemaleFirstName(){
    var name = Person.namesFemale[this.getRandNumber(0,Person.namesFemale.length)];
    var trimPos = name.search(" ");
    return name.slice(0,trimPos);
  },

  getFemaleLastName(){
    var name = Person.namesFemale[this.getRandNumber(0,Person.namesFemale.length)];
    var trimPos = name.search(" ");
    return name.slice(trimPos+1,name.length);
  }
}

module.exports = JsonDataFaker;
