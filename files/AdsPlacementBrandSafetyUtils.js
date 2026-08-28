__d(
  "AdsPlacementBrandSafetyUtils",
  ["fbt", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.canSeeAdsManagerNewsFeedIf,
        n = e.canSeeAdsManagerThreadsFeedIf;
      return n && t
        ? s._(
            /*BTDS*/ "To use this filter, select the Facebook feed, Facebook Reels feed, Instagram feed, Instagram reels feed or Threads feed placement.",
          )
        : t
          ? s._(
              /*BTDS*/ "To use this filter, select the Facebook feed, Facebook Reels feed, Instagram feed, or Instagram reels feed placement.",
            )
          : s._(
              /*BTDS*/ "To use this filter, select the Facebook or Instagram feed placement.",
            );
    }
    function u() {
      var e = r("gkx")("21511");
      return e;
    }
    function c() {
      var e = r("gkx")("8081");
      return e;
    }
    function d() {
      var t = u(),
        n = c();
      return e({
        canSeeAdsManagerNewsFeedIf: t,
        canSeeAdsManagerThreadsFeedIf: n,
      });
    }
    ((l.isAdsManagerFeedIfAlphaBeta = u),
      (l.isThreadsFeedIfAdAccount = c),
      (l.getDisabledFeedFBT = d));
  },
  226,
);
