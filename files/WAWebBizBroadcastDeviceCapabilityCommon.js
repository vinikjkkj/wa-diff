__d(
  "WAWebBizBroadcastDeviceCapabilityCommon",
  [
    "WAWebBizBroadcastProEligibilityEvent",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebMobilePlatforms",
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
        (r("WAWebUserPrefsStore").setUser(t, e, { shouldWriteToIdb: !0 }),
        o(
          "WAWebBizBroadcastProEligibilityEvent",
        ).bizBroadcastProEligibilityEmitter.trigger("change"));
    }
    function c() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastProPrimaryCapability,
      );
      return e === !0;
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").getMaybeMobilePlatform() ===
          o("WAWebMobilePlatforms").PLATFORMS.SMBA &&
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastProPrimaryCapability,
        ) != null
      );
    }
    function m(e, t) {
      if (
        (t === void 0 && (t = !1),
        !o(
          "WAWebBizBroadcastProOnboardingStatusType",
        ).shouldUseBizBroadcastProEntrypoint(e))
      )
        return !1;
      var n = t ? d() : c();
      return (
        n && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled(t)
      );
    }
    function p(e) {
      e != null &&
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit,
          e,
          { shouldWriteToIdb: !0 },
        );
    }
    function _() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.BizBroadcastPrimaryRecipientLimit,
      );
      return typeof e == "number" ? e : null;
    }
    function f(e) {
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
      (l.isBizBroadcastProExperimentCandidate = d),
      (l.isBizBroadcastProEntrypointEnabledForStatus = m),
      (l.saveBizBroadcastRecipientLimitToStorage = p),
      (l.getBizBroadcastPrimaryRecipientLimit = _),
      (l.isBizBroadcastEnabledAndDeviceSupported = f));
  },
  98,
);
