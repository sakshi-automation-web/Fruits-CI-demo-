const {test,expect}= require ('@playwright/test');
//const {LoginPage}= require('../Projectobjects/Loginpage');
const {Dashboard} = require('../Projectobjects/Dashboard');

//json converted into string and to js object
const testdata = JSON.parse(JSON.stringify(require('../utils/logintestdata.json')));
for(const data of testdata){

test(`client App login for ${data.username}`, async ({page})=>{
const loginpage = new LoginPage(page);
await loginpage.goto();
await loginpage.validlogin(testdata.username,testdata.password);
const dashboard = new Dashboard(page);
await dashboard.goto();

});

}