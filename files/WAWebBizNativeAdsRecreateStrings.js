__d(
  "WAWebBizNativeAdsRecreateStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "blocked_by_sac"
        ? s._(
            /*BTDS*/ "This type of ad can't be recreated on web. To recreate it, use the iOS app.",
          )
        : e === "blocked_by_goal"
          ? s._(
              /*BTDS*/ "This type of ad can't be recreated on web. To recreate it, use the WhatsApp Business app on your phone.",
            )
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
