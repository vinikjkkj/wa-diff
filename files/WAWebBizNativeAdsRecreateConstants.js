__d(
  "WAWebBizNativeAdsRecreateConstants",
  ["WAWebCommonAdsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("WAWebCommonAdsTypes")).BoostingStatus.ACTIVE,
        e.BoostingStatus.PAUSED,
        e.BoostingStatus.LIMITED_DELIVERY,
        e.BoostingStatus.EXTENDABLE,
        e.BoostingStatus.FINISHED,
      ];
    function u(e, t) {
      return e == null || !s.includes(e)
        ? "ineligible"
        : t.length > 0
          ? "blocked_by_sac"
          : "eligible";
    }
    ((l.RECREATE_ELIGIBLE_STATUSES = s), (l.getRecreateEligibility = u));
  },
  98,
);
