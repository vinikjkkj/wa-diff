__d(
  "AdsPlacementBrandSafetyUtils",
  ["fbt", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.canSeeAdsManagerNewsFeedIf,
        n = e.canSeeAdsManagerThreadsFeedIf;
      return n && t
        ? s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    function u() {
      var e = r("gkx")("21511");
      return e;
    }
    function c() {
      return r("gkx")("620");
    }
    function d() {
      var e = r("gkx")("8081");
      return e;
    }
    function m() {
      var t = u(),
        n = d();
      return e({
        canSeeAdsManagerNewsFeedIf: t,
        canSeeAdsManagerThreadsFeedIf: n,
      });
    }
    ((l.isAdsManagerFeedIfAlphaBeta = u),
      (l.isFeedSelectEnabledForAdAccount = c),
      (l.isThreadsFeedIfAdAccount = d),
      (l.getDisabledFeedFBT = m));
  },
  226,
);
