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
      (l.isBizBroadcastEnabledAndDeviceSupported = u));
  },
  98,
);
