__d(
  "WAWebSendGroupSkmsgJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:10199",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                c = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                  wids: s,
                });
              ((u = l.sendPerfReporter) == null ||
                u.setFetchedPrekeyCount(
                  c == null ? void 0 : c.missedPrekeyCount,
                ),
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o, a, i, l, s) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, u) {
            var c, d, m, p;
            (c = l.sendPerfReporter) == null || c.startClientEncryptStage();
            var _ = o("WAWebSendMsgCommonApi").encodeAndPad(a),
              f =
                (u == null ? void 0 : u.kind) === "schedule"
                  ? u.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a),
              g =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((d = e.invokedBotWid) == null ? void 0 : d.isBot()) === !0,
              h =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              y = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              C = yield o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(
                e,
                t,
                _,
                i,
              ),
              b = C.ciphertext,
              v = C.senderKeyBytes,
              S;
            (n.length > 0 &&
              (S = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(e, t, n, v, !1)),
              (m = l.sendPerfReporter) == null || m.postClientEncryptStage());
            var R = null,
              L = !1;
            S && S.length > 0 && !h
              ? (R = o("WAWap").wap(
                  "participants",
                  null,
                  S.map(function (e) {
                    var t = e.ciphertext,
                      n = e.participant,
                      r = e.type;
                    r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                      (L = !0);
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
            var E = h
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
                      ).encodeMaybeMediaType(f),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(a),
                      ),
                    },
                    b,
                  ),
              I = null,
              T =
                g ||
                h ||
                y ||
                (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                  i.isOpenBotGroup === !0)
                  ? yield k({
                      isOpenBotGroupSend:
                        (p = i.isOpenBotGroup) != null ? p : !1,
                      msg: e,
                      msgProtobuf: a,
                    })
                  : [null, !1],
              D = T[0],
              x = T[1];
            if (L || x) {
              var $ = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              I = o("WAWap").wap("device-identity", null, $);
            }
            return {
              keyDistributionMsg: R,
              skeyEncryptedGroupMsg: E,
              identityNode: I,
              botMsgNode: D,
            };
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
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
    function v(e, t, n, r, o, a, i) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, p, _) {
            var h,
              C,
              v,
              S,
              L,
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
            (E(D, l),
              (h = l.sendPerfReporter) == null ||
                h.setSenderKeyDistributionCount(N.length));
            var w = M.concat(N),
              A = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              F = yield o("WAWebPhashUtils").phashV2(
                [].concat(w, [A]),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  i.isOpenBotGroup === !0,
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  i.isTeeBotGroup === !0,
              ),
              O = o("WAWebMsgGetters").getIsBotFeedbackMessage(x);
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              w.map(function (e) {
                return { msgKey: T, receiverId: e };
              }),
            ),
              P &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(D, A)),
              yield g({ groupData: i, metricReporter: l, skDistribList: N }));
            var B = yield y(x, D, N, M, t, i, l, p, _),
              W = B.botMsgNode,
              q = B.identityNode,
              U = B.keyDistributionMsg,
              V = B.skeyEncryptedGroupMsg,
              H =
                p == null
                  ? void 0
                  : p.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(A),
                      ),
                    ),
              G =
                H != null
                  ? o("WAWap").wap("sender_content_binding", null, H)
                  : null,
              z =
                i.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
              j = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(x, t, T.toString()),
              K = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING($),
                  to: o("WAWebCommsWapMd").CHAT_JID(D),
                  phash: O ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(F),
                  type:
                    (C = _ == null ? void 0 : _.originalStanzaType) != null
                      ? C
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, x.subtype),
                  addressing_mode: o("WAWap").CUSTOM_STRING(z),
                },
                U,
                V,
                q,
                b(t, e),
                o("WAWebSendMsgMetaNode").genMetaNode({
                  chatId: D,
                  groupData: i,
                  includeAttributes: {},
                  msgProtobuf: t,
                  msgRecord: e,
                }),
                _ != null
                  ? o(
                      "WAWebScheduledMsgStanzaContributor",
                    ).genScheduledMsgMetaNode(_)
                  : null,
                W,
                G,
                j,
              );
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, w),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (v = l.sendPerfReporter) == null || v.postReadyToSendStage(),
              (S = l.sendPerfReporter) == null || S.startWrittenWireStage(),
              n("cr:10199") == null || n("cr:10199").printEncNode(t));
            var Q = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              K,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: $,
                class: "message",
                from: D,
                participant: null,
              }),
            );
            if (U) {
              var X;
              (X = l.sendReporter) == null ||
                X.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                );
            }
            ((L = l.sendPerfReporter) == null || L.postWrittenWireStage(),
              (l.sendPerfReporter = null),
              (k = l.sendReporter) == null || k.postSuccess(),
              (l.sendReporter = null));
            var Y = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(Q);
            if (Y.error)
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
                (f || (f = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
                  ),
                )
              );
            var J = Y.success.error;
            if (
              J != null &&
              (J ===
                o("WAWebCreateNackFromStanza").NackReason
                  .StaleGroupAddressingMode ||
                J ===
                  o("WAWebCreateNackFromStanza").NackReason.MessageNotAllowed)
            )
              return R(D, e, J);
            yield o("WAWebApiParticipantStore").markHasSenderKey(D, N);
            var Z = Y.success,
              ee = Z.addressingMode,
              te = Z.count,
              ne = Z.phash;
            return (
              ne != null && ne !== F
                ? (o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "encryptAndSendSenderKeyMsg: phash mismatch ",
                          " server=",
                          "",
                        ])),
                      x.id,
                      ne,
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
                      serverAddressingMode: ee,
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
                          .sendLogs("message-resend-failed", {
                            sampling: 0.01,
                          }));
                    }))
                : ee != null &&
                  ee !== z &&
                  o(
                    "WAWebGroupHandleAddressingModeMismatch",
                  ).handleAddressingModeMismatch(D, {
                    localAddressingMode: z,
                    serverAddressingMode: ee,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                      .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
                  }),
              te != null &&
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .merge(String(T), { count: te }),
              Y.success
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          throw (
            o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: ack with error code ",
                    "",
                  ])),
                a,
              )
              .tags("messaging"),
            (f || (f = n("Promise")))
              .resolve()
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
              (yield t.data.updateAck(o("WAWebAck").ACK.FAILED, !1)),
            a === o("WAWebCreateNackFromStanza").NackReason.MessageNotAllowed
              ? new (o("WAWebHandleMsgError").MessageSentAckError)(a)
              : r("err")(
                  "[messaging] encryptAndSendSenderKeyMsg: ack with error code " +
                    a,
                )
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
      if (n) {
        var r, a;
        ((r = t.sendPerfReporter) == null || r.setMessageIsFirstUserMessage(!0),
          (a = t.sendReporter) == null || a.setMessageIsFirstUserMessage(!0));
      }
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isOpenBotGroupSend,
            n = e.msg,
            r = e.msgProtobuf,
            a = o("WAWebMsgGetters").getIsBotFeedbackMessage(n),
            i = null,
            l = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(n);
          if (a) {
            var s;
            i = (s = n.protocolMessageKey) == null ? void 0 : s.participant;
          } else
            l
              ? (i = n.botRespOrInvocationRevokeBotWid)
              : o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                  t === !0
                ? (i = o("WAWebBotUtils").META_BOT_FBID_WID)
                : (i = n.invokedBotWid);
          if (!i || !i.isBot()) return [null, !1];
          yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords([
            { msgKey: n.id, receiverId: i },
          ]);
          var u = !1;
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
            wids: [i],
          });
          var c = yield o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: r,
            botMessageSecret: n.botMessageSecret,
            isOpenBotGroup:
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && t,
            mentionedJidList: n.mentionedJidList,
          });
          l &&
            i.isFbidBot() &&
            (c = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(c));
          var d = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              i,
              0,
              c,
              n,
              0,
            ),
            m = d.ciphertext,
            p = d.type;
          p === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (u = !0);
          var _ = o("WAWebSendMsgCreateFanoutStanza").getBotAgentEngagementType(
              t,
              null,
              n,
            ),
            f = o("WAWap").wap(
              "bot",
              {
                type: a ? "feedback" : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  _ != null
                    ? o("WAWap").CUSTOM_STRING(_)
                    : o("WAWap").DROP_ATTR,
              },
              o("WAWap").wap(
                "to",
                { jid: o("WAWebCommsWapMd").DEVICE_JID(i) },
                o("WAWap").wap(
                  "enc",
                  {
                    v: o("WAWap").CUSTOM_STRING(
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: o("WAWap").CUSTOM_STRING(p),
                  },
                  m,
                ),
              ),
            );
          return [f, u];
        })),
        I.apply(this, arguments)
      );
    }
    l.encryptAndSendSenderKeyMsg = v;
  },
  98,
);
