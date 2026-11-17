__d(
  "WAWebBusinessBroadcastsGatingUtils",
  [
    "WAWebABProps",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebCoexProductStateStore",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumBbTierType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["ai", "automation", "bbPro"]);
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "premium_broadcast_smb_capping_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_business_broadcast_import_contact",
        )
      );
    }
    function u() {
      return !o("WAWebMobilePlatforms").isSMB() || !d()
        ? !1
        : o("WAWebMobilePlatforms").getMobilePlatform() ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBI
          ? o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web",
            )
          : o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_smba",
            );
    }
    function c() {
      if (!o("WAWebMobilePlatforms").isSMB()) return !1;
      var e =
        o("WAWebMobilePlatforms").getMobilePlatform() ===
        o("WAWebMobilePlatforms").PLATFORMS.SMBI
          ? o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_no_exp",
            )
          : o("WAWebABProps").getABPropConfigValue(
              "smb_business_broadcast_send_web_smba_no_exp",
            );
      return e && d();
    }
    function d() {
      return (
        !o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() || m()
      );
    }
    function m() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "ctwa_coex_state_sync_enabled",
      )
        ? o("WAWebCoexProductStateStore").getCoexProductState()
        : null;
      return t == null ||
        t.isBspHosted ||
        t.surfaces.includes("bspOrInbox") ||
        !t.surfaces.some(function (t) {
          return e.has(t);
        })
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "coex_business_broadcast_enabled",
          );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_bb_in_thread_insight_metrics_enabled",
      );
    }
    function _() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smbw_business_broadcast_duplicate_enabled",
        )
      );
    }
    function f(e) {
      return (
        e === void 0 && (e = !1),
        o("WAWebMobilePlatforms").isSMB()
          ? e
            ? o("WAWebABProps").getABPropConfigValue(
                "smb_business_broadcast_pro_enabled_with_exposure",
              )
            : o("WAWebABProps").getABPropConfigValue(
                "smb_business_broadcast_pro_enabled",
              )
          : !1
      );
    }
    function g() {
      return (
        f() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_business_broadcast_pro_scheduled_sends_enabled",
        )
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcasts_catalog_attachment",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_broadcasts_contextual_entrypoints",
      );
    }
    function C() {
      return (
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).getBizBroadcastProductTier() ===
          o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO && f()
      );
    }
    ((l.isBizBroadcastContactImportEnabled = s),
      (l.isBizBroadcastSendWebEnabled = u),
      (l.isBizBroadcastSendWebEnabledNoExposure = c),
      (l.isBizBroadcastAllowedForCoexAccount = m),
      (l.isBizBroadcastInThreadInsightMetricsEnabled = p),
      (l.isBizBroadcastDuplicateEnabled = _),
      (l.isBizBroadcastProEnabled = f),
      (l.isBizBroadcastProScheduledSendsEnabled = g),
      (l.isBizBroadcastCatalogAttachmentEnabled = h),
      (l.isBizBroadcastContextualEntrypointsEnabled = y),
      (l.isBizBroadcastProUser = C));
  },
  98,
);
