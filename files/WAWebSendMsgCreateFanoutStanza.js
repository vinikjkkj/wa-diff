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
    function R(e, t, n) {
      return {
        ciphertext: t,
        isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
        participant: e,
        type: n,
      };
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r, o, a, i, l, s, u) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, u, m, p, _) {
            var f,
              g =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              h = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              y =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((f = e.invokedBotWid) == null ? void 0 : f.isBot()) === !0,
              C =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              b = o("WAWebBotBaseGating").isBotEnabled() && z(e, t),
              v = (C && t.isBot()) || b,
              E = C && !t.isBot() && !b,
              k = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              I = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              x = yield D(t, i),
              P = x ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              M = x && P != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !E &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !M
            ) {
              var A = a[0],
                O = o("WAWebUserPrefsMeUser").isMeAccount(A)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                B = O;
              (A.isBot() &&
                v &&
                (B = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: O,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  A,
                ) &&
                  (B = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: e.id.id,
                    innerMessage: B,
                  })));
              var W =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  m &&
                  (A.isHosted() ||
                    (A.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(A))),
                q = yield L(A, l),
                U = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  A,
                  0,
                  B,
                  e,
                  u,
                  q,
                  W,
                ),
                V = U.ciphertext,
                H = U.type,
                G = null;
              return (
                (v || I != null) &&
                  (G = o("WAWap").wap("bot", {
                    type: v ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: I
                      ? o("WAWap").CUSTOM_STRING(I)
                      : o("WAWap").DROP_ATTR,
                  })),
                {
                  deviceEncs: _ ? [R(A, V, H)] : [],
                  shouldHaveIdentity:
                    H === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                  body: o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(H),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(V)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        W &&
                        H === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                      mediatype: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeMediaType(g),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(i),
                      ),
                      native_flow_name: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeNativeFlowName(h),
                    },
                    V,
                  ),
                  botBody: G,
                }
              );
            }
            var j = !1,
              K = a.map(
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
                        f =
                          p != null
                            ? o("WAWap").wap("content_binding", null, p)
                            : null;
                      try {
                        var C = n.isBot() && (y || E || k),
                          b = yield N(r, n, e, C, M);
                        if (
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(t, n)
                        )
                          try {
                            b = yield o(
                              "WAWebWasaHatchOutboundWrapper",
                            ).wrapHatchOutboundMessage({
                              currentStanzaId: e.id.id,
                              innerMessage: b,
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
                        var v =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          S = yield L(n, l),
                          I = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, b, e, u, S, v),
                          T = I.ciphertext,
                          D = I.type;
                        D === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (j = !0);
                        var x = o("WAWap").wap(
                          "enc",
                          {
                            v: o("WAWap").CUSTOM_STRING(
                              o(
                                "WAWebBackendJobsCommon",
                              ).CIPHERTEXT_VERSION.toString(),
                            ),
                            type: o("WAWap").CUSTOM_STRING(D),
                            session_type: o(
                              "WAWebEncryptMsgProtobuf",
                            ).isPqxdhCiphertext(T)
                              ? o("WAWap").CUSTOM_STRING("pq")
                              : o("WAWap").DROP_ATTR,
                            state:
                              v &&
                              D ===
                                o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                                ? o("WAWap").CUSTOM_STRING("false")
                                : o("WAWap").DROP_ATTR,
                            mediatype: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeMediaType(g),
                            "decrypt-fail": o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeDecryptFail(
                              o(
                                "WAWebE2EProtoUtils",
                              ).decryptFailAttributeFromProtobuf(i),
                            ),
                            native_flow_name: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeNativeFlowName(h),
                          },
                          T,
                        );
                        return M && n.isFbidBot()
                          ? {
                              coexAgentWid: n,
                              coexEncType: D,
                              coexSharedEnc: x,
                              node: null,
                              shouldFanoutToBot: C,
                            }
                          : {
                              deviceEnc: _ ? R(n, T, D) : null,
                              shouldFanoutToBot: C,
                              node: o("WAWap").wap(
                                "to",
                                { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                                x,
                                f,
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
              Q = yield (S || (S = n("Promise"))).all(K),
              X = T(Q),
              Y = X.botSuccessNodes,
              J = X.coexAgentWids,
              Z = X.coexEncType,
              ee = X.coexSharedEnc,
              te = X.deviceEncs,
              ne = X.successNodes;
            if ($(M, J.length))
              return (S || (S = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (ne.length > 0 || Y.length > 0 || J.length > 0) {
              var re = F(!1, t, e);
              if (M && J.length > 0)
                var oe = o("WAWebMsgGetters").getMessageSecret(e) != null,
                  ae = J.map(function (e) {
                    return e.toString();
                  }).join(",");
              return {
                deviceEncs: te,
                body:
                  ne.length > 0
                    ? o("WAWap").wap("participants", null, ne)
                    : null,
                botBody: w({
                  agentEngagementType: re,
                  botSuccessNodes: Y,
                  coexAgentWids: J,
                  coexSelfLid: P,
                  coexSharedEnc: ee,
                  coexV2UserAgentSend: M,
                  isBotFeedbackMessage: C,
                  isBotFeedbackMessageInAgentChat: v,
                  personaType: I != null ? I : null,
                }),
                shouldHaveIdentity: j,
              };
            }
            return S.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(t) {
      var n = [],
        r = [],
        a = [],
        i = [],
        l = null,
        s = null;
      return (
        t.forEach(function (t) {
          if (t != null) {
            if (t.coexSharedEnc != null && t.coexAgentWid != null) {
              l == null
                ? ((l = t.coexSharedEnc),
                  (s = t.coexEncType),
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
            var u = t.node;
            u != null &&
              (t.shouldFanoutToBot
                ? r.push(u)
                : (n.push(u), t.deviceEnc != null && i.push(t.deviceEnc)));
          }
        }),
        {
          botSuccessNodes: r,
          coexAgentWids: a,
          coexEncType: s,
          coexSharedEnc: l,
          deviceEncs: i,
          successNodes: n,
        }
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
            e.isFbidBot() &&
            !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            B(t) &&
            (yield q())
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return e && t === 0;
    }
    function P(e, t) {
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
    function N(e, t, n, r, o) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              i && (l = P(l, o("WAWebMsgGetters").getMessageSecret(n))),
              l
            );
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e) {
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
        ? A({
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
    function A(e) {
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
    function F(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    var O = [
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
    function B(e) {
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
        ? B(l)
        : ((o = e.locationMessage) == null ? void 0 : o.isLive) === !0 ||
            ((a = e.eventMessage) == null ? void 0 : a.isScheduleCall) === !0 ||
            ((i = e.protocolMessage) == null ? void 0 : i.botFeedbackMessage) !=
              null
          ? !1
          : !O.some(function (t) {
              return e[t] != null;
            });
    }
    function W(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        B(e)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
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
    function H(e, t, n, r, o) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            if (!W(e, t, i)) return null;
            var l = yield (S || (S = n("Promise"))).all([
                q(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
              ]),
              s = l[0],
              u = l[1],
              c = l[2];
            if (!s && !u) return null;
            var d = s ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              m = u && !c ? V(a, t) : null,
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
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
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
    function j(e) {
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
    function K(e, t, n, r, o, a, i, l) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a, i, l) {
            var s = yield H(t, n, r, o, a);
            if (s == null) return null;
            var u = s.peerLid,
              c = s.selfLid,
              d = [c, u].filter(Boolean),
              m = yield X(e, t, i, d, null, l);
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
        Q.apply(this, arguments)
      );
    }
    function X(e, t, n, r, o, a) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u = e.chatId,
            c = e.collectDeviceEncs,
            d = c === void 0 ? !1 : c,
            m = e.deviceList,
            p = e.groupData,
            _ = e.metricReporter,
            C = e.msgProtobuf,
            b = e.msgRecord,
            v = e.option,
            R = e.scheduledMsgMetadata,
            L = b.data,
            E = L.from,
            I = L.id,
            T = L.subtype,
            D = L.to,
            x =
              o("WAWebABProps").getABPropConfigValue(
                "web_coex_simple_signal_enabled",
              ) === 1 &&
              D.isUser() &&
              ((t = o("WAWebContactCollection").ContactCollection.get(D)) ==
                null || (t = t.privacyMode) == null
                ? void 0
                : t.hostStorage) ===
                o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
              !o(
                "WAWebSimpleSignalDowngradeStore",
              ).isCoexUserDowngradedFromSimpleSignal(D);
          x &&
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
            (yield (S || (S = n("Promise"))).all(
              m
                .filter(function (e) {
                  return (
                    !e.isHosted() &&
                    e.user === D.user &&
                    o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                  );
                })
                .map(function (e) {
                  return o("WAWebSignalSessionApi").deleteRemoteSession(e);
                }),
            ));
          try {
            var $, P;
            ($ = _.sendPerfReporter) == null || $.startPrekeysFetchStage();
            var N = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: m,
              }),
              M = N == null ? void 0 : N.missedPrekeyCount;
            if (M != null) {
              var w;
              (w = _.sendPerfReporter) == null || w.setFetchedPrekeyCount(M);
            }
            ((P = _.sendPerfReporter) == null || P.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: N == null ? void 0 : N.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  v.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  v.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(m.length)
                    : null,
              }),
              v.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                (v.sessionScope == null ||
                  v.sessionScope ===
                    o("WAWebSessionScope").SessionScope.DEFAULT) &&
                o("WAWebPQGatingUtils").isPq1on1MessageEnabled() &&
                (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.PQ,
                  wids: m,
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
          var A = z(L, u),
            F =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(L) &&
                u.isBot()) ||
              A,
            O = o("WAWebThreadMsgUtils").getMsgAiThread(L),
            B =
              O != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(O)
                : null,
            W = m;
          v.isResendingMsg &&
            (W = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(b, m));
          var q = W.map(function (e) {
            return { msgKey: I, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(q),
            (a = _.sendPerfReporter) == null || a.startClientEncryptStage());
          var U = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              L,
              ee(E, W),
            ),
            V = o("WAWebMsgGetters").getWamEditType(L),
            H = yield k(L, D, W, C, v, U, V, x, R, d);
          (i = _.sendPerfReporter) == null || i.postClientEncryptStage();
          var G = null;
          if (
            v.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var Q =
              (R == null ? void 0 : R.kind) === "schedule"
                ? R.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(C);
            G = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(Q),
            });
          }
          var X = o("WAWebE2EProtoUtils").getBizNativeFlowName(C),
            Y = L.nativeFlowInteractiveMsg,
            J,
            Z = o("WAWebContactCollection").ContactCollection.get(u),
            ne = o("WAWebChatCollection").ChatCollection.get(u),
            re = Z == null ? void 0 : Z.privacyMode;
          if (re != null) {
            var oe;
            J = (oe = o("WAWap")).wap("biz", {
              host_storage: oe.INT(re.hostStorage),
              actual_actors: oe.INT(re.actualActors),
              privacy_mode_ts: oe.INT(re.privacyModeTs),
              native_flow_name: oe.MAYBE_CUSTOM_STRING(X),
            });
          }
          var ae,
            ie,
            se,
            ue,
            ce = o(
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
              ne != null,
              Z != null,
              u.isLid(),
              ne == null ? void 0 : ne.lidOriginType,
              ce,
              (Z == null ? void 0 : Z.phoneNumber) != null,
            ),
            u.isLid() &&
              (((ne == null ? void 0 : ne.lidOriginType) == null ||
                (ne == null ? void 0 : ne.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (Z == null ? void 0 : Z.shareOwnPn) !== !0 &&
                (Z == null ? void 0 : Z.phoneNumber) != null &&
                (ae = Z == null ? void 0 : Z.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (Z == null ? void 0 : Z.username) != null &&
                (ue = Z.username)),
            D.isLid()
              ? ce &&
                (ne == null ? void 0 : ne.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (se = o("WAWebApiContact").getPhoneNumber(D))
              : D.isUser() &&
                ne != null &&
                ne.accountLid &&
                ((ie = ne == null ? void 0 : ne.accountLid),
                ie.isLid() ||
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      ie.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            J == null && X != null && Y === !0)
          ) {
            var oe;
            J = (oe = o("WAWap")).wap(
              "biz",
              null,
              oe.wap(
                "interactive",
                { v: "1", type: oe.CUSTOM_STRING("native_flow") },
                oe.wap("native_flow", { name: oe.CUSTOM_STRING(X) }),
              ),
            );
          } else
            J == null &&
              X != null &&
              (J = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(X),
              }));
          (v.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(b, W)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var de = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: u,
              groupData: p,
              includeAttributes: {
                origin: ne == null ? void 0 : ne.lidOriginType,
                hashedAiThreadId: B,
              },
              msgProtobuf: C,
              msgRecord: b,
            }),
            me =
              R != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(R)
                : null,
            pe =
              U == null
                ? void 0
                : U.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(E),
                    ),
                  ),
            _e =
              pe != null
                ? o("WAWap").wap("sender_content_binding", null, pe)
                : null,
            fe = j(L),
            ge = A
              ? null
              : o("WAWebBotTypes").getBotLocalAutomatedType(L.bizBotType),
            he,
            ye;
          if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
            var Ce = L.botModeOverride;
            if (
              Ce != null &&
              Ce.length > 0 &&
              o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
            )
              ye = String(Ce[0]);
            else {
              var be = L.botModeSelection;
              if (be != null && be.length > 0) {
                var ve = be[0];
                ve ===
                o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                  ? (he = "default")
                  : ve ===
                      o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                        .ThinkHard && (he = "think_hard");
              }
            }
          }
          var Se;
          (fe != null || ge != null || O != null || he != null || ye != null) &&
            (Se = o("WAWap").wap("bot", {
              type:
                fe != null
                  ? o("WAWap").CUSTOM_STRING(fe)
                  : o("WAWap").DROP_ATTR,
              local_automated_type:
                ge != null
                  ? o("WAWap").CUSTOM_STRING(ge)
                  : o("WAWap").DROP_ATTR,
              client_thread_id:
                O != null
                  ? o("WAWap").CUSTOM_STRING(O.key.id)
                  : o("WAWap").DROP_ATTR,
              mode_selection:
                he != null
                  ? o("WAWap").CUSTOM_STRING(he)
                  : o("WAWap").DROP_ATTR,
              mode_selected:
                ye != null
                  ? o("WAWap").CUSTOM_STRING(ye)
                  : o("WAWap").DROP_ATTR,
            }));
          var Re = !1;
          if (H.botBody == null) {
            var Le = {
                clientThreadId: O != null ? O.key.id : null,
                localAutomatedType: ge,
                modeSelected: ye,
                modeSelection: he,
                type: fe,
              },
              Ee = yield K(L, C, D, u, ne, v, V, Le);
            if (Ee != null) {
              ((Se = Ee.node), (Re = Ee.shouldHaveIdentity));
              var ke = [Ee.selfLid, Ee.peerLid].filter(Boolean);
              try {
                yield o(
                  "WAWebApiCoexV2RelayReceiptStore",
                ).createOrMergeCoexV2RelayReceipts(I.id, ke, L.t);
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
          var Ie = null;
          if (H.shouldHaveIdentity || Re) {
            var Te = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Ie = o("WAWap").wap("device-identity", null, Te);
          }
          var De = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(L, C, I.toString()),
            xe = (l = yield te(ne)) != null ? l : yield le(ne, u),
            $e;
          p != null &&
            ($e =
              (p == null ? void 0 : p.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Pe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              ne,
            ),
            Ne = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(I.id),
                to: o("WAWebCommsWapMd").CHAT_JID(D),
                type:
                  (s = R == null ? void 0 : R.originalStanzaType) != null
                    ? s
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(C),
                peer_recipient_lid: ie
                  ? o("WAWebCommsWapMd").USER_JID(ie)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: se
                  ? o("WAWebCommsWapMd").USER_JID(se)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  ue !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(ue),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(C, T),
                device_fanout:
                  v.isResendingMsg === !0 || F ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: ae
                  ? o("WAWebCommsWapMd").USER_JID(ae)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  $e != null
                    ? o("WAWap").CUSTOM_STRING($e)
                    : o("WAWap").DROP_ATTR,
              },
              H.body,
              H.botBody,
              G,
              Ie,
              J,
              de,
              me,
              _e,
              Se,
              De,
              xe,
              Pe,
            );
          if (!D.isGroup() && !D.isStatus()) {
            var Me;
            (Me = _.sendReporter) == null ||
              Me.setOppositeHasUsername(ue != null);
          }
          var we = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: I.id,
            class: "message",
            from: L.to,
            participant: null,
          });
          return { stanza: Ne, ackTemplate: we, deviceEncs: H.deviceEncs };
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        ne.apply(this, arguments)
      );
    }
    var re = null,
      oe = null,
      ae = new Map(),
      ie = 5;
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            n === re && oe != null
              ? (a = oe)
              : ((a = o("WABase64").decodeB64(n)),
                (re = n),
                (oe = a),
                ae.clear());
            var i = r.toString(),
              l = ae.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (ae.size >= ie) {
              var u = ae.keys().next().value;
              u != null && ae.delete(u);
            }
            return (ae.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        se.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = T),
      (l.isCoexV2UserAgentSend = D),
      (l.shouldRejectCoexV2UserAgentSend = $),
      (l.genCoexV2UserAgentAgentProto = P),
      (l.genBotFanoutContent = N),
      (l.genCoexV2UserAgentBotBody = A),
      (l.getBotAgentEngagementType = F),
      (l.isSelfCoexV2Hosted = q),
      (l.getIsBizBotFeedback = z),
      (l.getBotStanzaType = j),
      (l.genCoexV2RelayBotNodeForTargets = X),
      (l.createFanoutMsgStanza = J),
      (l.genCsTokenBody = le));
  },
  98,
);
