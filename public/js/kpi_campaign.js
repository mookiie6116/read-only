
(function () {
  console.log('ready');
  var ticket_id = '112151'
  fetch(`/api/kpi-campaign/${ticket_id}`)
  .then(data => {
    return data.json();
  }).then(json=>{
    console.log(json);
    $('#complain_desc').text(json.complain_desc)
    $('#reference_id').text(json.reference_id)
    $('#firstname').text(json.firstname)
    $('#lastname').text(json.lastname)
    $('#reason_1').text(json.reason_1)
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
  })
})()

