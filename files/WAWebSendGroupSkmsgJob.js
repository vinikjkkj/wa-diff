__d(
  "WAWebSendGroupSkmsgJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebApiParticipantStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTos",
    "WAWebBotUtils",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebGroupHandleAddressingModeMismatch",
    "WAWebGroupQueryBridge",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebPhashUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebResendGroupMsg",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaMessage",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsGeneral",
    "WAWebUserUtils",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "cr:10198",
    "cr:10199",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(t) {
      var n,
        r,
        a,
        i = t.groupData,
        l = t.metricReporter,
        s = t.sessionScope,
        u = t.skDistribList;
      if (
        ((n = l.sendPerfReporter) == null || n.startPrekeysFetchStage(),
        (r = l.sendPerfReporter) == null || r.setFetchedPrekeyCount(0),
        u.length > 0)
      )
        try {
          var c,
            d = await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope:
                s != null ? s : o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: u,
            });
          ((c = l.sendPerfReporter) == null ||
            c.setFetchedPrekeyCount(d == null ? void 0 : d.missedPrekeyCount),
            o(
              "WAWebPostPrekeysDepletionMetric",
            ).maybePostPrekeysDepletionMetric({
              count: d == null ? void 0 : d.depletedPrekeyCount,
              prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
              messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP,
              deviceSizeBucket: i.deviceSizeBucket,
            }));
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions: failed for ",
                  " devices: ",
                  "",
                ])),
              u.length,
              t,
            )
            .tags("messaging");
        }
      (a = l.sendPerfReporter) == null || a.postPrekeysFetchStage();
    }
    async function h(e, t, n, r, a, i, l, s, u, c, d) {
      var m,
        p,
        _,
        f,
        g =
          o("WAWebBotBaseGating").isBotEnabled() &&
          ((m = e.invokedBotWid) == null ? void 0 : m.isBot()) === !0,
        h =
          o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
        y = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
        C = d.configuredGroupAgentParticipants,
        b = d.resolvedGroupAgentParticipants,
        v = E(e, i),
        S = e.invokedBotWid;
      (p = l.sendPerfReporter) == null || p.startClientEncryptStage();
      var R = o("WAWebSendMsgCommonApi").encodeAndPad(a, {
          type: e.type,
          subtype: e.subtype,
        }),
        L =
          (c == null ? void 0 : c.kind) === "schedule"
            ? c.originalMediaType
            : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a),
        I = await o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(e, t, R, i),
        T = I.ciphertext,
        D = I.senderKeyBytes,
        x;
      (n.length > 0 &&
        (x = await o("WAWebGetGroupKeyDistributionMsg").getKeyDistributionMsg(
          e,
          t,
          n,
          D,
          !1,
          void 0,
          u,
        )),
        (_ = l.sendPerfReporter) == null || _.postClientEncryptStage());
      var $ = null,
        P = !1;
      x && x.length > 0 && !h
        ? ($ = o("WAWap").wap(
            "participants",
            null,
            x.map(function (e) {
              var t = e.ciphertext,
                n = e.participant,
                r = e.type;
              r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (P = !0);
              var i =
                  s == null
                    ? void 0
                    : s.get(
                        o("WAWebWidToJid").widToUserJid(
                          o("WAWebWidFactory").asUserWidOrThrow(n),
                        ),
                      ),
                l =
                  i != null ? o("WAWap").wap("content_binding", null, i) : null;
              return o("WAWap").wap(
                "to",
                { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(r),
                    "decrypt-fail": o(
                      "WAWebBackendJobsCommon",
                    ).encodeMaybeDecryptFail(
                      o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(
                        a,
                      ),
                    ),
                  },
                  t,
                ),
                l,
              );
            }),
          ))
        : s != null &&
          ($ = o("WAWap").wap(
            "participants",
            null,
            r.map(function (e) {
              var t =
                s == null
                  ? void 0
                  : s.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(e),
                      ),
                    );
              return t != null
                ? o("WAWap").wap(
                    "to",
                    { jid: o("WAWebCommsWapMd").DEVICE_JID(e) },
                    o("WAWap").wap("content_binding", null, t),
                  )
                : null;
            }),
          ));
      var N = h
          ? null
          : o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(L),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(a),
                ),
              },
              T,
            ),
        M = null,
        w =
          g &&
          S != null &&
          !o("WAWebBotUtils").isAnyMetaAiBot(S) &&
          (await o("WAWebResolveGroupAgentParticipants").isGroupAgentProfile(
            S,
          )),
        A = b.length > 0,
        F =
          !v &&
          (g ||
            h ||
            y ||
            (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
              i.isOpenBotGroup === !0) ||
            A)
            ? await k({
                configuredGroupAgentParticipants: C,
                encMediaType: L,
                groupAgentParticipants: b,
                isAgentHistoryBundle: !1,
                isOpenBotGroupSend: (f = i.isOpenBotGroup) != null ? f : !1,
                isScheduledMessage:
                  (c == null ? void 0 : c.kind) === "schedule",
                msg: e,
                msgProtobuf: a,
                shouldGateInvokedBot: w,
              })
            : [null, !1],
        O = F[0],
        B = F[1];
      if (P || B) {
        var W = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
        M = o("WAWap").wap("device-identity", null, W);
      }
      return {
        keyDistributionMsg: $,
        skeyEncryptedGroupMsg: N,
        identityNode: M,
        botMsgNode: O,
        hasPairwisePayload: x != null && x.length > 0 && !h,
      };
    }
    function y(e, t) {
      var n = t.data,
        a = o("WAWebE2EProtoUtils").getBizNativeFlowName(e),
        i = n.nativeFlowInteractiveMsg;
      if (
        a != null &&
        r("WAWebInteractiveMessagesNativeFlowName").cast(a) ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO &&
        i === !0
      ) {
        var l;
        return (l = o("WAWap")).wap(
          "biz",
          null,
          l.wap(
            "interactive",
            { v: "1", type: l.CUSTOM_STRING("native_flow") },
            l.wap("native_flow", { name: l.CUSTOM_STRING(a) }),
          ),
        );
      }
      return null;
    }
    async function C(e, t, a, i, l, p, _, f, C) {
      var E,
        k,
        I,
        T,
        D,
        x,
        $,
        P = e.data,
        N = P.id,
        M = P.to,
        w = e.data;
      o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendSenderKeyMsg: sending ",
              "",
            ])),
          N,
        )
        .tags("messaging");
      var A = N.id,
        F = a.rotateKey,
        O = a.skDistribList,
        B = a.skList,
        W = ((E = i.groupAgentParticipants) != null ? E : []).map(S),
        q = new Set(W.map(R)),
        U = v(O, q),
        V = v(B, q);
      (L(M, l),
        (k = l.sendPerfReporter) == null ||
          k.setSenderKeyDistributionCount(U.length));
      var H = V.concat(U),
        G = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
        z = await o("WAWebPhashUtils").phashV2(
          [].concat(H, [G], W),
          o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            i.isOpenBotGroup === !0,
          i.isTeeBotGroup === !0,
        ),
        j = o("WAWebMsgGetters").getIsBotFeedbackMessage(w);
      (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
        H.map(function (e) {
          return { msgKey: N, receiverId: e };
        }),
      ),
        F &&
          (await o("WAWebSignal").Session.deleteGroupSenderKeyInfo(M, G),
          o("WAWebABProps").getABPropConfigValue(
            "web_sender_key_rotation_fix_enabled",
          ) && (await o("WAWebApiParticipantStore").consumeGroupRotateKey(M))),
        await g({
          groupData: i,
          metricReporter: l,
          sessionScope: C,
          skDistribList: U,
        }));
      var K =
          f != null
            ? f
            : await o(
                "WAWebResolveGroupAgentParticipants",
              ).resolveGroupAgentFanoutForGroupSend(i),
        Q = await h(w, M, U, V, t, i, l, p, C, _, K),
        X = Q.botMsgNode,
        Y = Q.hasPairwisePayload,
        J = Q.identityNode,
        Z = Q.keyDistributionMsg,
        ee = Q.skeyEncryptedGroupMsg,
        te =
          p == null
            ? void 0
            : p.get(
                o("WAWebWidToJid").widToUserJid(
                  o("WAWebWidFactory").asUserWidOrThrow(G),
                ),
              ),
        ne =
          te != null
            ? o("WAWap").wap("sender_content_binding", null, te)
            : null,
        re =
          i.isLidAddressingMode === !0
            ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
        oe = await o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(
          w,
          t,
          N.toString(),
        ),
        ae = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING(A),
            to: o("WAWebCommsWapMd").CHAT_JID(M),
            phash: j ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(z),
            type:
              (I = _ == null ? void 0 : _.originalStanzaType) != null
                ? I
                : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
            edit: o("WAWebSendMsgCommonApi").editAttribute(t, w.subtype),
            addressing_mode: o("WAWap").CUSTOM_STRING(re),
          },
          Z,
          ee,
          J,
          y(t, e),
          o("WAWebSendMsgMetaNode").genMetaNode({
            chatId: M,
            groupData: i,
            includeAttributes: { hasPairwisePayload: Y, sessionScope: C },
            msgProtobuf: t,
            msgRecord: e,
            scheduledMsgMetadata: _,
          }),
          X,
          ne,
          oe,
        );
      (await o("WAWebSendMsgCommonApi").updateIdentityRange(e, H),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode(),
        (T = l.sendPerfReporter) == null || T.postReadyToSendStage(),
        (D = l.sendPerfReporter) == null || D.startWrittenWireStage(),
        n("cr:10199") == null || n("cr:10199").printEncNode(t));
      var ie = await o(
        "WAWebDeprecatedSendIqWorkerCompatible",
      ).deprecatedSendStanzaAndReturnAck(
        ae,
        o("WAWebCommsAckParser").toCoreAckTemplate({
          id: A,
          class: "message",
          from: M,
          participant: null,
        }),
      );
      if (Z) {
        var le;
        (le = l.sendReporter) == null ||
          le.setMessageDistributionType(
            o("WAWebWamEnumMessageDistributionEnumType")
              .MESSAGE_DISTRIBUTION_ENUM_TYPE.SENDER_KEY_DISTRIBUTION_MESSAGE,
          );
      }
      ((x = l.sendPerfReporter) == null || x.postWrittenWireStage(),
        (l.sendPerfReporter = null),
        ($ = l.sendReporter) == null || $.postSuccess(),
        (l.sendReporter = null));
      var se = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(ie);
      if (se.error)
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendSenderKeyMsg: invalid ack from server for ",
                  "",
                ])),
              w.id,
            )
            .tags("messaging"),
          Promise.reject(
            r("err")(
              "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
            ),
          )
        );
      var ue = se.success.error;
      if (
        ue != null &&
        (ue ===
          o("WAWebHandleMsgError").MessageSentAckErrorCode
            .StaleGroupAddressingMode ||
          ue ===
            o("WAWebHandleMsgError").MessageSentAckErrorCode.MessageNotAllowed)
      )
        return b(M, e, ue);
      await o("WAWebApiParticipantStore").markHasSenderKey(M, U);
      var ce = se.success,
        de = ce.addressingMode,
        me = ce.count,
        pe = ce.phash;
      return (
        pe != null && pe !== z
          ? (o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: phash mismatch ",
                    " server=",
                    "",
                  ])),
                w.id,
                pe,
              )
              .tags("messaging"),
            o("WAWebResendGroupMsg")
              .resendPersistedGroupMsgWrapper({
                isDirect: !1,
                msgRecord: e,
                msgProtobuf: t,
                oldList: H,
                ackTime: o("WATimeUtils").unixTime(),
                groupData: i,
                metricReporter: l,
                serverAddressingMode: de,
              })
              .catch(function (t) {
                (o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: failed to resend group msg: ",
                        ", type: ",
                        "",
                      ])),
                    e.data.id.toString(),
                    e.data.type,
                  )
                  .tags("messaging"),
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "resendGroupMsg: failed to resend group msg: ",
                          "",
                        ])),
                      t,
                    )
                    .tags("messaging")
                    .sendLogs("message-resend-failed", { sampling: 0.01 }));
              }))
          : de != null &&
            de !== re &&
            o(
              "WAWebGroupHandleAddressingModeMismatch",
            ).handleAddressingModeMismatch(M, {
              localAddressingMode: re,
              serverAddressingMode: de,
              mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
            }),
        me != null &&
          o("WAWebSchemaMessage")
            .getMessageTable()
            .merge(String(N), { count: me }),
        se.success
      );
    }
    async function b(e, t, n) {
      throw (
        o("WALogger")
          .LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendSenderKeyMsg: ack with error code ",
                "",
              ])),
            n,
          )
          .tags("messaging"),
        Promise.resolve()
          .then(function () {
            return o("WAWebGroupQueryBridge").sendQueryGroup(e);
          })
          .catch(function (e) {
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: sendQueryGroup failed ",
                    "",
                  ])),
                e,
              )
              .tags("messaging");
          }),
        t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
          (await t.data.updateAck(o("WAWebAck").ACK.FAILED, !1)),
        n === o("WAWebHandleMsgError").MessageSentAckErrorCode.MessageNotAllowed
          ? new (o("WAWebHandleMsgError").MessageSentAckError)(n)
          : r("err")(
              "[messaging] encryptAndSendSenderKeyMsg: ack with error code " +
                n,
            )
      );
    }
    function v(e, t) {
      return t.size === 0
        ? e
        : e.filter(function (e) {
            return !t.has(R(e));
          });
    }
    function S(e) {
      return e.isUser() ? o("WAWebWidFactory").asUserWidOrThrow(e) : e;
    }
    function R(e) {
      return S(e).toString();
    }
    function L(e, t) {
      var n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
      if (n) {
        var r, a;
        ((r = t.sendPerfReporter) == null || r.setMessageIsFirstUserMessage(!0),
          (a = t.sendReporter) == null || a.setMessageIsFirstUserMessage(!0));
      }
    }
    function E(e, t) {
      return t.isCag === !0
        ? !0
        : t.isAnnouncementGroup === !0 &&
            !(
              o("WAWebMsgGetters").getIsRevoke(e) &&
              o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            );
    }
    async function k(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.encMediaType,
        r = e.groupAgentParticipants,
        a = e.isAgentHistoryBundle,
        i = e.isOpenBotGroupSend,
        l = e.isScheduledMessage,
        s = e.msg,
        u = e.msgProtobuf,
        c = e.shouldGateInvokedBot,
        d = o("WAWebMsgGetters").getIsBotFeedbackMessage(s),
        m = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(s),
        p = await o(
          "WAWebResolveGroupAgentParticipants",
        ).hasMuseNoticeGroupAgent(t),
        _ = x({
          configuredGroupAgentParticipants: t,
          groupAgentParticipants: r,
          isBotFeedbackMessage: d,
          isBotRespOrInvocationRevoke: m,
          isOpenBotGroupSend: i,
          msg: s,
          omitNonParticipantInvokedBot: p === !0,
          shouldGateInvokedBot: c,
        }),
        f = _[0];
      if (f == null) return [null, !1];
      var g = _.some(function (e) {
          return e.equals(o("WAWebBotUtils").META_BOT_FBID_WID);
        }),
        h = T(s, _, r),
        y = D(_, r, d, m),
        C = !g && !h && y,
        b = i && p;
      (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
        _.map(function (e) {
          return { msgKey: s.id, receiverId: e };
        }),
      ),
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
          wids: [f],
        }));
      var v = await o(
        "WAWebE2EProtoGenerator",
      ).updateBotInvokeMsgProtoCopyForCapi({
        message: u,
        messageSecret: s.messageSecret,
        botMessageSecret: s.botMessageSecret,
        groupHasMuseAgent: b,
        hasGroupAgentTarget: y,
        hasOpenBotTarget: g,
        isGroupAgentParticipantSend: C,
        isGroupMsg: !0,
        isOpenBotGroup:
          o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i,
        mentionedJidList: C ? null : s.mentionedJidList,
      });
      (f.isFbidBot() &&
        (v = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(v)),
        m &&
          f.isFbidBot() &&
          (v = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(v)));
      var S = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
          f,
          0,
          v,
          s,
          0,
        ),
        R = S.ciphertext,
        L = S.type,
        E = null;
      (y || b) &&
        (E = l ? n : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(v));
      var k = o("WAWap").wap(
          "enc",
          {
            v: o("WAWap").CUSTOM_STRING(
              o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
            ),
            type: o("WAWap").CUSTOM_STRING(L),
            mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(E),
          },
          R,
        ),
        $ =
          _.length === 1
            ? [
                o("WAWap").wap(
                  "to",
                  { jid: o("WAWebCommsWapMd").DEVICE_JID(f) },
                  k,
                ),
              ]
            : [].concat(
                _.map(function (e) {
                  return o("WAWap").wap("to", {
                    jid: o("WAWebCommsWapMd").DEVICE_JID(e),
                  });
                }),
                [k],
              ),
        P = o("WAWap").wap(
          "bot",
          {
            type: d ? "feedback" : o("WAWap").DROP_ATTR,
            agent_engagement_type: I(i || C, a, s),
          },
          $,
        );
      return [P, L === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg];
    }
    function I(e, t, n) {
      if (t) return o("WAWap").DROP_ATTR;
      var r = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(e, null, n);
      return r != null ? o("WAWap").CUSTOM_STRING(r) : o("WAWap").DROP_ATTR;
    }
    function T(e, t, n) {
      var r = M(e.invokedBotWid);
      return (
        r != null &&
        !r.equals(o("WAWebBotUtils").META_BOT_FBID_WID) &&
        t.some(function (e) {
          return e.equals(r);
        }) &&
        !n.some(function (e) {
          return e.equals(r);
        })
      );
    }
    function D(e, t, n, r) {
      return (
        !n &&
        !r &&
        e.some(function (e) {
          return t.some(function (t) {
            return t.equals(e);
          });
        })
      );
    }
    function x(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.isBotFeedbackMessage,
        a = e.isBotRespOrInvocationRevoke,
        i = e.isOpenBotGroupSend,
        l = e.msg,
        s = e.omitNonParticipantInvokedBot,
        u = e.shouldGateInvokedBot;
      if (r) {
        var c = P(l, r, a);
        return c == null ? [] : [c];
      }
      var d = new Map();
      if (a) {
        var m = P(l, r, a);
        return (
          m != null && d.set(m.toString(), m),
          n.forEach(function (e) {
            d.set(e.toString(), e);
          }),
          Array.from(d.values())
        );
      }
      var p = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i,
        _ = !p || $(l),
        f = p && _;
      f &&
        d.set(
          o("WAWebBotUtils").META_BOT_FBID_WID.toString(),
          o("WAWebBotUtils").META_BOT_FBID_WID,
        );
      var g = N({
        configuredGroupAgentParticipants: t,
        groupAgentParticipants: n,
        isOpenBotGroupSend: i,
        msg: l,
        omitNonParticipantInvokedBot: s,
        shouldGateInvokedBot: u,
      });
      return (
        g != null &&
          (n.some(function (e) {
            return e.equals(g);
          }) ||
            !p) &&
          d.set(g.toString(), g),
        n.forEach(function (e) {
          e.isBot() && d.set(e.toString(), e);
        }),
        _ || d.delete(o("WAWebBotUtils").META_BOT_FBID_WID.toString()),
        Array.from(d.values())
      );
    }
    function $(e) {
      return o("WAWebMsgGetters").getIsRevoke(e) ||
        o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice()
        ? !0
        : (o("WAWebBotTos")
            .refreshMetaAiOpenGroupNotice()
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "getBotFanoutWids: Meta AI Open group notice refresh failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("meta-ai-open-group-notice-refresh-failed");
            }),
          !1);
    }
    function P(e, t, n) {
      if (t) {
        var r;
        return M((r = e.protocolMessageKey) == null ? void 0 : r.participant);
      }
      return n ? M(e.botRespOrInvocationRevokeBotWid) : null;
    }
    function N(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.isOpenBotGroupSend,
        a = e.msg,
        i = e.omitNonParticipantInvokedBot,
        l = e.shouldGateInvokedBot,
        s = M(a.invokedBotWid);
      return s == null
        ? null
        : n.some(function (e) {
              return e.equals(s);
            })
          ? s
          : l ||
              t.some(function (e) {
                return e.equals(s);
              }) ||
              (i && !(r && o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(s)))
            ? null
            : s;
    }
    function M(e) {
      return e != null && e.isBot() ? e : null;
    }
    ((l.encryptAndSendSenderKeyMsg = C), (l.createBotFanoutNode = k));
  },
  98,
);
