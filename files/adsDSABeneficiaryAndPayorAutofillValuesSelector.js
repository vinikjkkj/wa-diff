__d(
  "adsDSABeneficiaryAndPayorAutofillValuesSelector",
  [
    "adsCreateSelector",
    "adsDSABeneficiaryAndPayorAutofillValuesSelectorUtils",
    "adsDSABeneficiaryAndPayorListSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsDSABeneficiaryAndPayorListSelector")],
      function (t) {
        return o(
          "adsDSABeneficiaryAndPayorAutofillValuesSelectorUtils",
        ).adsDSABeneficiaryAndPayorAutofillValues(t.getValue());
      },
      { name: i.id + ".adsDSABeneficiaryAndPayorAutofillValuesSelector" },
    );
    l.adsDSABeneficiaryAndPayorAutofillValuesSelector = e;
  },
  98,
);
