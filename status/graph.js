
function excelParse(excelDate) {
    // JavaScript dates can be constructed by passing milliseconds
    // since the Unix epoch (January 1, 1970) example: new Date(12312512312);
  
    // 1. Subtract number of days between Jan 1, 1900 and Jan 1, 1970, plus 1 (Google "excel leap year bug")             
    // 2. Convert to milliseconds.
      return new Date((excelDate - (25567 + 1))*86400*1000);
  }
  
  function hourFormat(date){
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
  
  function simpleDate(date){
    return date.toLocaleString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  //End function defs
  
  var xhr = new XMLHttpRequest(); 
  var json;
  var counts = [];
  var axis = [];
  var url = "https://prod-118.westus.logic.azure.com:443/workflows/9129d9114fa747449644d4d76c32ad6d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CS82M4kCA7mgEeCW08-m1cWraanZsZJRA_wcaFwVjAE";
  xhr.open("POST", url, true); 
  xhr.setRequestHeader("Content-Type", "application/json"); 
  xhr.onreadystatechange = function () { 
      if (xhr.readyState === 4 && xhr.status === 200) { 
          json = JSON.parse(xhr.responseText); 
          json.forEach(element => {
           var now = element.player_count;
           var stamp = element.timestamp;
           counts.push(now == "" ? null : parseInt(now));
           axis.push(stamp == "" ? null : hourFormat(excelParse(stamp)));
          });
          //axis = Array(counts.length).fill().map((_, i) => i);
          console.log(counts);
          console.log(axis);
       var trace1 = {
       y: counts,
       x: axis,
       mode: 'scatter',
       connectgaps: true
       };
  
       var data = [trace1];
  
       var layout = {
       title: "Player Count over Time on " + simpleDate(new Date()),
       xaxis: {
        title: 'Time'
       },
       yaxis: {
        title: 'Player Count'
       }
  };
  
  Plotly.newPlot('graphDiv', data, layout);
      } 
  }; 
  xhr.send();   