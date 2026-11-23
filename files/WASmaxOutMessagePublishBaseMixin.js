__d(
  "WASmaxOutMessagePublishBaseMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAutomatedMixin",
    "WASmaxOutMessagePublishBizMixin",
    "WASmaxOutMessagePublishClientFrankingTagMixin",
    "WASmaxOutMessagePublishClientReportingTokenMixin",
    "WASmaxOutMessagePublishCollectionContentTypeMixin",
    "WASmaxOutMessagePublishContentTypeMixin",
    "WASmaxOutMessagePublishDeviceIdentityMixin",
    "WASmaxOutMessagePublishInternalTestMixin",
    "WASmaxOutMessagePublishLIDSessionDeprecationMixin",
    "WASmaxOutMessagePublishMessageAssociationTypeMixin",
    "WASmaxOutMessagePublishMetaHideDecryptionPlaceholderMixin",
    "WASmaxOutMessagePublishMulticastMixin",
    "WASmaxOutMessagePublishNoExtraFanoutMixin",
    "WASmaxOutMessagePublishPaddingMixin",
    "WASmaxOutMessagePublishPreFilledNumberMixin",
    "WASmaxOutMessagePublishPreFilledTextMixin",
    "WASmaxOutMessagePublishSenderIntentMixin",
    "WASmaxOutMessagePublishTraceContextMixin",
    "WASmaxOutMessagePublishVerifiedNameNameMixin",
    "WASmaxOutMessagePublishWebDriverConfigMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.deviceIdentityMixinArgs,
        r = e.hasNoExtraFanout,
        a = e.hasMulticast,
        i = e.hasPreFilledText,
        l = e.hasPreFilledNumber,
        s = e.hasAutomated,
        u = e.bizMixinArgs,
        c = e.verifiedNameNameMixinArgs,
        d = e.clientFrankingTagMixinArgs,
        m = e.clientReportingTokenMixinArgs,
        p = e.internalTestMixinArgs,
        _ = e.hasMetaHideDecryptionPlaceholder,
        f = e.traceContextMixinArgs,
        g = e.hasSenderIntent,
        h = e.lIDSessionDeprecationMixinArgs,
        y = e.paddingMixinArgs,
        C = e.webDriverConfigMixinArgs,
        b = e.messageAssociationTypeMixinArgs,
        v = e.contentTypeMixinArgs,
        S = e.collectionContentTypeMixinArgs,
        R = (t = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutMessagePublishCollectionContentTypeMixin")
            .mergeCollectionContentTypeMixin,
          t.optionalMerge(
            o("WASmaxOutMessagePublishContentTypeMixin").mergeContentTypeMixin,
            t.optionalMerge(
              o("WASmaxOutMessagePublishMessageAssociationTypeMixin")
                .mergeMessageAssociationTypeMixin,
              t.optionalMerge(
                o("WASmaxOutMessagePublishWebDriverConfigMixin")
                  .mergeWebDriverConfigMixin,
                t.optionalMerge(
                  o("WASmaxOutMessagePublishPaddingMixin").mergePaddingMixin,
                  t.optionalMerge(
                    o("WASmaxOutMessagePublishLIDSessionDeprecationMixin")
                      .mergeLIDSessionDeprecationMixin,
                    t.optionalMerge(
                      o("WASmaxOutMessagePublishSenderIntentMixin")
                        .mergeSenderIntentMixin,
                      t.optionalMerge(
                        o("WASmaxOutMessagePublishTraceContextMixin")
                          .mergeTraceContextMixin,
                        t.optionalMerge(
                          o(
                            "WASmaxOutMessagePublishMetaHideDecryptionPlaceholderMixin",
                          ).mergeMetaHideDecryptionPlaceholderMixin,
                          t.optionalMerge(
                            o("WASmaxOutMessagePublishInternalTestMixin")
                              .mergeInternalTestMixin,
                            t.optionalMerge(
                              o(
                                "WASmaxOutMessagePublishClientReportingTokenMixin",
                              ).mergeClientReportingTokenMixin,
                              t.optionalMerge(
                                o(
                                  "WASmaxOutMessagePublishClientFrankingTagMixin",
                                ).mergeClientFrankingTagMixin,
                                t.optionalMerge(
                                  o(
                                    "WASmaxOutMessagePublishVerifiedNameNameMixin",
                                  ).mergeVerifiedNameNameMixin,
                                  t.optionalMerge(
                                    o("WASmaxOutMessagePublishBizMixin")
                                      .mergeBizMixin,
                                    t.optionalMerge(
                                      o("WASmaxOutMessagePublishAutomatedMixin")
                                        .mergeAutomatedMixin,
                                      t.optionalMerge(
                                        o(
                                          "WASmaxOutMessagePublishPreFilledNumberMixin",
                                        ).mergePreFilledNumberMixin,
                                        t.optionalMerge(
                                          o(
                                            "WASmaxOutMessagePublishPreFilledTextMixin",
                                          ).mergePreFilledTextMixin,
                                          t.optionalMerge(
                                            o(
                                              "WASmaxOutMessagePublishMulticastMixin",
                                            ).mergeMulticastMixin,
                                            t.optionalMerge(
                                              o(
                                                "WASmaxOutMessagePublishNoExtraFanoutMixin",
                                              ).mergeNoExtraFanoutMixin,
                                              t.optionalMerge(
                                                o(
                                                  "WASmaxOutMessagePublishDeviceIdentityMixin",
                                                ).mergeDeviceIdentityMixin,
                                                o("WASmaxJsx").smax(
                                                  "message",
                                                  null,
                                                ),
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
                  ),
                  y,
                ),
                C,
              ),
              b,
            ),
            v,
          ),
          S,
        );
      return R;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBaseMixin = s;
  },
  98,
);
