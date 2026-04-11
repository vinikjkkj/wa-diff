__d(
  "waWebBizAdCreationDSAReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "dsa_reducer.set_dsa_beneficiary":
            e.dsaData.dsaBeneficiary = t.dsaBeneficiary;
            break;
          case "dsa_reducer.set_dsa_payor":
            e.dsaData.dsaPayor = t.dsaPayor;
            break;
        }
      });
      return [n];
    }
    l.default = e;
  },
  98,
);
