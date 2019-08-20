(function () {
  console.log('ready');
  var ticket_id = location.search.split('?ticket_id=')[1];
  if (ticket_id == undefined || ticket_id == '') {
    alert('please input ticket_id')
  } else {
    fetch(`/api/kpi-cancel/${ticket_id}`)
      .then(data => {
        return data.json();
      }).then(json => {
        $('#cancel_conserv_status').text(json.cancel_conserv_status)
        $('#cancel_type_desc').text(json.cancel_type_desc)
        $('#cancel_reason_1').text(json.cancel_reason_1)
        if(json.cancel_reason_2){
          $('.cancel_reason_2').removeClass('d-none');
          $('#cancel_reason_2').text(json.cancel_reason_2)
        }
        $('#open_agent').text(json.open_agent)
        $('#open_date').text(json.open_date)
        if(json.cancel_request_1){
          $('.cancel_request_1').removeClass('d-none');
          $('#cancel_request_1').attr("checked","checked")
          $('#cancel_request_1_desc').text(json.cancel_request_1_desc)
          $('#cancel_request_1_desc2').text(json.cancel_request_1_desc2)
        }
        if(json.cancel_request_2){
          $('.cancel_request_2').removeClass('d-none');
          $('#cancel_request_2').attr("checked","checked")
          $('#cancel_request_2_desc').text(json.cancel_request_2_desc)
        }
        if(json.cancel_request_3){
          $('.cancel_request_3').removeClass('d-none');
          $('#cancel_request_3').attr("checked","checked")
          $('#cancel_request_3_desc').text(json.cancel_request_3_desc)
        }


      }).catch(err=>{
        console.log("not found 404");
      })
  }
})();