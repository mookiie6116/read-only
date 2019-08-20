(function () {
  console.log('ready');
  var ticket_id = location.search.split('?ticket_id=')[1];
  if (ticket_id == undefined || ticket_id == '') {
    alert('please input ticket_id')
  } else {
    fetch(`/api/kpi-problem/${ticket_id}`)
      .then(data => {
        return data.json();
      }).then(json => {

      }).catch(err=>{
        console.log("not found 404");
      })
  }
})();