__d(
  "WASmaxOutSpamMessageMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamAdminRevokeMixin",
    "WASmaxOutSpamAutomatedMixin",
    "WASmaxOutSpamExtensionScreenDataMixin",
    "WASmaxOutSpamIABReportLinkMixin",
    "WASmaxOutSpamMessageEditMixin",
    "WASmaxOutSpamMessageFrankingMixin",
    "WASmaxOutSpamMessageParticipantMixin",
    "WASmaxOutSpamMessagePayloadTypes",
    "WASmaxOutSpamMessagePlaceholderMixin",
    "WASmaxOutSpamMessageWithHsmTemplateMixin",
    "WASmaxOutSpamMessageWithNewsletterQuestionResponseMixin",
    "WASmaxOutSpamMulticastMixin",
    "WASmaxOutSpamPreFilledNumberMixin",
    "WASmaxOutSpamPreFilledTextMixin",
    "WASmaxOutSpamRawMixins",
    "WASmaxOutSpamReportedPushNameMixin",
    "WASmaxOutSpamRevokeMixin",
    "WASmaxOutSpamSMBBroadcastSourceMixin",
    "WASmaxOutSpamWaMessageReportingMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.rawMediatype,
        n = e.rawLocalMessageType,
        r = e.rawElementValue,
        a = e.rawMixinsArgs,
        i = o("WASmaxOutSpamRawMixins").mergeRawMixins(
          o("WASmaxJsx").smax(
            "raw",
            {
              mediatype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
              local_message_type: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
            },
            r,
          ),
          a,
        );
      return i;
    }
    function s() {
      var e = o("WASmaxJsx").smax("enc", null);
      return e;
    }
    function u(t) {
      var n,
        r,
        a = t.rawArgs,
        i = t.messageT,
        l = t.messageId,
        s = t.messageSelected,
        u = t.messageUnsent,
        c = t.messageDeletedReason,
        d = t.hasRevoke,
        m = t.hasAdminRevoke,
        p = t.hasMessageEdit,
        _ = t.hasMulticast,
        f = t.hasPreFilledNumber,
        g = t.hasPreFilledText,
        h = t.hasAutomated,
        y = t.messageWithHsmTemplateMixinArgs,
        C = t.extensionScreenDataMixinArgs,
        b = t.messageParticipantMixinArgs,
        v = t.messageFrankingMixinArgs,
        S = t.waMessageReportingMixinArgs,
        R = t.sMBBroadcastSourceMixinArgs,
        L = t.iABReportLinkMixinArgs,
        E = t.messageWithNewsletterQuestionResponseMixinArgs,
        k = t.hasMessagePlaceholder,
        I = t.reportedPushNameMixinArgs,
        T = t.messagePayloadTypesArgs,
        D = o("WASmaxOutSpamMessagePayloadTypes").mergeMessagePayloadTypes(
          (n = o("WASmaxMixins")).optionalMerge(
            o("WASmaxOutSpamReportedPushNameMixin").mergeReportedPushNameMixin,
            n.optionalMerge(
              o("WASmaxOutSpamMessagePlaceholderMixin")
                .mergeMessagePlaceholderMixin,
              n.optionalMerge(
                o("WASmaxOutSpamMessageWithNewsletterQuestionResponseMixin")
                  .mergeMessageWithNewsletterQuestionResponseMixin,
                n.optionalMerge(
                  o("WASmaxOutSpamIABReportLinkMixin").mergeIABReportLinkMixin,
                  n.optionalMerge(
                    o("WASmaxOutSpamSMBBroadcastSourceMixin")
                      .mergeSMBBroadcastSourceMixin,
                    n.optionalMerge(
                      o("WASmaxOutSpamWaMessageReportingMixin")
                        .mergeWaMessageReportingMixin,
                      n.optionalMerge(
                        o("WASmaxOutSpamMessageFrankingMixin")
                          .mergeMessageFrankingMixin,
                        n.optionalMerge(
                          o("WASmaxOutSpamMessageParticipantMixin")
                            .mergeMessageParticipantMixin,
                          n.optionalMerge(
                            o("WASmaxOutSpamExtensionScreenDataMixin")
                              .mergeExtensionScreenDataMixin,
                            n.optionalMerge(
                              o("WASmaxOutSpamMessageWithHsmTemplateMixin")
                                .mergeMessageWithHsmTemplateMixin,
                              n.optionalMerge(
                                o("WASmaxOutSpamAutomatedMixin")
                                  .mergeAutomatedMixin,
                                n.optionalMerge(
                                  o("WASmaxOutSpamPreFilledTextMixin")
                                    .mergePreFilledTextMixin,
                                  n.optionalMerge(
                                    o("WASmaxOutSpamPreFilledNumberMixin")
                                      .mergePreFilledNumberMixin,
                                    n.optionalMerge(
                                      o("WASmaxOutSpamMulticastMixin")
                                        .mergeMulticastMixin,
                                      n.optionalMerge(
                                        o("WASmaxOutSpamMessageEditMixin")
                                          .mergeMessageEditMixin,
                                        n.optionalMerge(
                                          o("WASmaxOutSpamAdminRevokeMixin")
                                            .mergeAdminRevokeMixin,
                                          n.optionalMerge(
                                            o("WASmaxOutSpamRevokeMixin")
                                              .mergeRevokeMixin,
                                            o("WASmaxJsx").smax(
                                              "message",
                                              {
                                                t: (r = o("WAWap")).INT(i),
                                                id: r.STANZA_ID(l),
                                                selected: o(
                                                  "WASmaxAttrs",
                                                ).OPTIONAL(r.CUSTOM_STRING, s),
                                                unsent: o(
                                                  "WASmaxAttrs",
                                                ).OPTIONAL(r.CUSTOM_STRING, u),
                                                deleted_reason: o(
                                                  "WASmaxAttrs",
                                                ).OPTIONAL(r.CUSTOM_STRING, c),
                                              },
                                              o(
                                                "WASmaxChildren",
                                              ).OPTIONAL_CHILD(e, a),
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
                    ),
                    R,
                  ),
                  L,
                ),
                E,
              ),
              k,
            ),
            I,
          ),
          T,
        );
      return D;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeMessageRaw = e), (l.makeMessageEnc = s), (l.mergeMessageMixin = c));
  },
  98,
);
