(function () {
  console.log('ready');
  // $(".beneficiary").html(beneficiary())
  var ticket_id = location.search.split('?ticket_id=')[1];
  if (ticket_id == undefined || ticket_id == '') {
    alert('please input ticket_id')
  } else {
    fetch(`/api/kpi-change/${ticket_id}`)
      .then(data => {
        var tb = 164246;
        beneficiary(tb)
        return data.json();
      }).then(json => {
        $('#title').text(json.title)
        $('#first_name').text(json.first_name)
        $('#last_name').text(json.last_name)
        $('#birthday').text(json.birthday)
        $('#sex').text(json.sex)
        $('#age').text(json.age)
        $('#marital_status').text(json.marital_status)
        $('#ssn').text(json.ssn)

        $('#address').text(json.address)
        $('#moo').text(json.moo)
        $('#village').text(json.village)
        $('#soi').text(json.soi)
        $('#road').text(json.road)
        $('#subdistrict').text(json.subdistrict)
        $('#district').text(json.district)
        $('#province').text(json.province)
        $('#zipcode').text(json.zipcode)

        $('#res_phone').text(json.res_phone)
        $('#res_collage').text(json.res_collage)
        $('#res_ext').text(json.res_ext)
        $('#bus_phone_1').text(json.bus_phone_1)
        $('#bus_collage_line_1').text(json.bus_collage_line_1)
        $('#bus_ext_1').text(json.bus_ext_1)
        $('#bus_phone_2').text(json.bus_phone_2)
        $('#bus_collage_line_2').text(json.bus_collage_line_2)
        $('#bus_ext_2').text(json.bus_ext_2)
        $('#fax_number').text(json.fax_number)
        $('#fax_ext').text(json.fax_ext)
        $('#mobile_phone_1').text(json.mobile_phone_1)
        $('#mobile_phone_2').text(json.mobile_phone_2)

        $('#credit_card').text(json.credit_card)
        $('#credit_card_type_desc').text(json.credit_card_type_desc)
        $('#credit_card_no').text(json.credit_card_no)
        $('#credit_card_exp_date').text(json.credit_card_exp_date)
        $('#credit_card_holder_name').text(json.credit_card_holder_name)
        $('#credit_card_holder_rel').text(json.credit_card_holder_rel)

        $('#debit_card').text(json.debit_card)
        $('#debit_card_type_desc').text(json.debit_card_type_desc)
        $('#debit_card_no').text(json.debit_card_no)
        $('#debit_card_exp_date').text(json.debit_card_exp_date)
        $('#debit_card_holder_name').text(json.credit_card_holder_name)
        $('#debit_card_holder_rel').text(json.debit_card_holder_rel)

        $('#bank_desc').text(json.bank_desc)
        $('#bank_account').text(json.bank_account)

        $('#main_occupation_desc').text(json.main_occupation_desc)
        if (json.sub_occupation_desc) {
          $('.sub_occupation_desc').removeClass('d-none');
          $('#sub_occupation_desc').text(json.sub_occupation_desc)
        }
        $('#other_occupation').text(json.other_occupation)

        $('#life_insure_desc').text(json.life_insure_desc)
        $('#non_life_insure_desc').text(json.non_life_insure_desc)
        $('#other_life_insure').text(json.other_life_insure)
        $('#budget').text(json.budget)

      }).catch(err => {
        console.log("not found 404");
        window.location = '/404'
      })

  }
})();

function beneficiary(ticket_id) {
  fetch(`/api/kpi-change/${ticket_id}/beneficiary`)
    .then(data => {
      var tb = 159131;
      question(tb)
      return data.json();
    }).then(json => {
      json.map(data => {
        $(".beneficiary").append(beneficiarylist(data))
      })
    })
}

function beneficiarylist(data) {
  var beneficiary = ""
  beneficiary += "<div class='row col-md-11 offset-md-1 padding-left-0'>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_order'>ลำดับที่ </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_order'>" + data.bn_order + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_ssn'>เลขที่บัตรประชาชน </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_ssn'>" + data.bn_ssn + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_first_name'>ชื่อ </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_first_name'>" + data.bn_first_name + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_last_name'>นามสกุล </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_last_name'>" + data.bn_last_name + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_sex'>เพศ </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_sex'>" + data.bn_sex + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_rel'>ความสัมพันธ์ </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_rel'>" + data.bn_rel + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_dob'>วันเดือนปี เกิด(พ.ศ.) </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_dob'>" + data.bn_dob + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 padding-left-0'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label class='font-weight-bold' for='bn_pct'>สัดส่วน </label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_pct'>" + data.bn_pct + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-12 line-end'></div>"
  return beneficiary;
}

