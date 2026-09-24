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
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t, n) {
      return {
        ciphertext: t,
        isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
        participant: e,
        type: n,
      };
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, o, a, i, l, s, u, c, d) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d, m, p, _, f, C) {
            var b,
              v =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              L = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              E =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((b = e.invokedBotWid) == null ? void 0 : b.isBot()) === !0,
              k =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              I =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, t),
              T = (k && t.isBot()) || I,
              D = k && !t.isBot() && !I,
              x = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              $ = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              P = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(
                t,
                i,
              ),
              N =
                P != null
                  ? P
                  : o(
                      "WAWebCoexV2RelayEligibility",
                    ).getCoexV2InvokedAgentSendPlan({
                      hasFbidBotDevice: a.some(function (e) {
                        return e.isFbidBot();
                      }),
                      isBotInvokeMessage: E,
                      isResendingMsg: l.isResendingMsg === !0,
                      isRevokeForMsgFromOrDeliveredToBot: x,
                      relayPlan: f,
                    }),
              M = N != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !D &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !M
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
                T &&
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
                B = yield y(w, l),
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
              (T || $ != null) &&
                (V = o("WAWap").wap("bot", {
                  type: T ? "feedback" : o("WAWap").DROP_ATTR,
                  persona_type: $
                    ? o("WAWap").CUSTOM_STRING($)
                    : o("WAWap").DROP_ATTR,
                }));
              var H = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(q)
                ? !0
                : void 0;
              return {
                deviceEncs: _ ? [h(w, q, U)] : [],
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
                      v,
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
                    ).encodeMaybeNativeFlowName(L),
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
                        var g = n.isBot() && (E || D || x),
                          C = n.isBot() && T,
                          b = yield R(r, n, e, g, M, C);
                        if (
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(t, n, e.subtype)
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
                        var S =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          k = yield y(n, l),
                          I = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, b, e, d, k, S),
                          $ = I.ciphertext,
                          P = I.type;
                        P === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (G = !0);
                        var N = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                          $,
                        )
                          ? !0
                          : void 0;
                        if (M && n.isFbidBot())
                          return {
                            coexV2AgentCopy: {
                              agentWid: n,
                              encType: P,
                              sharedEnc: o(
                                "WAWebCoexV2SendContribution",
                              ).genCoexV2AgentSharedEncNode({
                                ciphertext: $,
                                mediaType: v,
                                msgProtobuf: i,
                                retryCount: 0,
                                type: P,
                                useStatelessSession: S,
                              }),
                            },
                            isPq: N,
                            node: null,
                            shouldFanoutToBot: g,
                          };
                        var w = o("WAWap").wap(
                          "enc",
                          {
                            v: o("WAWap").CUSTOM_STRING(
                              o(
                                "WAWebBackendJobsCommon",
                              ).CIPHERTEXT_VERSION.toString(),
                            ),
                            type: o("WAWap").CUSTOM_STRING(P),
                            session_type: N
                              ? o("WAWap").CUSTOM_STRING("pq")
                              : o("WAWap").DROP_ATTR,
                            state:
                              S &&
                              P ===
                                o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                                ? o("WAWap").CUSTOM_STRING("false")
                                : o("WAWap").DROP_ATTR,
                            mediatype: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeMediaType(v),
                            "decrypt-fail": o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeDecryptFail(
                              o(
                                "WAWebE2EProtoUtils",
                              ).decryptFailAttributeFromProtobuf(i),
                            ),
                            native_flow_name: o(
                              "WAWebBackendJobsCommon",
                            ).encodeMaybeNativeFlowName(L),
                          },
                          $,
                        );
                        return {
                          deviceEnc: _ ? h(n, $, P) : null,
                          isPq: N,
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
              j = yield (g || (g = n("Promise"))).all(z),
              K = S(j),
              Q = K.botSuccessNodes,
              X = K.coexV2AgentCopies,
              Y = K.deviceEncs,
              J = K.isPq,
              Z = K.successNodes;
            if (
              o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
                N,
                X.length,
              )
            )
              return (g || (g = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (Z.length > 0 || Q.length > 0 || X.length > 0) {
              var ee,
                te = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
                  !1,
                  t,
                  e,
                ),
                ne = o(
                  "WAWebCoexV2SendContribution",
                ).finalizeCoexV2AgentContribution({
                  agentCopies: X,
                  agentEngagementType: te,
                  botAttrs: C,
                  isFeedback: k,
                  msg: e,
                  plan: N,
                });
              return (
                (ne == null ? void 0 : ne.seedReceipts) != null &&
                  (yield ne.seedReceipts()),
                {
                  deviceEncs: Y,
                  isPq: J,
                  body:
                    Z.length > 0
                      ? o("WAWap").wap("participants", null, Z)
                      : null,
                  botBody:
                    (ee = ne == null ? void 0 : ne.node) != null
                      ? ee
                      : o("WAWebSendMsgBotStanza").genBotFanoutNode({
                          agentEngagementType: te,
                          botSuccessNodes: Q,
                          isBotFeedbackMessage: k,
                          isBotFeedbackMessageInAgentChat: T,
                          personaType: $ != null ? $ : null,
                        }),
                  hasCoexV2RepresentedTargets: ne != null,
                  shouldHaveIdentity: G,
                }
              );
            }
            return g.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(t) {
      var n = [],
        r = [],
        a = [],
        i = [];
      return (
        t.forEach(function (t) {
          if (t != null) {
            if (t.coexV2AgentCopy != null) {
              a.length === 0
                ? a.push(t.coexV2AgentCopy)
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
            var l = t.node;
            l != null &&
              (t.shouldFanoutToBot
                ? r.push(l)
                : (n.push(l), t.deviceEnc != null && i.push(t.deviceEnc)));
          }
        }),
        {
          botSuccessNodes: r,
          coexV2AgentCopies: a,
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
    function R(e, t, n, r, o, a) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            i === void 0 && (i = !1);
            var l = a && t.isFbidBot();
            if (l)
              return o("WAWebCoexV2SendContribution").prepareCoexV2AgentPayload(
                e,
                n,
              );
            var s = e;
            return (
              (r || i) &&
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
              s
            );
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u,
            p,
            _ = e.chatId,
            f = e.collectDeviceEncs,
            h = f === void 0 ? !1 : f,
            y = e.deviceList,
            C = e.groupData,
            v = e.metricReporter,
            S = e.msgProtobuf,
            R = e.msgRecord,
            L = e.option,
            E = e.scheduledMsgMetadata,
            k = R.data,
            D = k.from,
            x = k.id,
            $ = k.subtype,
            P = k.to,
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
            (yield (g || (g = n("Promise"))).all(
              y
                .filter(function (e) {
                  return (
                    !e.isHosted() &&
                    e.user === P.user &&
                    o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                  );
                })
                .map(function (e) {
                  return o("WAWebSignalSessionApi").deleteRemoteSession(e);
                }),
            ));
          try {
            var w, A;
            (w = v.sendPerfReporter) == null || w.startPrekeysFetchStage();
            var F = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope:
                  L.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (L.sessionScope == null ||
                    L.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: y,
              }),
              O = F == null ? void 0 : F.missedPrekeyCount;
            if (O != null) {
              var B;
              (B = v.sendPerfReporter) == null || B.setFetchedPrekeyCount(O);
            }
            ((A = v.sendPerfReporter) == null || A.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: F == null ? void 0 : F.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  L.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  L.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(y.length)
                    : null,
              }));
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error",
                  ])),
              )
              .tags("messaging");
          }
          var W = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(k, _),
            q =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(k) &&
                _.isBot()) ||
              W,
            U = o("WAWebThreadMsgUtils").getMsgAiThread(k),
            V =
              U != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(U)
                : null,
            H = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              k,
              W,
              U != null ? U.key.id : null,
            ),
            G = y;
          L.isResendingMsg &&
            (G = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(R, y));
          var z = G.map(function (e) {
            return { msgKey: x, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(z),
            (a = v.sendPerfReporter) == null || a.startClientEncryptStage());
          var j = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              k,
              I(D, G),
            ),
            K = o("WAWebMsgGetters").getWamEditType(k),
            Q = o("WAWebChatCollection").ChatCollection.get(_),
            X = { chat: Q, chatId: _, msgProtobuf: S, option: L, stanzaTo: P },
            Y = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(
              X,
            ),
            J = yield b(k, P, G, S, L, j, K, N, E, h, Y, H);
          ((i = v.sendReporter) == null || i.setIsPq(J.isPq),
            (l = v.sendPerfReporter) == null || l.setIsPq(J.isPq),
            (s = v.sendPerfReporter) == null || s.postClientEncryptStage());
          var Z = null;
          if (
            L.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var ee =
              (E == null ? void 0 : E.kind) === "schedule"
                ? E.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(S);
            Z = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(ee),
            });
          }
          var te = o("WAWebE2EProtoUtils").getBizNativeFlowName(S),
            ne = k.nativeFlowInteractiveMsg,
            re,
            oe = o("WAWebContactCollection").ContactCollection.get(_),
            ae = oe == null ? void 0 : oe.privacyMode;
          if (ae != null) {
            var ie;
            re = (ie = o("WAWap")).wap("biz", {
              host_storage: ie.INT(ae.hostStorage),
              actual_actors: ie.INT(ae.actualActors),
              privacy_mode_ts: ie.INT(ae.privacyModeTs),
              native_flow_name: ie.MAYBE_CUSTOM_STRING(te),
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "createFanoutMsgStanza: create fanout for a message. found chat: ",
                  ". found contact: ",
                  ".\n      is lid: ",
                  ". lid origin: ",
                  ". isLidMigrated: ",
                  "\n      contact has phone number: ",
                  "",
                ])),
              Q != null,
              oe != null,
              _.isLid(),
              Q == null ? void 0 : Q.lidOriginType,
              de,
              (oe == null ? void 0 : oe.phoneNumber) != null,
            ),
            _.isLid() &&
              (((Q == null ? void 0 : Q.lidOriginType) == null ||
                (Q == null ? void 0 : Q.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (oe == null ? void 0 : oe.shareOwnPn) !== !0 &&
                (oe == null ? void 0 : oe.phoneNumber) != null &&
                (le = oe == null ? void 0 : oe.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (oe == null ? void 0 : oe.username) != null &&
                (ce = oe.username)),
            P.isLid()
              ? de &&
                (Q == null ? void 0 : Q.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ue = o("WAWebApiContact").getPhoneNumber(P))
              : P.isUser() &&
                Q != null &&
                Q.accountLid &&
                ((se = Q == null ? void 0 : Q.accountLid),
                se.isLid() ||
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      se.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            re == null && te != null && ne === !0)
          ) {
            var ie;
            re = (ie = o("WAWap")).wap(
              "biz",
              null,
              ie.wap(
                "interactive",
                { v: "1", type: ie.CUSTOM_STRING("native_flow") },
                ie.wap("native_flow", { name: ie.CUSTOM_STRING(te) }),
              ),
            );
          } else
            re == null &&
              te != null &&
              (re = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(te),
              }));
          (L.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(R, G)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var me =
              E != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(E)
                : null,
            pe =
              j == null
                ? void 0
                : j.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(D),
                    ),
                  ),
            _e =
              pe != null
                ? o("WAWap").wap("sender_content_binding", null, pe)
                : null,
            fe =
              J.botBody == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    P,
                  )
                : null,
            ge =
              J.botBody == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, P, k)
                : null,
            he =
              J.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    H,
                    fe != null ? fe : null,
                    ge,
                    U != null,
                  ),
            ye = !1,
            Ce = null;
          J.botBody == null &&
            ((Ce = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: H,
              editType: K,
              msg: k,
              msgProtobuf: S,
              relayPlan: Y,
            })),
            Ce != null &&
              ((he = Ce.node),
              (ye = Ce.shouldHaveIdentity),
              yield Ce.seedReceipts()));
          var be = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: _,
              groupData: C,
              includeAttributes: {
                origin: Q == null ? void 0 : Q.lidOriginType,
                hashedAiThreadId: V,
                appendHostedSenderIntent:
                  Ce != null || J.hasCoexV2RepresentedTargets === !0,
              },
              msgProtobuf: S,
              msgRecord: R,
            }),
            ve = null;
          if (J.shouldHaveIdentity || ye) {
            var Se = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            ve = o("WAWap").wap("device-identity", null, Se);
          }
          var Re = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(k, S, x.toString()),
            Le = (u = yield T(Q)) != null ? u : yield M(Q, _),
            Ee;
          C != null &&
            (Ee =
              (C == null ? void 0 : C.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var ke = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              Q,
            ),
            Ie = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(x.id),
                to: o("WAWebCommsWapMd").CHAT_JID(P),
                type:
                  (p = E == null ? void 0 : E.originalStanzaType) != null
                    ? p
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(S),
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
                edit: o("WAWebSendMsgCommonApi").editAttribute(S, $),
                device_fanout:
                  L.isResendingMsg === !0 || q ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: le
                  ? o("WAWebCommsWapMd").USER_JID(le)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Ee != null
                    ? o("WAWap").CUSTOM_STRING(Ee)
                    : o("WAWap").DROP_ATTR,
              },
              J.body,
              J.botBody,
              Z,
              ve,
              re,
              be,
              me,
              _e,
              he,
              Re,
              Le,
              ke,
            );
          if (!P.isGroup() && !P.isStatus()) {
            var Te;
            (Te = v.sendReporter) == null ||
              Te.setOppositeHasUsername(ce != null);
          }
          var De = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: x.id,
            class: "message",
            from: k.to,
            participant: null,
          });
          return { stanza: Ie, ackTemplate: De, deviceEncs: J.deviceEncs };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        D.apply(this, arguments)
      );
    }
    var x = null,
      $ = null,
      P = new Map(),
      N = 5;
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === x && $ != null
              ? (a = $)
              : ((a = o("WABase64").decodeB64(n)), (x = n), ($ = a), P.clear());
            var i = r.toString(),
              l = P.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (P.size >= N) {
              var u = P.keys().next().value;
              u != null && P.delete(u);
            }
            return (P.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = S),
      (l.genBotFanoutContent = R),
      (l.createFanoutMsgStanza = E),
      (l.genCsTokenBody = M));
  },
  98,
);
