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
    "WAWebBizCoexUtils",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebContactCollection",
    "WAWebDBUpdateMessageTable",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHatchMetadataBotCopy",
    "WAWebICDCMetaApi",
    "WAWebManageE2ESessionsJob",
    "WAWebMetaAiConversationThreadId",
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
    "WAWebSendMsgTypes",
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
    "cr:627",
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
    function v(e, t, n, r, o, a, i, l, s, u, c, d) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d, m, p, _, f, g) {
            var b,
              v =
                (p == null ? void 0 : p.kind) === "schedule"
                  ? p.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
              S = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
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
                B = yield C(w, l),
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
                deviceEncs: _ ? [y(w, q, U)] : [],
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
                    ).encodeMaybeNativeFlowName(S),
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
                          h = n.isBot() && T,
                          b = yield L({
                            coexV2AgentSend: M,
                            content: r,
                            isAgentFeedbackCopy: h,
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
                        var R = o(
                            "WAWebCoexV2RelayEligibility",
                          ).shouldUseCoexV2StatelessSession(m, n),
                          k = yield C(n, l),
                          I = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(n, 0, b, e, d, k, R),
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
                                useStatelessSession: R,
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
                              R &&
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
                            ).encodeMaybeNativeFlowName(S),
                          },
                          $,
                        );
                        return {
                          deviceEnc: _ ? y(n, $, P) : null,
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
              j = yield (h || (h = n("Promise"))).all(z),
              K = R(j),
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
              return (h || (h = n("Promise"))).reject(
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
                  botAttrs: g,
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            p,
            _,
            f = e.additionalBotBody,
            g = e.additionalBotShouldHaveIdentity,
            h = g === void 0 ? !1 : g,
            y = e.aeaBaseline,
            C = e.chatId,
            b = e.collectDeviceEncs,
            S = b === void 0 ? !1 : b,
            R = e.deviceList,
            L = e.groupData,
            E = e.metricReporter,
            k = e.msgProtobuf,
            I = e.msgRecord,
            x = e.option,
            N = e.scheduledMsgMetadata,
            M = I.data,
            w = M.from,
            A = M.id,
            F = M.subtype,
            W = M.to,
            q = yield o(
              "WAWebCoexV2RelayEligibility",
            ).resolveCoexV2SimpleSignalPolicy({ chatId: C, stanzaTo: W });
          yield o(
            "WAWebCoexV2RelayEligibility",
          ).deleteCoexV2SimpleSignalPrimarySessions(q, R);
          try {
            var U, V, H;
            (U = E.sendPerfReporter) == null || U.startPrekeysFetchStage();
            var G = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                aeaOptions:
                  x.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT
                    ? {
                        isBeforeEnforcedSendDecision:
                          (y == null ? void 0 : y.isEnforced) === !0,
                        sendRecipient:
                          y != null
                            ? o("WAWebWidFactory").asUserWidOrThrow(W)
                            : void 0,
                        isMonitoredSend:
                          (n("cr:627") == null
                            ? void 0
                            : n("cr:627").isAeaSendMonitoringCandidate({
                                recipient: W,
                                fanoutDevices: R,
                                message: k,
                                isBotFeedbackMessage:
                                  o("WAWebMsgGetters").getIsBotFeedbackMessage(
                                    M,
                                  ),
                              })) === !0,
                      }
                    : void 0,
                identityChanged: !1,
                sessionScope:
                  x.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  (x.sessionScope == null ||
                    x.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : (V = x.sessionScope) != null
                      ? V
                      : o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: R,
              }),
              z = G == null ? void 0 : G.missedPrekeyCount;
            if (z != null) {
              var j;
              (j = E.sendPerfReporter) == null || j.setFetchedPrekeyCount(z);
            }
            ((H = E.sendPerfReporter) == null || H.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: G == null ? void 0 : G.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  x.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  x.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(R.length)
                    : null,
              }));
          } catch (e) {
            if (e instanceof o("WAWebHandleMsgError").AeaSendBlockedError)
              throw (
                y != null &&
                  n("cr:627") != null &&
                  (yield n("cr:627").applyAeaFirstUseAfterFailedSetup({
                    recipient: W,
                    fanoutDevices: R,
                    message: k,
                    msgRecord: I,
                    baseline: y,
                  })),
                e
              );
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions with error",
                  ])),
              )
              .tags("messaging");
          }
          var K = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(M, C),
            Q =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(M) &&
                C.isBot()) ||
              K,
            X = o("WAWebThreadMsgUtils").getMsgAiThread(M),
            Y = yield o(
              "WAWebMetaAiConversationThreadId",
            ).getMessageConversationThreadId(C, X),
            J = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              M,
              K,
              X != null ? X.key.id : null,
            ),
            Z = R;
          (y != null &&
            n("cr:627") != null &&
            ((Z = yield n("cr:627").reconcileAeaBeforeEncryption({
              recipient: W,
              fanoutDevices: R,
              message: k,
              msgRecord: I,
              baseline: y,
            })),
            y.isEnforced && (yield D(I, Z))),
            x.isResendingMsg &&
              (Z = yield o(
                "WAWebSendMsgCommonApi",
              ).filterDeviceWithChangedIdentity(I, O(x, R))));
          var ee = Z.map(function (e) {
            return { msgKey: A, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(ee),
            (t = E.sendPerfReporter) == null || t.startClientEncryptStage());
          var te = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              M,
              $(w, Z),
            ),
            ne = o("WAWebMsgGetters").getWamEditType(M),
            re = o("WAWebChatCollection").ChatCollection.get(C),
            oe = {
              chat: re,
              chatId: C,
              msgProtobuf: k,
              option: x,
              stanzaTo: W,
              isAeaE2eeSend:
                n("cr:627") == null ||
                (a = n("cr:627").getAeaDecidedSend(y)) == null
                  ? void 0
                  : a.isE2eeSend,
            },
            ae = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(
              oe,
            ),
            ie = yield v(M, W, Z, k, x, te, ne, q, N, S, ae, J);
          ((i = E.sendReporter) == null || i.setIsPq(ie.isPq),
            (l = E.sendPerfReporter) == null || l.setIsPq(ie.isPq),
            (s = E.sendPerfReporter) == null || s.postClientEncryptStage());
          var le = null;
          if (
            x.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var se =
              (N == null ? void 0 : N.kind) === "schedule"
                ? N.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(k);
            le = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(se),
            });
          }
          var ue = o("WAWebE2EProtoUtils").getBizNativeFlowName(k),
            ce = M.nativeFlowInteractiveMsg,
            de,
            me = o("WAWebContactCollection").ContactCollection.get(C),
            pe =
              (u = q == null ? void 0 : q.privacyMode) != null
                ? u
                : me == null
                  ? void 0
                  : me.privacyMode;
          if (pe != null) {
            var _e;
            de = (_e = o("WAWap")).wap("biz", {
              host_storage: _e.INT(pe.hostStorage),
              actual_actors: _e.INT(pe.actualActors),
              privacy_mode_ts: _e.INT(pe.privacyModeTs),
              native_flow_name: _e.MAYBE_CUSTOM_STRING(ue),
            });
          }
          var fe, ge, he, ye;
          if (
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "createFanoutMsgStanza: create fanout for a message. found chat: ",
                  ". found contact: ",
                  ".\n      is lid: ",
                  ". lid origin: ",
                  ".\n      contact has phone number: ",
                  "",
                ])),
              re != null,
              me != null,
              C.isLid(),
              re == null ? void 0 : re.lidOriginType,
              (me == null ? void 0 : me.phoneNumber) != null,
            ),
            C.isLid() &&
              (((re == null ? void 0 : re.lidOriginType) == null ||
                (re == null ? void 0 : re.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (me == null ? void 0 : me.shareOwnPn) !== !0 &&
                (me == null ? void 0 : me.phoneNumber) != null &&
                (fe = me == null ? void 0 : me.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (me == null ? void 0 : me.username) != null &&
                (ye = me.username)),
            W.isLid()
              ? (re == null ? void 0 : re.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (he = o("WAWebApiContact").getPhoneNumber(W))
              : W.isUser() &&
                re != null &&
                re.accountLid &&
                ((ge = re == null ? void 0 : re.accountLid),
                ge.isLid() ||
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      ge.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            de == null && ue != null && ce === !0)
          ) {
            var _e;
            de = (_e = o("WAWap")).wap(
              "biz",
              null,
              _e.wap(
                "interactive",
                { v: "1", type: _e.CUSTOM_STRING("native_flow") },
                _e.wap("native_flow", { name: _e.CUSTOM_STRING(ue) }),
              ),
            );
          } else
            de == null &&
              ue != null &&
              (de = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(ue),
              }));
          (x.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(I, Z)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var Ce =
              te == null
                ? void 0
                : te.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(w),
                    ),
                  ),
            be =
              Ce != null
                ? o("WAWap").wap("sender_content_binding", null, Ce)
                : null,
            ve = f != null ? f : ie.botBody,
            Se =
              ve == null
                ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(
                    W,
                  )
                : null,
            Re =
              ve == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, W, M)
                : null,
            Le =
              (x.fanoutType ===
                o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT &&
                x.isResendingMsg === !0) ||
              ie.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    J,
                    Se != null ? Se : null,
                    Re,
                    X != null,
                  ),
            Ee = !1,
            ke = null;
          ve == null &&
            ((ke = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: J,
              editType: ne,
              msg: M,
              msgProtobuf: k,
              relayPlan: ae,
            })),
            ke != null &&
              ((Le = ke.node),
              (Ee = ke.shouldHaveIdentity),
              yield ke.seedReceipts()));
          var Ie = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: C,
              groupData: L,
              includeAttributes: {
                origin: re == null ? void 0 : re.lidOriginType,
                hashedAiThreadId: Y,
                appendHostedSenderIntent:
                  ke != null || ie.hasCoexV2RepresentedTargets === !0,
                hasPairwisePayload:
                  x.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                sessionScope: x.sessionScope,
              },
              msgProtobuf: k,
              msgRecord: I,
              scheduledMsgMetadata: N,
            }),
            Te = null;
          if (ie.shouldHaveIdentity || h || Ee) {
            var De = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Te = o("WAWap").wap("device-identity", null, De);
          }
          var xe = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(
              M,
              k,
              A.toString(),
              x.isResendingMsg === !0 ? "resend" : "send",
            ),
            $e = (p = yield P(re)) != null ? p : yield B(re, C),
            Pe;
          L != null &&
            (Pe =
              (L == null ? void 0 : L.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Ne = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              re,
            ),
            Me = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(A.id),
                to: o("WAWebCommsWapMd").CHAT_JID(W),
                type:
                  (_ = N == null ? void 0 : N.originalStanzaType) != null
                    ? _
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(k),
                peer_recipient_lid: ge
                  ? o("WAWebCommsWapMd").USER_JID(ge)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: he
                  ? o("WAWebCommsWapMd").USER_JID(he)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  ye !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(ye),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(k, F),
                device_fanout:
                  x.isResendingMsg === !0 || Q ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: fe
                  ? o("WAWebCommsWapMd").USER_JID(fe)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Pe != null
                    ? o("WAWap").CUSTOM_STRING(Pe)
                    : o("WAWap").DROP_ATTR,
              },
              ie.body,
              ve,
              le,
              Te,
              de,
              Ie,
              be,
              Le,
              xe,
              $e,
              Ne,
            );
          if (!W.isGroup() && !W.isStatus()) {
            var we;
            (we = E.sendReporter) == null ||
              we.setOppositeHasUsername(ye != null);
          }
          T(E, ie, ke, ae);
          var Ae = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: A.id,
            class: "message",
            from: M.to,
            participant: null,
          });
          return { stanza: Me, ackTemplate: Ae, deviceEncs: ie.deviceEncs };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r) {
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
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(t);
          if (
            !(
              e.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
              !n
            )
          )
            try {
              yield o("WAWebDBUpdateMessageTable").updateMessageTable(
                e.data.id,
                { senderOrRecipientAccountTypeHosted: n },
              );
            } catch (e) {
              throw (
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] createFanoutMsgStanza: failed to mark the hosted account send",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aea-send-hosted-mark-fail"),
                new (o("WAWebHandleMsgError").AeaSendBlockedError)()
              );
            }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        N.apply(this, arguments)
      );
    }
    var M = null,
      w = null,
      A = new Map(),
      F = 5;
    function O(e, t) {
      return e.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
        ? t
        : t.filter(function (e) {
            return !e.isBot();
          });
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            n === M && w != null
              ? (a = w)
              : ((a = o("WABase64").decodeB64(n)), (M = n), (w = a), A.clear());
            var i = r.toString(),
              l = A.get(i);
            if (l != null) return o("WAWap").wap("cstoken", null, l);
            var s = new Uint8Array(
              yield o("WACryptoHmac").hmacSha256(
                a,
                new TextEncoder().encode(i),
              ),
            );
            if (A.size >= F) {
              var u = A.keys().next().value;
              u != null && A.delete(u);
            }
            return (A.set(i, s), o("WAWap").wap("cstoken", null, s));
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
        W.apply(this, arguments)
      );
    }
    ((l.classifyFanoutEncNodes = R),
      (l.genBotFanoutContent = L),
      (l.createFanoutMsgStanza = k),
      (l.genCsTokenBody = B));
  },
  98,
);
