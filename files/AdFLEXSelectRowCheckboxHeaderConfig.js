__d(
  "AdFLEXSelectRowCheckboxHeaderConfig",
  [
    "AdFLEXSelectRowCheckboxHeaderMessageMarketingConfigPlugin",
    "createAdFLEXConfigGet",
    "memoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgs")(
        function (e) {
          switch (e) {
            case "MANAGE_ADS":
              return null;
            case "MANAGE_MESSAGES":
              return n(
                "AdFLEXSelectRowCheckboxHeaderMessageMarketingConfigPlugin",
              );
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
