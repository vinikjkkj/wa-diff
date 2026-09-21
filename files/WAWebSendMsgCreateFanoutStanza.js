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
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2ProtoSanitize",
    "WAWebCoexV2RelayEligibility",
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
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebScheduledMsgStanzaContributor",
    "WAWebSendMsgBotStanza",
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
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e, t, n) {
      return {
        ciphertext: t,
        isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
        participant: e,
        type: n,
      };
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r, o, a, i, l, s, u) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d, m, p, _) {
            var f,
              g,
              h =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              v = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              S =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((f = e.invokedBotWid) == null ? void 0 : f.isBot()) === !0,
              R =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              E =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, t),
              I = (R && t.isBot()) || E,
              D = R && !t.isBot() && !E,
              x = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              $ = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              P = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(
                t,
                i,
              ),
              N = P != null,
              M = (g = P == null ? void 0 : P.selfLid) != null ? g : null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !D &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !N
            ) {
              var w = a[0],
                A = o("WAWebUserPrefsMeUser").isMeAccount(w)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                F = A;
              (w.isBot() &&
                I &&
                (F = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: A,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  w,
                  e.subtype,
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
                  (w.isHosted() ||
                    (w.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(w))),
                B = yield b(w, l),
                W = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  w,
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
              (I || $ != null) &&
                (V = o("WAWap").wap("bot", {
                  type: I ? "feedback" : o("WAWap").DROP_ATTR,
                  persona_type: $
                    ? o("WAWap").CUSTOM_STRING($)
                    : o("WAWap").DROP_ATTR,
                }));
              var H = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(q)
                ? !0
                : void 0;
              return {
                deviceEncs: _ ? [C(w, q, U)] : [],
                shouldHaveIdentity:
                  U === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                body: o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(U),
                    session_type: H
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      O && U === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                      h,
                    ),
                    "decrypt-fail": o(
                      "WAWebBackendJobsCommon",
                    ).encodeMaybeDecryptFail(
                      o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(
                        i,
                      ),
                    ),
                    native_flow_name: o(
                      "WAWebBackendJobsCommon",
                    ).encodeMaybeNativeFlowName(v),
                  },
                  q,
                ),
                botBody: V,
                isPq: H,
              };
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
                          c == null
                            ? void 0
                            : c.get(o("WAWebWidToJid").widToUserJid(a)),
                        f =
                          p != null
                            ? o("WAWap").wap("content_binding", null, p)
                            : null;
                      try {
                        var g = n.isBot() && (S || D || x),
                          y = n.isBot() && I,
                          R = yield k(r, n, e, g, N, y);
                        if (
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(t, n, e.subtype)
                        )
                          try {
                            R = yield o(
                              "WAWebWasaHatchOutboundWrapper",
                            ).wrapHatchOutboundMessage({
                              currentStanzaId: e.id.id,
                              innerMessage: R,
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
                        var L =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          E = yield b(n, l),
                          T = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, R, e, d, E, L),
                          $ = T.ciphertext,
                          P = T.type;
                        P === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (G = !0);
                        var M = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                            $,
                          )
                            ? !0
                            : void 0,
                          w = o("WAWap").wap(
                            "enc",
                            {
                              v: o("WAWap").CUSTOM_STRING(
                                o(
                                  "WAWebBackendJobsCommon",
                                ).CIPHERTEXT_VERSION.toString(),
                              ),
                              type: o("WAWap").CUSTOM_STRING(P),
                              session_type: M
                                ? o("WAWap").CUSTOM_STRING("pq")
                                : o("WAWap").DROP_ATTR,
                              state:
                                L &&
                                P ===
                                  o("WAWebBackendJobs.flow").CiphertextType
                                    .Pkmsg
                                  ? o("WAWap").CUSTOM_STRING("false")
                                  : o("WAWap").DROP_ATTR,
                              mediatype: o(
                                "WAWebBackendJobsCommon",
                              ).encodeMaybeMediaType(h),
                              "decrypt-fail": o(
                                "WAWebBackendJobsCommon",
                              ).encodeMaybeDecryptFail(
                                o(
                                  "WAWebE2EProtoUtils",
                                ).decryptFailAttributeFromProtobuf(i),
                              ),
                              native_flow_name: o(
                                "WAWebBackendJobsCommon",
                              ).encodeMaybeNativeFlowName(v),
                            },
                            $,
                          );
                        return N && n.isFbidBot()
                          ? {
                              coexAgentWid: n,
                              coexEncType: P,
                              coexSharedEnc: w,
                              isPq: M,
                              node: null,
                              shouldFanoutToBot: g,
                            }
                          : {
                              deviceEnc: _ ? C(n, $, P) : null,
                              isPq: M,
                              shouldFanoutToBot: g,
                              node: o("WAWap").wap(
                                "to",
                                { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                                w,
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
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
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
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
              j = yield (y || (y = n("Promise"))).all(z),
              K = L(j),
              Q = K.botSuccessNodes,
              X = K.coexAgentWids,
              Y = K.coexEncType,
              J = K.coexSharedEnc,
              Z = K.deviceEncs,
              ee = K.isPq,
              te = K.successNodes;
            if (
              o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
                P,
                X.length,
              )
            )
              return (y || (y = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (te.length > 0 || Q.length > 0 || X.length > 0) {
              var ne = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
                !1,
                t,
                e,
              );
              if (N && X.length > 0)
                var re = o("WAWebMsgGetters").getMessageSecret(e) != null,
                  oe = X.map(function (e) {
                    return e.toString();
                  }).join(",");
              return {
                deviceEncs: Z,
                isPq: ee,
                body:
                  te.length > 0
                    ? o("WAWap").wap("participants", null, te)
                    : null,
                botBody: T({
                  agentEngagementType: ne,
                  botSuccessNodes: Q,
                  coexAgentWids: X,
                  coexSelfLid: M,
                  coexSharedEnc: J,
                  coexV2UserAgentSend: N,
                  isBotFeedbackMessage: R,
                  isBotFeedbackMessageInAgentChat: I,
                  personaType: $ != null ? $ : null,
                }),
                hasCoexV2RepresentedTargets: N && X.length > 0,
                shouldHaveIdentity: G,
              };
            }
            return y.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(t) {
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
          isPq: t.some(function (e) {
            return (e == null ? void 0 : e.isPq) === !0;
          })
            ? !0
            : void 0,
          successNodes: n,
        }
      );
    }
    function E(e, t) {
      var n,
        r = o("WAWebCoexV2ProtoSanitize").sanitizeCoexV2RelayMessage(e);
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
    function k(e, t, n, r, o, a) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              l && (s = E(s, o("WAWebMsgGetters").getMessageSecret(n))),
              s
            );
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e) {
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
        ? D({
            agentEngagementType: t,
            agentWids: r,
            isFeedback: s,
            personaType: c,
            selfLid: a,
            sharedEnc: i,
          })
        : o("WAWebSendMsgBotStanza").genBotFanoutNode({
            agentEngagementType: t,
            botSuccessNodes: n,
            isBotFeedbackMessage: s,
            isBotFeedbackMessageInAgentChat: u,
            personaType: c,
          });
    }
    function D(e) {
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
    function x(e, t, n, r, o, a, i, l) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            var u = yield o(
              "WAWebCoexV2RelayEligibility",
            ).getCoexV2RelaySendPlan({
              chat: l,
              chatId: i,
              msgProtobuf: t,
              option: s,
              stanzaTo: n,
            });
            if (u == null) return null;
            var c = u.peerLid,
              d = u.selfIsCoexV2,
              m = u.selfLid,
              p = [m, c].filter(Boolean),
              _ = yield P(e, t, r, p, null, d, a);
            return _ == null
              ? null
              : {
                  node: _.node,
                  shouldHaveIdentity: _.shouldHaveIdentity,
                  peerLid: c,
                  selfLid: m,
                };
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, r, o, a, i) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            try {
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID],
              });
              var u = o("WAWebCoexV2ProtoSanitize").sanitizeCoexV2RelayMessage(
                  t,
                ),
                d = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                  i != null ? i : 0,
                  u,
                  e,
                  n,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                  !0,
                  l,
                ),
                m = d.ciphertext,
                p = d.type,
                _ = new Set(),
                f = [];
              for (var g of a) {
                var h = o("WAWebCommsWapMd").DEVICE_JID(g),
                  y = h.toString();
                _.has(y) ||
                  (_.add(y), f.push(o("WAWap").wap("to", { jid: h })));
              }
              var C = o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(p),
                    session_type: o(
                      "WAWebEncryptMsgProtobuf",
                    ).isPqxdhCiphertext(m)
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      p === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    count:
                      i != null && i > 0
                        ? o("WAWap").INT(i)
                        : o("WAWap").DROP_ATTR,
                  },
                  m,
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
                  p === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                type: p,
              };
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u,
            c,
            f = e.chatId,
            g = e.collectDeviceEncs,
            h = g === void 0 ? !1 : g,
            C = e.deviceList,
            b = e.groupData,
            v = e.metricReporter,
            R = e.msgProtobuf,
            L = e.msgRecord,
            E = e.option,
            k = e.scheduledMsgMetadata,
            I = L.data,
            T = I.from,
            D = I.id,
            $ = I.subtype,
            P = I.to,
            N =
              o("WAWebABProps").getABPropConfigValue(
                "web_coex_simple_signal_enabled",
              ) === 1 &&
              P.isUser() &&
              ((t = o("WAWebContactCollection").ContactCollection.get(P)) ==
                null || (t = t.privacyMode) == null
                ? void 0
                : t.hostStorage) ===
                o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
              !o(
                "WAWebSimpleSignalDowngradeStore",
              ).isCoexUserDowngradedFromSimpleSignal(P);
          N &&
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
            (yield (y || (y = n("Promise"))).all(
              C.filter(function (e) {
                return (
                  !e.isHosted() &&
                  e.user === P.user &&
                  o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                );
              }).map(function (e) {
                return o("WAWebSignalSessionApi").deleteRemoteSession(e);
              }),
            ));
          try {
            var M, w;
            (M = v.sendPerfReporter) == null || M.startPrekeysFetchStage();
            var O = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope:
                  E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (E.sessionScope == null ||
                    E.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: C,
              }),
              B = O == null ? void 0 : O.missedPrekeyCount;
            if (B != null) {
              var W;
              (W = v.sendPerfReporter) == null || W.setFetchedPrekeyCount(B);
            }
            ((w = v.sendPerfReporter) == null || w.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: O == null ? void 0 : O.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  E.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  E.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(C.length)
                    : null,
              }));
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error",
                  ])),
              )
              .tags("messaging");
          }
          var q = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(I, f),
            U =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(I) &&
                f.isBot()) ||
              q,
            H = o("WAWebThreadMsgUtils").getMsgAiThread(I),
            G =
              H != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(H)
                : null,
            z = C;
          E.isResendingMsg &&
            (z = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(L, C));
          var j = z.map(function (e) {
            return { msgKey: D, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(j),
            (a = v.sendPerfReporter) == null || a.startClientEncryptStage());
          var K = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              I,
              A(T, z),
            ),
            Q = o("WAWebMsgGetters").getWamEditType(I),
            X = yield S(I, P, z, R, E, K, Q, N, k, h);
          ((i = v.sendReporter) == null || i.setIsPq(X.isPq),
            (l = v.sendPerfReporter) == null || l.setIsPq(X.isPq),
            (s = v.sendPerfReporter) == null || s.postClientEncryptStage());
          var Y = null;
          if (
            E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var J =
              (k == null ? void 0 : k.kind) === "schedule"
                ? k.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(R);
            Y = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(J),
            });
          }
          var Z = o("WAWebE2EProtoUtils").getBizNativeFlowName(R),
            ee = I.nativeFlowInteractiveMsg,
            te,
            ne = o("WAWebContactCollection").ContactCollection.get(f),
            re = o("WAWebChatCollection").ChatCollection.get(f),
            oe = ne == null ? void 0 : ne.privacyMode;
          if (oe != null) {
            var ae;
            te = (ae = o("WAWap")).wap("biz", {
              host_storage: ae.INT(oe.hostStorage),
              actual_actors: ae.INT(oe.actualActors),
              privacy_mode_ts: ae.INT(oe.privacyModeTs),
              native_flow_name: ae.MAYBE_CUSTOM_STRING(Z),
            });
          }
          var ie,
            le,
            se,
            ue,
            ce = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated();
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
              f.isLid(),
              re == null ? void 0 : re.lidOriginType,
              ce,
              (ne == null ? void 0 : ne.phoneNumber) != null,
            ),
            f.isLid() &&
              (((re == null ? void 0 : re.lidOriginType) == null ||
                (re == null ? void 0 : re.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (ne == null ? void 0 : ne.shareOwnPn) !== !0 &&
                (ne == null ? void 0 : ne.phoneNumber) != null &&
                (ie = ne == null ? void 0 : ne.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (ne == null ? void 0 : ne.username) != null &&
                (ue = ne.username)),
            P.isLid()
              ? ce &&
                (re == null ? void 0 : re.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (se = o("WAWebApiContact").getPhoneNumber(P))
              : P.isUser() &&
                re != null &&
                re.accountLid &&
                ((le = re == null ? void 0 : re.accountLid),
                le.isLid() ||
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      le.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            te == null && Z != null && ee === !0)
          ) {
            var ae;
            te = (ae = o("WAWap")).wap(
              "biz",
              null,
              ae.wap(
                "interactive",
                { v: "1", type: ae.CUSTOM_STRING("native_flow") },
                ae.wap("native_flow", { name: ae.CUSTOM_STRING(Z) }),
              ),
            );
          } else
            te == null &&
              Z != null &&
              (te = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(Z),
              }));
          (E.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(L, z)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var de =
              k != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(k)
                : null,
            me =
              K == null
                ? void 0
                : K.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(T),
                    ),
                  ),
            pe =
              me != null
                ? o("WAWap").wap("sender_content_binding", null, me)
                : null,
            _e = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              I,
              q,
              H != null ? H.key.id : null,
            ),
            fe =
              X.botBody == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    P,
                  )
                : null,
            ge =
              X.botBody == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, P, I)
                : null,
            he = o("WAWebSendMsgBotStanza").genBotStanzaNode(
              _e,
              fe != null ? fe : null,
              ge,
              H != null,
            ),
            ye = !1,
            Ce = null;
          if (
            X.botBody == null &&
            ((Ce = yield x(I, R, P, Q, _e, f, re, E)), Ce != null)
          ) {
            ((he = Ce.node), (ye = Ce.shouldHaveIdentity));
            var be = [Ce.selfLid, Ce.peerLid].filter(Boolean);
            try {
              yield o(
                "WAWebApiCoexV2RelayReceiptStore",
              ).createOrMergeCoexV2RelayReceipts(D.id, be, I.t);
            } catch (e) {
              throw (
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] failed to seed relay receipt rows",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("coexv2-relay-receipt-seed-failed"),
                e
              );
            }
          }
          var ve = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: f,
              groupData: b,
              includeAttributes: {
                origin: re == null ? void 0 : re.lidOriginType,
                hashedAiThreadId: G,
                appendHostedSenderIntent:
                  Ce != null || X.hasCoexV2RepresentedTargets === !0,
              },
              msgProtobuf: R,
              msgRecord: L,
            }),
            Se = null;
          if (X.shouldHaveIdentity || ye) {
            var Re = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Se = o("WAWap").wap("device-identity", null, Re);
          }
          var Le = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(I, R, D.toString()),
            Ee = (u = yield F(re)) != null ? u : yield V(re, f),
            ke;
          b != null &&
            (ke =
              (b == null ? void 0 : b.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Ie = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              re,
            ),
            Te = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(D.id),
                to: o("WAWebCommsWapMd").CHAT_JID(P),
                type:
                  (c = k == null ? void 0 : k.originalStanzaType) != null
                    ? c
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(R),
                peer_recipient_lid: le
                  ? o("WAWebCommsWapMd").USER_JID(le)
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
                edit: o("WAWebSendMsgCommonApi").editAttribute(R, $),
                device_fanout:
                  E.isResendingMsg === !0 || U ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: ie
                  ? o("WAWebCommsWapMd").USER_JID(ie)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  ke != null
                    ? o("WAWap").CUSTOM_STRING(ke)
                    : o("WAWap").DROP_ATTR,
              },
              X.body,
              X.botBody,
              Y,
              Se,
              te,
              ve,
              de,
              pe,
              he,
              Le,
              Ee,
              Ie,
            );
          if (!P.isGroup() && !P.isStatus()) {
            var De;
            (De = v.sendReporter) == null ||
              De.setOppositeHasUsername(ue != null);
          }
          var xe = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: D.id,
            class: "message",
            from: I.to,
            participant: null,
          });
          return { stanza: Te, ackTemplate: xe, deviceEncs: X.deviceEncs };
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        O.apply(this, arguments)
      );
    }
    var B = null,
      W = null,
      q = new Map(),
      U = 5;
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === B && W != null
              ? (a = W)
              : ((a = o("WABase64").decodeB64(n)), (B = n), (W = a), q.clear());
            var i = r.toString(),
              l = q.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (q.size >= U) {
              var u = q.keys().next().value;
              u != null && q.delete(u);
            }
            return (q.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = L),
      (l.genCoexV2UserAgentAgentProto = E),
      (l.genBotFanoutContent = k),
      (l.genCoexV2UserAgentBotBody = D),
      (l.genCoexV2RelayBotNodeForTargets = P),
      (l.createFanoutMsgStanza = M),
      (l.genCsTokenBody = V));
  },
  98,
);
