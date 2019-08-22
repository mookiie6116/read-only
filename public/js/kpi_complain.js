(function () {
  console.log('ready');
  var ticket_id = location.search.split('?ticket_id=')[1];
  if(ticket_id == undefined || ticket_id == ''){
    alert('please input ticket_id')
  }else{
  fetch(`/api/kpi-campaign/${ticket_id}`)
  .then(data => {
    return data.json();
  }).then(json=>{
    $('#complain_desc').text(json.complain_desc)
    $('#reference_id').text(json.reference_id)
    $('#firstname').text(json.firstname)
    $('#lastname').text(json.lastname)
    $('#reason_1').text(json.reason_1)
    if(json.reason_2){
      $('.reason_2').removeClass('d-none');
    }
    $('#reason_2').text(json.reason_2)
    $('#remarks').text(json.remarks)
    $('#create_by').text(json.create_by)
    $('#create_date').text(json.create_date)

    $('#result_operation').text(json.result_operation)
    $('#result_document').text(json.result_document)
    $('#result_contact_person').text(json.result_contact_person)
    $('#result_position').text(json.result_position)
    $('#appointment_date').text(json.appointment_date)
    $('#result_sumerize').text(json.result_sumerize)
    $('#result_by').text(json.result_by)
    $('#result_date').text(json.result_date)
  }).catch(err=>{
    console.log("not found 404");
    window.location = '/404'
  })
}
})()



