__d(
  "WAWebSendGroupSkmsgJob",
  [
    "WADeprecatedSendIq",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebAck",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebApiParticipantStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCreateNackFromStanza",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebGroupHandleAddressingModeMismatch",
    "WAWebGroupMsgSendUtils",
    "WAWebGroupQueryBridge",
    "WAWebHandleMsgCommon",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebPhashUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebResendGroupMsg",
    "WAWebScheduledMsgStanzaContributor",
    "WAWebSchemaMessage",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSendMsgMetaNode",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "cr:10198",
    "cr:10199",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(t) {
      var n,
        r,
        a,
        i = t.groupData,
        l = t.metricReporter,
        s = t.skDistribList;
      if (
        ((n = l.sendPerfReporter) == null || n.startPrekeysFetchStage(),
        (r = l.sendPerfReporter) == null || r.setFetchedPrekeyCount(0),
        s.length > 0)
      )
        try {
          var u,
            c = await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              s,
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            );
          ((u = l.sendPerfReporter) == null ||
            u.setFetchedPrekeyCount(c == null ? void 0 : c.missedPrekeyCount),
            o(
              "WAWebPostPrekeysDepletionMetric",
            ).maybePostPrekeysDepletionMetric({
              count: c == null ? void 0 : c.depletedPrekeyCount,
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
              s.length,
              t,
            )
            .tags("messaging");
        }
      (a = l.sendPerfReporter) == null || a.postPrekeysFetchStage();
    }
    async function g(e, t, n, r, a, i, l, s) {
      var u, c, d, m;
      (u = l.sendPerfReporter) == null || u.startClientEncryptStage();
      var p = o("WAWebSendMsgCommonApi").encodeAndPad(a),
        _ = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a),
        f =
          o("WAWebBotBaseGating").isBotEnabled() &&
          ((c = e.invokedBotWid) == null ? void 0 : c.isBot()) === !0,
        g =
          o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
        h = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
        y = await o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(e, t, p, i),
        C = y.ciphertext,
        v = y.senderKeyBytes,
        S;
      (n.length > 0 &&
        (S = await o("WAWebGetGroupKeyDistributionMsg").getKeyDistributionMsg(
          e,
          t,
          n,
          v,
          !1,
        )),
        (d = l.sendPerfReporter) == null || d.postClientEncryptStage());
      var R = null,
        L = !1;
      S && S.length > 0 && !g
        ? (R = o("WAWap").wap(
            "participants",
            null,
            S.map(function (e) {
              var t = e.ciphertext,
                n = e.participant,
                r = e.type;
              r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (L = !0);
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
          (R = o("WAWap").wap(
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
      var E = g
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
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(_),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(a),
                ),
              },
              C,
            ),
        k = null,
        I =
          f ||
          g ||
          h ||
          (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            i.isOpenBotGroup === !0)
            ? await b(e, a, (m = i.isOpenBotGroup) != null ? m : !1)
            : [null, !1],
        T = I[0],
        D = I[1];
      if (L || D) {
        var x = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
        k = o("WAWap").wap("device-identity", null, x);
      }
      return {
        keyDistributionMsg: R,
        skeyEncryptedGroupMsg: E,
        identityNode: k,
        botMsgNode: T,
      };
    }
    function h(e, t) {
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
    async function y(e, t, a, i, l, y, b) {
      var v,
        S,
        R,
        L,
        E,
        k,
        I = e.data,
        T = I.id,
        D = I.to,
        x = e.data;
      o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendSenderKeyMsg: sending ",
              "",
            ])),
          T,
        )
        .tags("messaging");
      var $ = T.id,
        P = a.rotateKey,
        N = a.skDistribList,
        M = a.skList;
      (C(D, l),
        (v = l.sendPerfReporter) == null ||
          v.setSenderKeyDistributionCount(N.length));
      var w = M.concat(N),
        A = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
        F = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
        O =
          o("WAWebGroupMsgSendUtils").isCagAddon(x, i) ||
          (i == null ? void 0 : i.isLidAddressingMode) === !0
            ? A
            : F,
        B = await o("WAWebPhashUtils").phashV2(
          [].concat(w, [O]),
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
            i.isOpenBotGroup === !0,
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() &&
            i.isTeeBotGroup === !0,
        ),
        W = o("WAWebMsgGetters").getIsBotFeedbackMessage(x);
      (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
        w.map(function (e) {
          return { msgKey: T, receiverId: e };
        }),
      ),
        P && (await o("WAWebSignal").Session.deleteGroupSenderKeyInfo(D, O)),
        await f({ groupData: i, metricReporter: l, skDistribList: N }));
      var q = await g(x, D, N, M, t, i, l, y),
        U = q.botMsgNode,
        V = q.identityNode,
        H = q.keyDistributionMsg,
        G = q.skeyEncryptedGroupMsg,
        z =
          y == null
            ? void 0
            : y.get(
                o("WAWebWidToJid").widToUserJid(
                  o("WAWebWidFactory").asUserWidOrThrow(O),
                ),
              ),
        j =
          z != null ? o("WAWap").wap("sender_content_binding", null, z) : null,
        K =
          i.isLidAddressingMode === !0
            ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
        Q = await o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(
          x,
          t,
          T.toString(),
        ),
        X = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING($),
            to: o("WAWebCommsWapMd").CHAT_JID(D),
            phash: W ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(B),
            type:
              (S = b == null ? void 0 : b.originalStanzaType) != null
                ? S
                : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
            edit: o("WAWebSendMsgCommonApi").editAttribute(t, x.subtype),
            addressing_mode: o("WAWap").CUSTOM_STRING(K),
          },
          H,
          G,
          V,
          h(t, e),
          o("WAWebSendMsgMetaNode").genMetaNode({
            chatId: D,
            groupData: i,
            includeAttributes: {},
            msgProtobuf: t,
            msgRecord: e,
          }),
          b != null
            ? o("WAWebScheduledMsgStanzaContributor").genScheduledMsgMetaNode(b)
            : null,
          U,
          j,
          Q,
        );
      (await o("WAWebSendMsgCommonApi").updateIdentityRange(e, w),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode(),
        (R = l.sendPerfReporter) == null || R.postReadyToSendStage(),
        (L = l.sendPerfReporter) == null || L.startWrittenWireStage(),
        n("cr:10199") == null || n("cr:10199").printEncNode(t));
      var Y = await o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
        X,
        o("WAWebCommsAckParser").toCoreAckTemplate({
          id: $,
          class: "message",
          from: D,
          participant: null,
        }),
      );
      if (H) {
        var J;
        (J = l.sendReporter) == null ||
          J.setMessageDistributionType(
            o("WAWebWamEnumMessageDistributionEnumType")
              .MESSAGE_DISTRIBUTION_ENUM_TYPE.SENDER_KEY_DISTRIBUTION_MESSAGE,
          );
      }
      ((E = l.sendPerfReporter) == null || E.postWrittenWireStage(),
        (l.sendPerfReporter = null),
        (k = l.sendReporter) == null || k.postSuccess(),
        (l.sendReporter = null));
      var Z = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(Y);
      if (Z.error)
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendSenderKeyMsg: invalid ack from server for ",
                  "",
                ])),
              x.id,
            )
            .tags("messaging"),
          Promise.reject(
            r("err")(
              "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
            ),
          )
        );
      var ee = Z.success.error;
      if (
        ee ===
        o("WAWebCreateNackFromStanza").NackReason.StaleGroupAddressingMode
      )
        return (
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendSenderKeyMsg: ack with error code 421",
                ])),
            )
            .tags("messaging"),
          Promise.resolve()
            .then(function () {
              return o("WAWebGroupQueryBridge").sendQueryGroup(D);
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendSenderKeyMsg: sendQueryGroup failed ",
                      "",
                    ])),
                  e,
                )
                .tags("messaging");
            }),
          e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
            e.data.updateAck(o("WAWebAck").ACK.FAILED, !1),
          Promise.reject(
            r("err")(
              "[messaging] encryptAndSendSenderKeyMsg: ack with error code 421",
            ),
          )
        );
      await o("WAWebApiParticipantStore").markHasSenderKey(D, N);
      var te = Z.success,
        ne = te.addressingMode,
        re = te.count,
        oe = te.phash;
      return (
        oe != null && oe !== B
          ? (o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: phash mismatch ",
                    " server=",
                    "",
                  ])),
                x.id,
                oe,
              )
              .tags("messaging"),
            o("WAWebResendGroupMsg")
              .resendPersistedGroupMsgWrapper({
                isDirect: !1,
                msgRecord: e,
                msgProtobuf: t,
                oldList: w,
                ackTime: o("WATimeUtils").unixTime(),
                groupData: i,
                metricReporter: l,
                serverAddressingMode: ne,
              })
              .catch(function (t) {
                (o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "resendGroupMsg: failed to resend group msg: ",
                          "",
                        ])),
                      t,
                    )
                    .tags("messaging")
                    .sendLogs("message-resend-failed", { sampling: 0.01 }));
              }))
          : ne != null &&
            ne !== K &&
            o(
              "WAWebGroupHandleAddressingModeMismatch",
            ).handleAddressingModeMismatch(D, {
              localAddressingMode: K,
              serverAddressingMode: ne,
              mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
            }),
        re != null &&
          o("WAWebSchemaMessage")
            .getMessageTable()
            .merge(String(T), { count: re }),
        Z.success
      );
    }
    function C(e, t) {
      var n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
      if (n) {
        var r, a;
        ((r = t.sendPerfReporter) == null || r.setMessageIsFirstUserMessage(!0),
          (a = t.sendReporter) == null || a.setMessageIsFirstUserMessage(!0));
      }
    }
    async function b(e, t, n) {
      var r = o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
        a = null,
        i = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e);
      if (r) {
        var l;
        a = (l = e.protocolMessageKey) == null ? void 0 : l.participant;
      } else
        i
          ? (a = e.botRespOrInvocationRevokeBotWid)
          : o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
              n === !0
            ? (a = o("WAWebBotUtils").META_BOT_FBID_WID)
            : (a = e.invokedBotWid);
      if (!a || !a.isBot()) return [null, !1];
      await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords([
        { msgKey: e.id, receiverId: a },
      ]);
      var s = !1;
      await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
        [a],
        !1,
        o("WAWebSessionScope").SessionScope.DEFAULT,
      );
      var u = await o(
        "WAWebE2EProtoGenerator",
      ).updateBotInvokeMsgProtoCopyForCapi({
        message: t,
        botMessageSecret: e.botMessageSecret,
        isOpenBotGroup:
          o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && n,
        mentionedJidList: e.mentionedJidList,
      });
      i &&
        a.isFbidBot() &&
        (u = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(u));
      var c = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
          a,
          0,
          u,
          e,
          0,
        ),
        d = c.ciphertext,
        m = c.type;
      m === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (s = !0);
      var p = o("WAWebSendMsgCreateFanoutStanza").getBotAgentEngagementType(
          n,
          null,
          e,
        ),
        _ = o("WAWap").wap(
          "bot",
          {
            type: r ? "feedback" : o("WAWap").DROP_ATTR,
            agent_engagement_type:
              p != null ? o("WAWap").CUSTOM_STRING(p) : o("WAWap").DROP_ATTR,
          },
          o("WAWap").wap(
            "to",
            { jid: o("WAWebCommsWapMd").DEVICE_JID(a) },
            o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(m),
              },
              d,
            ),
          ),
        );
      return [_, s];
    }
    l.encryptAndSendSenderKeyMsg = y;
  },
  98,
);
