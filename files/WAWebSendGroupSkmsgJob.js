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
                c = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                  s,
                  !1,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                );
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
    function y(e, t, n, r, o, a, i, l) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
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
              y = yield o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(
                e,
                t,
                p,
                i,
              ),
              C = y.ciphertext,
              b = y.senderKeyBytes,
              v;
            (n.length > 0 &&
              (v = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(e, t, n, b, !1)),
              (d = l.sendPerfReporter) == null || d.postClientEncryptStage());
            var S = null,
              R = !1;
            v && v.length > 0 && !g
              ? (S = o("WAWap").wap(
                  "participants",
                  null,
                  v.map(function (e) {
                    var t = e.ciphertext,
                      n = e.participant,
                      r = e.type;
                    r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                      (R = !0);
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
                (S = o("WAWap").wap(
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
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: o("WAWap").CUSTOM_STRING(
                        o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                      ),
                      mediatype: o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeMediaType(_),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(a),
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
                  ? yield L(e, a, (m = i.isOpenBotGroup) != null ? m : !1)
                  : [null, !1],
              T = I[0],
              D = I[1];
            if (R || D) {
              var x = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              k = o("WAWap").wap("device-identity", null, x);
            }
            return {
              keyDistributionMsg: S,
              skeyEncryptedGroupMsg: E,
              identityNode: k,
              botMsgNode: T,
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
              O = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              B =
                o("WAWebGroupMsgSendUtils").isCagAddon($, i) ||
                (i == null ? void 0 : i.isLidAddressingMode) === !0
                  ? F
                  : O,
              W = yield o("WAWebPhashUtils").phashV2(
                [].concat(A, [B]),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  i.isOpenBotGroup === !0,
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  i.isTeeBotGroup === !0,
              ),
              q = o("WAWebMsgGetters").getIsBotFeedbackMessage($);
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              A.map(function (e) {
                return { msgKey: D, receiverId: e };
              }),
            ),
              N &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(x, B)),
              yield g({ groupData: i, metricReporter: l, skDistribList: M }));
            var U = yield y($, x, M, w, t, i, l, h),
              V = U.botMsgNode,
              H = U.identityNode,
              G = U.keyDistributionMsg,
              z = U.skeyEncryptedGroupMsg,
              j =
                h == null
                  ? void 0
                  : h.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(B),
                      ),
                    ),
              K =
                j != null
                  ? o("WAWap").wap("sender_content_binding", null, j)
                  : null,
              Q =
                i.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
              X = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza($, t, D.toString()),
              Y = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(P),
                  to: o("WAWebCommsWapMd").CHAT_JID(x),
                  phash: q ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(W),
                  type:
                    (S = C == null ? void 0 : C.originalStanzaType) != null
                      ? S
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, $.subtype),
                  addressing_mode: o("WAWap").CUSTOM_STRING(Q),
                },
                G,
                z,
                H,
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
                V,
                K,
                X,
              );
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, A),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (L = l.sendPerfReporter) == null || L.postReadyToSendStage(),
              (E = l.sendPerfReporter) == null || E.startWrittenWireStage(),
              n("cr:10199") == null || n("cr:10199").printEncNode(t));
            var J = yield o(
              "WADeprecatedSendIq",
            ).deprecatedSendStanzaAndReturnAck(
              Y,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: P,
                class: "message",
                from: x,
                participant: null,
              }),
            );
            if (G) {
              var Z;
              (Z = l.sendReporter) == null ||
                Z.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                );
            }
            ((k = l.sendPerfReporter) == null || k.postWrittenWireStage(),
              (l.sendPerfReporter = null),
              (I = l.sendReporter) == null || I.postSuccess(),
              (l.sendReporter = null));
            var ee = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(J);
            if (ee.error)
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
            var te = ee.success.error;
            if (
              te ===
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
            var ne = ee.success,
              re = ne.addressingMode,
              oe = ne.count,
              ae = ne.phash;
            return (
              ae != null && ae !== W
                ? (o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "encryptAndSendSenderKeyMsg: phash mismatch ",
                          " server=",
                          "",
                        ])),
                      $.id,
                      ae,
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
                      serverAddressingMode: re,
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
                : re != null &&
                  re !== Q &&
                  o(
                    "WAWebGroupHandleAddressingModeMismatch",
                  ).handleAddressingModeMismatch(x, {
                    localAddressingMode: Q,
                    serverAddressingMode: re,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                      .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
                  }),
              oe != null &&
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .merge(String(D), { count: oe }),
              ee.success
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
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
            [a],
            !1,
            o("WAWebSessionScope").SessionScope.DEFAULT,
          );
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
          var p = o("WAWap").wap(
            "bot",
            { type: r ? "feedback" : o("WAWap").DROP_ATTR },
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
          return [p, s];
        })),
        E.apply(this, arguments)
      );
    }
    l.encryptAndSendSenderKeyMsg = v;
  },
  98,
);
