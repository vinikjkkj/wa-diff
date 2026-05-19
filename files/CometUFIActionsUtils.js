__d(
  "CometUFIActionsUtils",
  ["XPlatReactEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["TAHOE", "COMET_MEDIA_VIEWER", "WORKPLACE_KNOWLEDGE"];
    function s(t) {
      return o("XPlatReactEnvironment").isWeb() && e.includes(t);
    }
    function u() {
      return !r("gkx")("12757");
    }
    function c(e) {
      return e === "MARKETPLACE_MEGAMALL";
    }
    ((l.isFeedLocationNarrow = s),
      (l.shouldHideUFIDivider = u),
      (l.marketplaceMegamallCheck = c));
  },
  98,
);
