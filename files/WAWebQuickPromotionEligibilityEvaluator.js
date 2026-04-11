__d(
  "WAWebQuickPromotionEligibilityEvaluator",
  [
    "WAWebQuickPromotionActionLimitRuleValidator",
    "WAWebQuickPromotionClientSideDryRunRuleValidator",
    "WAWebQuickPromotionClientTtlRuleValidator",
    "WAWebQuickPromotionContentRuleValidator",
    "WAWebQuickPromotionEnabledTimeRuleValidator",
    "WAWebQuickPromotionFiltersRuleValidator",
    "WAWebQuickPromotionForcePassRuleValidator",
    "WAWebQuickPromotionHoldoutRuleValidator",
    "WAWebQuickPromotionSurfaceDelayRuleValidator",
    "WAWebQuickPromotionSurfaceRuleValidator",
    "WAWebWhatsappQuickPromotionClientEligibilityWaterfallWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      {
        step: "client_definition_validator_content",
        validator: o("WAWebQuickPromotionContentRuleValidator")
          .contentRuleValidator,
      },
      {
        step: "post_client_definition_validator_content",
        validator: o("WAWebQuickPromotionSurfaceRuleValidator")
          .surfaceRuleValidator,
      },
      {
        step: "client_force_pass",
        validator: o("WAWebQuickPromotionForcePassRuleValidator")
          .forcePassRuleValidator,
      },
      {
        step: "client_enabled_time",
        validator: o("WAWebQuickPromotionEnabledTimeRuleValidator")
          .enabledTimeRuleValidator,
      },
      {
        step: "client_ttl",
        validator: o("WAWebQuickPromotionClientTtlRuleValidator")
          .clientTtlRuleValidator,
      },
      {
        step: "client_surface_delay",
        validator: o("WAWebQuickPromotionSurfaceDelayRuleValidator")
          .surfaceDelayRuleValidator,
      },
      {
        step: "client_action_limit",
        validator: o("WAWebQuickPromotionActionLimitRuleValidator")
          .actionLimitRuleValidator,
      },
      {
        step: "client_filters",
        validator: o("WAWebQuickPromotionFiltersRuleValidator")
          .filtersRuleValidator,
      },
      {
        step: "client_side_dry_run",
        validator: o("WAWebQuickPromotionClientSideDryRunRuleValidator")
          .clientSideDryRunRuleValidator,
      },
      {
        step: "client_exposure_log",
        validator: o("WAWebQuickPromotionHoldoutRuleValidator")
          .holdoutRuleValidator,
      },
    ];
    function s(t, n) {
      for (
        var r = t.data,
          a = t.id,
          i = r.qpConfigLogEligibilityWaterfall,
          l = i === "true",
          s = 0;
        s < e.length;
        s++
      ) {
        var u = e[s],
          c = u.step,
          d = u.validator,
          m = d(t, n),
          p = m.result;
        if (
          (l &&
            m.skipWaterfallLogging !== !0 &&
            new (o(
              "WAWebWhatsappQuickPromotionClientEligibilityWaterfallWamEvent",
            ).WhatsappQuickPromotionClientEligibilityWaterfallWamEvent)({
              step: c,
              promotionId: a,
              eligibilityStatus: p === !0,
              qpFailureReason: m.result == null ? m.reason : void 0,
            }).commit(),
          m.forcePass === !0)
        )
          return !0;
        if (p == null) return !1;
      }
      return !0;
    }
    l.checkPromotionEligible = s;
  },
  98,
);
