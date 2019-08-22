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
        fetch(`/api/kpi-change/${tb}/beneficiary`)
          .then(data => {
            return data.json();
          }).then(json => {
            json.map(data => {
              $(".beneficiary").append(beneficiary(data))
            })
          })
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

      }).catch(err=>{
        console.log("not found 404");
        window.location = '/404'
      })

  }
})();

function beneficiary(data) {
  console.log(data)
  var beneficiary = ""
  beneficiary += "<div class='row'>"

  beneficiary += "<div class='row col-sm-12 col-md-6'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='bn_order'>ลำดับที่ :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='bn_order'>" + data.bn_order + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6 row'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='ticket_id'>เลขที่บัตรประชาชน :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='ticket_id'>" + data.bn_ssn + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='ticket_id'>ชื่อ :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='ticket_id'>" + data.bn_first_name + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='ticket_id'>นามสกุล :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='ticket_id'>" + data.bn_last_name + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='ticket_id'>เพศ :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='ticket_id'>" + data.bn_sex + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='ticket_id'>ความสัมพันธ์ :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='ticket_id'>" + data.bn_rel + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='ticket_id'>วันเดือนปี เกิด(พ.ศ.) :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='ticket_id'>" + data.bn_dob + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  beneficiary += "<div class='row col-sm-12 col-md-6'>"
  beneficiary += "<div class='col-sm-5 padding-right-0'>"
  beneficiary += "<label for='ticket_id'>สัดส่วน :</label>"
  beneficiary += "</div>"
  beneficiary += "<div class='col-sm-7 padding-left-0'>"
  beneficiary += "<label class='padding-left-35' id='ticket_id'>" + data.bn_pct + "</label>"
  beneficiary += "</div>"
  beneficiary += "</div>"

  // beneficiary += "</div>"
  beneficiary += "<div class='col-sm-12 line-end'></div>"
  beneficiary += "</div>"
  return beneficiary;
}

