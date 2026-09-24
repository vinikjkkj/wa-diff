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
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebManageE2ESessionsJob",
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
              var O = o(
                  "WAWebCoexV2RelayEligibility",
                ).shouldUseCoexV2StatelessSession(m, w),
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
                        var S = o(
                            "WAWebCoexV2RelayEligibility",
                          ).shouldUseCoexV2StatelessSession(m, n),
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
            n,
            a,
            i,
            l,
            s,
            u,
            p = e.chatId,
            _ = e.collectDeviceEncs,
            f = _ === void 0 ? !1 : _,
            g = e.deviceList,
            h = e.groupData,
            y = e.metricReporter,
            C = e.msgProtobuf,
            v = e.msgRecord,
            S = e.option,
            R = e.scheduledMsgMetadata,
            L = v.data,
            E = L.from,
            k = L.id,
            D = L.subtype,
            x = L.to,
            $ = yield o(
              "WAWebCoexV2RelayEligibility",
            ).resolveCoexV2SimpleSignalPolicy({ chatId: p, stanzaTo: x });
          yield o(
            "WAWebCoexV2RelayEligibility",
          ).deleteCoexV2SimpleSignalPrimarySessions($, g);
          try {
            var P, N;
            (P = y.sendPerfReporter) == null || P.startPrekeysFetchStage();
            var w = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope:
                  S.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (S.sessionScope == null ||
                    S.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: g,
              }),
              A = w == null ? void 0 : w.missedPrekeyCount;
            if (A != null) {
              var F;
              (F = y.sendPerfReporter) == null || F.setFetchedPrekeyCount(A);
            }
            ((N = y.sendPerfReporter) == null || N.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: w == null ? void 0 : w.depletedPrekeyCount,
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
                    ? r("WAWebWamNumberToSizeBucket")(g.length)
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
          var O = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(L, p),
            B =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(L) &&
                p.isBot()) ||
              O,
            W = o("WAWebThreadMsgUtils").getMsgAiThread(L),
            q =
              W != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(W)
                : null,
            U = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              L,
              O,
              W != null ? W.key.id : null,
            ),
            V = g;
          S.isResendingMsg &&
            (V = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(v, g));
          var H = V.map(function (e) {
            return { msgKey: k, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(H),
            (t = y.sendPerfReporter) == null || t.startClientEncryptStage());
          var G = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              L,
              I(E, V),
            ),
            z = o("WAWebMsgGetters").getWamEditType(L),
            j = o("WAWebChatCollection").ChatCollection.get(p),
            K = { chat: j, chatId: p, msgProtobuf: C, option: S, stanzaTo: x },
            Q = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(
              K,
            ),
            X = yield b(L, x, V, C, S, G, z, $, R, f, Q, U);
          ((n = y.sendReporter) == null || n.setIsPq(X.isPq),
            (a = y.sendPerfReporter) == null || a.setIsPq(X.isPq),
            (i = y.sendPerfReporter) == null || i.postClientEncryptStage());
          var Y = null;
          if (
            S.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var J =
              (R == null ? void 0 : R.kind) === "schedule"
                ? R.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(C);
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
          var Z = o("WAWebE2EProtoUtils").getBizNativeFlowName(C),
            ee = L.nativeFlowInteractiveMsg,
            te,
            ne = o("WAWebContactCollection").ContactCollection.get(p),
            re =
              (l = $ == null ? void 0 : $.privacyMode) != null
                ? l
                : ne == null
                  ? void 0
                  : ne.privacyMode;
          if (re != null) {
            var oe;
            te = (oe = o("WAWap")).wap("biz", {
              host_storage: oe.INT(re.hostStorage),
              actual_actors: oe.INT(re.actualActors),
              privacy_mode_ts: oe.INT(re.privacyModeTs),
              native_flow_name: oe.MAYBE_CUSTOM_STRING(Z),
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
              j != null,
              ne != null,
              p.isLid(),
              j == null ? void 0 : j.lidOriginType,
              ue,
              (ne == null ? void 0 : ne.phoneNumber) != null,
            ),
            p.isLid() &&
              (((j == null ? void 0 : j.lidOriginType) == null ||
                (j == null ? void 0 : j.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (ne == null ? void 0 : ne.shareOwnPn) !== !0 &&
                (ne == null ? void 0 : ne.phoneNumber) != null &&
                (ae = ne == null ? void 0 : ne.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (ne == null ? void 0 : ne.username) != null &&
                (se = ne.username)),
            x.isLid()
              ? ue &&
                (j == null ? void 0 : j.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (le = o("WAWebApiContact").getPhoneNumber(x))
              : x.isUser() &&
                j != null &&
                j.accountLid &&
                ((ie = j == null ? void 0 : j.accountLid),
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
            te == null && Z != null && ee === !0)
          ) {
            var oe;
            te = (oe = o("WAWap")).wap(
              "biz",
              null,
              oe.wap(
                "interactive",
                { v: "1", type: oe.CUSTOM_STRING("native_flow") },
                oe.wap("native_flow", { name: oe.CUSTOM_STRING(Z) }),
              ),
            );
          } else
            te == null &&
              Z != null &&
              (te = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(Z),
              }));
          (S.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(v, V)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ce =
              R != null
                ? o(
                    "WAWebScheduledMsgStanzaContributor",
                  ).genScheduledMsgMetaNode(R)
                : null,
            de =
              G == null
                ? void 0
                : G.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(E),
                    ),
                  ),
            me =
              de != null
                ? o("WAWap").wap("sender_content_binding", null, de)
                : null,
            pe =
              X.botBody == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    x,
                  )
                : null,
            _e =
              X.botBody == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, x, L)
                : null,
            fe =
              X.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    U,
                    pe != null ? pe : null,
                    _e,
                    W != null,
                  ),
            ge = !1,
            he = null;
          X.botBody == null &&
            ((he = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: U,
              editType: z,
              msg: L,
              msgProtobuf: C,
              relayPlan: Q,
            })),
            he != null &&
              ((fe = he.node),
              (ge = he.shouldHaveIdentity),
              yield he.seedReceipts()));
          var ye = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: p,
              groupData: h,
              includeAttributes: {
                origin: j == null ? void 0 : j.lidOriginType,
                hashedAiThreadId: q,
                appendHostedSenderIntent:
                  he != null || X.hasCoexV2RepresentedTargets === !0,
              },
              msgProtobuf: C,
              msgRecord: v,
            }),
            Ce = null;
          if (X.shouldHaveIdentity || ge) {
            var be = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Ce = o("WAWap").wap("device-identity", null, be);
          }
          var ve = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(L, C, k.toString()),
            Se = (s = yield T(j)) != null ? s : yield M(j, p),
            Re;
          h != null &&
            (Re =
              (h == null ? void 0 : h.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Le = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              j,
            ),
            Ee = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(k.id),
                to: o("WAWebCommsWapMd").CHAT_JID(x),
                type:
                  (u = R == null ? void 0 : R.originalStanzaType) != null
                    ? u
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(C),
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
                edit: o("WAWebSendMsgCommonApi").editAttribute(C, D),
                device_fanout:
                  S.isResendingMsg === !0 || B ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: ae
                  ? o("WAWebCommsWapMd").USER_JID(ae)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Re != null
                    ? o("WAWap").CUSTOM_STRING(Re)
                    : o("WAWap").DROP_ATTR,
              },
              X.body,
              X.botBody,
              Y,
              Ce,
              te,
              ye,
              ce,
              me,
              fe,
              ve,
              Se,
              Le,
            );
          if (!x.isGroup() && !x.isStatus()) {
            var ke;
            (ke = y.sendReporter) == null ||
              ke.setOppositeHasUsername(se != null);
          }
          var Ie = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: k.id,
            class: "message",
            from: L.to,
            participant: null,
          });
          return { stanza: Ee, ackTemplate: Ie, deviceEncs: X.deviceEncs };
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
