/**
 * 
 *  Document     : control.js
 *  Created on   : Feb 17, 2017, 3:40:00 AM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */
var chart;
var data;
google.charts.load("current", {packages: ["corechart", "line"]});
google.charts.setOnLoadCallback(ivg);
$(window).resize(function () {
    ivg();
});

function ivg() {
    data = new google.visualization.DataTable();
    data.addColumn('number', 't');
    data.addColumn('number', 'V');
    var options = {
        title: 'V - T Curve',
        curveType: 'function',
        'isStacked': true,
        pieSliceText: 'percentage',
        legend: {position: 'none'},
        chartArea: {
            left: "5%",
            top: "8%",
            height: "80%",
            width: "90%"
        },
        hAxis: {
            title: 'Time ( Micro Second)'
        },
        vAxis: {
            title: 'Voltage ( kV )'
        },
        colors: ['#a52714', '#097138'],
    };
    chart = new google.visualization.LineChart(document.getElementById('visualization'));
    chart.draw(data, options);

}


var chart1;
var data1;
google.charts.load("current", {packages: ["corechart", "line"]});
google.charts.setOnLoadCallback(ivg1);
$(window).resize(function () {
    ivg1();
});

function ivg1() {
    data1 = new google.visualization.DataTable();
    data1.addColumn('number', 'V');
    data1.addColumn('number', 'Probability');
    var options = {
        title: 'V - T Curve',
        curveType: 'function',
        'isStacked': true,
        tooltip: {isHtml: true},
        pieSliceText: 'percentage',
        legend: {position: 'none'},
        chartArea: {
            left: "10%",
            top: "10%",
            height: "70%",
            width: "80%"
        },
        hAxis: {
            title: 'Voltage level ( kV )'
        },
        vAxis: {
            title: 'Probability'
        },
        colors: ['#a52714', '#097138'],
    };
    chart1 = new google.visualization.LineChart(document.getElementById('chartContainer'));
//    data.sort({column: 0, desc: true});
//     data.sort({column: 1, desc: true});
    chart1.draw(data1, options);

}



var arrowSign = "&#x25BC;";
function changeThings() {
    if (arrowSign === "&#x25BC;") {
        document.getElementById("ckt_diagram").style.display = "none";
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("circle").innerHTML = "&#916;";
        arrowSign = "&#916;";
    } else {
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("ckt_diagram").style.display = "block";
        document.getElementById("circle").innerHTML = "&#x25BC;";
        arrowSign = "&#x25BC;";
    }
}

