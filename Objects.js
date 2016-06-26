/**
 * Created by inktech.n.kikov on 26-Jun-16.
 */
function objects() {
    let obj = {name:"SoftUni"};
    obj.age = 10;
    obj.site = "http://softuni.bg";
    obj.name = "SoftwareUniversity";
    obj.gender = 'M';
    obj.color = "blue";
    console.log(JSON.stringify(obj));
}
function objectWithName() {
    let objUser = {name:"Pesho"}
    objUser.age = 20;
    objUser.family = "Klqnkov";
    objUser.county = "Bulgaria";
    objUser.town = "Plovdiv";
   console.log(JSON.stringify(objUser));
   }
objects()
objectWithName()