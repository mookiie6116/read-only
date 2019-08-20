(function () {
  console.log('ready');
  var ticket_id = location.search.split('?ticket_id=')[1];
  if (ticket_id == undefined || ticket_id == '') {
    alert('please input ticket_id')
  } else {
    fetch(`/api/kpi-conserv/${ticket_id}`)
      .then(data => {
        return data.json();
      }).then(json => {
        $('#cancel_conserv_status').text(json.cancel_conserv_status)
        $('#conserv_reason_1').text(json.conserv_reason_1)
        if(json.conserv_reason_2){
          $('.conserv_reason_2').removeClass('d-none');
          $('#conserv_reason_2').text(json.conserv_reason_2)
        }
        $('#conserv_reason_3').text(json.conserv_reason_3)
        $('#open_agent').text(json.open_agent)
        $('#open_date').text(json.open_date)

        if(json.conserv_tool_choice_1){
          $('#conserv_tool_choice_1').attr("checked","checked")
        }
        if(json.conserv_tool_choice_2){
          $('#conserv_tool_choice_2').attr("checked","checked")
        }

        if(json.conserv_tool_choice_3){
          $('.conserv_tool_choice_3').removeClass('d-none');
          $('#conserv_tool_choice_3').attr("checked","checked")
          $('#conserv_tool_choice_3_desc').text(json.conserv_tool_choice_3_desc)
        }

        if(json.conserv_tool_choice_3){
          $('.conserv_tool_choice_4').removeClass('d-none');
          $('#conserv_tool_choice_4').attr("checked","checked")
          $('#conserv_tool_choice_4_desc').text(json.conserv_tool_choice_3_desc)
        }

        if(json.conserv_request_1){
          $('#conserv_request_1').attr("checked","checked")
        }

        if(json.conserv_request_2){
          $('.conserv_request_2').removeClass('d-none');
          $('#conserv_request_2').attr("checked","checked")
          $('#conserv_request_2_from').text(json.conserv_request_2_from)
          $('#conserv_request_2_to').text(json.conserv_request_2_to)
        }


      }).catch(err=>{
        console.log("not found 404");
      })
  }
})();