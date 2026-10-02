__d(
  "WASmaxInMessageDeliverBizMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAuthMixin",
    "WASmaxInMessageDeliverBizAcceptTsMixin",
    "WASmaxInMessageDeliverBizAutoResponseMixin",
    "WASmaxInMessageDeliverBizCampaignMixin",
    "WASmaxInMessageDeliverBizEngagementDataMixin",
    "WASmaxInMessageDeliverBizPricingDataMixin",
    "WASmaxInMessageDeliverBizROIMetricsGatingFlagsMixin",
    "WASmaxInMessageDeliverBizRolesMixin",
    "WASmaxInMessageDeliverBusinessBotGatingMixin",
    "WASmaxInMessageDeliverButtonsOrNativeFlowOrInteractiveOrProductListMixinGroup",
    "WASmaxInMessageDeliverConversionRecipientStatusMixin",
    "WASmaxInMessageDeliverCtwaAttributionMixin",
    "WASmaxInMessageDeliverCtwaConversionMixin",
    "WASmaxInMessageDeliverDeliveryContextMixin",
    "WASmaxInMessageDeliverHsmMixin",
    "WASmaxInMessageDeliverOriginalEnvelopeMixin",
    "WASmaxInMessageDeliverQualityControlMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverHsmMixin").parseHsmMixin(e),
        r = o("WASmaxInMessageDeliverBizRolesMixin").parseBizRolesMixin(e),
        a = o(
          "WASmaxInMessageDeliverBizAutoResponseMixin",
        ).parseBizAutoResponseMixin(e),
        i = o("WASmaxInMessageDeliverBizAcceptTsMixin").parseBizAcceptTsMixin(
          e,
        ),
        l = o(
          "WASmaxInMessageDeliverBizROIMetricsGatingFlagsMixin",
        ).parseBizROIMetricsGatingFlagsMixin(e),
        s = o(
          "WASmaxInMessageDeliverOriginalEnvelopeMixin",
        ).parseOriginalEnvelopeMixin(e),
        u = o("WASmaxInMessageDeliverAuthMixin").parseAuthMixin(e),
        c = o(
          "WASmaxInMessageDeliverConversionRecipientStatusMixin",
        ).parseConversionRecipientStatusMixin(e),
        d = o(
          "WASmaxInMessageDeliverCtwaConversionMixin",
        ).parseCtwaConversionMixin(e),
        m = o(
          "WASmaxInMessageDeliverBusinessBotGatingMixin",
        ).parseBusinessBotGatingMixin(e),
        p = o(
          "WASmaxInMessageDeliverDeliveryContextMixin",
        ).parseDeliveryContextMixin(e),
        _ = o(
          "WASmaxInMessageDeliverQualityControlMixin",
        ).parseQualityControlMixin(e),
        f = o(
          "WASmaxInMessageDeliverCtwaAttributionMixin",
        ).parseCtwaAttributionMixin(e),
        g = o(
          "WASmaxInMessageDeliverBizEngagementDataMixin",
        ).parseBizEngagementDataMixin(e),
        h = o(
          "WASmaxInMessageDeliverBizPricingDataMixin",
        ).parseBizPricingDataMixin(e),
        y = o("WASmaxInMessageDeliverBizCampaignMixin").parseBizCampaignMixin(
          e,
        ),
        C = o(
          "WASmaxInMessageDeliverButtonsOrNativeFlowOrInteractiveOrProductListMixinGroup",
        ).parseButtonsOrNativeFlowOrInteractiveOrProductListMixinGroup(e);
      return o("WAResultOrError").makeResult({
        hsmMixin: n.success ? n.value : null,
        bizRolesMixin: r.success ? r.value : null,
        bizAutoResponseMixin: a.success ? a.value : null,
        bizAcceptTsMixin: i.success ? i.value : null,
        bizROIMetricsGatingFlagsMixin: l.success ? l.value : null,
        originalEnvelopeMixin: s.success ? s.value : null,
        authMixin: u.success ? u.value : null,
        conversionRecipientStatusMixin: c.success ? c.value : null,
        ctwaConversionMixin: d.success ? d.value : null,
        businessBotGatingMixin: m.success ? m.value : null,
        deliveryContextMixin: p.success ? p.value : null,
        qualityControlMixin: _.success ? _.value : null,
        ctwaAttributionMixin: f.success ? f.value : null,
        bizEngagementDataMixin: g.success ? g.value : null,
        bizPricingDataMixin: h.success ? h.value : null,
        bizCampaignMixin: y.success ? y.value : null,
        buttonsOrNativeFlowOrInteractiveOrProductListMixinGroup: C.success
          ? C.value
          : null,
      });
    }
    l.parseBizMixin = e;
  },
  98,
);