function question(ticket_id) {
  fetch(`/api/kpi-change/${ticket_id}/question`)
    .then(data => {
      return data.json();
    }).then(json => {
      console.log(json);
      $('#question1').text(json.question1)
      $('#question2').text(json.question2)
      $('#question3').text(json.question3)
      $('#question4').text(json.question4)
      $('#question5').text(json.question5)
      $('#question6').text(json.question6)
      $('#question7').text(json.question7)
      $('#question8').text(json.question8)
      $('#question9').text(json.question9)
      $('#question10').text(json.question10)

      if (json.answer1 == "1" || json.answer1 == "0") {
        $('.Q1').removeClass('d-none');
        if (json.answer1) {
          $('#answer1_true').attr("checked", "checked")
        } else if (json.answer1 == 0) {
          $('#answer1_false').attr("checked", "checked")
        }
        $('#answer1_comment').text(json.answer1_comment)
      }
      if (json.answer2 == "1" || json.answer2 == "0") {
        $('.Q2').removeClass('d-none');
        if (json.answer2) {
          $('#answer2_true').attr("checked", "checked")
        } else if (json.answer2 == 0) {
          $('#answer2_false').attr("checked", "checked")
        }
        $('#answer2_comment').text(json.answer2_comment)
      }
      if (json.answer3 == "1" || json.answer3 == "0") {
        $('.Q3').removeClass('d-none');
        if (json.answer3) {
          $('#answer3_true').attr("checked", "checked")
        } else if (json.answer3 == 0) {
          $('#answer3_false').attr("checked", "checked")
        }
        $('#answer3_comment').text(json.answer3_comment)
      }
      if (json.answer4 == "1" || json.answer4 == "0") {
        $('.Q4').removeClass('d-none');
        if (json.answer4) {
          $('#answer4_true').attr("checked", "checked")
        } else if (json.answer4 == 0) {
          $('#answer4_false').attr("checked", "checked")
        }
        $('#answer4_comment').text(json.answer4_comment)
      }
      if (json.answer5 == "1" || json.answer5 == "0") {
        $('.Q5').removeClass('d-none');
        if (json.answer5) {
          $('#answer5_true').attr("checked", "checked")
        } else if (json.answer5 == 0) {
          $('#answer5_false').attr("checked", "checked")
        }
        $('#answer5_comment').text(json.answer5_comment)
      }
      if (json.answer6 == "1" || json.answer6 == "0") {
        $('.Q6').removeClass('d-none');
        if (json.answer6) {
          $('#answer6_true').attr("checked", "checked")
        } else if (json.answer6 == 0) {
          $('#answer6_false').attr("checked", "checked")
        }
        $('#answer6_comment').text(json.answer6_comment)
      }
      if (json.answer7 == "1" || json.answer7 == "0") {
        $('.Q7').removeClass('d-none');
        if (json.answer7) {
          $('#answer7_true').attr("checked", "checked")
        } else if (json.answer7 == 0) {
          $('#answer7_false').attr("checked", "checked")
        }
        $('#answer7_comment').text(json.answer7_comment)
      }
      if (json.answer8 == "1" || json.answer8 == "0") {
        $('.Q8').removeClass('d-none');
        if (json.answer8) {
          $('#answer8_true').attr("checked", "checked")
        } else if (json.answer8 == 0) {
          $('#answer8_false').attr("checked", "checked")
        }
        $('#answer8_comment').text(json.answer8_comment)
      }
      if (json.answer9 == "1" || json.answer9 == "0") {
        $('.Q9').removeClass('d-none');
        if (json.answer9 == "1") {
          $('#answer9_true').attr("checked", "checked")
        } else if (json.answer9 == "0"){
          $('#answer9_false').attr("checked", "checked")
        }
        $('#answer9_comment').text(json.answer9_comment)
      }
      if (json.answer10 == "1" || json.answer10 == "0") {
        $('.Q10').removeClass('d-none');
        if (json.answer10 == "1") {
          $('#answer10_true').attr("checked", "checked")
        } else if (json.answer10 == "0"){
          $('#answer10_false').attr("checked", "checked")
        }
        $('#answer10_comment').text(json.answer10_comment)
      }
    })

}

