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
    function b(e, t, n, r, o, a, i, l, s, u, c) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d, m, p, _, f) {
            var C,
              b =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              v = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              L =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((C = e.invokedBotWid) == null ? void 0 : C.isBot()) === !0,
              E =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              k =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, t),
              I = (E && t.isBot()) || k,
              T = E && !t.isBot() && !k,
              D = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              x = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              $ = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(
                t,
                i,
              ),
              P = $ != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !T &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !P
            ) {
              var N = a[0],
                M = o("WAWebUserPrefsMeUser").isMeAccount(N)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                w = M;
              (N.isBot() &&
                I &&
                (w = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: M,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  N,
                  e.subtype,
                ) &&
                  (w = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: e.id.id,
                    innerMessage: w,
                  })));
              var A =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  m &&
                  (N.isHosted() ||
                    (N.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(N))),
                F = yield y(N, l),
                O = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  N,
                  0,
                  w,
                  e,
                  d,
                  F,
                  A,
                ),
                B = O.ciphertext,
                W = O.type,
                q = null;
              (I || x != null) &&
                (q = o("WAWap").wap("bot", {
                  type: I ? "feedback" : o("WAWap").DROP_ATTR,
                  persona_type: x
                    ? o("WAWap").CUSTOM_STRING(x)
                    : o("WAWap").DROP_ATTR,
                }));
              var U = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(B)
                ? !0
                : void 0;
              return {
                deviceEncs: _ ? [h(N, B, W)] : [],
                shouldHaveIdentity:
                  W === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                body: o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(W),
                    session_type: U
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      A && W === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                      b,
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
                  B,
                ),
                botBody: q,
                isPq: U,
              };
            }
            var V = !1,
              H = a.map(
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
                        var g = n.isBot() && (L || T || D),
                          C = n.isBot() && I,
                          S = yield R(r, n, e, g, P, C);
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
                        var E =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          k = yield y(n, l),
                          x = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, S, e, d, k, E),
                          $ = x.ciphertext,
                          N = x.type;
                        N === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (V = !0);
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
                              type: o("WAWap").CUSTOM_STRING(N),
                              session_type: M
                                ? o("WAWap").CUSTOM_STRING("pq")
                                : o("WAWap").DROP_ATTR,
                              state:
                                E &&
                                N ===
                                  o("WAWebBackendJobs.flow").CiphertextType
                                    .Pkmsg
                                  ? o("WAWap").CUSTOM_STRING("false")
                                  : o("WAWap").DROP_ATTR,
                              mediatype: o(
                                "WAWebBackendJobsCommon",
                              ).encodeMaybeMediaType(b),
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
                        return P && n.isFbidBot()
                          ? {
                              coexV2AgentCopy: {
                                agentWid: n,
                                encType: N,
                                sharedEnc: w,
                              },
                              isPq: M,
                              node: null,
                              shouldFanoutToBot: g,
                            }
                          : {
                              deviceEnc: _ ? h(n, $, N) : null,
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
              G = yield (g || (g = n("Promise"))).all(H),
              z = S(G),
              j = z.botSuccessNodes,
              K = z.coexV2AgentCopies,
              Q = z.deviceEncs,
              X = z.isPq,
              Y = z.successNodes;
            if (
              o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
                $,
                K.length,
              )
            )
              return (g || (g = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (Y.length > 0 || j.length > 0 || K.length > 0) {
              var J,
                Z = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
                  !1,
                  t,
                  e,
                ),
                ee = o(
                  "WAWebCoexV2SendContribution",
                ).finalizeCoexV2AgentContribution({
                  agentCopies: K,
                  agentEngagementType: Z,
                  botAttrs: f,
                  isFeedback: E,
                  msg: e,
                  plan: $,
                });
              return (
                (ee == null ? void 0 : ee.seedReceipts) != null &&
                  (yield ee.seedReceipts()),
                {
                  deviceEncs: Q,
                  isPq: X,
                  body:
                    Y.length > 0
                      ? o("WAWap").wap("participants", null, Y)
                      : null,
                  botBody:
                    (J = ee == null ? void 0 : ee.node) != null
                      ? J
                      : o("WAWebSendMsgBotStanza").genBotFanoutNode({
                          agentEngagementType: Z,
                          botSuccessNodes: j,
                          isBotFeedbackMessage: E,
                          isBotFeedbackMessageInAgentChat: I,
                          personaType: x != null ? x : null,
                        }),
                  hasCoexV2RepresentedTargets: ee != null,
                  shouldHaveIdentity: V,
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
            Q = yield b(k, P, G, S, L, j, K, N, E, h, H);
          ((i = v.sendReporter) == null || i.setIsPq(Q.isPq),
            (l = v.sendPerfReporter) == null || l.setIsPq(Q.isPq),
            (s = v.sendPerfReporter) == null || s.postClientEncryptStage());
          var X = null;
          if (
            L.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var Y =
              (E == null ? void 0 : E.kind) === "schedule"
                ? E.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(S);
            X = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(Y),
            });
          }
          var J = o("WAWebE2EProtoUtils").getBizNativeFlowName(S),
            Z = k.nativeFlowInteractiveMsg,
            ee,
            te = o("WAWebContactCollection").ContactCollection.get(_),
            ne = o("WAWebChatCollection").ChatCollection.get(_),
            re = te == null ? void 0 : te.privacyMode;
          if (re != null) {
            var oe;
            ee = (oe = o("WAWap")).wap("biz", {
              host_storage: oe.INT(re.hostStorage),
              actual_actors: oe.INT(re.actualActors),
              privacy_mode_ts: oe.INT(re.privacyModeTs),
              native_flow_name: oe.MAYBE_CUSTOM_STRING(J),
            });
          }
          var ae,
            ie,
            le,
            se,
            ue = o(
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
              ne != null,
              te != null,
              _.isLid(),
              ne == null ? void 0 : ne.lidOriginType,
              ue,
              (te == null ? void 0 : te.phoneNumber) != null,
            ),
            _.isLid() &&
              (((ne == null ? void 0 : ne.lidOriginType) == null ||
                (ne == null ? void 0 : ne.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (te == null ? void 0 : te.shareOwnPn) !== !0 &&
                (te == null ? void 0 : te.phoneNumber) != null &&
                (ae = te == null ? void 0 : te.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (te == null ? void 0 : te.username) != null &&
                (se = te.username)),
            P.isLid()
              ? ue &&
                (ne == null ? void 0 : ne.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (le = o("WAWebApiContact").getPhoneNumber(P))
              : P.isUser() &&
                ne != null &&
                ne.accountLid &&
                ((ie = ne == null ? void 0 : ne.accountLid),
                ie.isLid() ||
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      ie.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            ee == null && J != null && Z === !0)
          ) {
            var oe;
            ee = (oe = o("WAWap")).wap(
              "biz",
              null,
              oe.wap(
                "interactive",
                { v: "1", type: oe.CUSTOM_STRING("native_flow") },
                oe.wap("native_flow", { name: oe.CUSTOM_STRING(J) }),
              ),
            );
          } else
            ee == null &&
              J != null &&
              (ee = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(J),
              }));
          (L.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(R, G)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ce =
              E != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(E)
                : null,
            de =
              j == null
                ? void 0
                : j.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(D),
                    ),
                  ),
            me =
              de != null
                ? o("WAWap").wap("sender_content_binding", null, de)
                : null,
            pe =
              Q.botBody == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    P,
                  )
                : null,
            _e =
              Q.botBody == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, P, k)
                : null,
            fe =
              Q.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    H,
                    pe != null ? pe : null,
                    _e,
                    U != null,
                  ),
            ge = !1,
            he = null;
          Q.botBody == null &&
            ((he = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: H,
              editType: K,
              msg: k,
              sendContext: {
                chat: ne,
                chatId: _,
                msgProtobuf: S,
                option: L,
                stanzaTo: P,
              },
            })),
            he != null &&
              ((fe = he.node),
              (ge = he.shouldHaveIdentity),
              yield he.seedReceipts()));
          var ye = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: _,
              groupData: C,
              includeAttributes: {
                origin: ne == null ? void 0 : ne.lidOriginType,
                hashedAiThreadId: V,
                appendHostedSenderIntent:
                  he != null || Q.hasCoexV2RepresentedTargets === !0,
              },
              msgProtobuf: S,
              msgRecord: R,
            }),
            Ce = null;
          if (Q.shouldHaveIdentity || ge) {
            var be = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Ce = o("WAWap").wap("device-identity", null, be);
          }
          var ve = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(k, S, x.toString()),
            Se = (u = yield T(ne)) != null ? u : yield M(ne, _),
            Re;
          C != null &&
            (Re =
              (C == null ? void 0 : C.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Le = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              ne,
            ),
            Ee = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(x.id),
                to: o("WAWebCommsWapMd").CHAT_JID(P),
                type:
                  (p = E == null ? void 0 : E.originalStanzaType) != null
                    ? p
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(S),
                peer_recipient_lid: ie
                  ? o("WAWebCommsWapMd").USER_JID(ie)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: le
                  ? o("WAWebCommsWapMd").USER_JID(le)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  se !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(se),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(S, $),
                device_fanout:
                  L.isResendingMsg === !0 || q ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: ae
                  ? o("WAWebCommsWapMd").USER_JID(ae)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Re != null
                    ? o("WAWap").CUSTOM_STRING(Re)
                    : o("WAWap").DROP_ATTR,
              },
              Q.body,
              Q.botBody,
              X,
              Ce,
              ee,
              ye,
              ce,
              me,
              fe,
              ve,
              Se,
              Le,
            );
          if (!P.isGroup() && !P.isStatus()) {
            var ke;
            (ke = v.sendReporter) == null ||
              ke.setOppositeHasUsername(se != null);
          }
          var Ie = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: x.id,
            class: "message",
            from: k.to,
            participant: null,
          });
          return { stanza: Ee, ackTemplate: Ie, deviceEncs: Q.deviceEncs };
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
