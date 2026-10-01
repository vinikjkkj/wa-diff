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
    "WAWebResolveGroupAgentParticipants",
    "WAWebScheduledMsgStanzaContributor",
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
    function y(e, t, n, r, o, a, i, l, s, u) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, u, c) {
            var d,
              m,
              p,
              _,
              f =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((d = e.invokedBotWid) == null ? void 0 : d.isBot()) === !0,
              g =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              h = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              y = c.configuredGroupAgentParticipants,
              C = c.resolvedGroupAgentParticipants,
              b = i.isCag === !0 || i.isAnnouncementGroup === !0,
              v = e.invokedBotWid;
            (m = l.sendPerfReporter) == null || m.startClientEncryptStage();
            var S = o("WAWebSendMsgCommonApi").encodeAndPad(a),
              R =
                (u == null ? void 0 : u.kind) === "schedule"
                  ? u.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a),
              L = yield o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(
                e,
                t,
                S,
                i,
              ),
              E = L.ciphertext,
              k = L.senderKeyBytes,
              I;
            (n.length > 0 &&
              (I = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(e, t, n, k, !1)),
              (p = l.sendPerfReporter) == null || p.postClientEncryptStage());
            var T = null,
              x = !1;
            I && I.length > 0 && !g
              ? (T = o("WAWap").wap(
                  "participants",
                  null,
                  I.map(function (e) {
                    var t = e.ciphertext,
                      n = e.participant,
                      r = e.type;
                    r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                      (x = !0);
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
                (T = o("WAWap").wap(
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
            var $ = g
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
                      ).encodeMaybeMediaType(R),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(a),
                      ),
                    },
                    E,
                  ),
              P = null,
              N =
                f &&
                v != null &&
                !o("WAWebBotUtils").isAnyMetaAiBot(v) &&
                (yield o(
                  "WAWebResolveGroupAgentParticipants",
                ).isGroupAgentProfile(v)),
              M = C.length > 0,
              w =
                !b &&
                (f ||
                  g ||
                  h ||
                  (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                    i.isOpenBotGroup === !0) ||
                  M)
                  ? yield D({
                      configuredGroupAgentParticipants: y,
                      encMediaType: R,
                      groupAgentParticipants: C,
                      isOpenBotGroupSend:
                        (_ = i.isOpenBotGroup) != null ? _ : !1,
                      isScheduledMessage:
                        (u == null ? void 0 : u.kind) === "schedule",
                      msg: e,
                      msgProtobuf: a,
                      shouldGateInvokedBot: N,
                    })
                  : [null, !1],
              A = w[0],
              F = w[1];
            if (x || F) {
              var O = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              P = o("WAWap").wap("device-identity", null, O);
            }
            return {
              keyDistributionMsg: T,
              skeyEncryptedGroupMsg: $,
              identityNode: P,
              botMsgNode: A,
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
    function v(e, t, n, r, o, a, i, l) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, p, _, h) {
            var C,
              v,
              S,
              L,
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
              W = ((C = i.groupAgentParticipants) != null ? C : []).map(k),
              q = new Set(W.map(I)),
              U = E(O, q),
              V = E(B, q);
            (T(M, l),
              (v = l.sendPerfReporter) == null ||
                v.setSenderKeyDistributionCount(U.length));
            var H = V.concat(U),
              G = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              z = yield o("WAWebPhashUtils").phashV2(
                [].concat(H, [G], W),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  i.isOpenBotGroup === !0,
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  i.isTeeBotGroup === !0,
              ),
              j = o("WAWebMsgGetters").getIsBotFeedbackMessage(w);
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              H.map(function (e) {
                return { msgKey: N, receiverId: e };
              }),
            ),
              F &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(M, G)),
              yield g({ groupData: i, metricReporter: l, skDistribList: U }));
            var K =
                h != null
                  ? h
                  : yield o(
                      "WAWebResolveGroupAgentParticipants",
                    ).resolveGroupAgentFanoutForGroupSend(i),
              Q = yield y(w, M, U, V, t, i, l, p, _, K),
              X = Q.botMsgNode,
              Y = Q.identityNode,
              J = Q.keyDistributionMsg,
              Z = Q.skeyEncryptedGroupMsg,
              ee =
                p == null
                  ? void 0
                  : p.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(G),
                      ),
                    ),
              te =
                ee != null
                  ? o("WAWap").wap("sender_content_binding", null, ee)
                  : null,
              ne =
                i.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
              re = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(w, t, N.toString()),
              oe = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(A),
                  to: o("WAWebCommsWapMd").CHAT_JID(M),
                  phash: j ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(z),
                  type:
                    (S = _ == null ? void 0 : _.originalStanzaType) != null
                      ? S
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, w.subtype),
                  addressing_mode: o("WAWap").CUSTOM_STRING(ne),
                },
                J,
                Z,
                Y,
                b(t, e),
                o("WAWebSendMsgMetaNode").genMetaNode({
                  chatId: M,
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
                X,
                te,
                re,
              );
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, H),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (L = l.sendPerfReporter) == null || L.postReadyToSendStage(),
              (D = l.sendPerfReporter) == null || D.startWrittenWireStage(),
              n("cr:10199") == null || n("cr:10199").printEncNode(t));
            var ae = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              oe,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: A,
                class: "message",
                from: M,
                participant: null,
              }),
            );
            if (J) {
              var ie;
              (ie = l.sendReporter) == null ||
                ie.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                );
            }
            ((x = l.sendPerfReporter) == null || x.postWrittenWireStage(),
              (l.sendPerfReporter = null),
              ($ = l.sendReporter) == null || $.postSuccess(),
              (l.sendReporter = null));
            var le = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(ae);
            if (le.error)
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
                (f || (f = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
                  ),
                )
              );
            var se = le.success.error;
            if (
              se != null &&
              (se ===
                o("WAWebCreateNackFromStanza").NackReason
                  .StaleGroupAddressingMode ||
                se ===
                  o("WAWebCreateNackFromStanza").NackReason.MessageNotAllowed)
            )
              return R(M, e, se);
            yield o("WAWebApiParticipantStore").markHasSenderKey(M, U);
            var ue = le.success,
              ce = ue.addressingMode,
              de = ue.count,
              me = ue.phash;
            return (
              me != null && me !== z
                ? (o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "encryptAndSendSenderKeyMsg: phash mismatch ",
                          " server=",
                          "",
                        ])),
                      w.id,
                      me,
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
                      serverAddressingMode: ce,
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
                : ce != null &&
                  ce !== ne &&
                  o(
                    "WAWebGroupHandleAddressingModeMismatch",
                  ).handleAddressingModeMismatch(M, {
                    localAddressingMode: ne,
                    serverAddressingMode: ce,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                      .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
                  }),
              de != null &&
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .merge(String(N), { count: de }),
              le.success
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
      return t.size === 0
        ? e
        : e.filter(function (e) {
            return !t.has(I(e));
          });
    }
    function k(e) {
      return e.isUser() ? o("WAWebWidFactory").asUserWidOrThrow(e) : e;
    }
    function I(e) {
      return k(e).toString();
    }
    function T(e, t) {
      var n = o("WAWebUserPrefsGeneral").markUserSentMessageToChat(e);
      if (n) {
        var r, a;
        ((r = t.sendPerfReporter) == null || r.setMessageIsFirstUserMessage(!0),
          (a = t.sendReporter) == null || a.setMessageIsFirstUserMessage(!0));
      }
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.configuredGroupAgentParticipants,
            n = e.encMediaType,
            r = e.groupAgentParticipants,
            a = e.isOpenBotGroupSend,
            i = e.isScheduledMessage,
            l = e.msg,
            s = e.msgProtobuf,
            u = e.shouldGateInvokedBot,
            c = o("WAWebMsgGetters").getIsBotFeedbackMessage(l),
            d = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(l),
            m = N({
              configuredGroupAgentParticipants: t,
              groupAgentParticipants: r,
              isBotFeedbackMessage: c,
              isBotRespOrInvocationRevoke: d,
              isOpenBotGroupSend: a,
              msg: l,
              shouldGateInvokedBot: u,
            }),
            p = m[0];
          if (p == null) return [null, !1];
          var _ = m.some(function (e) {
              return e.equals(o("WAWebBotUtils").META_BOT_FBID_WID);
            }),
            f = $(l, m, r),
            g = !f && P(m, r, c, d),
            h = !_ && g;
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
            m.map(function (e) {
              return { msgKey: l.id, receiverId: e };
            }),
          ),
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: [p],
            }));
          var y = yield o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: s,
            messageSecret: l.messageSecret,
            botMessageSecret: l.botMessageSecret,
            hasGroupAgentTarget: g,
            hasOpenBotTarget: _,
            isGroupAgentParticipantSend: h,
            isOpenBotGroup:
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && a,
            mentionedJidList: g && !_ ? null : l.mentionedJidList,
          });
          (p.isFbidBot() &&
            (y = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(y)),
            d &&
              p.isFbidBot() &&
              (y = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(y)));
          var C = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              p,
              0,
              y,
              l,
              0,
            ),
            b = C.ciphertext,
            v = C.type,
            S = null;
          g &&
            (S = i ? n : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(y));
          var R = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(v),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(S),
              },
              b,
            ),
            L =
              m.length === 1
                ? [
                    o("WAWap").wap(
                      "to",
                      { jid: o("WAWebCommsWapMd").DEVICE_JID(p) },
                      R,
                    ),
                  ]
                : [].concat(
                    m.map(function (e) {
                      return o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(e),
                      });
                    }),
                    [R],
                  ),
            E = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
              a || h,
              null,
              l,
            ),
            k = o("WAWap").wap(
              "bot",
              {
                type: c ? "feedback" : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  E != null
                    ? o("WAWap").CUSTOM_STRING(E)
                    : o("WAWap").DROP_ATTR,
              },
              L,
            );
          return [k, v === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg];
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      var r = A(e.invokedBotWid);
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
    function P(e, t, n, r) {
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
    function N(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.isBotFeedbackMessage,
        a = e.isBotRespOrInvocationRevoke,
        i = e.isOpenBotGroupSend,
        l = e.msg,
        s = e.shouldGateInvokedBot;
      if (r) {
        var u = M(l, r, a);
        return u == null ? [] : [u];
      }
      var c = new Map();
      if (a) {
        var d = M(l, r, a);
        return (
          d != null && c.set(d.toString(), d),
          n.forEach(function (e) {
            c.set(e.toString(), e);
          }),
          Array.from(c.values())
        );
      }
      var m = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i;
      m &&
        c.set(
          o("WAWebBotUtils").META_BOT_FBID_WID.toString(),
          o("WAWebBotUtils").META_BOT_FBID_WID,
        );
      var p = w({
        configuredGroupAgentParticipants: t,
        groupAgentParticipants: n,
        msg: l,
        shouldGateInvokedBot: s,
      });
      return (
        p != null &&
          (n.some(function (e) {
            return e.equals(p);
          }) ||
            !m) &&
          c.set(p.toString(), p),
        n.forEach(function (e) {
          e.isBot() && c.set(e.toString(), e);
        }),
        Array.from(c.values())
      );
    }
    function M(e, t, n) {
      if (t) {
        var r;
        return A((r = e.protocolMessageKey) == null ? void 0 : r.participant);
      }
      return n ? A(e.botRespOrInvocationRevokeBotWid) : null;
    }
    function w(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.msg,
        o = e.shouldGateInvokedBot,
        a = A(r.invokedBotWid);
      return a == null
        ? null
        : n.some(function (e) {
              return e.equals(a);
            })
          ? a
          : o ||
              t.some(function (e) {
                return e.equals(a);
              })
            ? null
            : a;
    }
    function A(e) {
      return e != null && e.isBot() ? e : null;
    }
    ((l.encryptAndSendSenderKeyMsg = v), (l.createBotFanoutNode = D));
  },
  98,
);
