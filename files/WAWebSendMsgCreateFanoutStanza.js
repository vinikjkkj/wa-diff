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
    "WAWebUserUtils",
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
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = {
        body: null,
        botBody: null,
        deviceEncs: [],
        isPq: null,
        shouldHaveIdentity: !1,
      };
    function C(e, t) {
      return e.length === 0 && t != null;
    }
    function b(e, t) {
      return e ? (h || (h = n("Promise"))).resolve(y) : k(t);
    }
    function v(e) {
      var t = e.isAgentOnly,
        n = e.msgProtobuf,
        r = e.option,
        a = e.scheduledMsgMetadata;
      if (
        r.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT ||
        t
      )
        return null;
      var i =
        (a == null ? void 0 : a.kind) === "schedule"
          ? a.originalMediaType
          : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(n);
      return o("WAWap").wap("enc", {
        v: o("WAWap").CUSTOM_STRING(
          o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
        ),
        type: o("WAWap").CUSTOM_STRING(
          o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
        ),
        mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(i),
      });
    }
    function S(e) {
      var t = e.isAgentOnly,
        r = e.msg,
        a = e.msgProtobuf,
        i = e.option;
      return t
        ? (h || (h = n("Promise"))).resolve(null)
        : o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(
            r,
            a,
            r.id.toString(),
            i.isResendingMsg === !0 ? "resend" : "send",
          );
    }
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
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            y = e.option,
            C = e.scheduledMsgMetadata,
            b = e.stanzaTo,
            v =
              (C == null ? void 0 : C.kind) === "schedule"
                ? C.originalMediaType
                : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(g),
            S = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(g),
            E =
              o("WAWebBotBaseGating").isBotEnabled() &&
              ((t = f.invokedBotWid) == null ? void 0 : t.isBot()) === !0,
            k =
              o("WAWebBotBaseGating").isBotEnabled() &&
              o("WAWebMsgGetters").getIsBotFeedbackMessage(f),
            I =
              o("WAWebBotBaseGating").isBotEnabled() &&
              o("WAWebSendMsgBotStanza").getIsBizBotFeedback(f, b),
            x = (k && b.isBot()) || I,
            $ = k && !b.isBot() && !I,
            P = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(f),
            N = yield o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(
              b,
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
                    isBotInvokeMessage: E,
                    isResendingMsg: y.isResendingMsg === !0,
                    isRevokeForMsgFromOrDeliveredToBot: P,
                    relayPlan: i,
                  }),
            w = M != null;
          if (
            y.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
            m.length === 1 &&
            o("WAWebSendMsgCommonApi").isPrimaryDevice(m[0]) &&
            !$ &&
            !o("WAWebBotUtils").isMetaAiBot(b) &&
            !w
          ) {
            var A = m[0],
              F = o("WAWebUserUtils").isMeAccount(A)
                ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                    g,
                    b,
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
                b,
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
              W = yield L(A, y),
              q = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                A,
                0,
                O,
                f,
                p,
                W,
                B,
              ),
              U = q.ciphertext,
              V = q.type,
              H = null;
            (x || _ != null) &&
              (H = o("WAWap").wap("bot", {
                type: x ? "feedback" : o("WAWap").DROP_ATTR,
                persona_type: _
                  ? o("WAWap").CUSTOM_STRING(_)
                  : o("WAWap").DROP_ATTR,
              }));
            var G = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(U)
              ? !0
              : void 0;
            return {
              deviceEncs: c ? [R(A, U, V)] : [],
              shouldHaveIdentity:
                V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
              body: o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(V),
                  session_type: G
                    ? o("WAWap").CUSTOM_STRING("pq")
                    : o("WAWap").DROP_ATTR,
                  state:
                    B && V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                      ? o("WAWap").CUSTOM_STRING("false")
                      : o("WAWap").DROP_ATTR,
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    v,
                  ),
                  "decrypt-fail": o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeDecryptFail(
                    o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(g),
                  ),
                  native_flow_name: o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeNativeFlowName(S),
                },
                U,
              ),
              botBody: H,
              isPq: G,
            };
          }
          var j = !1,
            K = m.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = o("WAWebUserUtils").isMeAccount(e)
                        ? o(
                            "WAWebDeviceSentMessageProtoUtils",
                          ).wrapDeviceSentMessage(g, b)
                        : g,
                      n =
                        y.fanoutType ===
                        o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                          ? o("WAWebWidFactory").asUserWidOrThrow(e)
                          : o("WAWebWidFactory").asUserWidOrThrow(b);
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
                      var i = e.isBot() && (E || $ || P),
                        m = e.isBot() && x,
                        _ = yield D({
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
                        ).shouldWrapHatchOutbound(b, e, f.subtype)
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
                        C = yield L(e, y),
                        k = yield o(
                          "WAWebEncryptMsgProtobuf",
                        ).encryptMsgProtobuf(e, 0, _, f, p, C, h),
                        I = k.ciphertext,
                        T = k.type;
                      T === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                        (j = !0);
                      var N = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(I)
                        ? !0
                        : void 0;
                      if (w && e.isFbidBot())
                        return {
                          coexV2AgentCopy: {
                            agentWid: e,
                            encType: T,
                            sharedEnc: o(
                              "WAWebCoexV2SendContribution",
                            ).genCoexV2AgentSharedEncNode({
                              ciphertext: I,
                              mediaType: v,
                              msgProtobuf: g,
                              retryCount: 0,
                              type: T,
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
                          type: o("WAWap").CUSTOM_STRING(T),
                          session_type: N
                            ? o("WAWap").CUSTOM_STRING("pq")
                            : o("WAWap").DROP_ATTR,
                          state:
                            h &&
                            T ===
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
                            ).decryptFailAttributeFromProtobuf(g),
                          ),
                          native_flow_name: o(
                            "WAWebBackendJobsCommon",
                          ).encodeMaybeNativeFlowName(S),
                        },
                        I,
                      );
                      return {
                        deviceEnc: c ? R(e, I, T) : null,
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
                      if (z(t)) throw t;
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
            X = T(Q),
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
                b,
                f,
              ),
              ae = (ne = J[0]) == null ? void 0 : ne.agentWid,
              ie = o(
                "WAWebCoexV2SendContribution",
              ).finalizeCoexV2AgentContribution({
                agentCopies: J,
                agentEngagementType: oe,
                botAttrs: a,
                isFeedback: k,
                msg: f,
                personaType:
                  ae == null || ae.equals(b)
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
                        isBotFeedbackMessage: k,
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
        I.apply(this, arguments)
      );
    }
    function T(t) {
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
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            R = e.chatId,
            L = e.collectDeviceEncs,
            E = L === void 0 ? !1 : L,
            k = e.deviceList,
            I = e.groupData,
            T = e.metricReporter,
            D = e.msgProtobuf,
            x = e.msgRecord,
            $ = e.option,
            P = e.scheduledMsgMetadata,
            w = x.data,
            O = w.from,
            B = w.id,
            W = w.subtype,
            q = w.to,
            U = yield o(
              "WAWebCoexV2RelayEligibility",
            ).resolveCoexV2SimpleSignalPolicy({ chatId: R, stanzaTo: q });
          yield o(
            "WAWebCoexV2RelayEligibility",
          ).deleteCoexV2SimpleSignalPrimarySessions(U, k);
          try {
            var G, z, j;
            (G = T.sendPerfReporter) == null || G.startPrekeysFetchStage();
            var K = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                aeaOptions:
                  $.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT
                    ? {
                        isBeforeEnforcedSendDecision:
                          (y == null ? void 0 : y.isEnforced) === !0,
                        sendRecipient:
                          y != null
                            ? o("WAWebWidFactory").asUserWidOrThrow(q)
                            : void 0,
                        isMonitoredSend:
                          (n("cr:627") == null
                            ? void 0
                            : n("cr:627").isAeaSendMonitoringCandidate({
                                recipient: q,
                                fanoutDevices: k,
                                message: D,
                                isBotFeedbackMessage:
                                  o("WAWebMsgGetters").getIsBotFeedbackMessage(
                                    w,
                                  ),
                              })) === !0,
                      }
                    : void 0,
                identityChanged: !1,
                sessionScope:
                  $.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
                  ($.sessionScope == null ||
                    $.sessionScope ===
                      o("WAWebSessionScope").SessionScope.DEFAULT) &&
                  o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                    ? o("WAWebSessionScope").SessionScope.PQ
                    : (z = $.sessionScope) != null
                      ? z
                      : o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: k,
              }),
              Q = K == null ? void 0 : K.missedPrekeyCount;
            if (Q != null) {
              var X;
              (X = T.sendPerfReporter) == null || X.setFetchedPrekeyCount(Q);
            }
            ((j = T.sendPerfReporter) == null || j.postPrekeysFetchStage(),
              o(
                "WAWebPostPrekeysDepletionMetric",
              ).maybePostPrekeysDepletionMetric({
                count: K == null ? void 0 : K.depletedPrekeyCount,
                prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                  .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                messageType:
                  $.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                    : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
                deviceSizeBucket:
                  $.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                    ? r("WAWebWamNumberToSizeBucket")(k.length)
                    : null,
              }));
          } catch (e) {
            if (e instanceof o("WAWebHandleMsgError").AeaSendBlockedError)
              throw (
                y != null &&
                  n("cr:627") != null &&
                  (yield n("cr:627").applyAeaFirstUseAfterFailedSetup({
                    recipient: q,
                    fanoutDevices: k,
                    message: D,
                    msgRecord: x,
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
          var Y = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(w, R),
            J =
              (o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(w) &&
                R.isBot()) ||
              Y,
            Z = o("WAWebThreadMsgUtils").getMsgAiThread(w),
            ee = yield o(
              "WAWebMetaAiConversationThreadId",
            ).getMessageConversationThreadId(R, Z),
            te = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
              w,
              Y,
              Z != null ? Z.key.id : null,
            ),
            ne = k;
          (y != null &&
            n("cr:627") != null &&
            ((ne = yield n("cr:627").reconcileAeaBeforeEncryption({
              recipient: q,
              fanoutDevices: k,
              message: D,
              msgRecord: x,
              baseline: y,
            })),
            y.isEnforced && (yield M(x, ne))),
            $.isResendingMsg &&
              (ne = yield o(
                "WAWebSendMsgCommonApi",
              ).filterDeviceWithChangedIdentity(x, V($, k))));
          var re = ne.map(function (e) {
            return { msgKey: B, receiverId: e };
          });
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(re),
            (t = T.sendPerfReporter) == null || t.startClientEncryptStage());
          var oe = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(
              w,
              A(O, ne),
            ),
            ae = o("WAWebMsgGetters").getWamEditType(w),
            ie = o("WAWebChatCollection").ChatCollection.get(R),
            le = {
              chat: ie,
              chatId: R,
              msgProtobuf: D,
              option: $,
              stanzaTo: q,
              isAeaE2eeSend:
                n("cr:627") == null ||
                (a = n("cr:627").getAeaDecidedSend(y)) == null
                  ? void 0
                  : a.isE2eeSend,
            },
            se = yield o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(
              le,
            ),
            ue = yield o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).genFbidBotPersonaType(q),
            ce = C(ne, f),
            de = yield b(ce, {
              msg: w,
              stanzaTo: q,
              deviceList: ne,
              msgProtobuf: D,
              option: $,
              contentBindingMap: oe,
              editType: ae,
              coexV2SimpleSignalPolicy: U,
              scheduledMsgMetadata: P,
              collectDeviceEncs: E,
              coexV2RelayPlan: se,
              botStanzaAttrs: te,
              fbidBotPersonaType: ue,
            });
          ((i = T.sendReporter) == null || i.setIsPq(de.isPq),
            (l = T.sendPerfReporter) == null || l.setIsPq(de.isPq),
            (s = T.sendPerfReporter) == null || s.postClientEncryptStage());
          var me = v({
              isAgentOnly: ce,
              msgProtobuf: D,
              option: $,
              scheduledMsgMetadata: P,
            }),
            pe = o("WAWebE2EProtoUtils").getBizNativeFlowName(D),
            _e = w.nativeFlowInteractiveMsg,
            fe,
            ge = o("WAWebContactCollection").ContactCollection.get(R),
            he =
              (u = U == null ? void 0 : U.privacyMode) != null
                ? u
                : ge == null
                  ? void 0
                  : ge.privacyMode;
          if (he != null) {
            var ye;
            fe = (ye = o("WAWap")).wap("biz", {
              host_storage: ye.INT(he.hostStorage),
              actual_actors: ye.INT(he.actualActors),
              privacy_mode_ts: ye.INT(he.privacyModeTs),
              native_flow_name: ye.MAYBE_CUSTOM_STRING(pe),
            });
          }
          var Ce, be, ve, Se;
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
              ie != null,
              ge != null,
              R.isLid(),
              ie == null ? void 0 : ie.lidOriginType,
              (ge == null ? void 0 : ge.phoneNumber) != null,
            ),
            R.isLid() &&
              (((ie == null ? void 0 : ie.lidOriginType) == null ||
                (ie == null ? void 0 : ie.lidOriginType) ===
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
                (ge == null ? void 0 : ge.shareOwnPn) !== !0 &&
                (ge == null ? void 0 : ge.phoneNumber) != null &&
                (Ce = ge == null ? void 0 : ge.phoneNumber),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (ge == null ? void 0 : ge.username) != null &&
                (Se = ge.username)),
            q.isLid()
              ? (ie == null ? void 0 : ie.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                (ve = o("WAWebApiContact").getPhoneNumber(q))
              : q.isUser() &&
                ie != null &&
                ie.accountLid &&
                ((be = ie == null ? void 0 : ie.accountLid),
                be.isLid() ||
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                          "",
                        ])),
                      be.toLogString(),
                    )
                    .sendLogs("peer-recipient-lid-not-lid-fanout")),
            fe == null && pe != null && _e === !0)
          ) {
            var ye;
            fe = (ye = o("WAWap")).wap(
              "biz",
              null,
              ye.wap(
                "interactive",
                { v: "1", type: ye.CUSTOM_STRING("native_flow") },
                ye.wap("native_flow", { name: ye.CUSTOM_STRING(pe) }),
              ),
            );
          } else
            fe == null &&
              pe != null &&
              (fe = o("WAWap").wap("biz", {
                native_flow_name: o("WAWap").CUSTOM_STRING(pe),
              }));
          ($.isResendingMsg ||
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(x, ne)),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var Re =
              oe == null
                ? void 0
                : oe.get(
                    o("WAWebWidToJid").widToUserJid(
                      o("WAWebWidFactory").asUserWidOrThrow(O),
                    ),
                  ),
            Le =
              Re != null
                ? o("WAWap").wap("sender_content_binding", null, Re)
                : null,
            Ee = f != null ? f : de.botBody,
            ke = Ee == null ? ue : null,
            Ie =
              Ee == null
                ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, q, w)
                : null,
            Te =
              ($.fanoutType ===
                o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT &&
                $.isResendingMsg === !0) ||
              de.hasCoexV2RepresentedTargets === !0
                ? null
                : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                    te,
                    ke != null ? ke : null,
                    Ie,
                    Z != null,
                  ),
            De = !1,
            xe = null;
          Ee == null &&
            ((xe = yield o(
              "WAWebCoexV2SendContribution",
            ).buildCoexV2RelayContribution({
              botAttrs: te,
              editType: ae,
              msg: w,
              msgProtobuf: D,
              relayPlan: se,
            })),
            xe != null &&
              ((Te = xe.node),
              (De = xe.shouldHaveIdentity),
              yield xe.seedReceipts()));
          var $e = o("WAWebSendMsgMetaNode").genMetaNode({
              chatId: R,
              groupData: I,
              includeAttributes: {
                origin: ie == null ? void 0 : ie.lidOriginType,
                hashedAiThreadId: ee,
                appendHostedSenderIntent:
                  xe != null || de.hasCoexV2RepresentedTargets === !0,
                hasPairwisePayload:
                  $.fanoutType ===
                  o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                sessionScope: $.sessionScope,
              },
              msgProtobuf: D,
              msgRecord: x,
              scheduledMsgMetadata: P,
            }),
            Pe = null;
          if (de.shouldHaveIdentity || h || De) {
            var Ne = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            Pe = o("WAWap").wap("device-identity", null, Ne);
          }
          var Me = yield S({
              isAgentOnly: ce,
              msg: w,
              msgProtobuf: D,
              option: $,
            }),
            we = (p = yield F(ie)) != null ? p : yield H(ie, R),
            Ae;
          I != null &&
            (Ae =
              (I == null ? void 0 : I.isLidAddressingMode) === !0
                ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
          var Fe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(
              ie,
            ),
            Oe = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(B.id),
                to: o("WAWebCommsWapMd").CHAT_JID(q),
                type:
                  (_ = P == null ? void 0 : P.originalStanzaType) != null
                    ? _
                    : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(D),
                peer_recipient_lid: be
                  ? o("WAWebCommsWapMd").USER_JID(be)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_pn: ve
                  ? o("WAWebCommsWapMd").USER_JID(ve)
                  : o("WAWap").DROP_ATTR,
                peer_recipient_username:
                  Se !== void 0
                    ? o("WAWap").CUSTOM_STRING(
                        o("WAWebUsernameTypes").serializeUsername(Se),
                      )
                    : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(D, W),
                device_fanout:
                  $.isResendingMsg === !0 || J ? "false" : o("WAWap").DROP_ATTR,
                recipient_pn: Ce
                  ? o("WAWebCommsWapMd").USER_JID(Ce)
                  : o("WAWap").DROP_ATTR,
                addressing_mode:
                  Ae != null
                    ? o("WAWap").CUSTOM_STRING(Ae)
                    : o("WAWap").DROP_ATTR,
              },
              de.body,
              Ee,
              me,
              Pe,
              fe,
              $e,
              Le,
              Te,
              Me,
              we,
              Fe,
            );
          if (!q.isGroup() && !q.isStatus()) {
            var Be;
            (Be = T.sendReporter) == null ||
              Be.setOppositeHasUsername(Se != null);
          }
          N(T, de, xe, se);
          var We = o("WAWebCommsAckParser").toCoreAckTemplate({
            id: B.id,
            class: "message",
            from: w.to,
            participant: null,
          });
          return { stanza: Oe, ackTemplate: We, deviceEncs: de.deviceEncs };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r) {
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
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
      return e.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
        ? t
        : t.filter(function (e) {
            return !e.isBot();
          });
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return (
        e instanceof o("WAWebHandleMsgError").MessageValidationError ||
        e instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
      );
    }
    ((l.classifyFanoutEncNodes = T),
      (l.genBotFanoutContent = D),
      (l.createFanoutMsgStanza = $),
      (l.genCsTokenBody = H));
  },
  98,
);
