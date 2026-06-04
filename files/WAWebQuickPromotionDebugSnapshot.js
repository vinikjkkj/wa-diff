__d(
  "WAWebQuickPromotionDebugSnapshot",
  [
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebQuickPromotionCollection",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "recunit_product_cooldowns";
    function s(e) {
      var t,
        n,
        r,
        o,
        a = e.promotion,
        i = a.data,
        l = a.ts;
      return {
        promotionId: e.promotion.id,
        surfaceId: e.promotion.surfaceId,
        priority: i.qpConfigPriority,
        ts: l,
        ttlSeconds: i.qpConfigTtlSeconds,
        surfaceDelayTimeSeconds: i.qpConfigSurfaceDelayTimeSeconds,
        eligibilityDurationMs: i.qpConfigEligibilityDurationMs,
        forcePass: i.qpConfigForcePass,
        exposureHoldout: i.qpConfigExposureHoldout,
        clientSideDryRun: i.qpConfigClientSideDryRun,
        dismissable: i.qpConfigDismissable,
        experimentKey: i.qpConfigExperimentKey,
        logEligibilityWaterfall: i.qpConfigLogEligibilityWaterfall,
        pacingConfig: i.qpConfigPacing,
        contentAttributeKeys:
          (t =
            (n = i.contentAttributes) == null || (n = n.attribute) == null
              ? void 0
              : n.map(function (e) {
                  return e.key;
                })) != null
            ? t
            : [],
        primaryActionDeepLink:
          (r = i.primaryAction) == null ? void 0 : r.deepLink,
        primaryActionUniversalLink:
          (o = i.primaryAction) == null ? void 0 : o.universalLink,
      };
    }
    function u(e) {
      var t = e.promotion.tracking;
      return {
        impressions: t.impressions,
        primaryClicks: t.primaryClicks,
        dismisses: t.dismisses,
        lastImpressionTs: t.lastImpressionTs,
        lastPrimaryClickTs: t.lastPrimaryClickTs,
        lastDismissTs: t.lastDismissTs,
      };
    }
    function c() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "string") return {};
      try {
        return JSON.parse(t);
      } catch (e) {
        return { raw: t };
      }
    }
    function d(e) {
      var t = o(
          "WAWebQuickPromotionCollection",
        ).QuickPromotionCollection.filter(function (t) {
          return t.promotion.surfaceId === e;
        }),
        n = {};
      for (var r of t) n[r.promotion.id] = u(r);
      return {
        surfaceId: e,
        capturedAt: Date.now(),
        isSMB: o("WAWebMobilePlatforms").isSMB(),
        cache: t.map(s),
        cooldowns: c(),
        counters: n,
        abProps: {
          smb_core_rec_card:
            o("WAWebABProps").getABPropConfigValue("smb_core_rec_card"),
          qp_campaign_client_enabled: o("WAWebABProps").getABPropConfigValue(
            "qp_campaign_client_enabled",
          ),
          smb_qp_emergency_force_fetch_nonce: o(
            "WAWebABProps",
          ).getABPropConfigValue("smb_qp_emergency_force_fetch_nonce"),
        },
      };
    }
    l.collectQPDebugSnapshot = d;
  },
  98,
);
