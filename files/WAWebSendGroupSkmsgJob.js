__d(
  "WAWebSendGroupSkmsgJob",
  [
    "Promise",
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
              E = !1;
            S && S.length > 0 && !h
              ? (R = o("WAWap").wap(
                  "participants",
                  null,
                  S.map(function (e) {
                    var t = e.ciphertext,
                      n = e.participant,
                      r = e.type;
                    r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                      (E = !0);
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
            var k = h
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
                  ? yield L(e, a, (p = i.isOpenBotGroup) != null ? p : !1)
                  : [null, !1],
              D = T[0],
              x = T[1];
            if (E || x) {
              var $ = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              I = o("WAWap").wap("device-identity", null, $);
            }
            return {
              keyDistributionMsg: R,
              skeyEncryptedGroupMsg: k,
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
          function* (e, t, a, i, l, h, C) {
            var v,
              S,
              L,
              E,
              k,
              I,
              T = e.data,
              D = T.id,
              x = T.to,
              $ = e.data;
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: sending ",
                    "",
                  ])),
                D,
              )
              .tags("messaging");
            var P = D.id,
              N = a.rotateKey,
              M = a.skDistribList,
              w = a.skList;
            (R(x, l),
              (v = l.sendPerfReporter) == null ||
                v.setSenderKeyDistributionCount(M.length));
            var A = w.concat(M),
              F = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              O = yield o("WAWebPhashUtils").phashV2(
                [].concat(A, [F]),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  i.isOpenBotGroup === !0,
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  i.isTeeBotGroup === !0,
              ),
              B = o("WAWebMsgGetters").getIsBotFeedbackMessage($);
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              A.map(function (e) {
                return { msgKey: D, receiverId: e };
              }),
            ),
              N &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(x, F)),
              yield g({ groupData: i, metricReporter: l, skDistribList: M }));
            var W = yield y($, x, M, w, t, i, l, h, C),
              q = W.botMsgNode,
              U = W.identityNode,
              V = W.keyDistributionMsg,
              H = W.skeyEncryptedGroupMsg,
              G =
                h == null
                  ? void 0
                  : h.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(F),
                      ),
                    ),
              z =
                G != null
                  ? o("WAWap").wap("sender_content_binding", null, G)
                  : null,
              j =
                i.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
              K = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza($, t, D.toString()),
              Q = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(P),
                  to: o("WAWebCommsWapMd").CHAT_JID(x),
                  phash: B ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(O),
                  type:
                    (S = C == null ? void 0 : C.originalStanzaType) != null
                      ? S
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, $.subtype),
                  addressing_mode: o("WAWap").CUSTOM_STRING(j),
                },
                V,
                H,
                U,
                b(t, e),
                o("WAWebSendMsgMetaNode").genMetaNode({
                  chatId: x,
                  groupData: i,
                  includeAttributes: {},
                  msgProtobuf: t,
                  msgRecord: e,
                }),
                C != null
                  ? o(
                      "WAWebScheduledMsgStanzaContributor",
                    ).genScheduledMsgMetaNode(C)
                  : null,
                q,
                z,
                K,
              );
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, A),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (L = l.sendPerfReporter) == null || L.postReadyToSendStage(),
              (E = l.sendPerfReporter) == null || E.startWrittenWireStage(),
              n("cr:10199") == null || n("cr:10199").printEncNode(t));
            var X = yield o(
              "WADeprecatedSendIq",
            ).deprecatedSendStanzaAndReturnAck(
              Q,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: P,
                class: "message",
                from: x,
                participant: null,
              }),
            );
            if (V) {
              var Y;
              (Y = l.sendReporter) == null ||
                Y.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                );
            }
            ((k = l.sendPerfReporter) == null || k.postWrittenWireStage(),
              (l.sendPerfReporter = null),
              (I = l.sendReporter) == null || I.postSuccess(),
              (l.sendReporter = null));
            var J = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(X);
            if (J.error)
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendSenderKeyMsg: invalid ack from server for ",
                        "",
                      ])),
                    $.id,
                  )
                  .tags("messaging"),
                (f || (f = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
                  ),
                )
              );
            var Z = J.success.error;
            if (
              Z ===
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
                (f || (f = n("Promise")))
                  .resolve()
                  .then(function () {
                    return o("WAWebGroupQueryBridge").sendQueryGroup(x);
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
                e.type ===
                  o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
                  e.data.updateAck(o("WAWebAck").ACK.FAILED, !1),
                f.reject(
                  r("err")(
                    "[messaging] encryptAndSendSenderKeyMsg: ack with error code 421",
                  ),
                )
              );
            yield o("WAWebApiParticipantStore").markHasSenderKey(x, M);
            var ee = J.success,
              te = ee.addressingMode,
              ne = ee.count,
              re = ee.phash;
            return (
              re != null && re !== O
                ? (o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "encryptAndSendSenderKeyMsg: phash mismatch ",
                          " server=",
                          "",
                        ])),
                      $.id,
                      re,
                    )
                    .tags("messaging"),
                  o("WAWebResendGroupMsg")
                    .resendPersistedGroupMsgWrapper({
                      isDirect: !1,
                      msgRecord: e,
                      msgProtobuf: t,
                      oldList: A,
                      ackTime: o("WATimeUtils").unixTime(),
                      groupData: i,
                      metricReporter: l,
                      serverAddressingMode: te,
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
                          .sendLogs("message-resend-failed", {
                            sampling: 0.01,
                          }));
                    }))
                : te != null &&
                  te !== j &&
                  o(
                    "WAWebGroupHandleAddressingModeMismatch",
                  ).handleAddressingModeMismatch(x, {
                    localAddressingMode: j,
                    serverAddressingMode: te,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                      .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
                  }),
              ne != null &&
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .merge(String(D), { count: ne }),
              J.success
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      var n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
      if (n) {
        var r, a;
        ((r = t.sendPerfReporter) == null || r.setMessageIsFirstUserMessage(!0),
          (a = t.sendReporter) == null || a.setMessageIsFirstUserMessage(!0));
      }
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords([
            { msgKey: e.id, receiverId: a },
          ]);
          var s = !1;
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
            wids: [a],
          });
          var u = yield o(
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
          var c = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
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
                  p != null
                    ? o("WAWap").CUSTOM_STRING(p)
                    : o("WAWap").DROP_ATTR,
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
        })),
        E.apply(this, arguments)
      );
    }
    l.encryptAndSendSenderKeyMsg = v;
  },
  98,
);
