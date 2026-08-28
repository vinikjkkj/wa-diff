__d(
  "AdsICFilterFailsIPMHoldoutGK",
  ["AGPBPRecommendationSitevarConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getInvisibleReason = function () {
          return "Fail to pass IPM holdout Experiment GK";
        }),
        (t.shouldHideMessageIfFailsRule = function () {
          return !0;
        }),
        (t.filter = function (t, n) {
          var e = r("AGPBPRecommendationSitevarConfig.experimental").new_bp_ids,
            o =
              e.find(function (e) {
                return e == t.getBPID();
              }) != null;
          return t.getExperiments().agp_am_holdout_h2_2020 == 1 ? !0 : !o;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
