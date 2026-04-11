__d(
  "WAWebBizBroadcastSmbaPlatformQuickPromotionFilter",
  ["WAWebCommonQPSurfacesTypes", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:bizBroadcastSmbaPlatform: primary device is not SMBA",
      },
      s = {
        name: "whatsapp_smb_biz_broadcast_smba_platform",
        filter: function (n, r, a) {
          return o("WAWebMobilePlatforms").getMobilePlatform() !==
            o("WAWebMobilePlatforms").PLATFORMS.SMBA
            ? e
            : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        },
      };
    l.bizBroadcastSmbaPlatformFilter = s;
  },
  98,
);
