__d(
  "AdsProductGrowthH2Round1HbtExposure",
  ["CtxAdvertiserQeHbtExposureFalcoEvent", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s(t, n, o, a) {
      if (!(n == null || a)) {
        var i = t + "|" + n;
        if (!e.has(i)) {
          e.add(i);
          var l = r("gkx")("15608");
          l === !1 &&
            r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
              return {
                condition: o ? "test" : "control",
                feature_name: t,
                hbt_name: "meta_product_growth_2026_h2_launch_round_1",
                unit_id: n,
                unit_type: "ad_account_id",
              };
            });
        }
      }
    }
    function u() {
      e.clear();
    }
    ((l.logProductGrowthH2Round1HbtExposure = s),
      (l.clearLoggedKeysForTesting = u));
  },
  98,
);
