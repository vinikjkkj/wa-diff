__d(
  "WAWebOpenHatchSubscription",
  ["WAWebABProps", "WAWebExternalLink.react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_manage_subscription_url",
        ),
      );
    }
    l.openHatchSubscription = e;
  },
  98,
);
