(function () {
  console.log('ready');
  var ticket_id = location.search.split('?ticket_id=')[1];
  if (ticket_id == undefined || ticket_id == '') {
    alert('please input ticket_id')
  } else {
    fetch(`/api/kpi-claim/${ticket_id}`)
      .then(data => {
        return data.json();
      }).then(json => {
        $('#claim_date').text(json.claim_date)
        $('#kpi_id').text(json.kpi_id)
        $('#policy_id').text(json.policy_id)
        $('#relation').text(json.relation)
        $('#firstname').text(json.firstname)
        $('#lastname').text(json.lastname)
        $('#address').text(json.address)
        $('#mobile_phone').text(json.mobile_phone)
        $('#home_phone').text(json.home_phone)
        $('#work_phone').text(json.work_phone)
        $('#fax_phone').text(json.fax_phone)
        $('#occurance_time').text(json.occurance_time)
        $('#occurance_place').text(json.occurance_place)
        $('#claim_type').text(json.claim_type)
        $('#occurance_desc').text(json.occurance_desc)
        $('#symptom_desc').text(json.symptom_desc)
        $('#operators').text(json.operators)
        $('#operate_date').text(json.operate_date)

        $('#rc_consider').text(json.rc_consider)
        if("ปฏิเสธสินไหม" == json.rc_consider){
          $('.rc_consider').removeClass('d-none');
          $('#rc_reject_reason').text(json.rc_reject_reason)
        }
        $('#rc_date').text(json.rc_date)
        $('#rc_occurance_date').text(json.rc_occurance_date)

        $('#rc_type_1').text(json.rc_type_1)
        $('#rc_fname_received0_1').text(json.rc_fname_received0_1)
        $('#rc_lname_received0_1').text(json.rc_lname_received0_1)
        $('#rc_payment0_1').text(json.rc_payment0_1)
        
        $('#rc_type_2').text(json.rc_type_1)
        $('#rc_fname_received0_2').text(json.rc_fname_received0_1)
        $('#rc_lname_received0_2').text(json.rc_lname_received0_1)
        $('#rc_payment0_2').text(json.rc_payment0_1)

        $('#rc_type_3').text(json.rc_type_1)
        $('#rc_fname_received0_3').text(json.rc_fname_received0_1)
        $('#rc_lname_received0_3').text(json.rc_lname_received0_1)
        $('#rc_payment0_3').text(json.rc_payment0_1)


        $('#rc_payment_date').text(json.rc_payment_date)
        $('#rc_chanel').text(json.rc_chanel)
        $('#rc_comment').text(json.rc_comment)
        $('#rc_operate').text(json.rc_operate)
        $('#rc_operate_date').text(json.rc_operate_date)

        $('#finance_name').text(json.finance_name)
        $('#finance_date').text(json.finance_date)
        $('#finance_comment').text(json.finance_comment)
      }).catch(err=>{
        console.log("not found 404");
      })
  }
})();