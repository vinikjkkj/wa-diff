__d(
  "adsDSABeneficiaryAndPayorListSelectorUtils",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.getValue();
      return n == null
        ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
        : t.get(n.account_id);
    }
    l.adsDSABeneficiaryAndPayorList = e;
  },
  98,
);
