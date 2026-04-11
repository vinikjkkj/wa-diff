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
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a, i, l;
          if (
            ((a = t.sendPerfReporter) == null || a.startPrekeysFetchStage(),
            (i = t.sendPerfReporter) == null || i.setFetchedPrekeyCount(0),
            n.length > 0)
          )
            try {
              var s,
                u = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                  n,
                  !1,
                  o("WAWebSessionScope").SessionScope.DEFAULT,
                );
              ((s = t.sendPerfReporter) == null ||
                s.setFetchedPrekeyCount(
                  u == null ? void 0 : u.missedPrekeyCount,
                ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: u == null ? void 0 : u.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP,
                  deviceSizeBucket: r.deviceSizeBucket,
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
                  n.length,
                  t,
                )
                .tags("messaging");
            }
          (l = t.sendPerfReporter) == null || l.postPrekeysFetchStage();
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
    function v(e, t, n, r, o, a) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, h) {
            var C,
              v,
              S,
              L,
              E,
              k = e.data,
              I = k.id,
              T = k.to,
              D = e.data;
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: sending ",
                    "",
                  ])),
                I,
              )
              .tags("messaging");
            var x = I.id,
              $ = a.rotateKey,
              P = a.skDistribList,
              N = a.skList;
            (R(T, l),
              (C = l.sendPerfReporter) == null ||
                C.setSenderKeyDistributionCount(P.length));
            var M = N.concat(P),
              w = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              A = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              F =
                o("WAWebGroupMsgSendUtils").isCagAddon(D, i) ||
                (i == null ? void 0 : i.isLidAddressingMode) === !0
                  ? w
                  : A,
              O = yield o("WAWebPhashUtils").phashV2(
                [].concat(M, [F]),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  i.isOpenBotGroup === !0,
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  i.isTeeBotGroup === !0,
              ),
              B = o("WAWebMsgGetters").getIsBotFeedbackMessage(D);
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              M.map(function (e) {
                return { msgKey: I, receiverId: e };
              }),
            ),
              $ &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(T, F)),
              yield g(l, P, i));
            var W = yield y(D, T, P, N, t, i, l, h),
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
              ).genReportingTokenBodyForStanza(D, t, I.toString()),
              Q = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(x),
                  to: o("WAWebCommsWapMd").CHAT_JID(T),
                  phash: B ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(O),
                  type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, D.subtype),
                  addressing_mode: o("WAWap").CUSTOM_STRING(j),
                },
                V,
                H,
                U,
                b(t, e),
                o("WAWebSendMsgMetaNode").genMetaNode(T, e, t, i, {}),
                q,
                z,
                K,
              );
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, M),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (v = l.sendPerfReporter) == null || v.postReadyToSendStage(),
              (S = l.sendPerfReporter) == null || S.startWrittenWireStage(),
              n("cr:10199") == null || n("cr:10199").printEncNode(t));
            var X = yield o(
              "WADeprecatedSendIq",
            ).deprecatedSendStanzaAndReturnAck(
              Q,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: x,
                class: "message",
                from: T,
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
            ((L = l.sendPerfReporter) == null || L.postWrittenWireStage(),
              (l.sendPerfReporter = null),
              (E = l.sendReporter) == null || E.postSuccess(),
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
                    D.id,
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
                    return o("WAWebGroupQueryBridge").sendQueryGroup(T);
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
            yield o("WAWebApiParticipantStore").markHasSenderKey(T, P);
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
                      D.id,
                      re,
                    )
                    .tags("messaging"),
                  o("WAWebResendGroupMsg")
                    .resendPersistedGroupMsgWrapper({
                      isDirect: !1,
                      msgRecord: e,
                      msgProtobuf: t,
                      oldList: M,
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
                  ).handleAddressingModeMismatch(T, {
                    localAddressingMode: j,
                    serverAddressingMode: te,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                      .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
                  }),
              ne != null &&
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .merge(String(I), { count: ne }),
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
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
            [a],
            !1,
            o("WAWebSessionScope").SessionScope.DEFAULT,
          );
          var u = o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi(
            t,
            e.botMessageSecret,
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && n,
          );
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
