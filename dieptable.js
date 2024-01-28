
function format ( d ) {
// 'd' is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Abstract:</td>'+
            '<td>'+d.Abstract+'</td>'+
        '</tr>'+
        '<tr>' +
            '<td>Authors:</td>'+
            '<td>'+d.author1+d.author2+d.author3+d.author4+d.author5+d.author6+d.author7+
            d.author8+d.author9+d.author10+d.author11+d.author12+d.author13+d.author14+d.author15+
            d.author16+d.author17+d.author18+d.author19+d.author20+d.author21+d.author22+d.author23+
            d.author24+d.author25+d.author26+d.author27+d.author28+d.author29+d.author30+d.author31+
            d.author32+d.author33+d.author34+d.author35+d.author36+d.author37+d.author38+d.author39+
            d.author40+d.author41+d.author42+d.author43+d.author44+d.author45+'</td>'+
        '</tr>' +
    '</table>';
}

$(document).ready( function () {
    var table = $('#table_id').DataTable( {
        "ajax": "./diep.txt",
        "dom": 'Plfrtip',
        "columns": [
            {
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": '',
                "target": 0,
            },
            { "data": "Title" },
            { "data": "author1" },
            { "data": "author2" },
            { "data": "author3" },
            { "data": "author4" },
            { "data": "author5" },
            { "data": "author6" },
            { "data": "author7" },
            { "data": "author8" },
            { "data": "author9" },
            { "data": "author10" },
            { "data": "author11" },
            { "data": "author12" },
            { "data": "author13" },
            { "data": "author14" },
            { "data": "author15" },
            { "data": "author16" },
            { "data": "author17" },
            { "data": "author18" },
            { "data": "author19" },
            { "data": "author20" },
            { "data": "author21" },
            { "data": "author22" },
            { "data": "author23" },
            { "data": "author24" },
            { "data": "author25" },
            { "data": "author26" },
            { "data": "author27" },
            { "data": "author28" },
            { "data": "author29" },
            { "data": "author30" },
            { "data": "author31" },
            { "data": "author32" },
            { "data": "author33" },
            { "data": "author34" },
            { "data": "author35" },
            { "data": "author36" },
            { "data": "author37" },
            { "data": "author38" },
            { "data": "author39" },
            { "data": "author40" },
            { "data": "author41" },
            { "data": "author42" },
            { "data": "author43" },
            { "data": "author44" },
            { "data": "author45" },
            { "data": "Year" },
            { "data": "Publication" },
            { "data": "Country" },
            { "data": "Institution" },
            { "data": "City" },
            { "data": "Continent" }
        ],
        "order": [[1, 'asc']],
        "deferRender": true,
        "lengthMenu": [ [10, 25, 100, 500, 1000, -1], [10, 25, 100, 500, 1000, "All"] ],
        "info": false,
        "columnDefs": [
            {
                searchPanes: {
                    show: false
                },
                targets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
            },
            {
                targets: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
                visible: false
            } 
        ]
    } );
    $('#table_id tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );