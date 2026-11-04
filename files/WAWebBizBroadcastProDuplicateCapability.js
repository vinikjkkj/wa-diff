__d(
  "WAWebBizBroadcastProDuplicateCapability",
  ["WAWebABProps", "WAWebBusinessBroadcastsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_business_broadcast_pro_duplicate_enabled",
        )
      );
    }
    l.isBizBroadcastProDuplicateEnabled = e;
  },
  98,
);
