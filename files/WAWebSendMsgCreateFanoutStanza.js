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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r, o, a, i, l, s) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, d, m, p) {
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
              C = o("WAWebBotBaseGating").isBotEnabled() && H(e, t),
              b = (y && t.isBot()) || C,
              R = y && !t.isBot() && !C,
              L = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              E = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              T = yield I(t, i),
              x = T ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              P = T && x != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !R &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !P
            ) {
              var M = a[0],
                A = o("WAWebUserPrefsMeUser").isMeAccount(M)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                F = A;
              (M.isBot() &&
                b &&
                (F = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: A,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  M,
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
                  (M.isHosted() ||
                    (M.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(M))),
                B = yield S(M, l),
                W = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  M,
                  0,
                  F,
                  e,
                  d,
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
            var G = !1,
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
                        var y = n.isBot() && (h || R || L),
                          C = yield $(r, n, e, y, P);
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
                          v = yield S(n, l),
                          E = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, C, e, d, v, b),
                          k = E.ciphertext,
                          I = E.type;
                        I === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (G = !0);
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
                        return P && n.isFbidBot()
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
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
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
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
              j = yield (v || (v = n("Promise"))).all(z),
              K = k(j),
              Q = K.botSuccessNodes,
              X = K.coexAgentWids,
              Y = K.coexEncType,
              J = K.coexSharedEnc,
              Z = K.successNodes;
            if (D(P, X.length))
              return (v || (v = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (Z.length > 0 || Q.length > 0 || X.length > 0) {
              var ee = w(!1, t, e);
              if (P && X.length > 0)
                var te = o("WAWebMsgGetters").getMessageSecret(e) != null,
                  ne = X.map(function (e) {
                    return e.toString();
                  }).join(",");
              return {
                body:
                  Z.length > 0 ? o("WAWap").wap("participants", null, Z) : null,
                botBody: N({
                  agentEngagementType: ee,
                  botSuccessNodes: Q,
                  coexAgentWids: X,
                  coexSelfLid: x,
                  coexSharedEnc: J,
                  coexV2UserAgentSend: P,
                  isBotFeedbackMessage: y,
                  isBotFeedbackMessageInAgentChat: b,
                  personaType: E != null ? E : null,
                }),
                shouldHaveIdentity: G,
              };
            }
            return v.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(t) {
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
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
            e.isFbidBot() &&
            !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            F(t) &&
            (yield B())
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return e && t === 0;
    }
    function x(e, t) {
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
    function $(e, t, n, r, o) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              i && (l = x(l, o("WAWebMsgGetters").getMessageSecret(n))),
              l
            );
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e) {
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
        ? M({
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
    function M(e) {
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
    function w(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    var A = [
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
    function F(e) {
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
        ? F(l)
        : ((o = e.locationMessage) == null ? void 0 : o.isLive) === !0 ||
            ((a = e.eventMessage) == null ? void 0 : a.isScheduleCall) === !0 ||
            ((i = e.protocolMessage) == null ? void 0 : i.botFeedbackMessage) !=
              null
          ? !1
          : !A.some(function (t) {
              return e[t] != null;
            });
    }
    function O(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        F(e)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebApiDeviceList").getMyDeviceList();
            return e.devices.some(function (e) {
              return e.isHosted === !0;
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] gate: failed to read self device list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-self-device-list-read-failed"),
              !1
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
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
    function U(e, t, n, r, o) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            if (!O(e, t, i)) return null;
            var l = yield (v || (v = n("Promise"))).all([
                B(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
              ]),
              s = l[0],
              u = l[1];
            if (!s && !u) return null;
            var c = s ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              d = u ? q(a, t) : null;
            return c == null && d == null ? null : { peerLid: d, selfLid: c };
          },
        )),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
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
    function G(e, t, n, r, o, a, i, l) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a, i, l) {
            var s = yield U(t, n, r, o, a);
            if (s == null) return null;
            var u = s.peerLid,
              c = s.selfLid,
              d = [c, u].filter(Boolean),
              m = yield j(e, t, i, d, null, l);
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
        z.apply(this, arguments)
      );
    }
    function j(e, t, n, r, o, a) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                p = new Set(),
                _ = [];
              for (var f of a) {
                var g = o("WAWebCommsWapMd").DEVICE_JID(f),
                  h = g.toString();
                p.has(h) ||
                  (p.add(h), _.push(o("WAWap").wap("to", { jid: g })));
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
                  [].concat(_, [y]),
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u = e.chatId,
            c = e.deviceList,
            d = e.groupData,
            m = e.metricReporter,
            y = e.msgProtobuf,
            C = e.msgRecord,
            b = e.option,
            S = e.scheduledMsgMetadata,
            R = C.data,
            E = R.from,
            k = R.id,
            I = R.subtype,
            T = R.to,
            D =
              o("WAWebABProps").getABPropConfigValue(
                "web_coex_simple_signal_enabled",
              ) === 1 &&
              T.isUser() &&
              ((t = o("WAWebContactCollection").ContactCollection.get(T)) ==
                null || (t = t.privacyMode) == null
                ? void 0
                : t.hostStorage) ===
                o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
              !o(
                "WAWebSimpleSignalDowngradeStore",
              ).isCoexUserDowngradedFromSimpleSignal(T);
          D &&
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
            (yield (v || (v = n("Promise"))).all(
              c
                .filter(function (e) {
                  return (
                    !e.isHosted() &&
                    e.user === T.user &&
                    o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                  );
                })
                .map(function (e) {
                  return o("WAWebSignalSessionApi").deleteRemoteSession(e);
                }),
            ));
          try {
            var x, $;
            (x = m.sendPerfReporter) == null || x.startPrekeysFetchStage();
            var P = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: c,
              }),
              N = P == null ? void 0 : P.missedPrekeyCount;
            if (N != null) {
              var M;
              (M = m.sendPerfReporter) == null || M.setFetchedPrekeyCount(N);
            }
            (($ = m.sendPerfReporter) == null || $.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: P == null ? void 0 : P.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  b.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  b.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(c.length)
                    : null,
              }),
              b.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                (b.sessionScope == null ||
                  b.sessionScope ===
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error",
                  ])),
              )
              .tags("messaging");
          }
          var w = H(R, u),
            A =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(R) &&
                u.isBot()) ||
              w,
            F = o("WAWebThreadMsgUtils").getMsgAiThread(R),
            O =
              F != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(F)
                : null,
            B = c;
          b.isResendingMsg &&
            (B = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(C, c));
          var W = B.map(function (e) {
            return { msgKey: k, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(W),
            (a = m.sendPerfReporter) == null || a.startClientEncryptStage());
          var q = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              R,
              Y(E, B),
            ),
            U = o("WAWebMsgGetters").getWamEditType(R),
            V = yield L(R, T, B, y, b, q, U, D, S);
          (i = m.sendPerfReporter) == null || i.postClientEncryptStage();
          var z = null;
          if (
            b.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var j =
              (S == null ? void 0 : S.kind) === "schedule"
                ? S.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(y);
            z = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(j),
            });
          }
          var K = o("WAWebE2EProtoUtils").getBizNativeFlowName(y),
            Q = R.nativeFlowInteractiveMsg,
            X,
            Z = o("WAWebContactCollection").ContactCollection.get(u),
            ee = o("WAWebChatCollection").ChatCollection.get(u),
            te = Z == null ? void 0 : Z.privacyMode;
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
            ae,
            ie,
            le,
            se = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated();
          if (
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "createFanoutMsgStanza: create fanout for a message. found chat: ",
                  ". found contact: ",
                  ".\n      is lid: ",
                  ". lid origin: ",
                  ". isLidMigrated: ",
                  "\n      contact has phone number: ",
                  "",
                ])),
              ee != null,
              Z != null,
              u.isLid(),
              ee == null ? void 0 : ee.lidOriginType,
              se,
              (Z == null ? void 0 : Z.phoneNumber) != null,
            ),
            u.isLid() &&
              (((ee == null ? void 0 : ee.lidOriginType) == null ||
                (ee == null ? void 0 : ee.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (Z == null ? void 0 : Z.shareOwnPn) !== !0 &&
                (Z == null ? void 0 : Z.phoneNumber) != null &&
                (re = Z == null ? void 0 : Z.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (Z == null ? void 0 : Z.username) != null &&
                (le = Z.username)),
            T.isLid()
              ? se &&
                (ee == null ? void 0 : ee.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ie = o("WAWebApiContact").getPhoneNumber(T))
              : T.isUser() &&
                ee != null &&
                ee.accountLid &&
                ((ae = ee == null ? void 0 : ee.accountLid),
                ae.isLid() ||
                  o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      ae.toLogString(),
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
          (b.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, B)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ue = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: u,
              groupData: d,
              includeAttributes: {
                origin: ee == null ? void 0 : ee.lidOriginType,
                hashedAiThreadId: O,
              },
              msgProtobuf: y,
              msgRecord: C,
            }),
            ce =
              S != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(S)
                : null,
            de =
              q == null
                ? void 0
                : q.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(E),
                    ),
                  ),
            me =
              de != null
                ? o("WAWap").wap("sender_content_binding", null, de)
                : null,
            pe;
          if (R.subtype === "bot_request_welcome") pe = "request_welcome";
          else if (R.botMsgBodyType != null)
            e: {
              if (
                R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
              ) {
                pe = "prompt";
                break e;
              }
              if (
                R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
              ) {
                pe = "command";
                break e;
              }
              if (
                R.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
              ) {
                o("WALogger").ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] outgoing voice message is not supported",
                    ])),
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  R.botMsgBodyType,
              );
            }
          var _e = w
              ? null
              : o("WAWebBotTypes").getBotLocalAutomatedType(R.bizBotType),
            fe,
            ge;
          if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
            var he = R.botModeOverride;
            if (
              he != null &&
              he.length > 0 &&
              o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
            )
              ge = String(he[0]);
            else {
              var ye = R.botModeSelection;
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
          (pe != null || _e != null || F != null || fe != null || ge != null) &&
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
                F != null
                  ? o("WAWap").CUSTOM_STRING(F.key.id)
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
          if (V.botBody == null) {
            var Se = {
                clientThreadId: F != null ? F.key.id : null,
                localAutomatedType: _e,
                modeSelected: ge,
                modeSelection: fe,
                type: pe,
              },
              Re = yield G(R, y, T, u, ee, b, U, Se);
            if (Re != null) {
              ((be = Re.node), (ve = Re.shouldHaveIdentity));
              var Le = [Re.selfLid, Re.peerLid].filter(Boolean);
              try {
                yield o(
                  "WAWebApiCoexV2RelayReceiptStore",
                ).createOrMergeCoexV2RelayReceipts(k.id, Le, R.t);
              } catch (e) {
                throw (
                  o("WALogger")
                    .WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
          if (V.shouldHaveIdentity || ve) {
            var ke = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Ee = o("WAWap").wap("device-identity", null, ke);
          }
          var Ie = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(R, y, k.toString()),
            Te = (l = yield J(ee)) != null ? l : yield oe(ee, u),
            De;
          d != null &&
            (De =
              (d == null ? void 0 : d.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var xe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              ee,
            ),
            $e = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(k.id),
                to: o("WAWebCommsWapMd").CHAT_JID(T),
                type:
                  (s = S == null ? void 0 : S.originalStanzaType) != null
                    ? s
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y),
                peer_recipient_lid: ae
                  ? o("WAWebCommsWapMd").USER_JID(ae)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: ie
                  ? o("WAWebCommsWapMd").USER_JID(ie)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  le !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(le),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(y, I),
                device_fanout:
                  b.isResendingMsg === !0 || A ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: re
                  ? o("WAWebCommsWapMd").USER_JID(re)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  De != null
                    ? o("WAWap").CUSTOM_STRING(De)
                    : o("WAWap").DROP_ATTR,
              },
              V.body,
              V.botBody,
              z,
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
          if (!T.isGroup() && !T.isStatus()) {
            var Pe;
            (Pe = m.sendReporter) == null ||
              Pe.setOppositeHasUsername(le != null);
          }
          var Ne = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: k.id,
            class: "message",
            from: R.to,
            participant: null,
          });
          return { stanza: $e, ackTemplate: Ne };
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Z.apply(this, arguments)
      );
    }
    var ee = null,
      te = null,
      ne = new Map(),
      re = 5;
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === ee && te != null
              ? (a = te)
              : ((a = o("WABase64").decodeB64(n)),
                (ee = n),
                (te = a),
                ne.clear());
            var i = r.toString(),
              l = ne.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (ne.size >= re) {
              var u = ne.keys().next().value;
              u != null && ne.delete(u);
            }
            return (ne.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        ae.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = k),
      (l.isCoexV2UserAgentSend = I),
      (l.shouldRejectCoexV2UserAgentSend = D),
      (l.genCoexV2UserAgentAgentProto = x),
      (l.genBotFanoutContent = $),
      (l.genCoexV2UserAgentBotBody = M),
      (l.getBotAgentEngagementType = w),
      (l.isSelfCoexV2Hosted = B),
      (l.getIsBizBotFeedback = H),
      (l.genCoexV2RelayBotNodeForTargets = j),
      (l.createFanoutMsgStanza = Q),
      (l.genCsTokenBody = oe));
  },
  98,
);
