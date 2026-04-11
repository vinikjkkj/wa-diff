__d(
  "WAWebBizBroadcastRecipientLimitCommon",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = 256,
      s = -1,
      u = 2;
    function c() {
      var t = o("WAWebMobilePlatforms").getMobilePlatform();
      if (t === o("WAWebMobilePlatforms").PLATFORMS.SMBI)
        return o("WAWebABProps").getABPropConfigValue(
          "smbi_premium_broadcast_max_recipient_limit",
        );
      var n = o("WAWebABProps").getABPropConfigValue(
        "smba_business_broadcast_recipient_limit",
      );
      return n === s ? e : n;
    }
    ((l.MIN_RECIPIENTS = u), (l.getRecipientLimit = c));
  },
  98,
);
