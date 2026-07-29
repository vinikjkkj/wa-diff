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
              f,
              g =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              h = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              y =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((_ = e.invokedBotWid) == null ? void 0 : _.isBot()) === !0,
              C =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              b =
                C &&
                !!(
                  e.bizBotType &&
                  (f = e.protocolMessageKey) != null &&
                  f.remote.equals(t)
                ),
              R = (C && t.isBot()) || b,
              L = C && !t.isBot() && !b,
              E = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              T = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              x = yield I(t, i),
              P = x ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              M = x && P != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !L &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !M
            ) {
              var A = a[0],
                F = o("WAWebUserPrefsMeUser").isMeAccount(A)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                O = F;
              (A.isBot() &&
                R &&
                (O = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: F,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  A,
                ) &&
                  (O = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: e.id.id,
                    innerMessage: O,
                  })));
              var B =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  m &&
                  (A.isHosted() ||
                    (A.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(A))),
                W = yield S(A, l),
                q = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  A,
                  0,
                  O,
                  e,
                  d,
                  W,
                  B,
                ),
                U = q.ciphertext,
                V = q.type,
                H = null;
              return (
                (R || T != null) &&
                  (H = o("WAWap").wap("bot", {
                    type: R ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: T
                      ? o("WAWap").CUSTOM_STRING(T)
                      : o("WAWap").DROP_ATTR,
                  })),
                {
                  shouldHaveIdentity:
                    V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                  body: o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(V),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(U)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        B &&
                        V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
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
                    U,
                  ),
                  botBody: H,
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
                        var f = n.isBot() && (y || L || E),
                          C = yield $(r, n, e, f, M);
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
                          R = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, C, e, d, v, b),
                          k = R.ciphertext,
                          I = R.type;
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
                          k,
                        );
                        return M && n.isFbidBot()
                          ? {
                              coexAgentWid: n,
                              coexEncType: I,
                              coexSharedEnc: T,
                              node: null,
                              shouldFanoutToBot: f,
                            }
                          : {
                              shouldFanoutToBot: f,
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
            if (D(M, X.length))
              return (v || (v = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (Z.length > 0 || Q.length > 0 || X.length > 0) {
              var ee = w(!1, t, e);
              if (M && X.length > 0)
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
                  coexSelfLid: P,
                  coexSharedEnc: J,
                  coexV2UserAgentSend: M,
                  isBotFeedbackMessage: C,
                  isBotFeedbackMessageInAgentChat: R,
                  personaType: T != null ? T : null,
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
    function H(e, t, n, r, o, a, i, l) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u) {
            var c = yield U(t, n, a, i, l);
            if (c == null) return null;
            var d = c.peerLid,
              p = c.selfLid;
            try {
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID],
              });
              var _ = o("WAWebE2EProtoGenerator").sanitizeCoexV2RelayMessage(t),
                f = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                  0,
                  _,
                  e,
                  s,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                  !0,
                ),
                g = f.ciphertext,
                h = f.type,
                y =
                  p != null
                    ? o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(p),
                      })
                    : null,
                C =
                  d != null
                    ? o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(d),
                      })
                    : null,
                b = o("WAWap").wap(
                  "bot",
                  {
                    type: o("WAWap").MAYBE_CUSTOM_STRING(u.type),
                    local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.localAutomatedType,
                    ),
                    client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.clientThreadId,
                    ),
                    mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.modeSelection,
                    ),
                    mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(
                      u.modeSelected,
                    ),
                  },
                  y,
                  C,
                  o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(h),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(g)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        h === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                          ? o("WAWap").CUSTOM_STRING("false")
                          : o("WAWap").DROP_ATTR,
                    },
                    g,
                  ),
                );
              return {
                node: b,
                shouldHaveIdentity:
                  h === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                peerLid: d,
                selfLid: p,
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u,
            c = e.chatId,
            d = e.deviceList,
            m = e.groupData,
            y = e.metricReporter,
            C = e.msgProtobuf,
            b = e.msgRecord,
            S = e.option,
            R = e.scheduledMsgMetadata,
            E = b.data,
            k = E.from,
            I = E.id,
            T = E.subtype,
            D = E.to,
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
            (yield (v || (v = n("Promise"))).all(
              d
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
            ($ = y.sendPerfReporter) == null || $.startPrekeysFetchStage();
            var N = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: d,
              }),
              M = N == null ? void 0 : N.missedPrekeyCount;
            if (M != null) {
              var w;
              (w = y.sendPerfReporter) == null || w.setFetchedPrekeyCount(M);
            }
            ((P = y.sendPerfReporter) == null || P.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: N == null ? void 0 : N.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  S.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  S.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(d.length)
                    : null,
              }),
              S.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                (S.sessionScope == null ||
                  S.sessionScope ===
                    o("WAWebSessionScope").SessionScope.DEFAULT) &&
                o("WAWebPQGatingUtils").isPq1on1MessageEnabled() &&
                (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.PQ,
                  wids: d,
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
          var A =
              o("WAWebMsgGetters").getIsBotFeedbackMessage(E) &&
              !!(
                E.bizBotType &&
                (a = E.protocolMessageKey) != null &&
                a.remote.equals(c)
              ),
            F =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(E) &&
                c.isBot()) ||
              A,
            O = o("WAWebThreadMsgUtils").getMsgAiThread(E),
            B =
              O != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(O)
                : null,
            W = d;
          S.isResendingMsg &&
            (W = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(b, d));
          var q = W.map(function (e) {
            return { msgKey: I, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(q),
            (i = y.sendPerfReporter) == null || i.startClientEncryptStage());
          var U = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              E,
              K(k, W),
            ),
            V = o("WAWebMsgGetters").getWamEditType(E),
            G = yield L(E, D, W, C, S, U, V, x, R);
          (l = y.sendPerfReporter) == null || l.postClientEncryptStage();
          var z = null;
          if (
            S.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var j =
              (R == null ? void 0 : R.kind) === "schedule"
                ? R.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(C);
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
          var X = o("WAWebE2EProtoUtils").getBizNativeFlowName(C),
            Y = E.nativeFlowInteractiveMsg,
            J,
            Z = o("WAWebContactCollection").ContactCollection.get(c),
            ee = o("WAWebChatCollection").ChatCollection.get(c),
            ne = Z == null ? void 0 : Z.privacyMode;
          if (ne != null) {
            var re;
            J = (re = o("WAWap")).wap("biz", {
              host_storage: re.INT(ne.hostStorage),
              actual_actors: re.INT(ne.actualActors),
              privacy_mode_ts: re.INT(ne.privacyModeTs),
              native_flow_name: re.MAYBE_CUSTOM_STRING(X),
            });
          }
          var oe,
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
              c.isLid(),
              ee == null ? void 0 : ee.lidOriginType,
              se,
              (Z == null ? void 0 : Z.phoneNumber) != null,
            ),
            c.isLid() &&
              (((ee == null ? void 0 : ee.lidOriginType) == null ||
                (ee == null ? void 0 : ee.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (Z == null ? void 0 : Z.shareOwnPn) !== !0 &&
                (Z == null ? void 0 : Z.phoneNumber) != null &&
                (oe = Z == null ? void 0 : Z.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (Z == null ? void 0 : Z.username) != null &&
                (le = Z.username)),
            D.isLid()
              ? se &&
                (ee == null ? void 0 : ee.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ie = o("WAWebApiContact").getPhoneNumber(D))
              : D.isUser() &&
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
            J == null && X != null && Y === !0)
          ) {
            var re;
            J = (re = o("WAWap")).wap(
              "biz",
              null,
              re.wap(
                "interactive",
                { v: "1", type: re.CUSTOM_STRING("native_flow") },
                re.wap("native_flow", { name: re.CUSTOM_STRING(X) }),
              ),
            );
          } else
            J == null &&
              X != null &&
              (J = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(X),
              }));
          (S.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(b, W)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ue = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: c,
              groupData: m,
              includeAttributes: {
                origin: ee == null ? void 0 : ee.lidOriginType,
                hashedAiThreadId: B,
              },
              msgProtobuf: C,
              msgRecord: b,
            }),
            ce =
              R != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(R)
                : null,
            de =
              U == null
                ? void 0
                : U.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(k),
                    ),
                  ),
            me =
              de != null
                ? o("WAWap").wap("sender_content_binding", null, de)
                : null,
            pe;
          if (E.subtype === "bot_request_welcome") pe = "request_welcome";
          else if (E.botMsgBodyType != null)
            e: {
              if (
                E.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
              ) {
                pe = "prompt";
                break e;
              }
              if (
                E.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
              ) {
                pe = "command";
                break e;
              }
              if (
                E.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
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
                  E.botMsgBodyType,
              );
            }
          var _e;
          if (E.bizBotType && !A)
            switch (E.bizBotType) {
              case o("WAWebBotTypes").BizBotType.BIZ_1P:
                _e = "1p_partial";
                break;
              case o("WAWebBotTypes").BizBotType.BIZ_3P:
                _e = "3p_full";
                break;
            }
          var fe, ge;
          if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
            var he = E.botModeOverride;
            if (
              he != null &&
              he.length > 0 &&
              o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
            )
              ge = String(he[0]);
            else {
              var ye = E.botModeSelection;
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
          (pe != null || _e != null || O != null || fe != null || ge != null) &&
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
                O != null
                  ? o("WAWap").CUSTOM_STRING(O.key.id)
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
          if (G.botBody == null) {
            var Se = {
                clientThreadId: O != null ? O.key.id : null,
                localAutomatedType: _e,
                modeSelected: ge,
                modeSelection: fe,
                type: pe,
              },
              Re = yield H(E, C, D, c, ee, S, V, Se);
            if (Re != null) {
              ((be = Re.node), (ve = Re.shouldHaveIdentity));
              var Le = [Re.selfLid, Re.peerLid].filter(Boolean);
              try {
                yield o(
                  "WAWebApiCoexV2RelayReceiptStore",
                ).createOrMergeCoexV2RelayReceipts(I.id, Le, E.t);
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
          if (G.shouldHaveIdentity || ve) {
            var ke = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Ee = o("WAWap").wap("device-identity", null, ke);
          }
          var Ie = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(E, C, I.toString()),
            Te = (s = yield Q(ee)) != null ? s : yield te(ee, c),
            De;
          m != null &&
            (De =
              (m == null ? void 0 : m.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var xe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              ee,
            ),
            $e = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(I.id),
                to: o("WAWebCommsWapMd").CHAT_JID(D),
                type:
                  (u = R == null ? void 0 : R.originalStanzaType) != null
                    ? u
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(C),
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
                edit: o("WAWebSendMsgCommonApi").editAttribute(C, T),
                device_fanout:
                  S.isResendingMsg === !0 || F ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: oe
                  ? o("WAWebCommsWapMd").USER_JID(oe)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  De != null
                    ? o("WAWap").CUSTOM_STRING(De)
                    : o("WAWap").DROP_ATTR,
              },
              G.body,
              G.botBody,
              z,
              Ee,
              J,
              ue,
              ce,
              me,
              be,
              Ie,
              Te,
              xe,
            );
          if (!D.isGroup() && !D.isStatus()) {
            var Pe;
            (Pe = y.sendReporter) == null ||
              Pe.setOppositeHasUsername(le != null);
          }
          var Ne = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: I.id,
            class: "message",
            from: E.to,
            participant: null,
          });
          return { stanza: $e, ackTemplate: Ne };
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        X.apply(this, arguments)
      );
    }
    var Y = null,
      J = null,
      Z = new Map(),
      ee = 5;
    function te(e, t) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            n === Y && J != null
              ? (a = J)
              : ((a = o("WABase64").decodeB64(n)), (Y = n), (J = a), Z.clear());
            var i = r.toString(),
              l = Z.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (Z.size >= ee) {
              var u = Z.keys().next().value;
              u != null && Z.delete(u);
            }
            return (Z.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        ne.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = k),
      (l.isCoexV2UserAgentSend = I),
      (l.shouldRejectCoexV2UserAgentSend = D),
      (l.genCoexV2UserAgentAgentProto = x),
      (l.genBotFanoutContent = $),
      (l.genCoexV2UserAgentBotBody = M),
      (l.getBotAgentEngagementType = w),
      (l.createFanoutMsgStanza = z),
      (l.genCsTokenBody = te));
  },
  98,
);
