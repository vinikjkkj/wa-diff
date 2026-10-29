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
    function c(e) {
      return JSON.stringify({
        recreate_blocked_reason:
          e === "blocked_by_sac"
            ? "sac"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })(),
      });
    }
    ((l.getRecreateEligibility = u), (l.getRecreateBlockedLogData = c));
  },
  98,
);
