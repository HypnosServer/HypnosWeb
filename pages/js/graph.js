
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
      day: 'numeric'
    });
  }
function graphDate(date){
    return date.toLocaleString('en-US', { 
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
  
  //End function defs
  
  var xhr = new XMLHttpRequest(); 
  var json;
  var counts = [];
  var axis = [];
  //var axisr = Array(counts.length).fill().map((_, i) => i);
  var countserror = [];
  var url = "https://prod-118.westus.logic.azure.com:443/workflows/9129d9114fa747449644d4d76c32ad6d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CS82M4kCA7mgEeCW08-m1cWraanZsZJRA_wcaFwVjAE";
  xhr.open("POST", url, true); 
  xhr.setRequestHeader("Content-Type", "application/json"); 
  xhr.onreadystatechange = function () { 
      if (xhr.readyState === 4 && xhr.status === 200) { 
          json = JSON.parse(xhr.responseText); 
          json.forEach(element => {
           var now = element.player_count;
           var stamp = element.timestamp;
           counts.push(now == ""  ? null : parseInt(now));
           countserror.push(element.online == "false" ? 0 : null)
           axis.push(stamp == "" ? null : excelParse(stamp));
          });
          console.log(counts);
          console.log(axis);
          console.log(json);
       var trace1 = {
        type: 'scatter',
       y: counts,
       x: axis,
       name: "Player Count"
       };
       var trace2 = {
        type: 'scatter',
        y: countserror,
        x: axis,
        name: "Server Offline",
        line: {
            color: 'rgb(255, 0, 0)',
            width: '10px'
        },
        hoverinfo: 'name'        
    };
  
       var data = [trace1,trace2];
  
       var layout = {
       title: "Player Count over Time on " + simpleDate(new Date()),
       xaxis: {
        title: 'Time',
        tickformat: '%I:%M %p'
       },
       yaxis: {
        title: 'Player Count'
       },
       showlegend: false
  };
  
  Plotly.newPlot('graphDiv', data, layout, {displayModeBar: false});
      } 
  }; 
  xhr.send();   
