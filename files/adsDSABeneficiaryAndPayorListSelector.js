__d(
  "adsDSABeneficiaryAndPayorListSelector",
  [
    "AdsAccountStore",
    "AdsDSABeneficiaryAndPayorListProvider",
    "adsCreateSelector",
    "adsDSABeneficiaryAndPayorListSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccount,
          r("AdsDSABeneficiaryAndPayorListProvider").toFluxSelector(),
        ],
        function (t, n) {
          return o(
            "adsDSABeneficiaryAndPayorListSelectorUtils",
          ).adsDSABeneficiaryAndPayorList(t, n);
        },
        { name: i.id + ".adsDSABeneficiaryAndPayorListSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
