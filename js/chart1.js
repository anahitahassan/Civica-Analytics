window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "light2",
        title:{
            text: "Republican Affliation vs Voter Turnout (by demographic group)"
        },
        axisX: {
                title:"Republican Political Lean",
                suffix: "%",
                minimum: 0,
                maximum: 100,
                gridThickness: 1,
                margin: 10
        },
        axisY:{
            title: "Voter Turnout (in %)",
            suffix: "%",
            minimum: 0,
            maximum: 100
        },
        legend:{
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        data: [{
            type: "bubble",
            name: "Age",
            toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
            showInLegend: true,
            dataPoints: [ //https://www.pewresearch.org/fact-tank/2018/04/03/millennials-approach-baby-boomers-as-largest-generation-in-u-s-electorate/
                 //x = % republican, y = % voter turnout, z = size (millions) -->
                { x: 32, y: 51, z:30, name:"18-35 (Millennial)" },
                { x: 43, y: 63, z:25, name:"36-51 (Gen X)" },
                { x: 46, y: 69, z:31, name:"52-70 (Boomer)" },
                { x: 52, y: 70, z:13, name:"71+ (Silent/Greatest)"}
            ]
        },
        {
            type: "bubble",
            name: "Education Level",
            toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
            showInLegend: true,
            dataPoints: [ 
                 /*x = % republican, y = % voter turnout, z = size (percentage of population) 
                 x: https://www.pewresearch.org/politics/2015/04/07/party-identification-trends-1992-2014/#education
                 y: https://www.census.gov/library/stories/2019/04/behind-2018-united-states-midterm-election-turnout.html
                 z: https://www.census.gov/library/stories/2019/02/number-of-people-with-masters-and-phd-degrees-double-since-2000.html 
                 */
                { x: 37, y: 42.1, z:29.5, name:"High school diploma or less" },
                { x: 42, y: 54.5, z:26.4, name:"Some college or associate's degree" },
                { x: 40, y: 65.7, z:20.5, name:"Bachelor's degree"},
                { x: 36, y: 74.0, z:12, name:"Advanced degree"}
            ]
        },
        {
            type: "bubble",
            name: "Race",
            toolTipContent: "<b>{name}</b><br/> % Republican: {x}% <br/> Voter Turnout: {y}% <br/> Size (millions): {z}",
            showInLegend: true,
            dataPoints: [ 
                 /*x = % republican, y = % voter turnout, z = size (percentage of population) 
                 x: https://www.pewresearch.org/politics/2018/03/20/1-trends-in-party-affiliation-among-demographic-groups/
                 y: https://www.census.gov/library/stories/2019/04/behind-2018-united-states-midterm-election-turnout.html 
                 z: https://www.pewresearch.org/fact-tank/2019/05/01/historic-highs-in-2018-voter-turnout-extended-across-racial-and-ethnic-groups/
                 */
                { x: 51, y: 57.5, z:72.8, name:"White" },
                { x: 8, y: 51.4, z:11.9, name:"Black" },
                { x: 27, y: 40.2, z:3.5, name:"Asian"},
                { x: 28, y: 40.4, z:9.6, name:"Hispanic/miscellaneous"}
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }