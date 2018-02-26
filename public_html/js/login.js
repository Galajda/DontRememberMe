/* 
 * Copyright (C) 2018 Michal G.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//disable the checkbox
var chkBoxColl = document.getElementsByName('remember_me');
if (chkBoxColl.length === 1) {
    //react gracefully to a change in the content of the login screen
    var chkBox = chkBoxColl[0];
    chkBox.disabled = true;    
}
else {
    //notify user in popup.html that the page design has changed?
}

//alter the associated label
var lblColl = document.getElementsByTagName('label');
for (i=0; i < lblColl.length; i++) {
    if (lblColl[i].innerText.startsWith('Remember me')) {
        var theLbl = lblColl[i];
        theLbl.innerText = 'Remember me is disabled to protect your privacy';
        theLbl.style = 'color: red; cursor: default';
        //alternatively hide it entirely: theLbl.style = 'display: none';
    }
}