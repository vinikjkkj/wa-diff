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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, o, a, i, l, s) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              S =
                C &&
                !!(
                  e.bizBotType &&
                  (f = e.protocolMessageKey) != null &&
                  f.remote.equals(t)
                ),
              R = (C && t.isBot()) || S,
              L = C && !t.isBot() && !S,
              I = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              D = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              $ = yield k(t, i),
              N = $ ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              w = $ && N != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !L &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !w
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
                W = yield v(A, l),
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
                (R || D != null) &&
                  (H = o("WAWap").wap("bot", {
                    type: R ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: D
                      ? o("WAWap").CUSTOM_STRING(D)
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
                        var f = n.isBot() && (y || L || I),
                          C = yield x(r, n, e, f, w);
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
                          S = yield v(n, l),
                          R = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, C, e, d, S, b),
                          E = R.ciphertext,
                          k = R.type;
                        k === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (G = !0);
                        var T = o("WAWap").wap(
                          "enc",
                          {
                            v: o("WAWap").CUSTOM_STRING(
                              o(
                                "WAWebBackendJobsCommon",
                              ).CIPHERTEXT_VERSION.toString(),
                            ),
                            type: o("WAWap").CUSTOM_STRING(k),
                            session_type: o(
                              "WAWebEncryptMsgProtobuf",
                            ).isPqxdhCiphertext(E)
                              ? o("WAWap").CUSTOM_STRING("pq")
                              : o("WAWap").DROP_ATTR,
                            state:
                              b &&
                              k ===
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
                          E,
                        );
                        return w && n.isFbidBot()
                          ? {
                              coexAgentWid: n,
                              coexEncType: k,
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
              j = yield (b || (b = n("Promise"))).all(z),
              K = E(j),
              Q = K.botSuccessNodes,
              X = K.coexAgentWids,
              Y = K.coexEncType,
              J = K.coexSharedEnc,
              Z = K.successNodes;
            if (T(w, X.length))
              return (b || (b = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (Z.length > 0 || Q.length > 0 || X.length > 0) {
              var ee = M(!1, t, e);
              if (w && X.length > 0)
                var te = o("WAWebMsgGetters").getMessageSecret(e) != null,
                  ne = X.map(function (e) {
                    return e.toString();
                  }).join(",");
              return {
                body:
                  Z.length > 0 ? o("WAWap").wap("participants", null, Z) : null,
                botBody: P({
                  agentEngagementType: ee,
                  botSuccessNodes: Q,
                  coexAgentWids: X,
                  coexSelfLid: N,
                  coexSharedEnc: J,
                  coexV2UserAgentSend: w,
                  isBotFeedbackMessage: C,
                  isBotFeedbackMessageInAgentChat: R,
                  personaType: D != null ? D : null,
                }),
                shouldHaveIdentity: G,
              };
            }
            return b.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(t) {
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
            e.isFbidBot() &&
            !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            A(t) &&
            (yield O())
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return e && t === 0;
    }
    function D(e, t) {
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
    function x(e, t, n, r, o) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              i && (l = D(l, o("WAWebMsgGetters").getMessageSecret(n))),
              l
            );
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e) {
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
        ? N({
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
    function N(e) {
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
    function M(e, t, n) {
      return e
        ? "member"
        : t != null && t.isBot()
          ? "direct_chat"
          : n && o("WAWebMsgGetters").getIsBotQuery(n)
            ? "invoked"
            : null;
    }
    var w = [
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
    function A(e) {
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
        ? A(l)
        : ((o = e.locationMessage) == null ? void 0 : o.isLive) === !0 ||
            ((a = e.eventMessage) == null ? void 0 : a.isScheduleCall) === !0 ||
            ((i = e.protocolMessage) == null ? void 0 : i.botFeedbackMessage) !=
              null
          ? !1
          : !w.some(function (t) {
              return e[t] != null;
            });
    }
    function F(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        A(e)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
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
    function q(e, t, n, r, o) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            if (!F(e, t, i)) return null;
            var l = yield (b || (b = n("Promise"))).all([
                O(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
              ]),
              s = l[0],
              u = l[1];
            if (!s && !u) return null;
            var c = s ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              d = u ? W(a, t) : null;
            return c == null && d == null ? null : { peerLid: d, selfLid: c };
          },
        )),
        U.apply(this, arguments)
      );
    }
    function V(e, t, n, r, o, a, i, l) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u) {
            var c = yield q(t, n, a, i, l);
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u,
            c = e.chatId,
            d = e.deviceList,
            m = e.groupData,
            h = e.metricReporter,
            y = e.msgProtobuf,
            C = e.msgRecord,
            v = e.option,
            S = e.scheduledMsgMetadata,
            L = C.data,
            E = L.from,
            k = L.id,
            I = L.subtype,
            T = L.to,
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
            (yield (b || (b = n("Promise"))).all(
              d
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
            (x = h.sendPerfReporter) == null || x.startPrekeysFetchStage();
            var P = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: d,
              }),
              N = P == null ? void 0 : P.missedPrekeyCount;
            if (N != null) {
              var M;
              (M = h.sendPerfReporter) == null || M.setFetchedPrekeyCount(N);
            }
            (($ = h.sendPerfReporter) == null || $.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: P == null ? void 0 : P.depletedPrekeyCount,
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
                    ? r("WAWebWamNumberToSizeBucket")(d.length)
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
          var w =
              o("WAWebMsgGetters").getIsBotFeedbackMessage(L) &&
              !!(
                L.bizBotType &&
                (a = L.protocolMessageKey) != null &&
                a.remote.equals(c)
              ),
            A =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(L) &&
                c.isBot()) ||
              w,
            F = o("WAWebThreadMsgUtils").getMsgAiThread(L),
            O =
              F != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(F)
                : null,
            B = d;
          v.isResendingMsg &&
            (B = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(C, d));
          var W = B.map(function (e) {
            return { msgKey: k, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(W),
            (i = h.sendPerfReporter) == null || i.startClientEncryptStage());
          var q = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              L,
              j(E, B),
            ),
            U = o("WAWebMsgGetters").getWamEditType(L),
            H = yield R(L, T, B, y, v, q, U, D, S);
          (l = h.sendPerfReporter) == null || l.postClientEncryptStage();
          var G = null;
          if (
            v.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var z =
              (S == null ? void 0 : S.kind) === "schedule"
                ? S.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(y);
            G = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(z),
            });
          }
          var Q = o("WAWebE2EProtoUtils").getBizNativeFlowName(y),
            X = L.nativeFlowInteractiveMsg,
            Y,
            J = o("WAWebContactCollection").ContactCollection.get(c),
            Z = o("WAWebChatCollection").ChatCollection.get(c),
            te = J == null ? void 0 : J.privacyMode;
          if (te != null) {
            var ne;
            Y = (ne = o("WAWap")).wap("biz", {
              host_storage: ne.INT(te.hostStorage),
              actual_actors: ne.INT(te.actualActors),
              privacy_mode_ts: ne.INT(te.privacyModeTs),
              native_flow_name: ne.MAYBE_CUSTOM_STRING(Q),
            });
          }
          var re,
            oe,
            ae,
            ie,
            le = o(
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
              Z != null,
              J != null,
              c.isLid(),
              Z == null ? void 0 : Z.lidOriginType,
              le,
              (J == null ? void 0 : J.phoneNumber) != null,
            ),
            c.isLid() &&
              (((Z == null ? void 0 : Z.lidOriginType) == null ||
                (Z == null ? void 0 : Z.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (J == null ? void 0 : J.shareOwnPn) !== !0 &&
                (J == null ? void 0 : J.phoneNumber) != null &&
                (re = J == null ? void 0 : J.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (J == null ? void 0 : J.username) != null &&
                (ie = J.username)),
            T.isLid()
              ? le &&
                (Z == null ? void 0 : Z.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ae = o("WAWebApiContact").getPhoneNumber(T))
              : T.isUser() &&
                Z != null &&
                Z.accountLid &&
                ((oe = Z == null ? void 0 : Z.accountLid),
                oe.isLid() ||
                  o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      oe.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            Y == null && Q != null && X === !0)
          ) {
            var ne;
            Y = (ne = o("WAWap")).wap(
              "biz",
              null,
              ne.wap(
                "interactive",
                { v: "1", type: ne.CUSTOM_STRING("native_flow") },
                ne.wap("native_flow", { name: ne.CUSTOM_STRING(Q) }),
              ),
            );
          } else
            Y == null &&
              Q != null &&
              (Y = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(Q),
              }));
          (v.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, B)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var se = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: c,
              groupData: m,
              includeAttributes: {
                origin: Z == null ? void 0 : Z.lidOriginType,
                hashedAiThreadId: O,
              },
              msgProtobuf: y,
              msgRecord: C,
            }),
            ue =
              S != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(S)
                : null,
            ce =
              q == null
                ? void 0
                : q.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(E),
                    ),
                  ),
            de =
              ce != null
                ? o("WAWap").wap("sender_content_binding", null, ce)
                : null,
            me;
          if (L.subtype === "bot_request_welcome") me = "request_welcome";
          else if (L.botMsgBodyType != null)
            e: {
              if (
                L.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT
              ) {
                me = "prompt";
                break e;
              }
              if (
                L.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND
              ) {
                me = "command";
                break e;
              }
              if (
                L.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE
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
                  L.botMsgBodyType,
              );
            }
          var pe;
          if (L.bizBotType && !w)
            switch (L.bizBotType) {
              case o("WAWebBotTypes").BizBotType.BIZ_1P:
                pe = "1p_partial";
                break;
              case o("WAWebBotTypes").BizBotType.BIZ_3P:
                pe = "3p_full";
                break;
            }
          var _e, fe;
          if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
            var ge = L.botModeOverride;
            if (
              ge != null &&
              ge.length > 0 &&
              o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
            )
              fe = String(ge[0]);
            else {
              var he = L.botModeSelection;
              if (he != null && he.length > 0) {
                var ye = he[0];
                ye ===
                o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
                  ? (_e = "default")
                  : ye ===
                      o("WAWebBotModeSelectionTypes").BotUserSelectionMode
                        .ThinkHard && (_e = "think_hard");
              }
            }
          }
          var Ce;
          (me != null || pe != null || F != null || _e != null || fe != null) &&
            (Ce = o("WAWap").wap("bot", {
              type:
                me != null
                  ? o("WAWap").CUSTOM_STRING(me)
                  : o("WAWap").DROP_ATTR,
              local_automated_type:
                pe != null
                  ? o("WAWap").CUSTOM_STRING(pe)
                  : o("WAWap").DROP_ATTR,
              client_thread_id:
                F != null
                  ? o("WAWap").CUSTOM_STRING(F.key.id)
                  : o("WAWap").DROP_ATTR,
              mode_selection:
                _e != null
                  ? o("WAWap").CUSTOM_STRING(_e)
                  : o("WAWap").DROP_ATTR,
              mode_selected:
                fe != null
                  ? o("WAWap").CUSTOM_STRING(fe)
                  : o("WAWap").DROP_ATTR,
            }));
          var be = !1;
          if (H.botBody == null) {
            var ve = {
                clientThreadId: F != null ? F.key.id : null,
                localAutomatedType: pe,
                modeSelected: fe,
                modeSelection: _e,
                type: me,
              },
              Se = yield V(L, y, T, c, Z, v, U, ve);
            Se != null && ((Ce = Se.node), (be = Se.shouldHaveIdentity));
          }
          var Re = null;
          if (H.shouldHaveIdentity || be) {
            var Le = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Re = o("WAWap").wap("device-identity", null, Le);
          }
          var Ee = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(L, y, k.toString()),
            ke = (s = yield K(Z)) != null ? s : yield ee(Z, c),
            Ie;
          m != null &&
            (Ie =
              (m == null ? void 0 : m.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Te = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              Z,
            ),
            De = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(k.id),
                to: o("WAWebCommsWapMd").CHAT_JID(T),
                type:
                  (u = S == null ? void 0 : S.originalStanzaType) != null
                    ? u
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y),
                peer_recipient_lid: oe
                  ? o("WAWebCommsWapMd").USER_JID(oe)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: ae
                  ? o("WAWebCommsWapMd").USER_JID(ae)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  ie !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(ie),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(y, I),
                device_fanout:
                  v.isResendingMsg === !0 || A ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: re
                  ? o("WAWebCommsWapMd").USER_JID(re)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Ie != null
                    ? o("WAWap").CUSTOM_STRING(Ie)
                    : o("WAWap").DROP_ATTR,
              },
              H.body,
              H.botBody,
              G,
              Re,
              Y,
              se,
              ue,
              de,
              Ce,
              Ee,
              ke,
              Te,
            );
          if (!T.isGroup() && !T.isStatus()) {
            var xe;
            (xe = h.sendReporter) == null ||
              xe.setOppositeHasUsername(ie != null);
          }
          var $e = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: k.id,
            class: "message",
            from: L.to,
            participant: null,
          });
          return { stanza: De, ackTemplate: $e };
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Q.apply(this, arguments)
      );
    }
    var X = null,
      Y = null,
      J = new Map(),
      Z = 5;
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === X && Y != null
              ? (a = Y)
              : ((a = o("WABase64").decodeB64(n)), (X = n), (Y = a), J.clear());
            var i = r.toString(),
              l = J.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (J.size >= Z) {
              var u = J.keys().next().value;
              u != null && J.delete(u);
            }
            return (J.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        te.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = E),
      (l.isCoexV2UserAgentSend = k),
      (l.shouldRejectCoexV2UserAgentSend = T),
      (l.genCoexV2UserAgentAgentProto = D),
      (l.genBotFanoutContent = x),
      (l.genCoexV2UserAgentBotBody = N),
      (l.getBotAgentEngagementType = M),
      (l.createFanoutMsgStanza = G),
      (l.genCsTokenBody = ee));
  },
  98,
);
