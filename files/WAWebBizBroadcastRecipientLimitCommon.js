__d(
  "WAWebBizBroadcastRecipientLimitCommon",
  [
    "WAWebABProps",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e4,
      s = 256,
      u = -1,
      c = 2;
    function d() {
      if (o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser())
        return e;
      var t = o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).getBizBroadcastPrimaryRecipientLimit();
      if (t != null) return t;
      var n = o("WAWebMobilePlatforms").getMobilePlatform();
      if (n === o("WAWebMobilePlatforms").PLATFORMS.SMBI)
        return o("WAWebABProps").getABPropConfigValue(
          "smbi_premium_broadcast_max_recipient_limit",
        );
      var r = o("WAWebABProps").getABPropConfigValue(
        "smba_business_broadcast_recipient_limit",
      );
      return r === u ? s : r;
    }
    ((l.MIN_RECIPIENTS = c), (l.getRecipientLimit = d));
  },
  98,
);
