__d(
  "adsCampaignGroupAgencyFeeConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          agency_fee_pct: n.basicFieldAccessorFactory(e, t, "agency_fee_pct"),
          is_agency_fee_disabled: n.basicFieldAccessorFactory(
            e,
            t,
            "is_agency_fee_disabled",
          ),
          is_default_agency_fee: n.basicFieldAccessorFactory(
            e,
            t,
            "is_default_agency_fee",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
