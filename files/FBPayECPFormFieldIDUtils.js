__d(
  "FBPayECPFormFieldIDUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = l(e);
      return n != null && t === !0 ? "nux_" + n : n;
    }
    function l(e) {
      switch (e) {
        case "cardNumber":
          return "new_card_number_form_field";
        case "securityCode":
          return "new_cvv_form_field";
        case "expireDate":
          return "new_expiry_date_form_field";
        case "fullName":
          return "new_full_name_form_field";
        case "care_of":
          return "new_care_of_form_field";
        case "country_code":
        case "country":
          return "new_country_picker";
        case "street1":
          return "new_address1_form_field";
        case "street2":
          return "new_address2_form_field";
        case "city":
          return "new_city_form_field";
        case "state":
          return "new_state_form_field";
        case "zip":
          return "new_zip_code_form_field";
        case "email":
          return "new_email_form_field";
        default:
          return;
      }
    }
    i.castFieldIDToUPLFieldName = e;
  },
  66,
);
