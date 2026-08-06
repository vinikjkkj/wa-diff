__d(
  "WAWebSendMsgCreateFanoutStanza",
  [
    "Promise",
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebContactCollection",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebScheduledMsgStanzaContributor",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCtwaAttributionNode",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebThreadMsgUtils",
    "WAWebTrustedContactsUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWasaHatchOutboundWrapper",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.sessionScope;
          if (
            (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT) ||
            t.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT ||
            e.isHosted() ||
            e.isBot() ||
            e.isFbidBot() ||
            !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
          )
            return n;
          var r = yield o("WAWebSignalSessionApi").hasSignalSessions(
              [e],
              o("WAWebSessionScope").SessionScope.PQ,
            ),
            a = r[0];
          return a ? o("WAWebSessionScope").SessionScope.PQ : n;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r, o, a, i, l, s) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u, m, p) {
            var _,
              f =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              g = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              h =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((_ = e.invokedBotWid) == null ? void 0 : _.isBot()) === !0,
              y =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              C = o("WAWebBotBaseGating").isBotEnabled() && G(e, t),
              b = (y && t.isBot()) || C,
              v = y && !t.isBot() && !C,
              L = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              E = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              k = yield T(t, i),
              D = k ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              $ = k && D != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !v &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !$
            ) {
              var N = a[0],
                w = o("WAWebUserPrefsMeUser").isMeAccount(N)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                F = w;
              (N.isBot() &&
                b &&
                (F = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: w,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  N,
                ) &&
                  (F = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: e.id.id,
                    innerMessage: F,
                  })));
              var O =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  m &&
                  (N.isHosted() ||
                    (N.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(N))),
                B = yield R(N, l),
                W = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  N,
                  0,
                  F,
                  e,
                  u,
                  B,
                  O,
                ),
                q = W.ciphertext,
                U = W.type,
                V = null;
              return (
                (b || E != null) &&
                  (V = o("WAWap").wap("bot", {
                    type: b ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: E
                      ? o("WAWap").CUSTOM_STRING(E)
                      : o("WAWap").DROP_ATTR,
                  })),
                {
                  shouldHaveIdentity:
                    U === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                  body: o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(U),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(q)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        O &&
                        U === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                      mediatype: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeMediaType(f),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(i),
                      ),
                      native_flow_name: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeNativeFlowName(g),
                    },
                    q,
                  ),
                  botBody: V,
                }
              );
            }
            var H = !1,
              z = a.map(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = o("WAWebUserPrefsMeUser").isMeAccount(n)
                          ? o(
                              "WAWebDeviceSentMessageProtoUtils",
                            ).wrapDeviceSentMessage(i, t)
                          : i,
                        a =
                          l.fanoutType ===
                          o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                            ? o("WAWebWidFactory").asUserWidOrThrow(n)
                            : o("WAWebWidFactory").asUserWidOrThrow(t);
                      yield o("WAWebICDCMetaApi").populateICDCMeta(a, r);
                      var p =
                          s == null
                            ? void 0
                            : s.get(o("WAWebWidToJid").widToUserJid(a)),
                        _ =
                          p != null
                            ? o("WAWap").wap("content_binding", null, p)
                            : null;
                      try {
                        var y = n.isBot() && (h || v || L),
                          C = yield P(r, n, e, y, $);
                        if (
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(t, n)
                        )
                          try {
                            C = yield o(
                              "WAWebWasaHatchOutboundWrapper",
                            ).wrapHatchOutboundMessage({
                              currentStanzaId: e.id.id,
                              innerMessage: C,
                            });
                          } catch (e) {
                            throw e instanceof
                              o("WAWebWasaHatchOutboundWrapper")
                                .WAWebWasaHatchWrapError
                              ? e
                              : new (o(
                                  "WAWebWasaHatchOutboundWrapper",
                                ).WAWebWasaHatchWrapError)(
                                  "WASA Hatch outbound wrap failed",
                                  e,
                                );
                          }
                        var b =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          S = yield R(n, l),
                          E = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, C, e, u, S, b),
                          k = E.ciphertext,
                          I = E.type;
                        I === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (H = !0);
                        var T = o("WAWap").wap(
                          "enc",
                          {
                            v: o("WAWap").CUSTOM_STRING(
                              o(
                                "WAWebBackendJobsCommon",
                              ).CIPHERTEXT_VERSION.toString(),
                            ),
                            type: o("WAWap").CUSTOM_STRING(I),
                            session_type: o(
                              "WAWebEncryptMsgProtobuf",
                            ).isPqxdhCiphertext(k)
                              ? o("WAWap").CUSTOM_STRING("pq")
                              : o("WAWap").DROP_ATTR,
                            state:
                              b &&
                              I ===
                                o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                                ? o("WAWap").CUSTOM_STRING("false")
                                : o("WAWap").DROP_ATTR,
                            mediatype: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeMediaType(f),
                            "decrypt-fail": o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeDecryptFail(
                              o(
                                "WAWebE2EProtoUtils",
                              ).decryptFailAttributeFromProtobuf(i),
                            ),
                            native_flow_name: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeNativeFlowName(g),
                          },
                          k,
                        );
                        return $ && n.isFbidBot()
                          ? {
                              coexAgentWid: n,
                              coexEncType: I,
                              coexSharedEnc: T,
                              node: null,
                              shouldFanoutToBot: y,
                            }
                          : {
                              shouldFanoutToBot: y,
                              node: o("WAWap").wap(
                                "to",
                                { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                                T,
                                _,
                              ),
                            };
                      } catch (e) {
                        if (
                          e instanceof
                          o("WAWebWasaHatchOutboundWrapper")
                            .WAWebWasaHatchWrapError
                        )
                          throw e;
                        return (
                          o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "encryptAndSendUserMsg: encryption fail for ",
                                ": ",
                                "",
                              ])),
                            String(n),
                            e,
                          ),
                          o("WAWebSendMsgCommonApi").isPrimaryDevice(n) &&
                            o("WALogger")
                              .ERROR(
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "encryptAndSendUserMsg: encryption fail for primary device: ",
                                    "",
                                  ])),
                                e,
                              )
                              .tags("messaging")
                              .sendLogs("encryption-fail-for-primary-device"),
                          null
                        );
                      }
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
              j = yield (S || (S = n("Promise"))).all(z),
              K = I(j),
              Q = K.botSuccessNodes,
              X = K.coexAgentWids,
              Y = K.coexEncType,
              J = K.coexSharedEnc,
              Z = K.successNodes;
            if (x($, X.length))
              return (S || (S = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (Z.length > 0 || Q.length > 0 || X.length > 0) {
              var ee = A(!1, t, e);
              if ($ && X.length > 0)
                var te = o("WAWebMsgGetters").getMessageSecret(e) != null,
                  ne = X.map(function (e) {
                    return e.toString();
                  }).join(",");
              return {
                body:
                  Z.length > 0 ? o("WAWap").wap("participants", null, Z) : null,
                botBody: M({
                  agentEngagementType: ee,
                  botSuccessNodes: Q,
                  coexAgentWids: X,
                  coexSelfLid: D,
                  coexSharedEnc: J,
                  coexV2UserAgentSend: $,
                  isBotFeedbackMessage: y,
                  isBotFeedbackMessageInAgentChat: b,
                  personaType: E != null ? E : null,
                }),
                shouldHaveIdentity: H,
              };
            }
            return S.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      var n = [],
        r = [],
        a = [],
        i = null,
        l = null;
      return (
        t.forEach(function (t) {
          if (t != null) {
            if (t.coexSharedEnc != null && t.coexAgentWid != null) {
              i == null
                ? ((i = t.coexSharedEnc),
                  (l = t.coexEncType),
                  a.push(t.coexAgentWid))
                : o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[coexv2] user:agent send has multiple agent devices; relaying only the first",
                        ])),
                    )
                    .sendLogs("coexv2-user-agent-multi-device-dropped");
              return;
            }
            var s = t.node;
            s != null && (t.shouldFanoutToBot ? r.push(s) : n.push(s));
          }
        }),
        {
          botSuccessNodes: r,
          coexAgentWids: a,
          coexEncType: l,
          coexSharedEnc: i,
          successNodes: n,
        }
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
            e.isFbidBot() &&
            !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            O(t) &&
            (yield W())
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return e && t === 0;
    }
    function $(e, t) {
      var n,
        r = o("WAWebE2EProtoGenerator").sanitizeCoexV2RelayMessage(e);
      return (
        ((n = r.messageContextInfo) == null ? void 0 : n.botMessageSecret) !=
          null &&
          (r.messageContextInfo = babelHelpers.extends(
            {},
            r.messageContextInfo,
            { botMessageSecret: null },
          )),
        t != null &&
          (r.messageContextInfo = babelHelpers.extends(
            {},
            r.messageContextInfo,
            { messageSecret: t },
          )),
        r
      );
    }
    function P(e, t, n, r, o) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = a && t.isFbidBot(),
              l = e;
            return (
              r &&
                !i &&
                (l = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: e,
                  botMessageSecret: n.botMessageSecret,
                  mentionedJidList: n.mentionedJidList,
                })),
              t.isFbidBot() &&
                (l = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(l)),
              t.isBot() &&
                (l = o("WAWebE2EProtoGenerator").updateBotProtobuf(l)),
              i && (l = $(l, o("WAWebMsgGetters").getMessageSecret(n))),
              l
            );
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      var t = e.agentEngagementType,
        n = e.botSuccessNodes,
        r = e.coexAgentWids,
        a = e.coexSelfLid,
        i = e.coexSharedEnc,
        l = e.coexV2UserAgentSend,
        s = e.isBotFeedbackMessage,
        u = e.isBotFeedbackMessageInAgentChat,
        c = e.personaType;
      return l && i != null && r.length > 0
        ? w({
            agentEngagementType: t,
            agentWids: r,
            isFeedback: s,
            personaType: c,
            selfLid: a,
            sharedEnc: i,
          })
        : n.length > 0 || u
          ? o("WAWap").wap(
              "bot",
              {
                type: s ? "feedback" : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  t != null
                    ? o("WAWap").CUSTOM_STRING(t)
                    : o("WAWap").DROP_ATTR,
              },
              n,
            )
          : null;
    }
    function w(e) {
      var t = e.agentEngagementType,
        n = e.agentWids,
        r = e.isFeedback,
        a = e.personaType,
        i = e.selfLid,
        l = e.sharedEnc,
        s = new Set(),
        u = [];
      if (i != null) {
        var c = o("WAWebCommsWapMd").DEVICE_JID(i);
        (s.add(c.toString()), u.push(o("WAWap").wap("to", { jid: c })));
      }
      for (var d of n) {
        var m = o("WAWebCommsWapMd").DEVICE_JID(d),
          p = m.toString();
        s.has(p) || (s.add(p), u.push(o("WAWap").wap("to", { jid: m })));
      }
      return o("WAWap").wap(
        "bot",
        {
          type: r ? "feedback" : o("WAWap").DROP_ATTR,
          agent_engagement_type:
            t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
          persona_type:
            a != null ? o("WAWap").CUSTOM_STRING(a) : o("WAWap").DROP_ATTR,
        },
        [].concat(u, [l]),
      );
    }
    function A(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    var F = [
      "viewOnceMessage",
      "viewOnceMessageV2",
      "viewOnceMessageV2Extension",
      "liveLocationMessage",
      "sendPaymentMessage",
      "requestPaymentMessage",
      "declinePaymentRequestMessage",
      "cancelPaymentRequestMessage",
      "paymentInviteMessage",
      "callLogMesssage",
      "bcallMessage",
      "scheduledCallCreationMessage",
      "scheduledCallEditMessage",
    ];
    function O(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l =
          (t = (n = e.deviceSentMessage) == null ? void 0 : n.message) != null
            ? t
            : (r = e.ephemeralMessage) == null
              ? void 0
              : r.message;
      return l != null
        ? O(l)
        : ((o = e.locationMessage) == null ? void 0 : o.isLive) === !0 ||
            ((a = e.eventMessage) == null ? void 0 : a.isScheduleCall) === !0 ||
            ((i = e.protocolMessage) == null ? void 0 : i.botFeedbackMessage) !=
              null
          ? !1
          : !F.some(function (t) {
              return e[t] != null;
            });
    }
    function B(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        O(e)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebApiDeviceList").getMyDeviceList();
            return e.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      var n = e == null ? void 0 : e.accountLid,
        r =
          n != null && n.isLid() ? n : o("WAWebLidMigrationUtils").toUserLid(t);
      return (
        r == null &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] relay: peer is CoExV2 but has no LID; dropping peer <to>",
                ])),
            )
            .sendLogs("coexv2-relay-peer-lid-missing"),
        r
      );
    }
    function V(e, t, n, r, o) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            if (!B(e, t, i)) return null;
            var l = yield (S || (S = n("Promise"))).all([
                W(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
              ]),
              s = l[0],
              u = l[1],
              c = l[2];
            if (!s && !u) return null;
            var d = s ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              m = u && !c ? U(a, t) : null,
              _ =
                m != null &&
                (yield o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(
                  m,
                ));
            u &&
              (c || _) &&
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay: peer is blocked; dropping peer <to>",
                    ])),
                )
                .sendLogs("coexv2-relay-peer-blocked");
            var f = _ ? null : m;
            return d == null && f == null ? null : { peerLid: f, selfLid: d };
          },
        )),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      var n;
      return (
        o("WAWebMsgGetters").getIsBotFeedbackMessage(e) &&
        !!(
          e.bizBotType &&
          (n = e.protocolMessageKey) != null &&
          n.remote.equals(t)
        )
      );
    }
    function z(e) {
      var t;
      if (e.subtype === "bot_request_welcome") t = "request_welcome";
      else if (e.botMsgBodyType != null)
        e: {
          if (e.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT) {
            t = "prompt";
            break e;
          }
          if (e.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND) {
            t = "command";
            break e;
          }
          if (e.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] outgoing voice message is not supported",
                ])),
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e.botMsgBodyType,
          );
        }
      return t;
    }
    function j(e, t, n, r, o, a, i, l) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a, i, l) {
            var s = yield V(t, n, r, o, a);
            if (s == null) return null;
            var u = s.peerLid,
              c = s.selfLid,
              d = [c, u].filter(Boolean),
              m = yield Q(e, t, i, d, null, l);
            return m == null
              ? null
              : {
                  node: m.node,
                  shouldHaveIdentity: m.shouldHaveIdentity,
                  peerLid: u,
                  selfLid: c,
                };
          },
        )),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n, r, o, a) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            try {
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID],
              });
              var s = o("WAWebE2EProtoGenerator").sanitizeCoexV2RelayMessage(t),
                u = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                  0,
                  s,
                  e,
                  n,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                  !0,
                ),
                c = u.ciphertext,
                d = u.type,
                m = new Set(),
                p = [];
              for (var f of a) {
                var g = o("WAWebCommsWapMd").DEVICE_JID(f),
                  h = g.toString();
                m.has(h) ||
                  (m.add(h), p.push(o("WAWap").wap("to", { jid: g })));
              }
              var y = o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(d),
                    session_type: o(
                      "WAWebEncryptMsgProtobuf",
                    ).isPqxdhCiphertext(c)
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      d === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    count:
                      i != null && i > 0
                        ? o("WAWap").INT(i)
                        : o("WAWap").DROP_ATTR,
                  },
                  c,
                ),
                C = o("WAWap").wap(
                  "bot",
                  {
                    type: o("WAWap").MAYBE_CUSTOM_STRING(
                      l == null ? void 0 : l.type,
                    ),
                    local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(
                      l == null ? void 0 : l.localAutomatedType,
                    ),
                    client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(
                      l == null ? void 0 : l.clientThreadId,
                    ),
                    mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(
                      l == null ? void 0 : l.modeSelection,
                    ),
                    mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(
                      l == null ? void 0 : l.modeSelected,
                    ),
                  },
                  [].concat(p, [y]),
                );
              return {
                node: C,
                shouldHaveIdentity:
                  d === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                type: d,
              };
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] failed to build relay bot node",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("coexv2-relay-bot-node-build-failed"),
                null
              );
            }
          },
        )),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u = e.chatId,
            c = e.deviceList,
            d = e.groupData,
            m = e.metricReporter,
            p = e.msgProtobuf,
            _ = e.msgRecord,
            C = e.option,
            b = e.scheduledMsgMetadata,
            v = _.data,
            R = v.from,
            L = v.id,
            k = v.subtype,
            I = v.to,
            T =
              o("WAWebABProps").getABPropConfigValue(
                "web_coex_simple_signal_enabled",
              ) === 1 &&
              I.isUser() &&
              ((t = o("WAWebContactCollection").ContactCollection.get(I)) ==
                null || (t = t.privacyMode) == null
                ? void 0
                : t.hostStorage) ===
                o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
              !o(
                "WAWebSimpleSignalDowngradeStore",
              ).isCoexUserDowngradedFromSimpleSignal(I);
          T &&
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
            (yield (S || (S = n("Promise"))).all(
              c
                .filter(function (e) {
                  return (
                    !e.isHosted() &&
                    e.user === I.user &&
                    o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                  );
                })
                .map(function (e) {
                  return o("WAWebSignalSessionApi").deleteRemoteSession(e);
                }),
            ));
          try {
            var D, x;
            (D = m.sendPerfReporter) == null || D.startPrekeysFetchStage();
            var $ = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: c,
              }),
              P = $ == null ? void 0 : $.missedPrekeyCount;
            if (P != null) {
              var N;
              (N = m.sendPerfReporter) == null || N.setFetchedPrekeyCount(P);
            }
            ((x = m.sendPerfReporter) == null || x.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: $ == null ? void 0 : $.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  C.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  C.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(c.length)
                    : null,
              }),
              C.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                (C.sessionScope == null ||
                  C.sessionScope ===
                    o("WAWebSessionScope").SessionScope.DEFAULT) &&
                o("WAWebPQGatingUtils").isPq1on1MessageEnabled() &&
                (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.PQ,
                  wids: c,
                })));
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error",
                  ])),
              )
              .tags("messaging");
          }
          var M = G(v, u),
            w =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(v) &&
                u.isBot()) ||
              M,
            A = o("WAWebThreadMsgUtils").getMsgAiThread(v),
            F =
              A != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(A)
                : null,
            O = c;
          C.isResendingMsg &&
            (O = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(_, c));
          var B = O.map(function (e) {
            return { msgKey: L, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(B),
            (a = m.sendPerfReporter) == null || a.startClientEncryptStage());
          var W = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              v,
              Z(R, O),
            ),
            q = o("WAWebMsgGetters").getWamEditType(v),
            U = yield E(v, I, O, p, C, W, q, T, b);
          (i = m.sendPerfReporter) == null || i.postClientEncryptStage();
          var V = null;
          if (
            C.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var H =
              (b == null ? void 0 : b.kind) === "schedule"
                ? b.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(p);
            V = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(H),
            });
          }
          var K = o("WAWebE2EProtoUtils").getBizNativeFlowName(p),
            Q = v.nativeFlowInteractiveMsg,
            X,
            Y = o("WAWebContactCollection").ContactCollection.get(u),
            J = o("WAWebChatCollection").ChatCollection.get(u),
            te = Y == null ? void 0 : Y.privacyMode;
          if (te != null) {
            var ne;
            X = (ne = o("WAWap")).wap("biz", {
              host_storage: ne.INT(te.hostStorage),
              actual_actors: ne.INT(te.actualActors),
              privacy_mode_ts: ne.INT(te.privacyModeTs),
              native_flow_name: ne.MAYBE_CUSTOM_STRING(K),
            });
          }
          var re,
            oe,
            ae,
            le,
            se = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated();
          if (
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "createFanoutMsgStanza: create fanout for a message. found chat: ",
                  ". found contact: ",
                  ".\n      is lid: ",
                  ". lid origin: ",
                  ". isLidMigrated: ",
                  "\n      contact has phone number: ",
                  "",
                ])),
              J != null,
              Y != null,
              u.isLid(),
              J == null ? void 0 : J.lidOriginType,
              se,
              (Y == null ? void 0 : Y.phoneNumber) != null,
            ),
            u.isLid() &&
              (((J == null ? void 0 : J.lidOriginType) == null ||
                (J == null ? void 0 : J.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (Y == null ? void 0 : Y.shareOwnPn) !== !0 &&
                (Y == null ? void 0 : Y.phoneNumber) != null &&
                (re = Y == null ? void 0 : Y.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (Y == null ? void 0 : Y.username) != null &&
                (le = Y.username)),
            I.isLid()
              ? se &&
                (J == null ? void 0 : J.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ae = o("WAWebApiContact").getPhoneNumber(I))
              : I.isUser() &&
                J != null &&
                J.accountLid &&
                ((oe = J == null ? void 0 : J.accountLid),
                oe.isLid() ||
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      oe.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            X == null && K != null && Q === !0)
          ) {
            var ne;
            X = (ne = o("WAWap")).wap(
              "biz",
              null,
              ne.wap(
                "interactive",
                { v: "1", type: ne.CUSTOM_STRING("native_flow") },
                ne.wap("native_flow", { name: ne.CUSTOM_STRING(K) }),
              ),
            );
          } else
            X == null &&
              K != null &&
              (X = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(K),
              }));
          (C.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(_, O)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ue = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: u,
              groupData: d,
              includeAttributes: {
                origin: J == null ? void 0 : J.lidOriginType,
                hashedAiThreadId: F,
              },
              msgProtobuf: p,
              msgRecord: _,
            }),
            ce =
              b != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(b)
                : null,
            de =
              W == null
                ? void 0
                : W.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(R),
                    ),
                  ),
            me =
              de != null
                ? o("WAWap").wap("sender_content_binding", null, de)
                : null,
            pe = z(v),
            _e = M
              ? null
              : o("WAWebBotTypes").getBotLocalAutomatedType(v.bizBotType),
            fe,
            ge;
          if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
            var he = v.botModeOverride;
            if (
              he != null &&
              he.length > 0 &&
              o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
            )
              ge = String(he[0]);
            else {
              var ye = v.botModeSelection;
              if (ye != null && ye.length > 0) {
                var Ce = ye[0];
                Ce ===
                o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                  ? (fe = "default")
                  : Ce ===
                      o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                        .ThinkHard && (fe = "think_hard");
              }
            }
          }
          var be;
          (pe != null || _e != null || A != null || fe != null || ge != null) &&
            (be = o("WAWap").wap("bot", {
              type:
                pe != null
                  ? o("WAWap").CUSTOM_STRING(pe)
                  : o("WAWap").DROP_ATTR,
              local_automated_type:
                _e != null
                  ? o("WAWap").CUSTOM_STRING(_e)
                  : o("WAWap").DROP_ATTR,
              client_thread_id:
                A != null
                  ? o("WAWap").CUSTOM_STRING(A.key.id)
                  : o("WAWap").DROP_ATTR,
              mode_selection:
                fe != null
                  ? o("WAWap").CUSTOM_STRING(fe)
                  : o("WAWap").DROP_ATTR,
              mode_selected:
                ge != null
                  ? o("WAWap").CUSTOM_STRING(ge)
                  : o("WAWap").DROP_ATTR,
            }));
          var ve = !1;
          if (U.botBody == null) {
            var Se = {
                clientThreadId: A != null ? A.key.id : null,
                localAutomatedType: _e,
                modeSelected: ge,
                modeSelection: fe,
                type: pe,
              },
              Re = yield j(v, p, I, u, J, C, q, Se);
            if (Re != null) {
              ((be = Re.node), (ve = Re.shouldHaveIdentity));
              var Le = [Re.selfLid, Re.peerLid].filter(Boolean);
              try {
                yield o(
                  "WAWebApiCoexV2RelayReceiptStore",
                ).createOrMergeCoexV2RelayReceipts(L.id, Le, v.t);
              } catch (e) {
                throw (
                  o("WALogger")
                    .WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[coexv2] failed to seed relay receipt rows",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("coexv2-relay-receipt-seed-failed"),
                  e
                );
              }
            }
          }
          var Ee = null;
          if (U.shouldHaveIdentity || ve) {
            var ke = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Ee = o("WAWap").wap("device-identity", null, ke);
          }
          var Ie = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(v, p, L.toString()),
            Te = (l = yield ee(J)) != null ? l : yield ie(J, u),
            De;
          d != null &&
            (De =
              (d == null ? void 0 : d.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var xe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              J,
            ),
            $e = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(L.id),
                to: o("WAWebCommsWapMd").CHAT_JID(I),
                type:
                  (s = b == null ? void 0 : b.originalStanzaType) != null
                    ? s
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(p),
                peer_recipient_lid: oe
                  ? o("WAWebCommsWapMd").USER_JID(oe)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: ae
                  ? o("WAWebCommsWapMd").USER_JID(ae)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  le !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(le),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(p, k),
                device_fanout:
                  C.isResendingMsg === !0 || w ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: re
                  ? o("WAWebCommsWapMd").USER_JID(re)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  De != null
                    ? o("WAWap").CUSTOM_STRING(De)
                    : o("WAWap").DROP_ATTR,
              },
              U.body,
              U.botBody,
              V,
              Ee,
              X,
              ue,
              ce,
              me,
              be,
              Ie,
              Te,
              xe,
            );
          if (!I.isGroup() && !I.isStatus()) {
            var Pe;
            (Pe = m.sendReporter) == null ||
              Pe.setOppositeHasUsername(le != null);
          }
          var Ne = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: L.id,
            class: "message",
            from: v.to,
            participant: null,
          });
          return { stanza: $e, ackTemplate: Ne };
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          var t = e.tcToken,
            n = e.tcTokenTimestamp;
          return t == null ||
            n == null ||
            o("WAWebTrustedContactsUtils").isTokenExpired(
              n,
              o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
            )
            ? null
            : o("WAWap").wap("tctoken", null, t);
        })),
        te.apply(this, arguments)
      );
    }
    var ne = null,
      re = null,
      oe = new Map(),
      ae = 5;
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "wa_nct_token_send_enabled",
            ) !== !0 ||
            !t.isRegularUser()
          )
            return null;
          var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            "WAWebNctSalt",
          );
          if (n == null)
            return (
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === ne && re != null
              ? (a = re)
              : ((a = o("WABase64").decodeB64(n)),
                (ne = n),
                (re = a),
                oe.clear());
            var i = r.toString(),
              l = oe.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (oe.size >= ae) {
              var u = oe.keys().next().value;
              u != null && oe.delete(u);
            }
            return (oe.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        le.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = I),
      (l.isCoexV2UserAgentSend = T),
      (l.shouldRejectCoexV2UserAgentSend = x),
      (l.genCoexV2UserAgentAgentProto = $),
      (l.genBotFanoutContent = P),
      (l.genCoexV2UserAgentBotBody = w),
      (l.getBotAgentEngagementType = A),
      (l.isSelfCoexV2Hosted = W),
      (l.getIsBizBotFeedback = G),
      (l.getBotStanzaType = z),
      (l.genCoexV2RelayBotNodeForTargets = Q),
      (l.createFanoutMsgStanza = Y),
      (l.genCsTokenBody = ie));
  },
  98,
);
