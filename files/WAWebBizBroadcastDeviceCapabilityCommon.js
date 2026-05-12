__d(
  "WAWebBizBroadcastDeviceCapabilityCommon",
  ["WAWebBizGatingUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryCapability,
        e,
        { shouldWriteToIdb: !0 },
      );
    }
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryCapability,
      );
      return e === !0;
    }
    function u(e) {
      e != null &&
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit,
          e,
          { shouldWriteToIdb: !0 },
        );
    }
    function c() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit,
      );
      return typeof e == "number" ? e : null;
    }
    function d(e) {
      return (
        e === void 0 && (e = !0),
        s()
          ? e
            ? o("WAWebBizGatingUtils").isBizBroadcastSendWebEnabled()
            : o("WAWebBizGatingUtils").isBizBroadcastSendWebEnabledNoExposure()
          : !1
      );
    }
    ((l.saveBizBroadcastCapabilityToStorage = e),
      (l.getPrimarySupportsBusinessBroadcast = s),
      (l.saveBizBroadcastRecipientLimitToStorage = u),
      (l.getBizBroadcastPrimaryRecipientLimit = c),
      (l.isBizBroadcastEnabledAndDeviceSupported = d));
  },
  98,
);
