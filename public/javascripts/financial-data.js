axios
   .get('http://api.coindesk.com/v1/bpi/historical/close.json')
   .then((response) => {
      console.log('response', response);
      // const dailydata = Object.keys(response.data.bpi);
      // const bpi = Object.values(response.data.bpi);
      // console.log(dailydata);
      // console.log(bpi);
      printTheChart(response)
   })
   .catch(err => 'error', err);



function printTheChart(bitcoinData) {
   
   const dailydata = Object.keys(bitcoinData.data.bpi);
   const bpi = Object.values(bitcoinData.data.bpi);

   const ctx = document.getElementById('my-chart').getContext('2d');

   const chart = new Chart(ctx, {
      type: 'line',
      data: {
         labels: dailydata,
         datasets: [
         {
            label: 'Bitcoin Price Index',
            backgroundColor: 'rgb(220,220,220)',
            borderColor: '	rgb(105,105,105)',
            data: bpi
         }
         ]
      }
   }); //closes chart = new Chart()
} // closes printTheChart()


