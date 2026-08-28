__d(
  "AdFLEXPreloaderFilterMessageMarketingConfigPlugin",
  ["AdsGenericFilter", "AdsPEFilterFields", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "flexPreloaderFilterConfig",
        key: "marketingMessages",
        toolBasedFilter: r("gkx")("21201")
          ? new (r("AdsGenericFilter"))(
              r("AdsPEFilterFields").IS_MESSAGE_CAMPAIGN,
              "EQUAL",
              !0,
            )
          : null,
        tool: "MANAGE_MESSAGES",
      },
      s = e;
    l.default = s;
  },
  98,
);
