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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e, t, n) {
      return {
        ciphertext: t,
        isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
        participant: e,
        type: n,
      };
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a, i, l, s, u) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d, m, p, _) {
            var f,
              g =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              b = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
              v =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((f = e.invokedBotWid) == null ? void 0 : f.isBot()) === !0,
              S =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              E =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebSendMsgBotStanza").getIsBizBotFeedback(e, t),
              k = (S && t.isBot()) || E,
              I = S && !t.isBot() && !E,
              T = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              D = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                t,
              ),
              x = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(
                t,
                i,
              ),
              $ = x != null;
            if (
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              a.length === 1 &&
              o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
              !I &&
              !o("WAWebBotUtils").isMetaAiBot(t) &&
              !$
            ) {
              var P = a[0],
                N = o("WAWebUserPrefsMeUser").isMeAccount(P)
                  ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                      i,
                      t,
                    )
                  : i,
                M = N;
              (P.isBot() &&
                k &&
                (M = yield o(
                  "WAWebE2EProtoGenerator",
                ).updateBotInvokeMsgProtoCopyForCapi({
                  message: N,
                  mentionedJidList: e.mentionedJidList,
                })),
                o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                  t,
                  P,
                  e.subtype,
                ) &&
                  (M = yield o(
                    "WAWebWasaHatchOutboundWrapper",
                  ).wrapHatchOutboundMessage({
                    currentStanzaId: e.id.id,
                    innerMessage: M,
                  })));
              var w =
                  o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
                  m &&
                  (P.isHosted() ||
                    (P.user === t.user &&
                      o("WAWebSendMsgCommonApi").isPrimaryDevice(P))),
                A = yield C(P, l),
                F = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                  P,
                  0,
                  M,
                  e,
                  d,
                  A,
                  w,
                ),
                O = F.ciphertext,
                B = F.type,
                W = null;
              (k || D != null) &&
                (W = o("WAWap").wap("bot", {
                  type: k ? "feedback" : o("WAWap").DROP_ATTR,
                  persona_type: D
                    ? o("WAWap").CUSTOM_STRING(D)
                    : o("WAWap").DROP_ATTR,
                }));
              var q = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(O)
                ? !0
                : void 0;
              return {
                deviceEncs: _ ? [y(P, O, B)] : [],
                shouldHaveIdentity:
                  B === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
                body: o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(B),
                    session_type: q
                      ? o("WAWap").CUSTOM_STRING("pq")
                      : o("WAWap").DROP_ATTR,
                    state:
                      w && B === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                        ? o("WAWap").CUSTOM_STRING("false")
                        : o("WAWap").DROP_ATTR,
                    mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                      g,
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
                    ).encodeMaybeNativeFlowName(b),
                  },
                  O,
                ),
                botBody: W,
                isPq: q,
              };
            }
            var U = !1,
              V = a.map(
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
                        var h = n.isBot() && (v || I || T),
                          S = n.isBot() && k,
                          R = yield L(r, n, e, h, $, S);
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
                        var E =
                            o(
                              "WAWebMessagingGatingUtils",
                            ).isSimpleSignalEnabled() &&
                            m &&
                            (n.isHosted() ||
                              (n.user === t.user &&
                                o("WAWebSendMsgCommonApi").isPrimaryDevice(n))),
                          D = yield C(n, l),
                          x = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, R, e, d, D, E),
                          P = x.ciphertext,
                          N = x.type;
                        N === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                          (U = !0);
                        var M = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                            P,
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
                              ).encodeMaybeNativeFlowName(b),
                            },
                            P,
                          );
                        return $ && n.isFbidBot()
                          ? {
                              coexV2AgentCopy: {
                                agentWid: n,
                                encType: N,
                                sharedEnc: w,
                              },
                              isPq: M,
                              node: null,
                              shouldFanoutToBot: h,
                            }
                          : {
                              deviceEnc: _ ? y(n, P, N) : null,
                              isPq: M,
                              shouldFanoutToBot: h,
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
              H = yield (h || (h = n("Promise"))).all(V),
              G = R(H),
              z = G.botSuccessNodes,
              j = G.coexV2AgentCopies,
              K = G.deviceEncs,
              Q = G.isPq,
              X = G.successNodes;
            if (
              o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
                x,
                j.length,
              )
            )
              return (h || (h = n("Promise"))).reject(
                r("err")(
                  "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
                ),
              );
            if (X.length > 0 || z.length > 0 || j.length > 0) {
              var Y,
                J = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
                  !1,
                  t,
                  e,
                ),
                Z = o(
                  "WAWebCoexV2SendContribution",
                ).finalizeCoexV2AgentContribution({
                  agentCopies: j,
                  agentEngagementType: J,
                  isFeedback: S,
                  msg: e,
                  personaType: D != null ? D : null,
                  plan: x,
                });
              return (
                (Z == null ? void 0 : Z.seedReceipts) != null &&
                  (yield Z.seedReceipts()),
                {
                  deviceEncs: K,
                  isPq: Q,
                  body:
                    X.length > 0
                      ? o("WAWap").wap("participants", null, X)
                      : null,
                  botBody:
                    (Y = Z == null ? void 0 : Z.node) != null
                      ? Y
                      : o("WAWebSendMsgBotStanza").genBotFanoutNode({
                          agentEngagementType: J,
                          botSuccessNodes: z,
                          isBotFeedbackMessage: S,
                          isBotFeedbackMessageInAgentChat: k,
                          personaType: D != null ? D : null,
                        }),
                  hasCoexV2RepresentedTargets: Z != null,
                  shouldHaveIdentity: U,
                }
              );
            }
            return h.reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
              ),
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(t) {
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
    function L(e, t, n, r, o, a) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            i === void 0 && (i = !1);
            var l = a && t.isFbidBot();
            if (l)
              return o("WAWebCoexV2SendContribution").prepareCoexV2AgentPayload(
                e,
                t,
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i,
            l,
            s,
            u,
            _,
            f = e.chatId,
            g = e.collectDeviceEncs,
            y = g === void 0 ? !1 : g,
            C = e.deviceList,
            b = e.groupData,
            S = e.metricReporter,
            R = e.msgProtobuf,
            L = e.msgRecord,
            E = e.option,
            k = e.scheduledMsgMetadata,
            I = L.data,
            x = I.from,
            $ = I.id,
            P = I.subtype,
            N = I.to,
            M =
              o("WAWebABProps").getABPropConfigValue(
                "web_coex_simple_signal_enabled",
              ) === 1 &&
              N.isUser() &&
              ((t = o("WAWebContactCollection").ContactCollection.get(N)) ==
                null || (t = t.privacyMode) == null
                ? void 0
                : t.hostStorage) ===
                o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
              !o(
                "WAWebSimpleSignalDowngradeStore",
              ).isCoexUserDowngradedFromSimpleSignal(N);
          M &&
            o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() &&
            (yield (h || (h = n("Promise"))).all(
              C.filter(function (e) {
                return (
                  !e.isHosted() &&
                  e.user === N.user &&
                  o("WAWebSendMsgCommonApi").isPrimaryDevice(e)
                );
              }).map(function (e) {
                return o("WAWebSignalSessionApi").deleteRemoteSession(e);
              }),
            ));
          try {
            var A, F;
            (A = S.sendPerfReporter) == null || A.startPrekeysFetchStage();
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
              (W = S.sendPerfReporter) == null || W.setFetchedPrekeyCount(B);
            }
            ((F = S.sendPerfReporter) == null || F.postPrekeysFetchStage(),
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
            V = o("WAWebThreadMsgUtils").getMsgAiThread(I),
            H =
              V != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(V)
                : null,
            G = C;
          E.isResendingMsg &&
            (G = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(L, C));
          var z = G.map(function (e) {
            return { msgKey: $, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(z),
            (a = S.sendPerfReporter) == null || a.startClientEncryptStage());
          var j = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              I,
              T(x, G),
            ),
            K = o("WAWebMsgGetters").getWamEditType(I),
            Q = yield v(I, N, G, R, E, j, K, M, k, y);
          ((i = S.sendReporter) == null || i.setIsPq(Q.isPq),
            (l = S.sendPerfReporter) == null || l.setIsPq(Q.isPq),
            (s = S.sendPerfReporter) == null || s.postClientEncryptStage());
          var X = null;
          if (
            E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var Y =
              (k == null ? void 0 : k.kind) === "schedule"
                ? k.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(R);
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
          var J = o("WAWebE2EProtoUtils").getBizNativeFlowName(R),
            Z = I.nativeFlowInteractiveMsg,
            ee,
            te = o("WAWebContactCollection").ContactCollection.get(f),
            ne = o("WAWebChatCollection").ChatCollection.get(f),
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
              f.isLid(),
              ne == null ? void 0 : ne.lidOriginType,
              ue,
              (te == null ? void 0 : te.phoneNumber) != null,
            ),
            f.isLid() &&
              (((ne == null ? void 0 : ne.lidOriginType) == null ||
                (ne == null ? void 0 : ne.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (te == null ? void 0 : te.shareOwnPn) !== !0 &&
                (te == null ? void 0 : te.phoneNumber) != null &&
                (ae = te == null ? void 0 : te.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (te == null ? void 0 : te.username) != null &&
                (se = te.username)),
            N.isLid()
              ? ue &&
                (ne == null ? void 0 : ne.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (le = o("WAWebApiContact").getPhoneNumber(N))
              : N.isUser() &&
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
          (E.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(L, G)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ce =
              k != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(k)
                : null,
            de =
              j == null
                ? void 0
                : j.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(x),
                    ),
                  ),
            me =
              de != null
                ? o("WAWap").wap("sender_content_binding", null, de)
                : null,
            pe = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              I,
              q,
              V != null ? V.key.id : null,
            ),
            _e =
              Q.botBody == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    N,
                  )
                : null,
            fe =
              Q.botBody == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, N, I)
                : null,
            ge = o("WAWebSendMsgBotStanza").genBotStanzaNode(
              pe,
              _e != null ? _e : null,
              fe,
              V != null,
            ),
            he = !1,
            ye = null;
          if (
            Q.botBody == null &&
            ((ye = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: pe,
              editType: K,
              msg: I,
              sendContext: {
                chat: ne,
                chatId: f,
                msgProtobuf: R,
                option: E,
                stanzaTo: N,
              },
            })),
            ye != null)
          ) {
            ((ge = ye.node), (he = ye.shouldHaveIdentity));
            try {
              yield ye.seedReceipts();
            } catch (e) {
              throw (
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] failed to seed relay receipt rows",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("coexv2-relay-receipt-seed-failed"),
                e
              );
            }
          }
          var Ce = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: f,
              groupData: b,
              includeAttributes: {
                origin: ne == null ? void 0 : ne.lidOriginType,
                hashedAiThreadId: H,
                appendHostedSenderIntent:
                  ye != null || Q.hasCoexV2RepresentedTargets === !0,
              },
              msgProtobuf: R,
              msgRecord: L,
            }),
            be = null;
          if (Q.shouldHaveIdentity || he) {
            var ve = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            be = o("WAWap").wap("device-identity", null, ve);
          }
          var Se = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(I, R, $.toString()),
            Re = (u = yield D(ne)) != null ? u : yield w(ne, f),
            Le;
          b != null &&
            (Le =
              (b == null ? void 0 : b.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Ee = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              ne,
            ),
            ke = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING($.id),
                to: o("WAWebCommsWapMd").CHAT_JID(N),
                type:
                  (_ = k == null ? void 0 : k.originalStanzaType) != null
                    ? _
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(R),
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
                edit: o("WAWebSendMsgCommonApi").editAttribute(R, P),
                device_fanout:
                  E.isResendingMsg === !0 || U ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: ae
                  ? o("WAWebCommsWapMd").USER_JID(ae)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Le != null
                    ? o("WAWap").CUSTOM_STRING(Le)
                    : o("WAWap").DROP_ATTR,
              },
              Q.body,
              Q.botBody,
              X,
              be,
              ee,
              Ce,
              ce,
              me,
              ge,
              Se,
              Re,
              Ee,
            );
          if (!N.isGroup() && !N.isStatus()) {
            var Ie;
            (Ie = S.sendReporter) == null ||
              Ie.setOppositeHasUsername(se != null);
          }
          var Te = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: $.id,
            class: "message",
            from: I.to,
            participant: null,
          });
          return { stanza: ke, ackTemplate: Te, deviceEncs: Q.deviceEncs };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        x.apply(this, arguments)
      );
    }
    var $ = null,
      P = null,
      N = new Map(),
      M = 5;
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] no salt available in IndexedDB",
                  ])),
              ),
              null
            );
          var r = e == null ? void 0 : e.accountLid;
          if (r == null)
            return (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] recipientLid is null",
                  ])),
              ),
              null
            );
          try {
            var a;
            n === $ && P != null
              ? (a = P)
              : ((a = o("WABase64").decodeB64(n)), ($ = n), (P = a), N.clear());
            var i = r.toString(),
              l = N.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (N.size >= M) {
              var u = N.keys().next().value;
              u != null && N.delete(u);
            }
            return (N.set(i, s), o("WAWap").wap("cstoken", null, s));
          } catch (e) {
            return (
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-cstoken] generation failed - ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = R),
      (l.genBotFanoutContent = L),
      (l.createFanoutMsgStanza = k),
      (l.genCsTokenBody = w));
  },
  98,
);
