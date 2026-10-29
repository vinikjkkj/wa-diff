__d(
  "WAWebBizNativeAdsRecreateConstants",
  ["WAWebBizNativeAdsGatingUtils", "WAWebCommonAdsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("WAWebCommonAdsTypes")).BoostingStatus.ACTIVE,
        e.BoostingStatus.PAUSED,
        e.BoostingStatus.LIMITED_DELIVERY,
        e.BoostingStatus.EXTENDABLE,
        e.BoostingStatus.FINISHED,
      ],
      u = new Set([
        "GET_LEADS",
        "GET_WEBSITE_VISITORS",
        "VIEW_INSTAGRAM_PROFILE",
      ]);
    function c(e, t, n) {
      return e == null || !s.includes(e)
        ? "ineligible"
        : t.length > 0
          ? "blocked_by_sac"
          : n != null &&
              u.has(n) &&
              o(
                "WAWebBizNativeAdsGatingUtils",
              ).nativeAdsBlockRecreateNonMessagingGoalsEnabled()
            ? "blocked_by_goal"
            : "eligible";
    }
    function d(e) {
      return (function (e) {
        if (e === "eligible" || e === "ineligible") return null;
        {
          var t = e;
          return t;
        }
      })(e);
    }
    function m(e) {
      return JSON.stringify({
        recreate_blocked_reason:
          e === "blocked_by_sac"
            ? "sac"
            : e === "blocked_by_goal"
              ? "non_messaging_goal"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })(),
      });
    }
    ((l.getRecreateEligibility = c),
      (l.getRecreateBlockedEligibility = d),
      (l.getRecreateBlockedLogData = m));
  },
  98,
);
