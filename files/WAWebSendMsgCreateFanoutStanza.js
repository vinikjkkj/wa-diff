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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.botStanzaAttrs,
            i = e.coexV2RelayPlan,
            l = e.coexV2SimpleSignalPolicy,
            c = e.collectDeviceEncs,
            d = e.contentBindingMap,
            m = e.deviceList,
            p = e.editType,
            _ = e.fbidBotPersonaType,
            f = e.msg,
            g = e.msgProtobuf,
            b = e.option,
            v = e.scheduledMsgMetadata,
            S = e.stanzaTo,
            E =
              (v == null ? void 0 : v.kind) === "schedule"
                ? v.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(g),
            k = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(g),
            I =
              o("WAWebBotBaseGating").isBotEnabled() &&
              ((t = f.invokedBotWid) == null ? void 0 : t.isBot()) === !0,
            T =
              o("WAWebBotBaseGating").isBotEnabled() &&
              o("WAWebMsgGetters").getIsBotFeedbackMessage(f),
            D =
              o("WAWebBotBaseGating").isBotEnabled() &&
              o("WAWebSendMsgBotStanza").getIsBizBotFeedback(f, S),
            x = (T && S.isBot()) || D,
            $ = T && !S.isBot() && !D,
            P = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(f),
            N = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(
              S,
              g,
            ),
            M =
              N != null
                ? N
                : o(
                    "WAWebCoexV2RelayEligibility",
                  ).getCoexV2InvokedAgentSendPlan({
                    hasFbidBotDevice: m.some(function (e) {
                      return e.isFbidBot();
                    }),
                    isBotInvokeMessage: I,
                    isResendingMsg: b.isResendingMsg === !0,
                    isRevokeForMsgFromOrDeliveredToBot: P,
                    relayPlan: i,
                  }),
            w = M != null;
          if (
            b.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
            m.length === 1 &&
            o("WAWebSendMsgCommonApi").isPrimaryDevice(m[0]) &&
            !$ &&
            !o("WAWebBotUtils").isMetaAiBot(S) &&
            !w
          ) {
            var A = m[0],
              F = o("WAWebUserPrefsMeUser").isMeAccount(A)
                ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                    g,
                    S,
                  )
                : g,
              O = F;
            (A.isBot() &&
              x &&
              (O = yield o(
                "WAWebE2EProtoGenerator",
              ).updateBotInvokeMsgProtoCopyForCapi({
                message: F,
                mentionedJidList: f.mentionedJidList,
              })),
              o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                S,
                A,
                f.subtype,
              ) &&
                (O = yield o("WAWebHatchMetadataBotCopy").genHatchOutboundCopy({
                  msg: f,
                  innerMessage: O,
                })));
            var B = o(
                "WAWebCoexV2RelayEligibility",
              ).shouldUseCoexV2StatelessSession(l, A),
              W = yield C(A, b),
              U = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                A,
                0,
                O,
                f,
                p,
                W,
                B,
              ),
              V = U.ciphertext,
              H = U.type,
              G = null;
            (x || _ != null) &&
              (G = o("WAWap").wap("bot", {
                type: x ? "feedback" : o("WAWap").DROP_ATTR,
                persona_type: _
                  ? o("WAWap").CUSTOM_STRING(_)
                  : o("WAWap").DROP_ATTR,
              }));
            var z = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(V)
              ? !0
              : void 0;
            return {
              deviceEncs: c ? [y(A, V, H)] : [],
              shouldHaveIdentity:
                H === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
              body: o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(H),
                  session_type: z
                    ? o("WAWap").CUSTOM_STRING("pq")
                    : o("WAWap").DROP_ATTR,
                  state:
                    B && H === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                      ? o("WAWap").CUSTOM_STRING("false")
                      : o("WAWap").DROP_ATTR,
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    E,
                  ),
                  "decrypt-fail": o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeDecryptFail(
                    o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(g),
                  ),
                  native_flow_name: o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeNativeFlowName(k),
                },
                V,
              ),
              botBody: G,
              isPq: z,
            };
          }
          var j = !1,
            K = m.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = o("WAWebUserPrefsMeUser").isMeAccount(e)
                        ? o(
                            "WAWebDeviceSentMessageProtoUtils",
                          ).wrapDeviceSentMessage(g, S)
                        : g,
                      n =
                        b.fanoutType ===
                        o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                          ? o("WAWebWidFactory").asUserWidOrThrow(e)
                          : o("WAWebWidFactory").asUserWidOrThrow(S);
                    yield o("WAWebICDCMetaApi").populateICDCMeta(n, t);
                    var r =
                        d == null
                          ? void 0
                          : d.get(o("WAWebWidToJid").widToUserJid(n)),
                      a =
                        r != null
                          ? o("WAWap").wap("content_binding", null, r)
                          : null;
                    try {
                      var i = e.isBot() && (I || $ || P),
                        m = e.isBot() && x,
                        _ = yield L({
                          coexV2AgentSend: w,
                          content: t,
                          isAgentFeedbackCopy: m,
                          msg: f,
                          shouldFanoutToBot: i,
                          wid: e,
                        });
                      if (
                        o(
                          "WAWebWasaHatchOutboundWrapper",
                        ).shouldWrapHatchOutbound(S, e, f.subtype)
                      )
                        try {
                          _ = yield o(
                            "WAWebHatchMetadataBotCopy",
                          ).genHatchOutboundCopy({ msg: f, innerMessage: _ });
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
                      var h = o(
                          "WAWebCoexV2RelayEligibility",
                        ).shouldUseCoexV2StatelessSession(l, e),
                        v = yield C(e, b),
                        R = yield o(
                          "WAWebEncryptMsgProtobuf",
                        ).encryptMsgProtobuf(e, 0, _, f, p, v, h),
                        T = R.ciphertext,
                        D = R.type;
                      D === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                        (j = !0);
                      var N = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(T)
                        ? !0
                        : void 0;
                      if (w && e.isFbidBot())
                        return {
                          coexV2AgentCopy: {
                            agentWid: e,
                            encType: D,
                            sharedEnc: o(
                              "WAWebCoexV2SendContribution",
                            ).genCoexV2AgentSharedEncNode({
                              ciphertext: T,
                              mediaType: E,
                              msgProtobuf: g,
                              retryCount: 0,
                              type: D,
                              useStatelessSession: h,
                            }),
                          },
                          isPq: N,
                          node: null,
                          shouldFanoutToBot: i,
                        };
                      var M = o("WAWap").wap(
                        "enc",
                        {
                          v: o("WAWap").CUSTOM_STRING(
                            o(
                              "WAWebBackendJobsCommon",
                            ).CIPHERTEXT_VERSION.toString(),
                          ),
                          type: o("WAWap").CUSTOM_STRING(D),
                          session_type: N
                            ? o("WAWap").CUSTOM_STRING("pq")
                            : o("WAWap").DROP_ATTR,
                          state:
                            h &&
                            D ===
                              o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                              ? o("WAWap").CUSTOM_STRING("false")
                              : o("WAWap").DROP_ATTR,
                          mediatype: o(
                            "WAWebBackendJobsCommon",
                          ).encodeMaybeMediaType(E),
                          "decrypt-fail": o(
                            "WAWebBackendJobsCommon",
                          ).encodeMaybeDecryptFail(
                            o(
                              "WAWebE2EProtoUtils",
                            ).decryptFailAttributeFromProtobuf(g),
                          ),
                          native_flow_name: o(
                            "WAWebBackendJobsCommon",
                          ).encodeMaybeNativeFlowName(k),
                        },
                        T,
                      );
                      return {
                        deviceEnc: c ? y(e, T, D) : null,
                        isPq: N,
                        shouldFanoutToBot: i,
                        node: o("WAWap").wap(
                          "to",
                          { jid: o("WAWebCommsWapMd").DEVICE_JID(e) },
                          M,
                          a,
                        ),
                      };
                    } catch (t) {
                      if (q(t)) throw t;
                      return (
                        o("WALogger").WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "encryptAndSendUserMsg: encryption fail for ",
                              ": ",
                              "",
                            ])),
                          String(e),
                          t,
                        ),
                        o("WAWebSendMsgCommonApi").isPrimaryDevice(e) &&
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "encryptAndSendUserMsg: encryption fail for primary device: ",
                                  "",
                                ])),
                              t,
                            )
                            .tags("messaging")
                            .sendLogs("encryption-fail-for-primary-device"),
                        null
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            Q = yield (h || (h = n("Promise"))).all(K),
            X = R(Q),
            Y = X.botSuccessNodes,
            J = X.coexV2AgentCopies,
            Z = X.deviceEncs,
            ee = X.isPq,
            te = X.successNodes;
          if (
            o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
              M,
              J.length,
            )
          )
            return (h || (h = n("Promise"))).reject(
              r("err")(
                "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
              ),
            );
          if (te.length > 0 || Y.length > 0 || J.length > 0) {
            var ne,
              re,
              oe = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
                !1,
                S,
                f,
              ),
              ae = (ne = J[0]) == null ? void 0 : ne.agentWid,
              ie = o(
                "WAWebCoexV2SendContribution",
              ).finalizeCoexV2AgentContribution({
                agentCopies: J,
                agentEngagementType: oe,
                botAttrs: a,
                isFeedback: T,
                msg: f,
                personaType:
                  ae == null || ae.equals(S)
                    ? _
                    : yield o(
                        "WAWebSimpleSignalPNToFBIDMigration",
                      ).genFbidBotPersonaType(ae),
                plan: M,
              });
            return (
              (ie == null ? void 0 : ie.seedReceipts) != null &&
                (yield ie.seedReceipts()),
              {
                deviceEncs: Z,
                isPq: ee,
                body:
                  te.length > 0
                    ? o("WAWap").wap("participants", null, te)
                    : null,
                botBody:
                  (re = ie == null ? void 0 : ie.node) != null
                    ? re
                    : o("WAWebSendMsgBotStanza").genBotFanoutNode({
                        agentEngagementType: oe,
                        botSuccessNodes: Y,
                        isBotFeedbackMessage: T,
                        isBotFeedbackMessageInAgentChat: x,
                        personaType: _ != null ? _ : null,
                      }),
                hasCoexV2RepresentedTargets: ie != null,
                coexV2SelfHosted:
                  ie != null && M != null
                    ? M.kind === "user_agent" || M.relayPlan.selfIsCoexV2
                    : null,
                shouldHaveIdentity: j,
              }
            );
          }
          return h.reject(
            r("err")(
              "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
            ),
          );
        })),
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
            ie = yield o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).genFbidBotPersonaType(W),
            le = yield v({
              msg: M,
              stanzaTo: W,
              deviceList: Z,
              msgProtobuf: k,
              option: x,
              contentBindingMap: te,
              editType: ne,
              coexV2SimpleSignalPolicy: q,
              scheduledMsgMetadata: N,
              collectDeviceEncs: S,
              coexV2RelayPlan: ae,
              botStanzaAttrs: J,
              fbidBotPersonaType: ie,
            });
          ((i = E.sendReporter) == null || i.setIsPq(le.isPq),
            (l = E.sendPerfReporter) == null || l.setIsPq(le.isPq),
            (s = E.sendPerfReporter) == null || s.postClientEncryptStage());
          var se = null;
          if (
            x.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
          ) {
            var ue =
              (N == null ? void 0 : N.kind) === "schedule"
                ? N.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(k);
            se = o("WAWap").wap("enc", {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ),
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(ue),
            });
          }
          var ce = o("WAWebE2EProtoUtils").getBizNativeFlowName(k),
            de = M.nativeFlowInteractiveMsg,
            me,
            pe = o("WAWebContactCollection").ContactCollection.get(C),
            _e =
              (u = q == null ? void 0 : q.privacyMode) != null
                ? u
                : pe == null
                  ? void 0
                  : pe.privacyMode;
          if (_e != null) {
            var fe;
            me = (fe = o("WAWap")).wap("biz", {
              host_storage: fe.INT(_e.hostStorage),
              actual_actors: fe.INT(_e.actualActors),
              privacy_mode_ts: fe.INT(_e.privacyModeTs),
              native_flow_name: fe.MAYBE_CUSTOM_STRING(ce),
            });
          }
          var ge, he, ye, Ce;
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
              pe != null,
              C.isLid(),
              re == null ? void 0 : re.lidOriginType,
              (pe == null ? void 0 : pe.phoneNumber) != null,
            ),
            C.isLid() &&
              (((re == null ? void 0 : re.lidOriginType) == null ||
                (re == null ? void 0 : re.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (pe == null ? void 0 : pe.shareOwnPn) !== !0 &&
                (pe == null ? void 0 : pe.phoneNumber) != null &&
                (ge = pe == null ? void 0 : pe.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (pe == null ? void 0 : pe.username) != null &&
                (Ce = pe.username)),
            W.isLid()
              ? (re == null ? void 0 : re.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ye = o("WAWebApiContact").getPhoneNumber(W))
              : W.isUser() &&
                re != null &&
                re.accountLid &&
                ((he = re == null ? void 0 : re.accountLid),
                he.isLid() ||
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      he.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            me == null && ce != null && de === !0)
          ) {
            var fe;
            me = (fe = o("WAWap")).wap(
              "biz",
              null,
              fe.wap(
                "interactive",
                { v: "1", type: fe.CUSTOM_STRING("native_flow") },
                fe.wap("native_flow", { name: fe.CUSTOM_STRING(ce) }),
              ),
            );
          } else
            me == null &&
              ce != null &&
              (me = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(ce),
              }));
          (x.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(I, Z)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var be =
              te == null
                ? void 0
                : te.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(w),
                    ),
                  ),
            ve =
              be != null
                ? o("WAWap").wap("sender_content_binding", null, be)
                : null,
            Se = f != null ? f : le.botBody,
            Re = Se == null ? ie : null,
            Le =
              Se == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, W, M)
                : null,
            Ee =
              (x.fanoutType ===
                o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT &&
                x.isResendingMsg === !0) ||
              le.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    J,
                    Re != null ? Re : null,
                    Le,
                    X != null,
                  ),
            ke = !1,
            Ie = null;
          Se == null &&
            ((Ie = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: J,
              editType: ne,
              msg: M,
              msgProtobuf: k,
              relayPlan: ae,
            })),
            Ie != null &&
              ((Ee = Ie.node),
              (ke = Ie.shouldHaveIdentity),
              yield Ie.seedReceipts()));
          var Te = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: C,
              groupData: L,
              includeAttributes: {
                origin: re == null ? void 0 : re.lidOriginType,
                hashedAiThreadId: Y,
                appendHostedSenderIntent:
                  Ie != null || le.hasCoexV2RepresentedTargets === !0,
                hasPairwisePayload:
                  x.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                sessionScope: x.sessionScope,
              },
              msgProtobuf: k,
              msgRecord: I,
              scheduledMsgMetadata: N,
            }),
            De = null;
          if (le.shouldHaveIdentity || h || ke) {
            var xe = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            De = o("WAWap").wap("device-identity", null, xe);
          }
          var $e = yield o(
              "WAWebReportingTokenUtils",
            ).genReportingTokenBodyForStanza(
              M,
              k,
              A.toString(),
              x.isResendingMsg === !0 ? "resend" : "send",
            ),
            Pe = (p = yield P(re)) != null ? p : yield B(re, C),
            Ne;
          L != null &&
            (Ne =
              (L == null ? void 0 : L.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Me = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              re,
            ),
            we = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(A.id),
                to: o("WAWebCommsWapMd").CHAT_JID(W),
                type:
                  (_ = N == null ? void 0 : N.originalStanzaType) != null
                    ? _
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(k),
                peer_recipient_lid: he
                  ? o("WAWebCommsWapMd").USER_JID(he)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: ye
                  ? o("WAWebCommsWapMd").USER_JID(ye)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  Ce !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(Ce),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(k, F),
                device_fanout:
                  x.isResendingMsg === !0 || Q ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: ge
                  ? o("WAWebCommsWapMd").USER_JID(ge)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Ne != null
                    ? o("WAWap").CUSTOM_STRING(Ne)
                    : o("WAWap").DROP_ATTR,
              },
              le.body,
              Se,
              se,
              De,
              me,
              Te,
              ve,
              Ee,
              $e,
              Pe,
              Me,
            );
          if (!W.isGroup() && !W.isStatus()) {
            var Ae;
            (Ae = E.sendReporter) == null ||
              Ae.setOppositeHasUsername(Ce != null);
          }
          T(E, le, Ie, ae);
          var Fe = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: A.id,
            class: "message",
            from: M.to,
            participant: null,
          });
          return { stanza: we, ackTemplate: Fe, deviceEncs: le.deviceEncs };
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
    function q(e) {
      return (
        e instanceof o("WAWebHandleMsgError").MessageValidationError ||
        e instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
      );
    }
    ((l.classifyFanoutEncNodes = R),
      (l.genBotFanoutContent = L),
      (l.createFanoutMsgStanza = k),
      (l.genCsTokenBody = B));
  },
  98,
);
