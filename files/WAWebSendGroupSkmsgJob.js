__d(
  "WAWebSendGroupSkmsgJob",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:10199",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = e.groupData,
            i = e.metricReporter,
            l = e.sessionScope,
            u = e.skDistribList;
          if (
            ((t = i.sendPerfReporter) == null || t.startPrekeysFetchStage(),
            (n = i.sendPerfReporter) == null || n.setFetchedPrekeyCount(0),
            u.length > 0)
          )
            try {
              var c,
                d = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope:
                    l != null ? l : o("WAWebSessionScope").SessionScope.DEFAULT,
                  wids: u,
                });
              ((c = i.sendPerfReporter) == null ||
                c.setFetchedPrekeyCount(
                  d == null ? void 0 : d.missedPrekeyCount,
                ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: d == null ? void 0 : d.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP,
                  deviceSizeBucket: a.deviceSizeBucket,
                }));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: failed for ",
                      " devices: ",
                      "",
                    ])),
                  u.length,
                  e,
                )
                .tags("messaging");
            }
          (r = i.sendPerfReporter) == null || r.postPrekeysFetchStage();
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o, a, i, l, s, u, c) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, u, c, d) {
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
              v = x(e, i),
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
              E = yield o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(
                e,
                t,
                R,
                i,
              ),
              k = E.ciphertext,
              I = E.senderKeyBytes,
              T;
            (n.length > 0 &&
              (T = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(e, t, n, I, !1, void 0, u)),
              (_ = l.sendPerfReporter) == null || _.postClientEncryptStage());
            var D = null,
              P = !1;
            T && T.length > 0 && !h
              ? (D = o("WAWap").wap(
                  "participants",
                  null,
                  T.map(function (e) {
                    var t = e.ciphertext,
                      n = e.participant,
                      r = e.type;
                    r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                      (P = !0);
                    var i =
                        s == null
                          ? void 0
                          : s.get(
                              o("WAWebWidToJid").widToUserJid(
                                o("WAWebWidFactory").asUserWidOrThrow(n),
                              ),
                            ),
                      l =
                        i != null
                          ? o("WAWap").wap("content_binding", null, i)
                          : null;
                    return o("WAWap").wap(
                      "to",
                      { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                      o("WAWap").wap(
                        "enc",
                        {
                          v: o("WAWap").CUSTOM_STRING(
                            o(
                              "WAWebBackendJobsCommon",
                            ).CIPHERTEXT_VERSION.toString(),
                          ),
                          type: o("WAWap").CUSTOM_STRING(r),
                          "decrypt-fail": o(
                            "WAWebBackendJobsCommon",
                          ).encodeMaybeDecryptFail(
                            o(
                              "WAWebE2EProtoUtils",
                            ).decryptFailAttributeFromProtobuf(a),
                          ),
                        },
                        t,
                      ),
                      l,
                    );
                  }),
                ))
              : s != null &&
                (D = o("WAWap").wap(
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
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(
                        o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                      ),
                      mediatype: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeMediaType(L),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(a),
                      ),
                    },
                    k,
                  ),
              M = null,
              w =
                g &&
                S != null &&
                !o("WAWebBotUtils").isAnyMetaAiBot(S) &&
                (yield o(
                  "WAWebResolveGroupAgentParticipants",
                ).isGroupAgentProfile(S)),
              A = b.length > 0,
              F =
                !v &&
                (g ||
                  h ||
                  y ||
                  (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                    i.isOpenBotGroup === !0) ||
                  A)
                  ? yield $({
                      configuredGroupAgentParticipants: C,
                      encMediaType: L,
                      groupAgentParticipants: b,
                      isAgentHistoryBundle: !1,
                      isOpenBotGroupSend:
                        (f = i.isOpenBotGroup) != null ? f : !1,
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
              var W = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              M = o("WAWap").wap("device-identity", null, W);
            }
            return {
              keyDistributionMsg: D,
              skeyEncryptedGroupMsg: N,
              identityNode: M,
              botMsgNode: O,
              hasPairwisePayload: T != null && T.length > 0 && !h,
            };
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
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
    function S(e, t, n, r, o, a, i, l, s) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, _, f, y) {
            var b,
              S,
              R,
              E,
              x,
              $,
              P,
              N = e.data,
              M = N.id,
              w = N.to,
              A = e.data;
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: sending ",
                    "",
                  ])),
                M,
              )
              .tags("messaging");
            var F = M.id,
              O = a.rotateKey,
              B = a.skDistribList,
              W = a.skList,
              q = ((b = i.groupAgentParticipants) != null ? b : []).map(I),
              U = new Set(q.map(T)),
              V = k(B, U),
              H = k(W, U);
            (D(w, l),
              (S = l.sendPerfReporter) == null ||
                S.setSenderKeyDistributionCount(V.length));
            var G = H.concat(V),
              z = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              j = yield o("WAWebPhashUtils").phashV2(
                [].concat(G, [z], q),
                o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                  i.isOpenBotGroup === !0,
                i.isTeeBotGroup === !0,
              ),
              K = o("WAWebMsgGetters").getIsBotFeedbackMessage(A);
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              G.map(function (e) {
                return { msgKey: M, receiverId: e };
              }),
            ),
              O &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(w, z),
                o("WAWebABProps").getABPropConfigValue(
                  "web_sender_key_rotation_fix_enabled",
                ) &&
                  (yield o("WAWebApiParticipantStore").consumeGroupRotateKey(
                    w,
                  ))),
              yield h({
                groupData: i,
                metricReporter: l,
                sessionScope: y,
                skDistribList: V,
              }));
            var Q =
                f != null
                  ? f
                  : yield o(
                      "WAWebResolveGroupAgentParticipants",
                    ).resolveGroupAgentFanoutForGroupSend(i),
              X = yield C(A, w, V, H, t, i, l, s, y, _, Q),
              Y = X.botMsgNode,
              J = X.hasPairwisePayload,
              Z = X.identityNode,
              ee = X.keyDistributionMsg,
              te = X.skeyEncryptedGroupMsg,
              ne =
                s == null
                  ? void 0
                  : s.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(z),
                      ),
                    ),
              re =
                ne != null
                  ? o("WAWap").wap("sender_content_binding", null, ne)
                  : null,
              oe =
                i.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
              ae = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(A, t, M.toString()),
              ie = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(F),
                  to: o("WAWebCommsWapMd").CHAT_JID(w),
                  phash: K ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(j),
                  type:
                    (R = _ == null ? void 0 : _.originalStanzaType) != null
                      ? R
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, A.subtype),
                  addressing_mode: o("WAWap").CUSTOM_STRING(oe),
                },
                ee,
                te,
                Z,
                v(t, e),
                o("WAWebSendMsgMetaNode").genMetaNode({
                  chatId: w,
                  groupData: i,
                  includeAttributes: { hasPairwisePayload: J, sessionScope: y },
                  msgProtobuf: t,
                  msgRecord: e,
                  scheduledMsgMetadata: _,
                }),
                Y,
                re,
                ae,
              );
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, G),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (E = l.sendPerfReporter) == null || E.postReadyToSendStage(),
              (x = l.sendPerfReporter) == null || x.startWrittenWireStage(),
              n("cr:10199") == null || n("cr:10199").printEncNode(t));
            var le = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              ie,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: F,
                class: "message",
                from: w,
                participant: null,
              }),
            );
            if (ee) {
              var se;
              (se = l.sendReporter) == null ||
                se.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                );
            }
            (($ = l.sendPerfReporter) == null || $.postWrittenWireStage(),
              (l.sendPerfReporter = null),
              (P = l.sendReporter) == null || P.postSuccess(),
              (l.sendReporter = null));
            var ue = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(le);
            if (ue.error)
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendSenderKeyMsg: invalid ack from server for ",
                        "",
                      ])),
                    A.id,
                  )
                  .tags("messaging"),
                (g || (g = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
                  ),
                )
              );
            var ce = ue.success.error;
            if (
              ce != null &&
              (ce ===
                o("WAWebHandleMsgError").MessageSentAckErrorCode
                  .StaleGroupAddressingMode ||
                ce ===
                  o("WAWebHandleMsgError").MessageSentAckErrorCode
                    .MessageNotAllowed)
            )
              return L(w, e, ce);
            yield o("WAWebApiParticipantStore").markHasSenderKey(w, V);
            var de = ue.success,
              me = de.addressingMode,
              pe = de.count,
              _e = de.phash;
            return (
              _e != null && _e !== j
                ? (o("WALogger")
                    .LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "encryptAndSendSenderKeyMsg: phash mismatch ",
                          " server=",
                          "",
                        ])),
                      A.id,
                      _e,
                    )
                    .tags("messaging"),
                  o("WAWebResendGroupMsg")
                    .resendPersistedGroupMsgWrapper({
                      isDirect: !1,
                      msgRecord: e,
                      msgProtobuf: t,
                      oldList: G,
                      ackTime: o("WATimeUtils").unixTime(),
                      groupData: i,
                      metricReporter: l,
                      serverAddressingMode: me,
                    })
                    .catch(function (t) {
                      (o("WALogger")
                        .WARN(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
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
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "resendGroupMsg: failed to resend group msg: ",
                                "",
                              ])),
                            t,
                          )
                          .tags("messaging")
                          .sendLogs("message-resend-failed", {
                            sampling: 0.01,
                          }));
                    }))
                : me != null &&
                  me !== oe &&
                  o(
                    "WAWebGroupHandleAddressingModeMismatch",
                  ).handleAddressingModeMismatch(w, {
                    localAddressingMode: oe,
                    serverAddressingMode: me,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                      .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
                  }),
              pe != null &&
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .merge(String(M), { count: pe }),
              ue.success
            );
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          throw (
            o("WALogger")
              .LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: ack with error code ",
                    "",
                  ])),
                a,
              )
              .tags("messaging"),
            (g || (g = n("Promise")))
              .resolve()
              .then(function () {
                return o("WAWebGroupQueryBridge").sendQueryGroup(e);
              })
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendSenderKeyMsg: sendQueryGroup failed ",
                        "",
                      ])),
                    e,
                  )
                  .tags("messaging");
              }),
            t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
              (yield t.data.updateAck(o("WAWebAck").ACK.FAILED, !1)),
            a ===
            o("WAWebHandleMsgError").MessageSentAckErrorCode.MessageNotAllowed
              ? new (o("WAWebHandleMsgError").MessageSentAckError)(a)
              : r("err")(
                  "[messaging] encryptAndSendSenderKeyMsg: ack with error code " +
                    a,
                )
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return t.size === 0
        ? e
        : e.filter(function (e) {
            return !t.has(T(e));
          });
    }
    function I(e) {
      return e.isUser() ? o("WAWebWidFactory").asUserWidOrThrow(e) : e;
    }
    function T(e) {
      return I(e).toString();
    }
    function D(e, t) {
      var n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
      if (n) {
        var r, a;
        ((r = t.sendPerfReporter) == null || r.setMessageIsFirstUserMessage(!0),
          (a = t.sendReporter) == null || a.setMessageIsFirstUserMessage(!0));
      }
    }
    function x(e, t) {
      return t.isCag === !0
        ? !0
        : t.isAnnouncementGroup === !0 &&
            !(
              o("WAWebMsgGetters").getIsRevoke(e) &&
              o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            p = yield o(
              "WAWebResolveGroupAgentParticipants",
            ).hasMuseNoticeGroupAgent(t),
            _ = A({
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
            h = M(s, _, r),
            y = w(_, r, d, m),
            C = !g && !h && y,
            b = i && p;
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
            _.map(function (e) {
              return { msgKey: s.id, receiverId: e };
            }),
          ),
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: [f],
            }));
          var v = yield o(
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
          var S = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
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
            I =
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
            T = o("WAWap").wap(
              "bot",
              {
                type: d ? "feedback" : o("WAWap").DROP_ATTR,
                agent_engagement_type: N(i || C, a, s),
              },
              I,
            );
          return [T, L === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg];
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      if (t) return o("WAWap").DROP_ATTR;
      var r = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(e, null, n);
      return r != null ? o("WAWap").CUSTOM_STRING(r) : o("WAWap").DROP_ATTR;
    }
    function M(e, t, n) {
      var r = W(e.invokedBotWid);
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
    function w(e, t, n, r) {
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
    function A(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.isBotFeedbackMessage,
        a = e.isBotRespOrInvocationRevoke,
        i = e.isOpenBotGroupSend,
        l = e.msg,
        s = e.omitNonParticipantInvokedBot,
        u = e.shouldGateInvokedBot;
      if (r) {
        var c = O(l, r, a);
        return c == null ? [] : [c];
      }
      var d = new Map();
      if (a) {
        var m = O(l, r, a);
        return (
          m != null && d.set(m.toString(), m),
          n.forEach(function (e) {
            d.set(e.toString(), e);
          }),
          Array.from(d.values())
        );
      }
      var p = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i,
        _ = !p || F(l),
        f = p && _;
      f &&
        d.set(
          o("WAWebBotUtils").META_BOT_FBID_WID.toString(),
          o("WAWebBotUtils").META_BOT_FBID_WID,
        );
      var g = B({
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
    function F(t) {
      return o("WAWebMsgGetters").getIsRevoke(t) ||
        o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice()
        ? !0
        : (o("WAWebBotTos")
            .refreshMetaAiOpenGroupNotice()
            .catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "getBotFanoutWids: Meta AI Open group notice refresh failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("meta-ai-open-group-notice-refresh-failed");
            }),
          !1);
    }
    function O(e, t, n) {
      if (t) {
        var r;
        return W((r = e.protocolMessageKey) == null ? void 0 : r.participant);
      }
      return n ? W(e.botRespOrInvocationRevokeBotWid) : null;
    }
    function B(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.isOpenBotGroupSend,
        a = e.msg,
        i = e.omitNonParticipantInvokedBot,
        l = e.shouldGateInvokedBot,
        s = W(a.invokedBotWid);
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
    function W(e) {
      return e != null && e.isBot() ? e : null;
    }
    ((l.encryptAndSendSenderKeyMsg = S), (l.createBotFanoutNode = $));
  },
  98,
);
