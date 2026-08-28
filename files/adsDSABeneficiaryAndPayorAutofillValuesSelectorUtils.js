__d(
  "adsDSABeneficiaryAndPayorAutofillValuesSelectorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null
        ? { beneficiary: null, payor: null }
        : {
            beneficiary: e == null ? void 0 : e.beneficiary_autofill_value,
            payor: e == null ? void 0 : e.payor_autofill_value,
          };
    }
    i.adsDSABeneficiaryAndPayorAutofillValues = e;
  },
  66,
);
