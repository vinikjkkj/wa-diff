__d(
  "WAWebSendMsgCreateFanoutStanza",
  [
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
      h = {
        body: null,
        botBody: null,
        deviceEncs: [],
        isPq: null,
        shouldHaveIdentity: !1,
      };
    function y(e, t) {
      return e.length === 0 && t != null;
    }
    function C(e, t) {
      return e ? Promise.resolve(h) : L(t);
    }
    function b(e) {
      var t = e.isAgentOnly,
        n = e.msgProtobuf,
        r = e.option,
        a = e.scheduledMsgMetadata;
      if (
        r.fanoutType !== o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT ||
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
    function v(e) {
      var t = e.isAgentOnly,
        n = e.msg,
        r = e.msgProtobuf,
        a = e.option;
      return t
        ? Promise.resolve(null)
        : o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(
            n,
            r,
            n.id.toString(),
            a.isResendingMsg === !0 ? "resend" : "send",
          );
    }
    function S(e, t, n) {
      return {
        ciphertext: t,
        isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
        participant: e,
        type: n,
      };
    }
    async function R(e, t) {
      var n = t.sessionScope;
      if (
        (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT) ||
        t.fanoutType !== o("WAWebMsgFanoutTypes").FanoutType.CHAT ||
        e.isHosted() ||
        e.isBot() ||
        e.isFbidBot() ||
        !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
      )
        return n;
      var r = await o("WAWebSignalSessionApi").hasSignalSessions(
          [e],
          o("WAWebSessionScope").SessionScope.PQ,
        ),
        a = r[0];
      return a ? o("WAWebSessionScope").SessionScope.PQ : n;
    }
    async function L(t) {
      var n,
        a = t.botStanzaAttrs,
        i = t.coexV2RelayPlan,
        l = t.coexV2SimpleSignalPolicy,
        u = t.collectDeviceEncs,
        c = t.contentBindingMap,
        d = t.deviceList,
        m = t.editType,
        p = t.fbidBotPersonaType,
        _ = t.msg,
        f = t.msgProtobuf,
        g = t.option,
        h = t.scheduledMsgMetadata,
        y = t.stanzaTo,
        C =
          (h == null ? void 0 : h.kind) === "schedule"
            ? h.originalMediaType
            : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(f),
        b = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(f),
        v =
          o("WAWebBotBaseGating").isBotEnabled() &&
          ((n = _.invokedBotWid) == null ? void 0 : n.isBot()) === !0,
        L =
          o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebMsgGetters").getIsBotFeedbackMessage(_),
        I =
          o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebSendMsgBotStanza").getIsBizBotFeedback(_, y),
        T = (L && y.isBot()) || I,
        D = L && !y.isBot() && !I,
        x = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(_),
        $ = await o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(y, f),
        P =
          $ != null
            ? $
            : o("WAWebCoexV2RelayEligibility").getCoexV2InvokedAgentSendPlan({
                hasFbidBotDevice: d.some(function (e) {
                  return e.isFbidBot();
                }),
                isBotInvokeMessage: v,
                isResendingMsg: g.isResendingMsg === !0,
                isRevokeForMsgFromOrDeliveredToBot: x,
                relayPlan: i,
              }),
        N = P != null;
      if (
        g.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.CHAT &&
        d.length === 1 &&
        o("WAWebSendMsgCommonApi").isPrimaryDevice(d[0]) &&
        !D &&
        !o("WAWebBotUtils").isMetaAiBot(y) &&
        !N
      ) {
        var M = d[0],
          w = o("WAWebUserUtils").isMeAccount(M)
            ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(f, y)
            : f,
          A = w;
        (M.isBot() &&
          T &&
          (A = await o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: w,
            mentionedJidList: _.mentionedJidList,
          })),
          o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
            y,
            M,
            _.subtype,
          ) &&
            (A = await o("WAWebHatchMetadataBotCopy").genHatchOutboundCopy({
              msg: _,
              innerMessage: A,
            })));
        var F = o(
            "WAWebCoexV2RelayEligibility",
          ).shouldUseCoexV2StatelessSession(l, M),
          B = await R(M, g),
          W = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
            M,
            0,
            A,
            _,
            m,
            B,
            F,
          ),
          q = W.ciphertext,
          U = W.type,
          V = null;
        (T || p != null) &&
          (V = o("WAWap").wap("bot", {
            type: T ? "feedback" : o("WAWap").DROP_ATTR,
            persona_type: p
              ? o("WAWap").CUSTOM_STRING(p)
              : o("WAWap").DROP_ATTR,
          }));
        var H = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(q) ? !0 : void 0;
        return {
          deviceEncs: u ? [S(M, q, U)] : [],
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
                F && U === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                  ? o("WAWap").CUSTOM_STRING("false")
                  : o("WAWap").DROP_ATTR,
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(C),
              "decrypt-fail": o(
                "WAWebBackendJobsCommon",
              ).encodeMaybeDecryptFail(
                o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(f),
              ),
              native_flow_name: o(
                "WAWebBackendJobsCommon",
              ).encodeMaybeNativeFlowName(b),
            },
            q,
          ),
          botBody: V,
          isPq: H,
        };
      }
      var G = !1,
        z = d.map(async function (t) {
          var n = o("WAWebUserUtils").isMeAccount(t)
              ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                  f,
                  y,
                )
              : f,
            r =
              g.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT
                ? o("WAWebWidFactory").asUserWidOrThrow(t)
                : o("WAWebWidFactory").asUserWidOrThrow(y);
          await o("WAWebICDCMetaApi").populateICDCMeta(r, n);
          var a =
              c == null ? void 0 : c.get(o("WAWebWidToJid").widToUserJid(r)),
            i = a != null ? o("WAWap").wap("content_binding", null, a) : null;
          try {
            var d = t.isBot() && (v || D || x),
              p = t.isBot() && T,
              h = await k({
                coexV2AgentSend: N,
                content: n,
                isAgentFeedbackCopy: p,
                msg: _,
                shouldFanoutToBot: d,
                wid: t,
              });
            if (
              o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                y,
                t,
                _.subtype,
              )
            )
              try {
                h = await o("WAWebHatchMetadataBotCopy").genHatchOutboundCopy({
                  msg: _,
                  innerMessage: h,
                });
              } catch (e) {
                throw e instanceof
                  o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
                  ? e
                  : new (o(
                      "WAWebWasaHatchOutboundWrapper",
                    ).WAWebWasaHatchWrapError)(
                      "WASA Hatch outbound wrap failed",
                      e,
                    );
              }
            var L = o(
                "WAWebCoexV2RelayEligibility",
              ).shouldUseCoexV2StatelessSession(l, t),
              E = await R(t, g),
              I = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                t,
                0,
                h,
                _,
                m,
                E,
                L,
              ),
              $ = I.ciphertext,
              P = I.type;
            P === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (G = !0);
            var M = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext($)
              ? !0
              : void 0;
            if (N && t.isFbidBot())
              return {
                coexV2AgentCopy: {
                  agentWid: t,
                  encType: P,
                  sharedEnc: o(
                    "WAWebCoexV2SendContribution",
                  ).genCoexV2AgentSharedEncNode({
                    ciphertext: $,
                    mediaType: C,
                    msgProtobuf: f,
                    retryCount: 0,
                    type: P,
                    useStatelessSession: L,
                  }),
                },
                isPq: M,
                node: null,
                shouldFanoutToBot: d,
              };
            var w = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(P),
                session_type: M
                  ? o("WAWap").CUSTOM_STRING("pq")
                  : o("WAWap").DROP_ATTR,
                state:
                  L && P === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                    ? o("WAWap").CUSTOM_STRING("false")
                    : o("WAWap").DROP_ATTR,
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(C),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(f),
                ),
                native_flow_name: o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeNativeFlowName(b),
              },
              $,
            );
            return {
              deviceEnc: u ? S(t, $, P) : null,
              isPq: M,
              shouldFanoutToBot: d,
              node: o("WAWap").wap(
                "to",
                { jid: o("WAWebCommsWapMd").DEVICE_JID(t) },
                w,
                i,
              ),
            };
          } catch (n) {
            if (O(n)) throw n;
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: encryption fail for ",
                    ": ",
                    "",
                  ])),
                String(t),
                n,
              ),
              o("WAWebSendMsgCommonApi").isPrimaryDevice(t) &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendUserMsg: encryption fail for primary device: ",
                        "",
                      ])),
                    n,
                  )
                  .tags("messaging")
                  .sendLogs("encryption-fail-for-primary-device"),
              null
            );
          }
        }),
        j = await Promise.all(z),
        K = E(j),
        Q = K.botSuccessNodes,
        X = K.coexV2AgentCopies,
        Y = K.deviceEncs,
        J = K.isPq,
        Z = K.successNodes;
      if (
        o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
          P,
          X.length,
        )
      )
        return Promise.reject(
          r("err")(
            "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
          ),
        );
      if (Z.length > 0 || Q.length > 0 || X.length > 0) {
        var ee,
          te,
          ne = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, y, _),
          re = (ee = X[0]) == null ? void 0 : ee.agentWid,
          oe = o("WAWebCoexV2SendContribution").finalizeCoexV2AgentContribution(
            {
              agentCopies: X,
              agentEngagementType: ne,
              botAttrs: a,
              isFeedback: L,
              msg: _,
              personaType:
                re == null || re.equals(y)
                  ? p
                  : await o(
                      "WAWebSimpleSignalPNToFBIDMigration",
                    ).genFbidBotPersonaType(re),
              plan: P,
            },
          );
        return (
          (oe == null ? void 0 : oe.seedReceipts) != null &&
            (await oe.seedReceipts()),
          {
            deviceEncs: Y,
            isPq: J,
            body: Z.length > 0 ? o("WAWap").wap("participants", null, Z) : null,
            botBody:
              (te = oe == null ? void 0 : oe.node) != null
                ? te
                : o("WAWebSendMsgBotStanza").genBotFanoutNode({
                    agentEngagementType: ne,
                    botSuccessNodes: Q,
                    isBotFeedbackMessage: L,
                    isBotFeedbackMessageInAgentChat: T,
                    personaType: p != null ? p : null,
                  }),
            hasCoexV2RepresentedTargets: oe != null,
            coexV2SelfHosted:
              oe != null && P != null
                ? P.kind === "user_agent" || P.relayPlan.selfIsCoexV2
                : null,
            shouldHaveIdentity: G,
          }
        );
      }
      return Promise.reject(
        r("err")(
          "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
        ),
      );
    }
    function E(e) {
      var t = [],
        n = [],
        r = [],
        a = [];
      return (
        e.forEach(function (e) {
          if (e != null) {
            if (e.coexV2AgentCopy != null) {
              r.length === 0
                ? r.push(e.coexV2AgentCopy)
                : o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[coexv2] user:agent send has multiple agent devices; relaying only the first",
                        ])),
                    )
                    .sendLogs("coexv2-user-agent-multi-device-dropped");
              return;
            }
            var i = e.node;
            i != null &&
              (e.shouldFanoutToBot
                ? n.push(i)
                : (t.push(i), e.deviceEnc != null && a.push(e.deviceEnc)));
          }
        }),
        {
          botSuccessNodes: n,
          coexV2AgentCopies: r,
          deviceEncs: a,
          isPq: e.some(function (e) {
            return (e == null ? void 0 : e.isPq) === !0;
          })
            ? !0
            : void 0,
          successNodes: t,
        }
      );
    }
    async function k(e) {
      var t = e.coexV2AgentSend,
        n = e.content,
        r = e.isAgentFeedbackCopy,
        a = r === void 0 ? !1 : r,
        i = e.msg,
        l = e.shouldFanoutToBot,
        s = e.wid,
        u = t && s.isFbidBot();
      if (u)
        return o("WAWebCoexV2SendContribution").prepareCoexV2AgentPayload(n, i);
      var c = n;
      return (
        (l || a) &&
          (c = await o(
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
    }
    async function I(e) {
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
        S = e.aeaBaseline,
        R = e.chatId,
        L = e.collectDeviceEncs,
        E = L === void 0 ? !1 : L,
        k = e.deviceList,
        I = e.groupData,
        P = e.metricReporter,
        N = e.msgProtobuf,
        M = e.msgRecord,
        w = e.option,
        O = e.scheduledMsgMetadata,
        B = M.data,
        W = B.from,
        q = B.id,
        U = B.subtype,
        V = B.to,
        H = await o(
          "WAWebCoexV2RelayEligibility",
        ).resolveCoexV2SimpleSignalPolicy({ chatId: R, stanzaTo: V });
      await o(
        "WAWebCoexV2RelayEligibility",
      ).deleteCoexV2SimpleSignalPrimarySessions(H, k);
      try {
        var G, z, j;
        (G = P.sendPerfReporter) == null || G.startPrekeysFetchStage();
        var K = await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            aeaOptions:
              w.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.CHAT
                ? {
                    isBeforeEnforcedSendDecision:
                      (S == null ? void 0 : S.isEnforced) === !0,
                    sendRecipient:
                      S != null
                        ? o("WAWebWidFactory").asUserWidOrThrow(V)
                        : void 0,
                    isMonitoredSend:
                      (n("cr:627") == null
                        ? void 0
                        : n("cr:627").isAeaSendMonitoringCandidate({
                            recipient: V,
                            fanoutDevices: k,
                            message: N,
                            isBotFeedbackMessage:
                              o("WAWebMsgGetters").getIsBotFeedbackMessage(B),
                          })) === !0,
                  }
                : void 0,
            identityChanged: !1,
            sessionScope:
              w.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.CHAT &&
              (w.sessionScope == null ||
                w.sessionScope ===
                  o("WAWebSessionScope").SessionScope.DEFAULT) &&
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                ? o("WAWebSessionScope").SessionScope.PQ
                : (z = w.sessionScope) != null
                  ? z
                  : o("WAWebSessionScope").SessionScope.DEFAULT,
            wids: k,
          }),
          Q = K == null ? void 0 : K.missedPrekeyCount;
        if (Q != null) {
          var X;
          (X = P.sendPerfReporter) == null || X.setFetchedPrekeyCount(Q);
        }
        ((j = P.sendPerfReporter) == null || j.postPrekeysFetchStage(),
          o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
            count: K == null ? void 0 : K.depletedPrekeyCount,
            prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
              .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
            messageType:
              w.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT
                ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
            deviceSizeBucket:
              w.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT
                ? r("WAWebWamNumberToSizeBucket")(k.length)
                : null,
          }));
      } catch (e) {
        if (e instanceof o("WAWebHandleMsgError").AeaSendBlockedError)
          throw (
            S != null &&
              n("cr:627") != null &&
              (await n("cr:627").applyAeaFirstUseAfterFailedSetup({
                recipient: V,
                fanoutDevices: k,
                message: N,
                msgRecord: M,
                baseline: S,
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
      var Y = o("WAWebSendMsgBotStanza").getIsBizBotFeedback(B, R),
        J =
          (o("WAWebBotBaseGating").isBotEnabled() &&
            o("WAWebMsgGetters").getIsBotFeedbackMessage(B) &&
            R.isBot()) ||
          Y,
        Z = o("WAWebThreadMsgUtils").getMsgAiThread(B),
        ee = await o(
          "WAWebMetaAiConversationThreadId",
        ).getMessageConversationThreadId(R, Z),
        te = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
          B,
          Y,
          Z != null ? Z.key.id : null,
        ),
        ne = k;
      (S != null &&
        n("cr:627") != null &&
        ((ne = await n("cr:627").reconcileAeaBeforeEncryption({
          recipient: V,
          fanoutDevices: k,
          message: N,
          msgRecord: M,
          baseline: S,
        })),
        S.isEnforced && (await D(M, ne))),
        w.isResendingMsg &&
          (ne = await o(
            "WAWebSendMsgCommonApi",
          ).filterDeviceWithChangedIdentity(M, A(w, k))));
      var re = ne.map(function (e) {
        return { msgKey: q, receiverId: e };
      });
      (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(re),
        (t = P.sendPerfReporter) == null || t.startClientEncryptStage());
      var oe = await o("WAWebMsgRcatUtils").genContentBindingForMsg(
          B,
          x(W, ne),
        ),
        ae = o("WAWebMsgGetters").getWamEditType(B),
        ie = o("WAWebChatCollection").ChatCollection.get(R),
        le = {
          chat: ie,
          chatId: R,
          msgProtobuf: N,
          option: w,
          stanzaTo: V,
          isAeaE2eeSend:
            n("cr:627") == null ||
            (a = n("cr:627").getAeaDecidedSend(S)) == null
              ? void 0
              : a.isE2eeSend,
        },
        se = await o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(le),
        ue = await o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).genFbidBotPersonaType(V),
        ce = y(ne, f),
        de = await C(ce, {
          msg: B,
          stanzaTo: V,
          deviceList: ne,
          msgProtobuf: N,
          option: w,
          contentBindingMap: oe,
          editType: ae,
          coexV2SimpleSignalPolicy: H,
          scheduledMsgMetadata: O,
          collectDeviceEncs: E,
          coexV2RelayPlan: se,
          botStanzaAttrs: te,
          fbidBotPersonaType: ue,
        });
      ((i = P.sendReporter) == null || i.setIsPq(de.isPq),
        (l = P.sendPerfReporter) == null || l.setIsPq(de.isPq),
        (s = P.sendPerfReporter) == null || s.postClientEncryptStage());
      var me = b({
          isAgentOnly: ce,
          msgProtobuf: N,
          option: w,
          scheduledMsgMetadata: O,
        }),
        pe = o("WAWebE2EProtoUtils").getBizNativeFlowName(N),
        _e = B.nativeFlowInteractiveMsg,
        fe,
        ge = o("WAWebContactCollection").ContactCollection.get(R),
        he =
          (u = H == null ? void 0 : H.privacyMode) != null
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
              `.
      is lid: `,
              ". lid origin: ",
              `.
      contact has phone number: `,
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
        V.isLid()
          ? (ie == null ? void 0 : ie.lidOriginType) !==
              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
            (ve = o("WAWebApiContact").getPhoneNumber(V))
          : V.isUser() &&
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
      (w.isResendingMsg ||
        (await o("WAWebSendMsgCommonApi").updateIdentityRange(M, ne)),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode());
      var Re =
          oe == null
            ? void 0
            : oe.get(
                o("WAWebWidToJid").widToUserJid(
                  o("WAWebWidFactory").asUserWidOrThrow(W),
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
            ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, V, B)
            : null,
        Te =
          (w.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT &&
            w.isResendingMsg === !0) ||
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
        ((xe = await o(
          "WAWebCoexV2SendContribution",
        ).buildCoexV2RelayContribution({
          botAttrs: te,
          editType: ae,
          msg: B,
          msgProtobuf: N,
          relayPlan: se,
        })),
        xe != null &&
          ((Te = xe.node),
          (De = xe.shouldHaveIdentity),
          await xe.seedReceipts()));
      var $e = o("WAWebSendMsgMetaNode").genMetaNode({
          chatId: R,
          groupData: I,
          includeAttributes: {
            origin: ie == null ? void 0 : ie.lidOriginType,
            hashedAiThreadId: ee,
            appendHostedSenderIntent:
              xe != null || de.hasCoexV2RepresentedTargets === !0,
            hasPairwisePayload:
              w.fanoutType === o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT,
            sessionScope: w.sessionScope,
          },
          msgProtobuf: N,
          msgRecord: M,
          scheduledMsgMetadata: O,
        }),
        Pe = null;
      if (de.shouldHaveIdentity || h || De) {
        var Ne = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
        Pe = o("WAWap").wap("device-identity", null, Ne);
      }
      var Me = await v({ isAgentOnly: ce, msg: B, msgProtobuf: N, option: w }),
        we = (p = await $(ie)) != null ? p : await F(ie, R),
        Ae;
      I != null &&
        (Ae =
          (I == null ? void 0 : I.isLidAddressingMode) === !0
            ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
      var Fe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(ie),
        Oe = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING(q.id),
            to: o("WAWebCommsWapMd").CHAT_JID(V),
            type:
              (_ = O == null ? void 0 : O.originalStanzaType) != null
                ? _
                : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(N),
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
            edit: o("WAWebSendMsgCommonApi").editAttribute(N, U),
            device_fanout:
              w.isResendingMsg === !0 || J ? "false" : o("WAWap").DROP_ATTR,
            recipient_pn: Ce
              ? o("WAWebCommsWapMd").USER_JID(Ce)
              : o("WAWap").DROP_ATTR,
            addressing_mode:
              Ae != null ? o("WAWap").CUSTOM_STRING(Ae) : o("WAWap").DROP_ATTR,
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
      if (!V.isGroup() && !V.isStatus()) {
        var Be;
        (Be = P.sendReporter) == null || Be.setOppositeHasUsername(Se != null);
      }
      T(P, de, xe, se);
      var We = o("WAWebCommsAckParser").toCoreAckTemplate({
        id: q.id,
        class: "message",
        from: B.to,
        participant: null,
      });
      return { stanza: Oe, ackTemplate: We, deviceEncs: de.deviceEncs };
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
    async function D(e, t) {
      var n = o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(t);
      if (
        !(e.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message && !n)
      )
        try {
          await o("WAWebDBUpdateMessageTable").updateMessageTable(e.data.id, {
            senderOrRecipientAccountTypeHosted: n,
          });
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
    }
    function x(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    async function $(e) {
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
    }
    var P = null,
      N = null,
      M = new Map(),
      w = 5;
    function A(e, t) {
      return e.fanoutType !== o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT
        ? t
        : t.filter(function (e) {
            return !e.isBot();
          });
    }
    async function F(e, t) {
      if (
        o("WAWebABProps").getABPropConfigValue("wa_nct_token_send_enabled") !==
          !0 ||
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
        n === P && N != null
          ? (a = N)
          : ((a = o("WABase64").decodeB64(n)), (P = n), (N = a), M.clear());
        var i = r.toString(),
          l = M.get(i);
        if (l != null) return o("WAWap").wap("cstoken", null, l);
        var s = new Uint8Array(
          await o("WACryptoHmac").hmacSha256(a, new TextEncoder().encode(i)),
        );
        if (M.size >= w) {
          var u = M.keys().next().value;
          u != null && M.delete(u);
        }
        return (M.set(i, s), o("WAWap").wap("cstoken", null, s));
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
    }
    function O(e) {
      return (
        e instanceof o("WAWebHandleMsgError").MessageValidationError ||
        e instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
      );
    }
    ((l.classifyFanoutEncNodes = E),
      (l.genBotFanoutContent = k),
      (l.createFanoutMsgStanza = I),
      (l.genCsTokenBody = F));
  },
  98,
);
