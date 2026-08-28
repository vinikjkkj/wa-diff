__d(
  "AdFLEXAccountSettingConfig",
  [
    "AdFLEXAccountSettingAdsManagerConfigPlugin",
    "AdFLEXAccountSettingMessageMarketingConfigPlugin",
    "createAdFLEXConfigGet",
    "memoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgs")(
        function (e) {
          switch (e) {
            case "MANAGE_ADS":
              return n("AdFLEXAccountSettingAdsManagerConfigPlugin");
            case "MANAGE_MESSAGES":
              return n("AdFLEXAccountSettingMessageMarketingConfigPlugin");
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
