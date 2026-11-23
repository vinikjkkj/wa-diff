__d(
  "WAMFlowsCTWAFormInputTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      ADDRESS: [
        "street_address",
        "city",
        "state",
        "province",
        "country",
        "post_code",
        "zip_code",
      ],
      CONTACT_INFORMATION: [
        "full_name",
        "first_name",
        "last_name",
        "phone_number",
        "whatsapp_number",
        "email",
      ],
      CUSTOM: [
        "text",
        "number",
        "paragraph",
        "date_picker",
        "single_choice",
        "multiple_choice",
      ],
      DEMOGRAPHIC: ["date_of_birth", "gender"],
      NATIONAL_ID: [
        "dni_argentina",
        "cnpj_brazil",
        "cpf_brazil",
        "rut_chile",
        "cc_colombia",
        "ci_ecuador",
        "rfc_mexico",
        "dni_peru",
      ],
      WORK_INFORMATION: ["job_title", "company_name"],
    };
    function l(e) {
      return (
        e === "cnpj_brazil" ||
        e === "cpf_brazil" ||
        e === "dni_argentina" ||
        e === "dni_peru" ||
        e === "rut_chile" ||
        e === "cc_colombia" ||
        e === "ci_ecuador" ||
        e === "rfc_mexico"
      );
    }
    var s = new Set([
        "text",
        "number",
        "paragraph",
        "date_picker",
        "single_choice",
        "multiple_choice",
      ]),
      u = {
        gender: [
          { id: "0_Male", title: "Male" },
          { id: "1_Female", title: "Female" },
          { id: "2_Non-binary", title: "Non-binary" },
          { id: "3_Prefer_not_to_say", title: "Prefer not to say" },
        ],
      };
    function c(e) {
      return e != null && u[e] != null;
    }
    function d(e) {
      return e != null && !s.has(e);
    }
    function m(e) {
      return e != null && l(e);
    }
    var p = {
      "CC (Colombia)": "cc_colombia",
      "CI (Ecuador)": "ci_ecuador",
      City: "city",
      "CNPJ (Brazil)": "cnpj_brazil",
      "Company name": "company_name",
      Country: "country",
      "CPF (Brazil)": "cpf_brazil",
      "Date of birth": "date_of_birth",
      "DNI (Argentina)": "dni_argentina",
      "DNI (Peru)": "dni_peru",
      Email: "email",
      "First name": "first_name",
      "Full name": "full_name",
      Gender: "gender",
      "Job title": "job_title",
      "Last name": "last_name",
      Name: "full_name",
      "Phone number": "phone_number",
      "Post code": "post_code",
      Province: "province",
      "RFC (Mexico)": "rfc_mexico",
      "RUT (Chile)": "rut_chile",
      State: "state",
      "Street address": "street_address",
      "WhatsApp number": "whatsapp_number",
      "Zip code": "zip_code",
      cc_colombia: "cc_colombia",
      ci_ecuador: "ci_ecuador",
      city: "city",
      cnpj_brazil: "cnpj_brazil",
      company_name: "company_name",
      country: "country",
      cpf_brazil: "cpf_brazil",
      date_of_birth: "date_of_birth",
      dni_argentina: "dni_argentina",
      dni_peru: "dni_peru",
      email: "email",
      first_name: "first_name",
      full_name: "full_name",
      gender: "gender",
      job_title: "job_title",
      last_name: "last_name",
      phone_number: "phone_number",
      post_code: "post_code",
      province: "province",
      rfc_mexico: "rfc_mexico",
      rut_chile: "rut_chile",
      state: "state",
      street_address: "street_address",
      whatsapp_number: "whatsapp_number",
      zip_code: "zip_code",
    };
    function _(e, t) {
      if (e != null) {
        var n = p[e];
        if (n != null) return n;
      }
      if (t != null) return p[t];
    }
    ((i.CTWAFormInputCategories = e),
      (i.isNationalIdInputType = l),
      (i.CUSTOM_INPUT_TYPES = s),
      (i.PRESET_DATA_SOURCE_OPTIONS = u),
      (i.isPresetWithLockedOptions = c),
      (i.isPresetWithLockedLabel = d),
      (i.isPresetWithLockedHelperText = m),
      (i.detectPresetType = _));
  },
  66,
);
