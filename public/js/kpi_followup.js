(function () {
  console.log('ready');
  var ticket_id = location.search.split('?ticket_id=')[1];
  if (ticket_id == undefined || ticket_id == '') {
    alert('please input ticket_id')
  } else {
    fetch(`/api/kpi-followup/${ticket_id}`)
      .then(data => {
        return data.json();
      }).then(json => {
        $('#ticket_id').text(json.ticket_id)
        $('#add_name').text(json.add_name)
        $('#owner_name').text(json.owner_name)
        $('#open_time').text(json.open_time)
        $('#close_time').text(json.close_time)
        $('#ticket_status').text(json.ticket_status)

        $('#customer_id').text(json.customer_id)
        $('#caller_name').text(json.caller_name)
        $('#system').text(json.system)
        $('#subsystem').text(json.subsystem)
        $('#module').text(json.module)
        $('#item').text(json.item)
        $('#problem_type').text(json.problem_type)
        $('#subproblem_type').text(json.subproblem_type)
        if(json.mass_problem){
          $('#mass_problem').text(json.mass_problem)
        }
        $('#call_times').text(json.call_times)
        
        $('#customer_name').text(json.customer_name)
        $('#caller_phoneno').text(json.caller_phoneno)
        $('#channel').text(json.channel)
        $('#province').text(json.province)
        $('#severity_level').text(json.severity_level)
        $('#priority_level').text(json.priority_level)
        $('#need_day').text(json.need_day)
        $('#need_hr').text(json.need_hr)
        $('#need_mi').text(json.need_mi)
        $('#reminder_time').text(json.reminder_time)
        $('#close_date').text(json.close_date)
        $('#problem_detail').text(json.problem_detail)
        $('#resolved_detaill').text(json.resolved_detaill)

      }).catch(err=>{
        console.log("not found 404");
        window.location = '/404'
      })
  }
})();