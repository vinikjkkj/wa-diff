__d(
  "WASmaxOutMessagePublishBizMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAuthMixin",
    "WASmaxOutMessagePublishBizAcceptTsMixin",
    "WASmaxOutMessagePublishBizAutoResponseMixin",
    "WASmaxOutMessagePublishBizCampaignMixin",
    "WASmaxOutMessagePublishBizEngagementDataMixin",
    "WASmaxOutMessagePublishBizMetadataMixin",
    "WASmaxOutMessagePublishBizPricingDataMixin",
    "WASmaxOutMessagePublishBizRolesMixin",
    "WASmaxOutMessagePublishButtonsOrNativeFlowOrInteractiveMixinGroup",
    "WASmaxOutMessagePublishConversionRecipientStatusMixin",
    "WASmaxOutMessagePublishCtwaAttributionMixin",
    "WASmaxOutMessagePublishCtwaConversionMixin",
    "WASmaxOutMessagePublishDeliveryContextMixin",
    "WASmaxOutMessagePublishHsmMixin",
    "WASmaxOutMessagePublishQualityControlMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.hsmMixinArgs,
        r = e.bizRolesMixinArgs,
        a = e.bizAutoResponseMixinArgs,
        i = e.bizAcceptTsMixinArgs,
        l = e.bizCampaignMixinArgs,
        s = e.deliveryContextMixinArgs,
        u = e.qualityControlMixinArgs,
        c = e.authMixinArgs,
        d = e.conversionRecipientStatusMixinArgs,
        m = e.ctwaConversionMixinArgs,
        p = e.bizMetadataMixinArgs,
        _ = e.ctwaAttributionMixinArgs,
        f = e.bizEngagementDataMixinArgs,
        g = e.bizPricingDataMixinArgs,
        h = e.buttonsOrNativeFlowOrInteractiveMixinGroupArgs,
        y = (t = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutMessagePublishButtonsOrNativeFlowOrInteractiveMixinGroup")
            .mergeButtonsOrNativeFlowOrInteractiveMixinGroup,
          t.optionalMerge(
            o("WASmaxOutMessagePublishBizPricingDataMixin")
              .mergeBizPricingDataMixin,
            t.optionalMerge(
              o("WASmaxOutMessagePublishBizEngagementDataMixin")
                .mergeBizEngagementDataMixin,
              t.optionalMerge(
                o("WASmaxOutMessagePublishCtwaAttributionMixin")
                  .mergeCtwaAttributionMixin,
                t.optionalMerge(
                  o("WASmaxOutMessagePublishBizMetadataMixin")
                    .mergeBizMetadataMixin,
                  t.optionalMerge(
                    o("WASmaxOutMessagePublishCtwaConversionMixin")
                      .mergeCtwaConversionMixin,
                    t.optionalMerge(
                      o("WASmaxOutMessagePublishConversionRecipientStatusMixin")
                        .mergeConversionRecipientStatusMixin,
                      t.optionalMerge(
                        o("WASmaxOutMessagePublishAuthMixin").mergeAuthMixin,
                        t.optionalMerge(
                          o("WASmaxOutMessagePublishQualityControlMixin")
                            .mergeQualityControlMixin,
                          t.optionalMerge(
                            o("WASmaxOutMessagePublishDeliveryContextMixin")
                              .mergeDeliveryContextMixin,
                            t.optionalMerge(
                              o("WASmaxOutMessagePublishBizCampaignMixin")
                                .mergeBizCampaignMixin,
                              t.optionalMerge(
                                o("WASmaxOutMessagePublishBizAcceptTsMixin")
                                  .mergeBizAcceptTsMixin,
                                t.optionalMerge(
                                  o(
                                    "WASmaxOutMessagePublishBizAutoResponseMixin",
                                  ).mergeBizAutoResponseMixin,
                                  t.optionalMerge(
                                    o("WASmaxOutMessagePublishBizRolesMixin")
                                      .mergeBizRolesMixin,
                                    t.optionalMerge(
                                      o("WASmaxOutMessagePublishHsmMixin")
                                        .mergeHsmMixin,
                                      o("WASmaxJsx").smax("message", null),
                                      n,
                                    ),
                                    r,
                                  ),
                                  a,
                                ),
                                i,
                              ),
                              l,
                            ),
                            s,
                          ),
                          u,
                        ),
                        c,
                      ),
                      d,
                    ),
                    m,
                  ),
                  p,
                ),
                _,
              ),
              f,
            ),
            g,
          ),
          h,
        );
      return y;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizMixin = s;
  },
  98,
);
