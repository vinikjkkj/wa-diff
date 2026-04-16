__d(
  "WAWebBizBroadcastDeviceCapabilitySyncQuickPromotionFilter",
  [
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebCommonQPSurfacesTypes",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        reason:
          "filtersRuleValidator:bizBroadcastDeviceCapabilitySync: not an SMB account",
      },
      s = {
        reason:
          "filtersRuleValidator:bizBroadcastDeviceCapabilitySync: primary device does not support business broadcast",
      },
      u = {
        name: "whatsapp_smb_biz_broadcast_device_capability_sync",
        filter: function (n, r, a) {
          return o("WAWebMobilePlatforms").isSMB()
            ? o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).getPrimarySupportsBusinessBroadcast()
              ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
              : s
            : e;
        },
      };
    l.bizBroadcastDeviceCapabilitySyncFilter = u;
  },
  98,
);
