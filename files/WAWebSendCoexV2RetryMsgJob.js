__d(
  "WAWebSendCoexV2RetryMsgJob",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBotTypes",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebMsgGetters",
    "WAWebOutgoingMessage",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      var t = e.msgRecord,
        n = e.recipient,
        r = e.retryCount,
        a = e.to;
      return a.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
        ? { kind: "applicable", result: b(t, r, n) }
        : { kind: "not_applicable" };
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (n == null)
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] retry: send flag off; dropping bot retry for ",
                      "",
                    ])),
                  i,
                )
                .sendLogs("coexv2-retry-flag-off"),
              null
            );
          var l = yield o(
            "WAWebApiCoexV2RelayReceiptStore",
          ).getUndeliveredCoexV2Lids(i);
          if (l.length === 0)
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] retry: no undelivered LIDs for ",
                    "",
                  ])),
                i,
              ),
              null
            );
          var s = yield k(e, l),
            p = s.selfHosted,
            _ = s.survivors;
          if (_.length === 0)
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
            g = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(a, a.id.remote),
            h = yield o(
              "WAWebCoexV2SendContribution",
            ).genCoexV2RelayBotNodeForTargets(
              a,
              f,
              o("WAWebMsgGetters").getWamEditType(a),
              _,
              t,
              p,
              {
                clientThreadId: null,
                localAutomatedType: g
                  ? null
                  : o("WAWebBotTypes").getBotLocalAutomatedType(a.bizBotType),
                modeSelected: null,
                modeSelection: null,
                type: o("WAWebSendMsgBotStanza").getBotStanzaType(a),
              },
            );
          if (h == null)
            throw r("err")(
              "[coexv2] retry: failed to build relay bot node for " +
                _.length +
                " undelivered target(s)",
            );
          var y = o("WAWebSendMsgMetaNode").genMetaNode({
            chatId: a.id.remote,
            groupData: null,
            includeAttributes: { appendHostedSenderIntent: !0 },
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
            h.node,
            y,
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r, o) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (!o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()) return null;
            var l = e.data,
              s = l.id.id,
              u = a != null ? a : n;
            if (!i)
              return (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] invoked-agent retry: no represented-target marker for ",
                      "",
                    ])),
                  s,
                ),
                null
              );
            var c = yield L(s);
            try {
              var d = yield k(e, c, !0),
                m = d.selfHosted,
                g = d.survivors;
              if (g.length === 0)
                return (
                  o("WALogger")
                    .LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[coexv2] invoked-agent retry: no surviving represented targets for ",
                          "",
                        ])),
                      s,
                    )
                    .sendLogs(
                      "coexv2-invoked-agent-retry-no-surviving-targets",
                    ),
                  null
                );
              var h = g.map(o("WAWebWidFactory").asUserLidOrThrow),
                y = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
                  o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
                  e,
                ),
                C = yield o(
                  "WAWebCoexV2RelayEligibility",
                ).resolveCoexV2SimpleSignalPolicy({
                  chatId: l.id.remote,
                  stanzaTo: u,
                }),
                b = yield o(
                  "WAWebCoexV2SendContribution",
                ).genCoexV2InvokedAgentRetryBotNode(
                  l,
                  y,
                  o("WAWebMsgGetters").getWamEditType(l),
                  {
                    agentEngagementType: o(
                      "WAWebSendMsgBotStanza",
                    ).getBotAgentEngagementType(!1, u, l),
                    agentWid: n,
                    isFeedback: o("WAWebMsgGetters").getIsBotFeedbackMessage(l),
                    representedLids: h,
                    selfHosted: m,
                    stanzaTo: u,
                    useStatelessSession: o(
                      "WAWebCoexV2RelayEligibility",
                    ).shouldUseCoexV2StatelessSession(C, n),
                  },
                  t,
                ),
                v = b.shouldHaveIdentity
                  ? o("WAWap").wap(
                      "device-identity",
                      null,
                      yield o("WAWebAdvSignatureApi").getADVEncodedIdentity(),
                    )
                  : null,
                S = o("WAWebSendMsgMetaNode").genMetaNode({
                  chatId: l.id.remote,
                  groupData: null,
                  includeAttributes: { appendHostedSenderIntent: h.length > 0 },
                  msgProtobuf: y,
                  msgRecord: e,
                });
              return (
                yield o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .flushBufferToDiskIfNotMemOnlyMode(),
                o("WAWap").wap(
                  "message",
                  {
                    id: o("WAWap").CUSTOM_STRING(s),
                    to: o("WAWebCommsWapMd").CHAT_JID(u),
                    type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y),
                    edit: o("WAWebSendMsgCommonApi").editAttribute(
                      y,
                      l.subtype,
                    ),
                  },
                  b.node,
                  v,
                  S,
                )
              );
            } catch (e) {
              throw (
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] invoked-agent retry failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("coexv2-invoked-agent-retry-failed"),
                e
              );
            }
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = !0;
          try {
            ((t = yield o(
              "WAWebApiCoexV2RelayReceiptStore",
            ).getUndeliveredCoexV2Lids(e)),
              t.length === 0 &&
                (n = yield o(
                  "WAWebApiCoexV2RelayReceiptStore",
                ).hasCoexV2RelayReceipt(e)));
          } catch (e) {
            throw (
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] invoked-agent retry: missing relay receipt rows for ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("coexv2-invoked-agent-retry-receipt-state-missing"),
              r("err")(
                "[coexv2] invoked-agent retry: missing relay receipt rows for " +
                  e,
              )
            );
          return t;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          r === void 0 && (r = !1);
          var a = e.data.id.remote,
            i = yield (y || (y = n("Promise"))).all([
              o("WAWebCoexV2RelayEligibility").isSelfCoexV2Hosted(),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(a),
              o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(a),
            ]),
            l = i[0],
            s = i[1],
            u = i[2],
            c = [],
            d = [];
          for (var m of t) {
            var p = T(m, r);
            p != null &&
              (o("WAWebUserPrefsMeUser").isMeAccount(p)
                ? l && c.push(p)
                : s && !u && d.push(p));
          }
          var _ = yield y.all(
              d.map(function (e) {
                return o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                  e,
                );
              }),
            ),
            f = d.filter(function (e, t) {
              return !_[t];
            }),
            g =
              f.length > 0
                ? yield o(
                    "WAWebSendMsgCommonApi",
                  ).filterDeviceWithChangedIdentity(e, f)
                : f;
          return { selfHosted: l, survivors: [].concat(c, g) };
        })),
        I.apply(this, arguments)
      );
    }
    function T(t, n) {
      var a;
      try {
        a = o("WAWebWidFactory").createUserWidOrThrow(t);
      } catch (t) {
        if (n) throw t;
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] retry: skipping malformed undelivered LID",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-retry-malformed-lid"),
          null
        );
      }
      if (!a.isLid()) {
        if (n)
          throw r("err")(
            "[coexv2] invoked-agent retry: non-LID represented target " +
              a.toLogString(),
          );
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] retry: skipping non-LID undelivered target ",
                  "",
                ])),
              a.toLogString(),
            )
            .sendLogs("coexv2-retry-non-lid-target"),
          null
        );
      }
      return a;
    }
    ((l.getCoexV2RetryDispatch = C),
      (l.buildCoexV2RetryStanza = b),
      (l.buildCoexV2InvokedAgentRetryStanza = S));
  },
  98,
);
