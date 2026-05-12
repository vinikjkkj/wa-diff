__d(
  "WAWebBizBroadcastRecipientLimitCommon",
  [
    "WAWebABProps",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 256,
      s = -1,
      u = 2;
    function c() {
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
      return r === s ? e : r;
    }
    ((l.MIN_RECIPIENTS = u), (l.getRecipientLimit = c));
  },
  98,
);
