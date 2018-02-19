/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var chkBoxColl = document.getElementsByName('remember_me');
var chkBox = chkBoxColl[0];
chkBox.disabled = true;

var lblColl = document.getElementsByTagName('label');
for (i=0; i < lblColl.length; i++) {
    if (lblColl[i].innerText.startsWith('Remember me')) {
//        theLbl = new HTMLLabelElement();
        theLbl = lblColl[i];
//        theLbl.htmlFor = '';
        theLbl.innerText = 'Remember me is disabled to protect your privacy';
        theLbl.style = 'color: red; cursor: arrow';
//        lblColl[i].innerText = 'Remember me is disabled to protect your privacy';

//        lblColl[i].style = 'color: red';
        
    }
}