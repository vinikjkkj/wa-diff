__d(
  "AdFLEXConfig",
  [
    "AdFLEXAdsManagerConfigPlugin",
    "cr:4332",
    "createAdFLEXConfigGet",
    "memoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgs")(
        function (e) {
          switch (e) {
            case "MANAGE_ADS":
              return n("AdFLEXAdsManagerConfigPlugin");
            case "MANAGE_MESSAGES":
              return n("cr:4332");
            default:
              return null;
          }
        },
        function (e) {
          return e;
        },
      ),
      s = o("createAdFLEXConfigGet").createAdFLEXConfigGet(e),
      u = { get: s, getForTool: e };
    l.default = u;
  },
  98,
);
