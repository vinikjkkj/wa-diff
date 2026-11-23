__d(
  "WAWebBizNativeAdsRecreateStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "blocked_by_sac"
        ? s._(/*BTDS*/ "")
        : e === "blocked_by_goal"
          ? s._(/*BTDS*/ "")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    l.getRecreateBlockedTooltip = e;
  },
  226,
);
