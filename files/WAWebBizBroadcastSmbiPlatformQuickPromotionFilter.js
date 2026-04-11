__d(
  "WAWebBizBroadcastSmbiPlatformQuickPromotionFilter",
  ["WAWebCommonQPSurfacesTypes", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:bizBroadcastSmbiPlatform: primary device is not SMBI",
      },
      s = {
        name: "whatsapp_smb_biz_broadcast_smbi_platform",
        filter: function (n, r, a) {
          return o("WAWebMobilePlatforms").getMobilePlatform() !==
            o("WAWebMobilePlatforms").PLATFORMS.SMBI
            ? e
            : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        },
      };
    l.bizBroadcastSmbiPlatformFilter = s;
  },
  98,
);
