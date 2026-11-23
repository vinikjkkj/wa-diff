__d(
  "WASmaxMessagePublishIndividualRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInMessagePublishAckMixin",
    "WASmaxInMessagePublishAckRcatMixin",
    "WASmaxInMessagePublishDeviceListStaleMixin",
    "WASmaxInMessagePublishEnums",
    "WASmaxInMessagePublishNegativeAckMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAgentEngagementTypeMixin",
    "WASmaxOutMessagePublishAppdataMetaAttributeMixin",
    "WASmaxOutMessagePublishBaseMixin",
    "WASmaxOutMessagePublishBotFeedbackMessageTypeMixin",
    "WASmaxOutMessagePublishBotMessageTypeMixin",
    "WASmaxOutMessagePublishBotMetricsEntryPointMixin",
    "WASmaxOutMessagePublishBotMetricsThreadEntryPointMixin",
    "WASmaxOutMessagePublishBotRequestSingleTargetMixin",
    "WASmaxOutMessagePublishBotResponseMixin",
    "WASmaxOutMessagePublishBotTEERoutingMixin",
    "WASmaxOutMessagePublishContentMixins",
    "WASmaxOutMessagePublishContentTypeEventMixin",
    "WASmaxOutMessagePublishContentTypeLiveLocationFanoutMixin",
    "WASmaxOutMessagePublishContentTypeMediaFanoutMixin",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishContentTypeMediaOrMedianotifyMixinGroup",
    "WASmaxOutMessagePublishContentTypeMedianotifyMixin",
    "WASmaxOutMessagePublishContentTypePollAddOptionMixin",
    "WASmaxOutMessagePublishContentTypePollAddOptionRevokeMixin",
    "WASmaxOutMessagePublishContentTypePollCreationMixin",
    "WASmaxOutMessagePublishContentTypePollEditMixin",
    "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
    "WASmaxOutMessagePublishContentTypePollVoteMixin",
    "WASmaxOutMessagePublishContentTypeReactionMixin",
    "WASmaxOutMessagePublishContentTypeTextMixin",
    "WASmaxOutMessagePublishContextSourceMixin",
    "WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin",
    "WASmaxOutMessagePublishEncRetryMixin",
    "WASmaxOutMessagePublishEncTypeIndividualMixin",
    "WASmaxOutMessagePublishEncTypeMessageSecretMessageMixin",
    "WASmaxOutMessagePublishEncVersion",
    "WASmaxOutMessagePublishEncVersionBot",
    "WASmaxOutMessagePublishIndividualContentTypePayIndividualMixin",
    "WASmaxOutMessagePublishMessageEditMixin",
    "WASmaxOutMessagePublishMessagePinMixin",
    "WASmaxOutMessagePublishMessageTargetMixin",
    "WASmaxOutMessagePublishMetaConverstationThreadIdMixin",
    "WASmaxOutMessagePublishMetaDestinationIdMixin",
    "WASmaxOutMessagePublishMetaPremiumTypeMixin",
    "WASmaxOutMessagePublishMetaScheduledOrUnscheduleMessageMixinGroup",
    "WASmaxOutMessagePublishMsgMetaOriginMixin",
    "WASmaxOutMessagePublishPeripheralOriginMixin",
    "WASmaxOutMessagePublishRetryMixin",
    "WASmaxOutMessagePublishRevokeMixin",
    "WASmaxOutMessagePublishSenderContentBindingMixin",
    "WASmaxOutMessagePublishSgCaptureMixin",
    "WASmaxOutMessagePublishSingleSelectOrProductListMixinGroup",
    "WASmaxOutMessagePublishTDeprecatedMixin",
    "WASmaxOutMessagePublishToContentBindingMixin",
    "WASmaxOutMessagePublishToDeviceMixin",
    "WASmaxOutMessagePublishViewOnceMetaAttributeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return { name: "IndividualResponseNegative", value: a.value };
      var i = u(r, n);
      if (i.success)
        return { name: "IndividualResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Individual", {
          Negative: a,
          Success: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "recipient",
        o("WASmaxInMessagePublishEnums").USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxInMessagePublishNegativeAckMixin").parseNegativeAckMixin(
        e,
        t,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ recipient: r.value }, a.value),
          )
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "recipient",
        o("WASmaxInMessagePublishEnums").USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "participant",
        o("WASmaxInMessagePublishEnums").USERJID_USERJID,
      );
      if (!a.success) return a;
      var i = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
      if (!i.success) return i;
      var l = o(
          "WASmaxInMessagePublishDeviceListStaleMixin",
        ).parseDeviceListStaleMixin(e),
        s = c(e),
        u = o("WASmaxInMessagePublishAckRcatMixin").parseAckRcatMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { recipient: r.value, participant: a.value },
          i.value,
          {
            deviceListStaleMixin: l.success ? l.value : null,
            refreshLIDMixin: s.success ? s.value : null,
            ackRcatMixin: u.success ? u.value : null,
          },
        ),
      );
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "refresh_lid",
        o("WASmaxInMessagePublishEnums").ENUM_FALSE_TRUE,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ refreshLid: n.value })
        : n;
    }
    function d(e) {
      var t,
        n = e.messageId,
        r = e.groupInviteTargetMixinArgs,
        a = e.threadTypeTagMixinArgs,
        i = e.peerRecipientUsernameMixinArgs,
        l = e.individualRecipientDeprecaredMixinArgs,
        s = e.appdataMetaAttributeMixinArgs,
        u = e.hasStatusMentionMessage,
        c = e.tCTokenMixinArgs,
        d = e.cSTokenMixinArgs,
        p = e.hasViewOnceMetaAttribute,
        g = e.metaDestinationIdMixinArgs,
        y = e.metaConverstationThreadIdMixinArgs,
        b = e.peripheralOriginMixinArgs,
        S = e.hasSgCapture,
        L = e.armadilloOriginalMessageTimestampMixinArgs,
        k = e.metaPremiumTypeMixinArgs,
        T = e.contextSourceMixinArgs,
        $ = e.hasACPMetaAttribute,
        N = e.bizClientSentTimestampMixinArgs,
        M = e.coexV2IndividualMixinsArgs,
        w = e.messageEditOrMessagePinOrRevokeMixinGroupArgs,
        A = e.recipientPNOrPeerRecipientPNOrPeerRecipientLIDMixinGroupArgs,
        F = e.metaScheduledOrUnscheduleMessageMixinGroupArgs,
        O = (t = o("WASmaxMixins")).optionalMerge(
          o("WASmaxOutMessagePublishMetaScheduledOrUnscheduleMessageMixinGroup")
            .mergeMetaScheduledOrUnscheduleMessageMixinGroup,
          t.optionalMerge(
            f,
            t.optionalMerge(
              m,
              x(
                t.optionalMerge(
                  I,
                  t.optionalMerge(
                    R,
                    t.optionalMerge(
                      o("WASmaxOutMessagePublishContextSourceMixin")
                        .mergeContextSourceMixin,
                      t.optionalMerge(
                        o("WASmaxOutMessagePublishMetaPremiumTypeMixin")
                          .mergeMetaPremiumTypeMixin,
                        t.optionalMerge(
                          E,
                          t.optionalMerge(
                            o("WASmaxOutMessagePublishSgCaptureMixin")
                              .mergeSgCaptureMixin,
                            t.optionalMerge(
                              o("WASmaxOutMessagePublishPeripheralOriginMixin")
                                .mergePeripheralOriginMixin,
                              t.optionalMerge(
                                o(
                                  "WASmaxOutMessagePublishMetaConverstationThreadIdMixin",
                                ).mergeMetaConverstationThreadIdMixin,
                                t.optionalMerge(
                                  o(
                                    "WASmaxOutMessagePublishMetaDestinationIdMixin",
                                  ).mergeMetaDestinationIdMixin,
                                  t.optionalMerge(
                                    o(
                                      "WASmaxOutMessagePublishViewOnceMetaAttributeMixin",
                                    ).mergeViewOnceMetaAttributeMixin,
                                    t.optionalMerge(
                                      D,
                                      t.optionalMerge(
                                        C,
                                        t.optionalMerge(
                                          h,
                                          t.optionalMerge(
                                            o(
                                              "WASmaxOutMessagePublishAppdataMetaAttributeMixin",
                                            ).mergeAppdataMetaAttributeMixin,
                                            t.optionalMerge(
                                              H,
                                              t.optionalMerge(
                                                _,
                                                t.optionalMerge(
                                                  v,
                                                  t.optionalMerge(
                                                    P,
                                                    o(
                                                      "WASmaxOutMessagePublishBaseMixin",
                                                    ).mergeBaseMixin(
                                                      o("WASmaxJsx").smax(
                                                        "message",
                                                        {
                                                          id: o(
                                                            "WAWap",
                                                          ).STANZA_ID(n),
                                                        },
                                                      ),
                                                      e,
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
                                    p,
                                  ),
                                  g,
                                ),
                                y,
                              ),
                              b,
                            ),
                            S,
                          ),
                          L,
                        ),
                        k,
                      ),
                      T,
                    ),
                    $,
                  ),
                  N,
                ),
                M,
              ),
              w,
            ),
            A,
          ),
          F,
        );
      return O;
    }
    function m(e, t) {
      if (t.isMessageEdit)
        return o(
          "WASmaxOutMessagePublishMessageEditMixin",
        ).mergeMessageEditMixin(e);
      if (t.isMessagePin)
        return o("WASmaxOutMessagePublishMessagePinMixin").mergeMessagePinMixin(
          e,
        );
      if (t.isRevoke)
        return o("WASmaxOutMessagePublishRevokeMixin").mergeRevokeMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function p(e) {
      var t = e.anyPeerRecipientUsername,
        n = o("WASmaxJsx").smax("smax$any", {
          peer_recipient_username: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e, t) {
      if (t.recipientPN) return J(e, t.recipientPN);
      if (t.peerRecipientPN) return K(e, t.peerRecipientPN);
      if (t.peerRecipientLID) return z(e, t.peerRecipientLID);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function g() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { is_status_mention: "true" }),
      );
      return e;
    }
    function h(e) {
      var t = g();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function y(e) {
      var t = e.tctokenT,
        n = e.privacyTokenContentsMixinArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          X(
            o("WASmaxJsx").smax("tctoken", {
              t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            }),
            n,
          ),
        );
      return r;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
      var t = e.threadTypeTagEnumOrLegacyMixinGroupArgs,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          Z(o("WASmaxJsx").smax("meta", null), t),
        );
      return n;
    }
    function v(e, t) {
      var n = b(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { acp: "2" }),
      );
      return e;
    }
    function R(e) {
      var t = S();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function L(e) {
      var t = e.metaOriginalMsgT,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", { original_msg_t: o("WAWap").INT(t) }),
        );
      return n;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e) {
      var t = e.bizClientSentMs,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("biz", { client_sent_ms: o("WAWap").INT(t) }),
        );
      return n;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        re(o("WASmaxJsx").smax("cstoken", null), e),
      );
      return t;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e, t) {
      if (t.individualBotResponseFanout)
        return O(e, t.individualBotResponseFanout);
      if (t.individualBotRequestMessage)
        return M(e, t.individualBotRequestMessage);
      if (t.individualCoExV2RequestMessage)
        return W(e, t.individualCoExV2RequestMessage);
      if (t.individualIndividualSingle)
        return Ce(e, t.individualIndividualSingle);
      if (t.individualIndividualFanout)
        return he(e, t.individualIndividualFanout);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function $(e) {
      var t = e.metaGroupInvite,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            group_invite: o("WAWap").GROUP_JID(t),
          }),
        );
      return n;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
      var t,
        n = e.messageTo,
        r = e.agentEngagementTypeMixinArgs,
        a = e.contentTypeTextOrMediaMixinGroupArgs,
        i =
          e.individualIndividualSingleOrIndividualIndividualFanoutOrBotMetricsEntryPointMixinGroupArgs,
        l = e.botRequestSingleTargetMixinArgs,
        s = e.hasBotFeedbackMessageType,
        u = e.botTEERoutingMixinArgs,
        c = e.botClientMultiThreadIDMixinArgs,
        d = (t = o("WASmaxMixins")).optionalMerge(
          U,
          se(
            t.optionalMerge(
              o("WASmaxOutMessagePublishAgentEngagementTypeMixin")
                .mergeAgentEngagementTypeMixin,
              o("WASmaxJsx").smax(
                "message",
                { to: o("WAWap").JID(n) },
                t.optionalMerge(
                  $e,
                  t.optionalMerge(
                    o("WASmaxOutMessagePublishBotTEERoutingMixin")
                      .mergeBotTEERoutingMixin,
                    t.optionalMerge(
                      o("WASmaxOutMessagePublishBotFeedbackMessageTypeMixin")
                        .mergeBotFeedbackMessageTypeMixin,
                      o(
                        "WASmaxOutMessagePublishBotRequestSingleTargetMixin",
                      ).mergeBotRequestSingleTargetMixin(
                        o("WASmaxJsx").smax("bot", null),
                        l,
                      ),
                      s,
                    ),
                    u,
                  ),
                  c,
                ),
              ),
              r,
            ),
            a,
          ),
          i,
        );
      return d;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.toArgs,
        n = o("WASmaxJsx").smax(
          "participants",
          null,
          o("WASmaxChildren").REPEATED_CHILD(A, t, 2, 2),
        );
      return n;
    }
    function A(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function F(e) {
      var t,
        n = e.participantsArgs,
        r = e.messageTo,
        a = e.contentTypeTextOrIndividualBotResponseMediaFanoutMixinGroupArgs,
        i = e.botResponseMixinArgs,
        l = e.messageTargetMixinArgs,
        s = e.encTypeMessageSecretMessageMixinArgs,
        u = e.encVersionBotArgs,
        c = le(
          (t = o("WASmaxJsx")).smax(
            "message",
            { to: o("WAWap").USER_JID(r) },
            o("WASmaxOutMessagePublishBotResponseMixin").mergeBotResponseMixin(
              t.smax("bot", null),
              i,
            ),
            o(
              "WASmaxOutMessagePublishMessageTargetMixin",
            ).mergeMessageTargetMixin(t.smax("meta", null), l),
            o("WASmaxOutMessagePublishEncVersionBot").mergeEncVersionBot(
              o(
                "WASmaxOutMessagePublishEncTypeMessageSecretMessageMixin",
              ).mergeEncTypeMessageSecretMessageMixin(t.smax("enc", null), s),
              u,
            ),
            o("WASmaxChildren").OPTIONAL_CHILD(w, n),
          ),
          a,
        );
      return c;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e) {
      var t,
        n = e.messageTo,
        r = e.botMessageTypeMixinArgs,
        a = e.botLocalAutomatedTypeMixinArgs,
        i = e.botPersonaTypeMixinArgs,
        l = e.botClientMultiThreadIDMessageMixinArgs,
        s = e.botModeSelectionMixinArgs,
        u = e.agentEngagementTypeMixinArgs,
        c = e.contentTypeTextOrMediaOrReactionMixinGroupArgs,
        d = e.individualIndividualFanoutOrBotMetricsEntryPointMixinGroupArgs,
        m = (t = o("WASmaxMixins")).optionalMerge(
          q,
          ue(
            t.optionalMerge(
              o("WASmaxOutMessagePublishAgentEngagementTypeMixin")
                .mergeAgentEngagementTypeMixin,
              t.optionalMerge(
                Fe,
                t.optionalMerge(
                  De,
                  t.optionalMerge(
                    Be,
                    t.optionalMerge(
                      we,
                      t.optionalMerge(
                        o("WASmaxOutMessagePublishBotMessageTypeMixin")
                          .mergeBotMessageTypeMixin,
                        ie(
                          o("WASmaxJsx").smax("message", {
                            to: o("WAWap").JID(n),
                          }),
                          e,
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
        );
      return m;
    }
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q(e, t) {
      if (t.individualIndividualFanout)
        return he(e, t.individualIndividualFanout);
      if (t.botMetricsEntryPoint)
        return o(
          "WASmaxOutMessagePublishBotMetricsEntryPointMixin",
        ).mergeBotMetricsEntryPointMixin(e, t.botMetricsEntryPoint);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function U(e, t) {
      if (t.individualIndividualSingle)
        return Ce(e, t.individualIndividualSingle);
      if (t.individualIndividualFanout)
        return he(e, t.individualIndividualFanout);
      if (t.botMetricsEntryPoint)
        return o(
          "WASmaxOutMessagePublishBotMetricsEntryPointMixin",
        ).mergeBotMetricsEntryPointMixin(e, t.botMetricsEntryPoint);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function V(e) {
      var t = e.messageRecipient,
        n = o("WASmaxJsx").smax("message", { recipient: o("WAWap").JID(t) });
      return n;
    }
    function H(e, t) {
      var n = V(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function G(e) {
      var t = e.anyPeerRecipientLid,
        n = o("WASmaxJsx").smax("smax$any", {
          peer_recipient_lid: o("WAWap").JID(t),
        });
      return n;
    }
    function z(e, t) {
      var n = G(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function j(e) {
      var t = e.anyPeerRecipientPn,
        n = o("WASmaxJsx").smax("smax$any", {
          peer_recipient_pn: o("WAWap").JID(t),
        });
      return n;
    }
    function K(e, t) {
      var n = j(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Q(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function X(e, t) {
      var n = Q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Y(e) {
      var t = e.messageRecipientPn,
        n = o("WASmaxJsx").smax("message", { recipient_pn: o("WAWap").JID(t) });
      return n;
    }
    function J(e, t) {
      var n = Y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Z(e, t) {
      if (t.threadTypeTagEnum) return Ie(e, t.threadTypeTagEnum);
      if (t.threadTypeTagLegacy) return te(e, t.threadTypeTagLegacy);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ee(e) {
      var t = e.metaThreadType,
        n = o("WASmaxJsx").smax("meta", {
          thread_type: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function te(e, t) {
      var n = ee(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ne(e) {
      var t = e.anyElementValue,
        n = o("WASmaxJsx").smax("smax$any", null, t);
      return n;
    }
    function re(e, t) {
      var n = ne(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function oe(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").JID(t) });
      return n;
    }
    function ae(e) {
      var t = e.toArgs,
        n = e.encRetryMixinArgs,
        r = e.encTypeIndividualMixinArgs,
        a = e.encVersionBotArgs,
        i = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "bot",
            null,
            [
              o("WASmaxOutMessagePublishEncVersionBot").mergeEncVersionBot(
                o(
                  "WASmaxOutMessagePublishEncTypeIndividualMixin",
                ).mergeEncTypeIndividualMixin(
                  o("WASmaxMixins").optionalMerge(
                    o("WASmaxOutMessagePublishEncRetryMixin")
                      .mergeEncRetryMixin,
                    o("WASmaxJsx").smax("enc", null),
                    n,
                  ),
                  r,
                ),
                a,
              ),
            ].concat(o("WASmaxChildren").REPEATED_CHILD(oe, t, 1, 3)),
          ),
        );
      return i;
    }
    function ie(e, t) {
      var n = ae(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function le(e, t) {
      if (t.isContentTypeText)
        return o(
          "WASmaxOutMessagePublishContentTypeTextMixin",
        ).mergeContentTypeTextMixin(e);
      if (t.individualContentTypeBotResponseMediaFanout)
        return pe(e, t.individualContentTypeBotResponseMediaFanout);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function se(e, t) {
      if (t.isContentTypeText)
        return o(
          "WASmaxOutMessagePublishContentTypeTextMixin",
        ).mergeContentTypeTextMixin(e);
      if (t.isContentTypeMedia)
        return o(
          "WASmaxOutMessagePublishContentTypeMediaMixin",
        ).mergeContentTypeMediaMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ue(e, t) {
      if (t.isContentTypeText)
        return o(
          "WASmaxOutMessagePublishContentTypeTextMixin",
        ).mergeContentTypeTextMixin(e);
      if (t.isContentTypeMedia)
        return o(
          "WASmaxOutMessagePublishContentTypeMediaMixin",
        ).mergeContentTypeMediaMixin(e);
      if (t.isContentTypeReaction)
        return o(
          "WASmaxOutMessagePublishContentTypeReactionMixin",
        ).mergeContentTypeReactionMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ce(e) {
      var t = e.toCount,
        n = o("WASmaxJsx").smax(
          "participants",
          null,
          o("WASmaxChildren").REPEATED_CHILD_COUNT(de, t, 2, 2),
        );
      return n;
    }
    function de() {
      var e = o("WASmaxJsx").smax(
        "to",
        null,
        o("WASmaxJsx").smax("enc", { mediatype: "image" }),
      );
      return e;
    }
    function me(e) {
      var t = e.participantsArgs,
        n = o(
          "WASmaxOutMessagePublishContentTypeMediaMixin",
        ).mergeContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxChildren").OPTIONAL_CHILD(ce, t),
          ),
        );
      return n;
    }
    function pe(e, t) {
      var n = me(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _e(e) {
      var t = e.toContentBindingMixinArgs,
        n = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishToContentBindingMixin")
            .mergeToContentBindingMixin,
          o("WASmaxOutMessagePublishToDeviceMixin").mergeToDeviceMixin(
            o("WASmaxJsx").smax("to", null),
            e,
          ),
          t,
        );
      return n;
    }
    function fe() {
      var e = o("WASmaxJsx").smax("enc", null);
      return e;
    }
    function ge(e) {
      var t,
        n = e.toArgs,
        r = e.messageTo,
        a = e.tDeprecatedMixinArgs,
        i = e.botMessageTypeMixinArgs,
        l = e.businessBotMessageMixinArgs,
        s = e.botMetricsEntryPointMixinArgs,
        u = e.botMetricsThreadEntryPointMixinArgs,
        c = e.msgMetaOriginMixinArgs,
        d = e.hasLidChatOrigin,
        m = e.botLocalAutomatedTypeMixinArgs,
        p = e.businessBotMessageFeedbackRequestedMixinArgs,
        _ = e.botPersonaTypeMixinArgs,
        f = e.botClientMultiThreadIDMessageMixinArgs,
        g = e.botTEERoutingMessageMixinArgs,
        h = e.botModeSelectionMixinArgs,
        y = e.agentEngagementTypeMixinArgs,
        C = e.peripheralOriginMixinArgs,
        b = e.hasSgCapture,
        v = e.contentFanoutMixinsArgs,
        S = ze(
          (t = o("WASmaxMixins")).optionalMerge(
            o("WASmaxOutMessagePublishSgCaptureMixin").mergeSgCaptureMixin,
            t.optionalMerge(
              o("WASmaxOutMessagePublishPeripheralOriginMixin")
                .mergePeripheralOriginMixin,
              t.optionalMerge(
                o("WASmaxOutMessagePublishAgentEngagementTypeMixin")
                  .mergeAgentEngagementTypeMixin,
                t.optionalMerge(
                  Fe,
                  t.optionalMerge(
                    qe,
                    t.optionalMerge(
                      De,
                      t.optionalMerge(
                        Be,
                        t.optionalMerge(
                          Ve,
                          t.optionalMerge(
                            we,
                            t.optionalMerge(
                              Re,
                              t.optionalMerge(
                                o("WASmaxOutMessagePublishMsgMetaOriginMixin")
                                  .mergeMsgMetaOriginMixin,
                                t.optionalMerge(
                                  o(
                                    "WASmaxOutMessagePublishBotMetricsThreadEntryPointMixin",
                                  ).mergeBotMetricsThreadEntryPointMixin,
                                  t.optionalMerge(
                                    o(
                                      "WASmaxOutMessagePublishBotMetricsEntryPointMixin",
                                    ).mergeBotMetricsEntryPointMixin,
                                    t.optionalMerge(
                                      Ge,
                                      t.optionalMerge(
                                        o(
                                          "WASmaxOutMessagePublishBotMessageTypeMixin",
                                        ).mergeBotMessageTypeMixin,
                                        t.optionalMerge(
                                          o(
                                            "WASmaxOutMessagePublishTDeprecatedMixin",
                                          ).mergeTDeprecatedMixin,
                                          o("WASmaxJsx").smax(
                                            "message",
                                            { to: o("WAWap").JID(r) },
                                            o("WASmaxJsx").smax(
                                              "participants",
                                              null,
                                              o(
                                                "WASmaxChildren",
                                              ).REPEATED_CHILD(_e, n, 1, 1997),
                                            ),
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
        );
      return S;
    }
    function he(e, t) {
      var n = ge(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ye(e) {
      var t,
        n = e.messageTo,
        r = e.individualIndividualRetryMixinArgs,
        a = e.individualSingleContentBindingMixinArgs,
        i = e.botMessageTypeMixinArgs,
        l = e.businessBotMessageMixinArgs,
        s = e.botMetricsEntryPointMixinArgs,
        u = e.botMetricsThreadEntryPointMixinArgs,
        c = e.msgMetaOriginMixinArgs,
        d = e.hasLidChatOrigin,
        m = e.botLocalAutomatedTypeMixinArgs,
        p = e.businessBotMessageFeedbackRequestedMixinArgs,
        _ = e.botPersonaTypeMixinArgs,
        f = e.botClientMultiThreadIDMessageMixinArgs,
        g = e.botTEERoutingMessageMixinArgs,
        h = e.botModeSelectionMixinArgs,
        y = e.agentEngagementTypeMixinArgs,
        C = e.peripheralOriginMixinArgs,
        b = e.hasSgCapture,
        v = e.receiverAccountKindMixinArgs,
        S = e.contentMixinsArgs,
        R = e.encTypeIndividualMixinArgs,
        L = e.encMediaTypeDeprecatedMixinArgs,
        E = e.encVersionArgs,
        k = o("WASmaxOutMessagePublishContentMixins").mergeContentMixins(
          (t = o("WASmaxMixins")).optionalMerge(
            Ee,
            t.optionalMerge(
              o("WASmaxOutMessagePublishSgCaptureMixin").mergeSgCaptureMixin,
              t.optionalMerge(
                o("WASmaxOutMessagePublishPeripheralOriginMixin")
                  .mergePeripheralOriginMixin,
                t.optionalMerge(
                  o("WASmaxOutMessagePublishAgentEngagementTypeMixin")
                    .mergeAgentEngagementTypeMixin,
                  t.optionalMerge(
                    Fe,
                    t.optionalMerge(
                      qe,
                      t.optionalMerge(
                        De,
                        t.optionalMerge(
                          Be,
                          t.optionalMerge(
                            Ve,
                            t.optionalMerge(
                              we,
                              t.optionalMerge(
                                Re,
                                t.optionalMerge(
                                  o("WASmaxOutMessagePublishMsgMetaOriginMixin")
                                    .mergeMsgMetaOriginMixin,
                                  t.optionalMerge(
                                    o(
                                      "WASmaxOutMessagePublishBotMetricsThreadEntryPointMixin",
                                    ).mergeBotMetricsThreadEntryPointMixin,
                                    t.optionalMerge(
                                      o(
                                        "WASmaxOutMessagePublishBotMetricsEntryPointMixin",
                                      ).mergeBotMetricsEntryPointMixin,
                                      t.optionalMerge(
                                        Ge,
                                        t.optionalMerge(
                                          o(
                                            "WASmaxOutMessagePublishBotMessageTypeMixin",
                                          ).mergeBotMessageTypeMixin,
                                          t.optionalMerge(
                                            ve,
                                            t.optionalMerge(
                                              et,
                                              o("WASmaxJsx").smax(
                                                "message",
                                                { to: o("WAWap").JID(n) },
                                                o(
                                                  "WASmaxOutMessagePublishEncVersion",
                                                ).mergeEncVersion(
                                                  t.optionalMerge(
                                                    o(
                                                      "WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin",
                                                    )
                                                      .mergeEncMediaTypeDeprecatedMixin,
                                                    o(
                                                      "WASmaxOutMessagePublishEncTypeIndividualMixin",
                                                    ).mergeEncTypeIndividualMixin(
                                                      o("WASmaxJsx").smax(
                                                        "enc",
                                                        null,
                                                      ),
                                                      R,
                                                    ),
                                                    L,
                                                  ),
                                                  E,
                                                ),
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
      return k;
    }
    function Ce(e, t) {
      var n = ye(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function be(e) {
      var t = e.contentBindingElementValue,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("content_binding", null, t),
        );
      return n;
    }
    function ve(e, t) {
      var n = be(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Se() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { origin: "ctwa" }),
      );
      return e;
    }
    function Re(e) {
      var t = Se();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Le(e) {
      var t = e.metaReceiverAccountKind,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            receiver_account_kind: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function Ee(e, t) {
      var n = Le(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ke(e) {
      var t = e.metaThreadType,
        n = o("WASmaxJsx").smax("meta", { thread_type: o("WAWap").INT(t) });
      return n;
    }
    function Ie(e, t) {
      var n = ke(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Te(e) {
      var t = e.botClientMultiThreadIDMixinArgs,
        n = e.botConversationThreadIDMixinArgs,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxMixins").optionalMerge(
            Ne,
            $e(o("WASmaxJsx").smax("bot", null), t),
            n,
          ),
        );
      return r;
    }
    function De(e, t) {
      var n = Te(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function xe(e) {
      var t = e.botClientThreadId,
        n = o("WASmaxJsx").smax("bot", {
          client_thread_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function $e(e, t) {
      var n = xe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Pe(e) {
      var t = e.botConversationThreadId,
        n = o("WASmaxJsx").smax("bot", {
          conversation_thread_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function Ne(e, t) {
      var n = Pe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Me(e) {
      var t = e.botLocalAutomatedType,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("bot", {
            local_automated_type: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function we(e, t) {
      var n = Me(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ae(e) {
      var t = e.botModeSelection,
        n = e.botModeSelected,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("bot", {
            mode_selection: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              t,
            ),
            mode_selected: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
          }),
        );
      return r;
    }
    function Fe(e, t) {
      var n = Ae(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Oe(e) {
      var t = e.botPersonaType,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("bot", {
            persona_type: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function Be(e, t) {
      var n = Oe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function We(e) {
      var t = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxOutMessagePublishBotTEERoutingMixin").mergeBotTEERoutingMixin(
          o("WASmaxJsx").smax("bot", null),
          e,
        ),
      );
      return t;
    }
    function qe(e, t) {
      var n = We(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ue(e) {
      var t = e.botFeedbackRequested,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("bot", {
            feedback_requested: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function Ve(e, t) {
      var n = Ue(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function He(e) {
      var t = e.botBizBot,
        n = e.botEdit,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("bot", {
            biz_bot: o("WAWap").CUSTOM_STRING(t),
            edit: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
          }),
        );
      return r;
    }
    function Ge(e, t) {
      var n = He(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ze(e, t) {
      if (t.isContentTypeText)
        return o(
          "WASmaxOutMessagePublishContentTypeTextMixin",
        ).mergeContentTypeTextMixin(e);
      if (t.contentTypeMediaFanout)
        return o(
          "WASmaxOutMessagePublishContentTypeMediaFanoutMixin",
        ).mergeContentTypeMediaFanoutMixin(e, t.contentTypeMediaFanout);
      if (t.contentTypeMediaFanoutDeprecated)
        return Je(e, t.contentTypeMediaFanoutDeprecated);
      if (t.contentTypeLiveLocationFanout)
        return o(
          "WASmaxOutMessagePublishContentTypeLiveLocationFanoutMixin",
        ).mergeContentTypeLiveLocationFanoutMixin(
          e,
          t.contentTypeLiveLocationFanout,
        );
      if (t.individualContentTypePayIndividual)
        return o(
          "WASmaxOutMessagePublishIndividualContentTypePayIndividualMixin",
        ).mergeIndividualContentTypePayIndividualMixin(
          e,
          t.individualContentTypePayIndividual,
        );
      if (t.contentTypeListFanout) return Qe(e, t.contentTypeListFanout);
      if (t.isContentTypeReaction)
        return o(
          "WASmaxOutMessagePublishContentTypeReactionMixin",
        ).mergeContentTypeReactionMixin(e);
      if (t.contentTypePollCreation)
        return o(
          "WASmaxOutMessagePublishContentTypePollCreationMixin",
        ).mergeContentTypePollCreationMixin(e, t.contentTypePollCreation);
      if (t.isContentTypePollEdit)
        return o(
          "WASmaxOutMessagePublishContentTypePollEditMixin",
        ).mergeContentTypePollEditMixin(e);
      if (t.contentTypePollVote)
        return o(
          "WASmaxOutMessagePublishContentTypePollVoteMixin",
        ).mergeContentTypePollVoteMixin(e, t.contentTypePollVote);
      if (t.isContentTypePollResultSnapshot)
        return o(
          "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
        ).mergeContentTypePollResultSnapshotMixin(e);
      if (t.isContentTypePollAddOption)
        return o(
          "WASmaxOutMessagePublishContentTypePollAddOptionMixin",
        ).mergeContentTypePollAddOptionMixin(e);
      if (t.isContentTypePollAddOptionRevoke)
        return o(
          "WASmaxOutMessagePublishContentTypePollAddOptionRevokeMixin",
        ).mergeContentTypePollAddOptionRevokeMixin(e);
      if (t.isContentTypeMedianotify)
        return o(
          "WASmaxOutMessagePublishContentTypeMedianotifyMixin",
        ).mergeContentTypeMedianotifyMixin(e);
      if (t.contentTypeEvent)
        return o(
          "WASmaxOutMessagePublishContentTypeEventMixin",
        ).mergeContentTypeEventMixin(e, t.contentTypeEvent);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function je() {
      var e = o("WASmaxJsx").smax(
        "to",
        null,
        o("WASmaxJsx").smax("enc", { mediatype: "list" }),
      );
      return e;
    }
    function Ke(e) {
      var t = e.toCount,
        n = e.singleSelectOrProductListMixinGroupArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishSingleSelectOrProductListMixinGroup")
            .mergeSingleSelectOrProductListMixinGroup,
          o(
            "WASmaxOutMessagePublishContentTypeMediaMixin",
          ).mergeContentTypeMediaMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxJsx").smax(
                "participants",
                null,
                o("WASmaxChildren").HOMOGENEOUS_CHILD_COUNT(je, t),
              ),
            ),
          ),
          n,
        );
      return r;
    }
    function Qe(e, t) {
      var n = Ke(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Xe(e) {
      var t = e.encMediatype,
        n = e.hasEncStickerTypeAvatar,
        r = e.encNativeFlowName,
        a = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("enc", {
            mediatype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
            sticker_type: o("WASmaxAttrs").OPTIONAL_LITERAL("avatar", n),
            native_flow_name: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              r,
            ),
          }),
        );
      return a;
    }
    function Ye(e) {
      var t = e.toArgs,
        n = e.senderContentBindingMixinArgs,
        r = e.contentTypeMediaOrMedianotifyMixinGroupArgs,
        a = o(
          "WASmaxOutMessagePublishContentTypeMediaOrMedianotifyMixinGroup",
        ).mergeContentTypeMediaOrMedianotifyMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishSenderContentBindingMixin")
              .mergeSenderContentBindingMixin,
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxJsx").smax(
                "participants",
                null,
                o("WASmaxChildren").HOMOGENEOUS_CHILD(Xe, t),
              ),
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function Je(e, t) {
      var n = Ye(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ze(e) {
      var t = e.individualIndividualRetryToPeerMixinArgs,
        n = o("WASmaxMixins").optionalMerge(
          nt,
          o("WASmaxOutMessagePublishRetryMixin").mergeRetryMixin(
            o("WASmaxJsx").smax("message", null),
            e,
          ),
          t,
        );
      return n;
    }
    function et(e, t) {
      var n = Ze(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function tt(e) {
      var t = e.messageRecipient,
        n = o("WASmaxJsx").smax("message", { recipient: o("WAWap").JID(t) });
      return n;
    }
    function nt(e, t) {
      var n = tt(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendIndividualRPC = e),
      (l.parseIndividualResponseNegative = s),
      (l.parseIndividualResponseSuccess = u),
      (l.makeIndividualRequest = d));
  },
  98,
);
