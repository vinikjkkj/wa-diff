__d(
  "MWEBNewUserOnboardingShouldLoadUpsells.relayprovider",
  ["CreatorMessagingGating.entrypointutils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      get: function () {
        if (
          o("CreatorMessagingGating.entrypointutils").isAPPlusWebInboxEnabled()
        )
          return !1;
        var e = r("gkx")("11635"),
          t = r("gkx")("14092");
        return e && !t;
      },
    };
    l.default = e;
  },
  98,
);
