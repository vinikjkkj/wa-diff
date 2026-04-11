__d(
  "WAWebBizBroadcastDeviceCapabilityQuickPromotionFilter",
  [
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastMarketingMessagesEligibilityModel",
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:bizBroadcastDeviceCapability: not an SMB account",
      },
      s = {
        reason:
          "filtersRuleValidator:bizBroadcastDeviceCapability: primary device does not support business broadcast",
      },
      u = {
        reason:
          "filtersRuleValidator:bizBroadcastDeviceCapability: marketing messages not eligible",
      },
      c = {
        name: "whatsapp_smb_biz_broadcast_device_capability",
        filter: function (n, r, a) {
          return o("WAWebMobilePlatforms").isSMB()
            ? o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).getPrimarySupportsBusinessBroadcast()
              ? o(
                  "WAWebBizBroadcastMarketingMessagesEligibilityModel",
                ).isMarketingMessagesEligible()
                ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
                : u
              : s
            : e;
        },
      };
    l.bizBroadcastDeviceCapabilityFilter = c;
  },
  98,
);
