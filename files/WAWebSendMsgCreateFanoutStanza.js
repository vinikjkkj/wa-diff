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
    "WAWebHatchMetadataBotCopy",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
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
                    "WAWebHatchMetadataBotCopy",
                  ).genHatchOutboundCopy({ msg: e, innerMessage: F })));
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
                          b = yield R({
                            coexV2AgentSend: M,
                            content: r,
                            isAgentFeedbackCopy: C,
                            msg: e,
                            shouldFanoutToBot: g,
                            wid: n,
                          });
                        if (
                          o(
                            "WAWebWasaHatchOutboundWrapper",
                          ).shouldWrapHatchOutbound(t, n, e.subtype)
                        )
                          try {
                            b = yield o(
                              "WAWebHatchMetadataBotCopy",
                            ).genHatchOutboundCopy({ msg: e, innerMessage: b });
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
                  coexV2SelfHosted:
                    ne != null && N != null
                      ? N.kind === "user_agent" || N.relayPlan.selfIsCoexV2
                      : null,
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
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.coexV2AgentSend,
            n = e.content,
            r = e.isAgentFeedbackCopy,
            a = r === void 0 ? !1 : r,
            i = e.msg,
            l = e.shouldFanoutToBot,
            s = e.wid,
            u = t && s.isFbidBot();
          if (u)
            return o("WAWebCoexV2SendContribution").prepareCoexV2AgentPayload(
              n,
              i,
            );
          var c = n;
          return (
            (l || a) &&
              (c = yield o(
                "WAWebE2EProtoGenerator",
              ).updateBotInvokeMsgProtoCopyForCapi({
                message: n,
                botMessageSecret: a ? null : i.botMessageSecret,
                mentionedJidList: i.mentionedJidList,
              })),
            s.isFbidBot() &&
              (c = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(c)),
            s.isBot() && (c = o("WAWebE2EProtoGenerator").updateBotProtobuf(c)),
            c
          );
        })),
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
            p = e.additionalBotBody,
            _ = e.additionalBotShouldHaveIdentity,
            f = _ === void 0 ? !1 : _,
            g = e.chatId,
            h = e.collectDeviceEncs,
            y = h === void 0 ? !1 : h,
            C = e.deviceList,
            v = e.groupData,
            S = e.metricReporter,
            R = e.msgProtobuf,
            L = e.msgRecord,
            E = e.option,
            k = e.scheduledMsgMetadata,
            x = L.data,
            $ = x.from,
            P = x.id,
            N = x.subtype,
            M = x.to,
            F = yield o(
              "WAWebCoexV2RelayEligibility",
            ).resolveCoexV2SimpleSignalPolicy({ chatId: g, stanzaTo: M });
          yield o(
            "WAWebCoexV2RelayEligibility",
          ).deleteCoexV2SimpleSignalPrimarySessions(F, C);
          try {
            var O, B, W;
            (O = S.sendPerfReporter) == null || O.startPrekeysFetchStage();
            var q = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                aeaOptions:
                  E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT
                    ? { isSendTimeFetch: !0 }
                    : void 0,
                identityChanged: !1,
                sessionScope:
                  E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (E.sessionScope == null ||
                    E.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : (B = E.sessionScope) != null
                      ? B
                      : o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: C,
              }),
              U = q == null ? void 0 : q.missedPrekeyCount;
            if (U != null) {
              var V;
              (V = S.sendPerfReporter) == null || V.setFetchedPrekeyCount(U);
            }
            ((W = S.sendPerfReporter) == null || W.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: q == null ? void 0 : q.depletedPrekeyCount,
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
          var H = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(x, g),
            G =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(x) &&
                g.isBot()) ||
              H,
            z = o("WAWebThreadMsgUtils").getMsgAiThread(x),
            j =
              z != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(z)
                : null,
            K = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              x,
              H,
              z != null ? z.key.id : null,
            ),
            Q = C;
          E.isResendingMsg &&
            (Q = yield o(
              "WAWebSendMsgCommonApi",
            ).filterDeviceWithChangedIdentity(L, w(E, C)));
          var X = Q.map(function (e) {
            return { msgKey: P, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(X),
            (t = S.sendPerfReporter) == null || t.startClientEncryptStage());
          var Y = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              x,
              T($, Q),
            ),
            J = o("WAWebMsgGetters").getWamEditType(x),
            Z = o("WAWebChatCollection").ChatCollection.get(g),
            ee = { chat: Z, chatId: g, msgProtobuf: R, option: E, stanzaTo: M },
            te = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(
              ee,
            ),
            ne = yield b(x, M, Q, R, E, Y, J, F, k, y, te, K);
          ((n = S.sendReporter) == null || n.setIsPq(ne.isPq),
            (a = S.sendPerfReporter) == null || a.setIsPq(ne.isPq),
            (i = S.sendPerfReporter) == null || i.postClientEncryptStage());
          var re = null;
          if (
            E.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var oe =
              (k == null ? void 0 : k.kind) === "schedule"
                ? k.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(R);
            re = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(oe),
            });
          }
          var ae = o("WAWebE2EProtoUtils").getBizNativeFlowName(R),
            ie = x.nativeFlowInteractiveMsg,
            le,
            se = o("WAWebContactCollection").ContactCollection.get(g),
            ue =
              (l = F == null ? void 0 : F.privacyMode) != null
                ? l
                : se == null
                  ? void 0
                  : se.privacyMode;
          if (ue != null) {
            var ce;
            le = (ce = o("WAWap")).wap("biz", {
              host_storage: ce.INT(ue.hostStorage),
              actual_actors: ce.INT(ue.actualActors),
              privacy_mode_ts: ce.INT(ue.privacyModeTs),
              native_flow_name: ce.MAYBE_CUSTOM_STRING(ae),
            });
          }
          var de,
            me,
            pe,
            _e,
            fe = o(
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
              Z != null,
              se != null,
              g.isLid(),
              Z == null ? void 0 : Z.lidOriginType,
              fe,
              (se == null ? void 0 : se.phoneNumber) != null,
            ),
            g.isLid() &&
              (((Z == null ? void 0 : Z.lidOriginType) == null ||
                (Z == null ? void 0 : Z.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (se == null ? void 0 : se.shareOwnPn) !== !0 &&
                (se == null ? void 0 : se.phoneNumber) != null &&
                (de = se == null ? void 0 : se.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (se == null ? void 0 : se.username) != null &&
                (_e = se.username)),
            M.isLid()
              ? fe &&
                (Z == null ? void 0 : Z.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (pe = o("WAWebApiContact").getPhoneNumber(M))
              : M.isUser() &&
                Z != null &&
                Z.accountLid &&
                ((me = Z == null ? void 0 : Z.accountLid),
                me.isLid() ||
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      me.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            le == null && ae != null && ie === !0)
          ) {
            var ce;
            le = (ce = o("WAWap")).wap(
              "biz",
              null,
              ce.wap(
                "interactive",
                { v: "1", type: ce.CUSTOM_STRING("native_flow") },
                ce.wap("native_flow", { name: ce.CUSTOM_STRING(ae) }),
              ),
            );
          } else
            le == null &&
              ae != null &&
              (le = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(ae),
              }));
          (E.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(L, Q)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ge =
              Y == null
                ? void 0
                : Y.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow($),
                    ),
                  ),
            he =
              ge != null
                ? o("WAWap").wap("sender_content_binding", null, ge)
                : null,
            ye = p != null ? p : ne.botBody,
            Ce =
              ye == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    M,
                  )
                : null,
            be =
              ye == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, M, x)
                : null,
            ve =
              (E.fanoutType ===
                o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT &&
                E.isResendingMsg === !0) ||
              ne.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    K,
                    Ce != null ? Ce : null,
                    be,
                    z != null,
                  ),
            Se = !1,
            Re = null;
          ye == null &&
            ((Re = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: K,
              editType: J,
              msg: x,
              msgProtobuf: R,
              relayPlan: te,
            })),
            Re != null &&
              ((ve = Re.node),
              (Se = Re.shouldHaveIdentity),
              yield Re.seedReceipts()));
          var Le = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: g,
              groupData: v,
              includeAttributes: {
                origin: Z == null ? void 0 : Z.lidOriginType,
                hashedAiThreadId: j,
                appendHostedSenderIntent:
                  Re != null || ne.hasCoexV2RepresentedTargets === !0,
                hasPairwisePayload:
                  E.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                sessionScope: E.sessionScope,
              },
              msgProtobuf: R,
              msgRecord: L,
              scheduledMsgMetadata: k,
            }),
            Ee = null;
          if (ne.shouldHaveIdentity || f || Se) {
            var ke = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Ee = o("WAWap").wap("device-identity", null, ke);
          }
          var Ie = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(
              x,
              R,
              P.toString(),
              E.isResendingMsg === !0 ? "resend" : "send",
            ),
            Te = (s = yield D(Z)) != null ? s : yield A(Z, g),
            De;
          v != null &&
            (De =
              (v == null ? void 0 : v.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var xe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              Z,
            ),
            $e = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(P.id),
                to: o("WAWebCommsWapMd").CHAT_JID(M),
                type:
                  (u = k == null ? void 0 : k.originalStanzaType) != null
                    ? u
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(R),
                peer_recipient_lid: me
                  ? o("WAWebCommsWapMd").USER_JID(me)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: pe
                  ? o("WAWebCommsWapMd").USER_JID(pe)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  _e !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(_e),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(R, N),
                device_fanout:
                  E.isResendingMsg === !0 || G ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: de
                  ? o("WAWebCommsWapMd").USER_JID(de)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  De != null
                    ? o("WAWap").CUSTOM_STRING(De)
                    : o("WAWap").DROP_ATTR,
              },
              ne.body,
              ye,
              re,
              Ee,
              le,
              Le,
              he,
              ve,
              Ie,
              Te,
              xe,
            );
          if (!M.isGroup() && !M.isStatus()) {
            var Pe;
            (Pe = S.sendReporter) == null ||
              Pe.setOppositeHasUsername(_e != null);
          }
          I(S, ne, Re, te);
          var Ne = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: P.id,
            class: "message",
            from: x.to,
            participant: null,
          });
          return { stanza: $e, ackTemplate: Ne, deviceEncs: ne.deviceEncs };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      var o,
        a =
          (o = t.coexV2SelfHosted) != null
            ? o
            : n != null
              ? r == null
                ? void 0
                : r.selfIsCoexV2
              : null;
      if (a != null) {
        var i;
        (i = e.sendReporter) == null || i.setCoexV2SendMode(a);
      }
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
      return e.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
        ? t
        : t.filter(function (e) {
            return !e.isBot();
          });
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        F.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = S),
      (l.genBotFanoutContent = R),
      (l.createFanoutMsgStanza = E),
      (l.genCsTokenBody = A));
  },
  98,
);
