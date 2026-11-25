__d(
  "WAWebSendCoexV2RetryMsgJob",
  [
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBotTypes",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2RelayEditProto",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
    "WAWebCoexV2UserAgentEligibility",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebOutgoingMessage",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSignalProtocolStore",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(t) {
      var n = t.msgRecord,
        r = t.recipient,
        a = t.retryContext,
        i = t.retryCount,
        l = t.to;
      return l.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
        ? { kind: "applicable", result: b(n, i, r) }
        : l.isFbidBot()
          ? (a == null ? void 0 : a.hasAdditionalRetryTargets) !== !0
            ? { kind: "not_applicable" }
            : o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()
              ? {
                  kind: "fallback",
                  result: v({
                    agentWid: l,
                    hasAdditionalRetryTargets: !0,
                    msgRecord: n,
                    recipient: r,
                    retryCount: i,
                  }),
                }
              : (o("WALogger")
                  .LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] invoked-agent retry: send flag off; using ordinary retry",
                      ])),
                  )
                  .sendLogs("coexv2-invoked-agent-retry-flag-off"),
                { kind: "fallback", result: Promise.resolve(null) })
          : { kind: "not_applicable" };
    }
    async function b(e, t, n) {
      if (n == null)
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] retry: missing recipient; skipping",
                ])),
            )
            .sendLogs("coexv2-retry-missing-recipient"),
          null
        );
      var a = e.data,
        i = a.id.id;
      if (!o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled())
        return (
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] retry: send flag off; dropping bot retry for ",
                  "",
                ])),
              i,
            )
            .sendLogs("coexv2-retry-flag-off"),
          null
        );
      var l = await o(
        "WAWebApiCoexV2RelayReceiptStore",
      ).getUndeliveredCoexV2Lids(i);
      if (l.length === 0)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] retry: no undelivered LIDs for ",
                "",
              ])),
            i,
          ),
          null
        );
      var m = await R(e, l),
        p = m.selfHosted,
        _ = m.survivors;
      if (_.length === 0)
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] retry: no surviving targets for ",
                "",
              ])),
            i,
          ),
          null
        );
      var f = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
          e,
        ),
        g = await o("WAWebCoexV2RelayEditProto").genCoexV2RelayProtobuf(
          f,
          o("WAWebMsgGetters").getMessageSecret(a),
        ),
        h = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(a, a.id.remote),
        y = await o(
          "WAWebCoexV2SendContribution",
        ).genCoexV2RelayBotNodeForTargets(
          a,
          g,
          o("WAWebMsgGetters").getWamEditType(a),
          _,
          t,
          p,
          {
            clientThreadId: null,
            localAutomatedType: h
              ? null
              : o("WAWebBotTypes").getBotLocalAutomatedType(a.bizBotType),
            modeSelected: null,
            modeSelection: null,
            type: o("WAWebSendMsgBotStanza").getBotStanzaType(a),
          },
        );
      if (y == null)
        throw r("err")(
          "[coexv2] retry: failed to build relay bot node for " +
            _.length +
            " undelivered target(s)",
        );
      var C = o("WAWebSendMsgMetaNode").genMetaNode({
        chatId: a.id.remote,
        groupData: null,
        includeAttributes: {
          appendHostedSenderIntent: !0,
          omitEngagementOrigin: !0,
        },
        msgProtobuf: f,
        msgRecord: e,
      });
      return o("WAWap").wap(
        "message",
        {
          id: o("WAWap").CUSTOM_STRING(i),
          to: o("WAWebCommsWapMd").CHAT_JID(n),
          type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(f),
          edit: o("WAWebSendMsgCommonApi").editAttribute(f, a.subtype),
        },
        y.node,
        C,
      );
    }
    async function v(e) {
      var t = e.agentWid,
        n = e.hasAdditionalRetryTargets,
        a = e.msgRecord,
        i = e.recipient,
        l = e.retryCount;
      if (!o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()) return null;
      var s = a.data,
        u = s.id.id,
        c = i != null ? i : t;
      if (!n)
        return (
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] invoked-agent retry: no represented-target marker for ",
                "",
              ])),
            u,
          ),
          null
        );
      var d = await S(u);
      try {
        var f = await R(a, d, !0),
          g = f.selfHosted,
          h = f.survivors;
        if (h.length === 0)
          return (
            o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] invoked-agent retry: no surviving represented targets for ",
                    "",
                  ])),
                u,
              )
              .sendLogs("coexv2-invoked-agent-retry-no-surviving-targets"),
            null
          );
        var y = h.map(o("WAWebWidFactory").asUserLidOrThrow),
          C = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
            a,
          ),
          b = await o(
            "WAWebCoexV2RelayEligibility",
          ).resolveCoexV2SimpleSignalPolicy({
            chatId: s.id.remote,
            stanzaTo: c,
          }),
          v = await o(
            "WAWebCoexV2SendContribution",
          ).genCoexV2InvokedAgentRetryBotNode(
            s,
            C,
            o("WAWebMsgGetters").getWamEditType(s),
            {
              agentEngagementType: o(
                "WAWebSendMsgBotStanza",
              ).getBotAgentEngagementType(!1, c, s),
              agentWid: t,
              isFeedback: o("WAWebMsgGetters").getIsBotFeedbackMessage(s),
              representedLids: y,
              selfHosted: g,
              stanzaTo: c,
              useStatelessSession: o(
                "WAWebCoexV2RelayEligibility",
              ).shouldUseCoexV2StatelessSession(b, t),
            },
            l,
          ),
          L = v.shouldHaveIdentity
            ? o("WAWap").wap(
                "device-identity",
                null,
                await o("WAWebAdvSignatureApi").getADVEncodedIdentity(),
              )
            : null,
          E = o("WAWebSendMsgMetaNode").genMetaNode({
            chatId: s.id.remote,
            groupData: null,
            includeAttributes: {
              appendHostedSenderIntent: y.length > 0,
              omitEngagementOrigin: !0,
            },
            msgProtobuf: C,
            msgRecord: a,
          });
        return (
          await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
          o("WAWap").wap(
            "message",
            {
              id: o("WAWap").CUSTOM_STRING(u),
              to: o("WAWebCommsWapMd").CHAT_JID(c),
              type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(C),
              edit: o("WAWebSendMsgCommonApi").editAttribute(C, s.subtype),
            },
            v.node,
            L,
            E,
          )
        );
      } catch (e) {
        throw (
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] invoked-agent retry failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-invoked-agent-retry-failed"),
          e
        );
      }
    }
    async function S(e) {
      var t,
        n = !0;
      try {
        ((t = await o(
          "WAWebApiCoexV2RelayReceiptStore",
        ).getUndeliveredCoexV2Lids(e)),
          t.length === 0 &&
            (n = await o(
              "WAWebApiCoexV2RelayReceiptStore",
            ).hasCoexV2RelayReceipt(e)));
      } catch (e) {
        throw (
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] invoked-agent retry receipt read failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-invoked-agent-retry-receipt-read-failed"),
          e
        );
      }
      if (!n)
        throw (
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] invoked-agent retry: missing relay receipt rows for ",
                  "",
                ])),
              e,
            )
            .sendLogs("coexv2-invoked-agent-retry-receipt-state-missing"),
          r("err")(
            "[coexv2] invoked-agent retry: missing relay receipt rows for " + e,
          )
        );
      return t;
    }
    async function R(e, t, n) {
      n === void 0 && (n = !1);
      var r = e.data.id.remote,
        a = await Promise.all([
          o("WAWebCoexV2UserAgentEligibility").isSelfCoexV2Hosted(),
          o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
          o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
          o("WAWebCoexV2RelayEligibility").shouldAeaStopRelayCopy(
            r,
            o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
              e,
            ),
          ),
        ]),
        i = a[0],
        l = a[1],
        s = a[2],
        u = a[3],
        c = [],
        d = [];
      for (var m of t) {
        var p = L(m, n);
        p != null &&
          (o("WAWebUserUtils").isMeAccount(p)
            ? i && c.push(p)
            : l && !s && !u && d.push(p));
      }
      var _ = await Promise.all(
          d.map(function (e) {
            return o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(e);
          }),
        ),
        f = d.filter(function (e, t) {
          return !_[t];
        }),
        g =
          f.length > 0
            ? await o("WAWebSendMsgCommonApi").filterDeviceWithChangedIdentity(
                e,
                f,
              )
            : f;
      return { selfHosted: i, survivors: [].concat(c, g) };
    }
    function L(e, t) {
      var n;
      try {
        n = o("WAWebWidFactory").createUserWidOrThrow(e);
      } catch (e) {
        if (t) throw e;
        return (
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] retry: skipping malformed undelivered LID",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-retry-malformed-lid"),
          null
        );
      }
      if (!n.isLid()) {
        if (t)
          throw r("err")(
            "[coexv2] invoked-agent retry: non-LID represented target " +
              n.toLogString(),
          );
        return (
          o("WALogger")
            .WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] retry: skipping non-LID undelivered target ",
                  "",
                ])),
              n.toLogString(),
            )
            .sendLogs("coexv2-retry-non-lid-target"),
          null
        );
      }
      return n;
    }
    ((l.getCoexV2RetryDispatch = C),
      (l.buildCoexV2RetryStanza = b),
      (l.buildCoexV2InvokedAgentRetryStanza = v));
  },
  98,
);
