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
    "WAWebCoexV2SupportedMsgTypes",
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
              b = o("WAWebBotBaseGating").isBotEnabled() && H(e, t),
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
                  e.subtype,
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
                G = U.type,
                z = null;
              return (
                (v || I != null) &&
                  (z = o("WAWap").wap("bot", {
                    type: v ? "feedback" : o("WAWap").DROP_ATTR,
                    persona_type: I
                      ? o("WAWap").CUSTOM_STRING(I)
                      : o("WAWap").DROP_ATTR,
                  })),
                {
                  deviceEncs: _ ? [R(A, V, G)] : [],
                  shouldHaveIdentity:
                    G === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                  body: o("WAWap").wap(
                    "enc",
                    {
                      v: o("WAWap").CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(G),
                      session_type: o(
                        "WAWebEncryptMsgProtobuf",
                      ).isPqxdhCiphertext(V)
                        ? o("WAWap").CUSTOM_STRING("pq")
                        : o("WAWap").DROP_ATTR,
                      state:
                        W &&
                        G === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
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
                  botBody: z,
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
                          b = n.isBot() && v,
                          S = yield N(r, n, e, C, M, b);
                        if (
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(t, n, e.subtype)
                        )
                          try {
                            S = yield o(
                              "WAWebWasaHatchOutboundWrapper",
                            ).wrapHatchOutboundMessage({
                              currentStanzaId: e.id.id,
                              innerMessage: S,
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
                        var I =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          T = yield L(n, l),
                          D = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, S, e, u, T, I),
                          x = D.ciphertext,
                          $ = D.type;
                        $ === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (j = !0);
                        var P = o("WAWap").wap(
                          "enc",
                          {
                            v: o("WAWap").CUSTOM_STRING(
                              o(
                                "WAWebBackendJobsCommon",
                              ).CIPHERTEXT_VERSION.toString(),
                            ),
                            type: o("WAWap").CUSTOM_STRING($),
                            session_type: o(
                              "WAWebEncryptMsgProtobuf",
                            ).isPqxdhCiphertext(x)
                              ? o("WAWap").CUSTOM_STRING("pq")
                              : o("WAWap").DROP_ATTR,
                            state:
                              I &&
                              $ ===
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
                          x,
                        );
                        return M && n.isFbidBot()
                          ? {
                              coexAgentWid: n,
                              coexEncType: $,
                              coexSharedEnc: P,
                              node: null,
                              shouldFanoutToBot: C,
                            }
                          : {
                              deviceEnc: _ ? R(n, x, $) : null,
                              shouldFanoutToBot: C,
                              node: o("WAWap").wap(
                                "to",
                                { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                                P,
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
                hasCoexV2RepresentedTargets: M && J.length > 0,
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
            o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t) &&
            (yield B())
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
    function N(e, t, n, r, o, a) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            i === void 0 && (i = !1);
            var l = a && t.isFbidBot(),
              s = e;
            return (
              (r || i) &&
                !l &&
                (s = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: e,
                  botMessageSecret: i ? null : n.botMessageSecret,
                  mentionedJidList: n.mentionedJidList,
                })),
              t.isFbidBot() &&
                (s = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(s)),
              t.isBot() &&
                (s = o("WAWebE2EProtoGenerator").updateBotProtobuf(s)),
              l && (s = P(s, o("WAWebMsgGetters").getMessageSecret(n))),
              s
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
                persona_type:
                  c != null
                    ? o("WAWap").CUSTOM_STRING(c)
                    : o("WAWap").DROP_ATTR,
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
    function O(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(e)
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
            var l = yield (S || (S = n("Promise"))).all([
                B(),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(r),
                o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(r),
              ]),
              s = l[0],
              u = l[1],
              c = l[2];
            if (!s && !u) return null;
            var d = s ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
              m = u && !c ? q(a, t) : null,
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
            return d == null && f == null
              ? null
              : { peerLid: f, selfIsCoexV2: s, selfLid: d };
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
    function G(e) {
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
    function z(e, t, n, r, o, a, i, l) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a, i, l) {
            var s = yield U(t, n, r, o, a);
            if (s == null) return null;
            var u = s.peerLid,
              c = s.selfIsCoexV2,
              d = s.selfLid,
              m = [d, u].filter(Boolean),
              p = yield K(e, t, i, m, null, c, l);
            return p == null
              ? null
              : {
                  node: p.node,
                  shouldHaveIdentity: p.shouldHaveIdentity,
                  peerLid: u,
                  selfLid: d,
                };
          },
        )),
        j.apply(this, arguments)
      );
    }
    function K(e, t, n, r, o, a, i) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            try {
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID],
              });
              var u = o("WAWebE2EProtoGenerator").sanitizeCoexV2RelayMessage(t),
                c = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                  i != null ? i : 0,
                  u,
                  e,
                  n,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                  !0,
                  l,
                ),
                d = c.ciphertext,
                m = c.type,
                p = new Set(),
                f = [];
              for (var g of a) {
                var h = o("WAWebCommsWapMd").DEVICE_JID(g),
                  y = h.toString();
                p.has(y) ||
                  (p.add(y), f.push(o("WAWap").wap("to", { jid: h })));
              }
              var C = o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(m),
                    session_type: o(
                      "WAWebEncryptMsgProtobuf",
                    ).isPqxdhCiphertext(d)
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      m === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    count:
                      i != null && i > 0
                        ? o("WAWap").INT(i)
                        : o("WAWap").DROP_ATTR,
                  },
                  d,
                ),
                b = o("WAWap").wap(
                  "bot",
                  {
                    type: o("WAWap").MAYBE_CUSTOM_STRING(
                      s == null ? void 0 : s.type,
                    ),
                    local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(
                      s == null ? void 0 : s.localAutomatedType,
                    ),
                    client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(
                      s == null ? void 0 : s.clientThreadId,
                    ),
                    mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(
                      s == null ? void 0 : s.modeSelection,
                    ),
                    mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(
                      s == null ? void 0 : s.modeSelected,
                    ),
                  },
                  [].concat(f, [C]),
                );
              return {
                node: b,
                shouldHaveIdentity:
                  m === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                type: m,
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
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                sessionScope:
                  v.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (v.sessionScope == null ||
                    v.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : o("WAWebSessionScope").SessionScope.DEFAULT,
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
              }));
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
          var A = H(L, u),
            O =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(L) &&
                u.isBot()) ||
              A,
            B = o("WAWebThreadMsgUtils").getMsgAiThread(L),
            W =
              B != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(B)
                : null,
            q = m;
          v.isResendingMsg &&
            (q = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(b, m));
          var U = q.map(function (e) {
            return { msgKey: I, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(U),
            (a = _.sendPerfReporter) == null || a.startClientEncryptStage());
          var V = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              L,
              J(E, q),
            ),
            j = o("WAWebMsgGetters").getWamEditType(L),
            K = yield k(L, D, q, C, v, V, j, x, R, d);
          (i = _.sendPerfReporter) == null || i.postClientEncryptStage();
          var Q = null;
          if (
            v.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var X =
              (R == null ? void 0 : R.kind) === "schedule"
                ? R.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(C);
            Q = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(X),
            });
          }
          var Y = o("WAWebE2EProtoUtils").getBizNativeFlowName(C),
            ee = L.nativeFlowInteractiveMsg,
            te,
            ne = o("WAWebContactCollection").ContactCollection.get(u),
            re = o("WAWebChatCollection").ChatCollection.get(u),
            oe = ne == null ? void 0 : ne.privacyMode;
          if (oe != null) {
            var ie;
            te = (ie = o("WAWap")).wap("biz", {
              host_storage: ie.INT(oe.hostStorage),
              actual_actors: ie.INT(oe.actualActors),
              privacy_mode_ts: ie.INT(oe.privacyModeTs),
              native_flow_name: ie.MAYBE_CUSTOM_STRING(Y),
            });
          }
          var le,
            se,
            ue,
            ce,
            de = o(
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
              re != null,
              ne != null,
              u.isLid(),
              re == null ? void 0 : re.lidOriginType,
              de,
              (ne == null ? void 0 : ne.phoneNumber) != null,
            ),
            u.isLid() &&
              (((re == null ? void 0 : re.lidOriginType) == null ||
                (re == null ? void 0 : re.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (ne == null ? void 0 : ne.shareOwnPn) !== !0 &&
                (ne == null ? void 0 : ne.phoneNumber) != null &&
                (le = ne == null ? void 0 : ne.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (ne == null ? void 0 : ne.username) != null &&
                (ce = ne.username)),
            D.isLid()
              ? de &&
                (re == null ? void 0 : re.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ue = o("WAWebApiContact").getPhoneNumber(D))
              : D.isUser() &&
                re != null &&
                re.accountLid &&
                ((se = re == null ? void 0 : re.accountLid),
                se.isLid() ||
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      se.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            te == null && Y != null && ee === !0)
          ) {
            var ie;
            te = (ie = o("WAWap")).wap(
              "biz",
              null,
              ie.wap(
                "interactive",
                { v: "1", type: ie.CUSTOM_STRING("native_flow") },
                ie.wap("native_flow", { name: ie.CUSTOM_STRING(Y) }),
              ),
            );
          } else
            te == null &&
              Y != null &&
              (te = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(Y),
              }));
          (v.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(b, q)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var me =
              R != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(R)
                : null,
            pe =
              V == null
                ? void 0
                : V.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(E),
                    ),
                  ),
            _e =
              pe != null
                ? o("WAWap").wap("sender_content_binding", null, pe)
                : null,
            fe = G(L),
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
          var Se =
              K.botBody == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    D,
                  )
                : null,
            Re = K.botBody == null ? F(!1, D, L) : null,
            Le;
          (fe != null ||
            ge != null ||
            B != null ||
            he != null ||
            ye != null ||
            Se != null ||
            Re != null) &&
            (Le = o("WAWap").wap("bot", {
              type:
                fe != null
                  ? o("WAWap").CUSTOM_STRING(fe)
                  : o("WAWap").DROP_ATTR,
              persona_type:
                Se != null
                  ? o("WAWap").CUSTOM_STRING(Se)
                  : o("WAWap").DROP_ATTR,
              agent_engagement_type:
                Re != null
                  ? o("WAWap").CUSTOM_STRING(Re)
                  : o("WAWap").DROP_ATTR,
              local_automated_type:
                ge != null
                  ? o("WAWap").CUSTOM_STRING(ge)
                  : o("WAWap").DROP_ATTR,
              client_thread_id:
                B != null
                  ? o("WAWap").CUSTOM_STRING(B.key.id)
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
          var Ee = !1,
            ke = null;
          if (K.botBody == null) {
            var Ie = {
              clientThreadId: B != null ? B.key.id : null,
              localAutomatedType: ge,
              modeSelected: ye,
              modeSelection: he,
              type: fe,
            };
            if (((ke = yield z(L, C, D, u, re, v, j, Ie)), ke != null)) {
              ((Le = ke.node), (Ee = ke.shouldHaveIdentity));
              var Te = [ke.selfLid, ke.peerLid].filter(Boolean);
              try {
                yield o(
                  "WAWebApiCoexV2RelayReceiptStore",
                ).createOrMergeCoexV2RelayReceipts(I.id, Te, L.t);
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
          var De = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: u,
              groupData: p,
              includeAttributes: {
                origin: re == null ? void 0 : re.lidOriginType,
                hashedAiThreadId: W,
                appendHostedSenderIntent:
                  ke != null || K.hasCoexV2RepresentedTargets === !0,
              },
              msgProtobuf: C,
              msgRecord: b,
            }),
            xe = null;
          if (K.shouldHaveIdentity || Ee) {
            var $e = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            xe = o("WAWap").wap("device-identity", null, $e);
          }
          var Pe = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(L, C, I.toString()),
            Ne = (l = yield Z(re)) != null ? l : yield ae(re, u),
            Me;
          p != null &&
            (Me =
              (p == null ? void 0 : p.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var we = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              re,
            ),
            Ae = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(I.id),
                to: o("WAWebCommsWapMd").CHAT_JID(D),
                type:
                  (s = R == null ? void 0 : R.originalStanzaType) != null
                    ? s
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(C),
                peer_recipient_lid: se
                  ? o("WAWebCommsWapMd").USER_JID(se)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: ue
                  ? o("WAWebCommsWapMd").USER_JID(ue)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  ce !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(ce),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(C, T),
                device_fanout:
                  v.isResendingMsg === !0 || O ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: le
                  ? o("WAWebCommsWapMd").USER_JID(le)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Me != null
                    ? o("WAWap").CUSTOM_STRING(Me)
                    : o("WAWap").DROP_ATTR,
              },
              K.body,
              K.botBody,
              Q,
              xe,
              te,
              De,
              me,
              _e,
              Le,
              Pe,
              Ne,
              we,
            );
          if (!D.isGroup() && !D.isStatus()) {
            var Fe;
            (Fe = _.sendReporter) == null ||
              Fe.setOppositeHasUsername(ce != null);
          }
          var Oe = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: I.id,
            class: "message",
            from: L.to,
            participant: null,
          });
          return { stanza: Ae, ackTemplate: Oe, deviceEncs: K.deviceEncs };
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        ee.apply(this, arguments)
      );
    }
    var te = null,
      ne = null,
      re = new Map(),
      oe = 5;
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            n === te && ne != null
              ? (a = ne)
              : ((a = o("WABase64").decodeB64(n)),
                (te = n),
                (ne = a),
                re.clear());
            var i = r.toString(),
              l = re.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (re.size >= oe) {
              var u = re.keys().next().value;
              u != null && re.delete(u);
            }
            return (re.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        ie.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = T),
      (l.isCoexV2UserAgentSend = D),
      (l.shouldRejectCoexV2UserAgentSend = $),
      (l.genCoexV2UserAgentAgentProto = P),
      (l.genBotFanoutContent = N),
      (l.genCoexV2UserAgentBotBody = A),
      (l.getBotAgentEngagementType = F),
      (l.isSelfCoexV2Hosted = B),
      (l.getIsBizBotFeedback = H),
      (l.getBotStanzaType = G),
      (l.genCoexV2RelayBotNodeForTargets = K),
      (l.createFanoutMsgStanza = X),
      (l.genCsTokenBody = ae));
  },
  98,
);
