__d(
  "WAWebBizBroadcastDeviceCapabilityCommon",
  [
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
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
      var t =
          o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastProPrimaryCapability,
        n = r("WAWebUserPrefsStore").getUser(t);
      n === e ||
        (n == null && e == null) ||
        r("WAWebUserPrefsStore").setUser(t, e, { shouldWriteToIdb: !0 });
    }
    function c() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastProPrimaryCapability,
      );
      return e === !0;
    }
    function d(e) {
      return (
        o(
          "WAWebBizBroadcastProOnboardingStatusType",
        ).shouldUseBizBroadcastProEntrypoint(e) &&
        c() &&
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled()
      );
    }
    function m(e) {
      e != null &&
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit,
          e,
          { shouldWriteToIdb: !0 },
        );
    }
    function p() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit,
      );
      return typeof e == "number" ? e : null;
    }
    function _(e) {
      return (
        e === void 0 && (e = !0),
        s()
          ? e
            ? o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastSendWebEnabled()
            : o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastSendWebEnabledNoExposure()
          : !1
      );
    }
    ((l.saveBizBroadcastCapabilityToStorage = e),
      (l.getPrimarySupportsBusinessBroadcast = s),
      (l.saveBizBroadcastProCapabilityToStorage = u),
      (l.getPrimarySupportsBusinessBroadcastPro = c),
      (l.isBizBroadcastProEntrypointEnabledForStatus = d),
      (l.saveBizBroadcastRecipientLimitToStorage = m),
      (l.getBizBroadcastPrimaryRecipientLimit = p),
      (l.isBizBroadcastEnabledAndDeviceSupported = _));
  },
  98,
);
