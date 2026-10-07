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
    "WAWebBotTos",
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
            l = e.skDistribList;
          if (
            ((t = i.sendPerfReporter) == null || t.startPrekeysFetchStage(),
            (n = i.sendPerfReporter) == null || n.setFetchedPrekeyCount(0),
            l.length > 0)
          )
            try {
              var u,
                c = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                  wids: l,
                });
              ((u = i.sendPerfReporter) == null ||
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
                  l.length,
                  e,
                )
                .tags("messaging");
            }
          (r = i.sendPerfReporter) == null || r.postPrekeysFetchStage();
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o, a, i, l, s, u) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              b = x(e, i),
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
              D = !1;
            I && I.length > 0 && !g
              ? (T = o("WAWap").wap(
                  "participants",
                  null,
                  I.map(function (e) {
                    var t = e.ciphertext,
                      n = e.participant,
                      r = e.type;
                    r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                      (D = !0);
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
            var P = g
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
              N = null,
              M =
                f &&
                v != null &&
                !o("WAWebBotUtils").isAnyMetaAiBot(v) &&
                (yield o(
                  "WAWebResolveGroupAgentParticipants",
                ).isGroupAgentProfile(v)),
              w = C.length > 0,
              A =
                !b &&
                (f ||
                  g ||
                  h ||
                  (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                    i.isOpenBotGroup === !0) ||
                  w)
                  ? yield $({
                      configuredGroupAgentParticipants: y,
                      encMediaType: R,
                      groupAgentParticipants: C,
                      isOpenBotGroupSend:
                        (_ = i.isOpenBotGroup) != null ? _ : !1,
                      isScheduledMessage:
                        (u == null ? void 0 : u.kind) === "schedule",
                      msg: e,
                      msgProtobuf: a,
                      shouldGateInvokedBot: M,
                    })
                  : [null, !1],
              F = A[0],
              O = A[1];
            if (D || O) {
              var B = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              N = o("WAWap").wap("device-identity", null, B);
            }
            return {
              keyDistributionMsg: T,
              skeyEncryptedGroupMsg: P,
              identityNode: N,
              botMsgNode: F,
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
    function S(e, t, n, r, o, a, i, l) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, _, f) {
            var y,
              b,
              S,
              R,
              E,
              x,
              $,
              P = e.data,
              N = P.id,
              M = P.to,
              w = e.data;
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
              W = ((y = i.groupAgentParticipants) != null ? y : []).map(I),
              q = new Set(W.map(T)),
              U = k(O, q),
              V = k(B, q);
            (D(M, l),
              (b = l.sendPerfReporter) == null ||
                b.setSenderKeyDistributionCount(U.length));
            var H = V.concat(U),
              G = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              z = yield o("WAWebPhashUtils").phashV2(
                [].concat(H, [G], W),
                o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
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
              yield h({ groupData: i, metricReporter: l, skDistribList: U }));
            var K =
                f != null
                  ? f
                  : yield o(
                      "WAWebResolveGroupAgentParticipants",
                    ).resolveGroupAgentFanoutForGroupSend(i),
              Q = yield C(w, M, U, V, t, i, l, s, _, K),
              X = Q.botMsgNode,
              Y = Q.identityNode,
              J = Q.keyDistributionMsg,
              Z = Q.skeyEncryptedGroupMsg,
              ee =
                s == null
                  ? void 0
                  : s.get(
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
                v(t, e),
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
              (R = l.sendPerfReporter) == null || R.postReadyToSendStage(),
              (E = l.sendPerfReporter) == null || E.startWrittenWireStage(),
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
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendSenderKeyMsg: invalid ack from server for ",
                        "",
                      ])),
                    w.id,
                  )
                  .tags("messaging"),
                (g || (g = n("Promise"))).reject(
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
              return L(M, e, se);
            yield o("WAWebApiParticipantStore").markHasSenderKey(M, U);
            var ue = le.success,
              ce = ue.addressingMode,
              de = ue.count,
              me = ue.phash;
            return (
              me != null && me !== z
                ? (o("WALogger")
                    .LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
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
            a === o("WAWebCreateNackFromStanza").NackReason.MessageNotAllowed
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
            a = e.isOpenBotGroupSend,
            i = e.isScheduledMessage,
            l = e.msg,
            s = e.msgProtobuf,
            u = e.shouldGateInvokedBot,
            c = o("WAWebMsgGetters").getIsBotFeedbackMessage(l),
            d = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(l),
            m = w({
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
            f = N(l, m, r),
            g = M(m, r, c, d),
            h = !_ && !f && g,
            y =
              a &&
              (yield o(
                "WAWebResolveGroupAgentParticipants",
              ).hasMuseNoticeGroupAgent(t));
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
          var C = yield o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: s,
            messageSecret: l.messageSecret,
            botMessageSecret: l.botMessageSecret,
            groupHasMuseAgent: y,
            hasGroupAgentTarget: g,
            hasOpenBotTarget: _,
            isGroupAgentParticipantSend: h,
            isGroupMsg: !0,
            isOpenBotGroup:
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && a,
            mentionedJidList: h ? null : l.mentionedJidList,
          });
          (p.isFbidBot() &&
            (C = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(C)),
            d &&
              p.isFbidBot() &&
              (C = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(C)));
          var b = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              p,
              0,
              C,
              l,
              0,
            ),
            v = b.ciphertext,
            S = b.type,
            R = null;
          (g || y) &&
            (R = i ? n : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(C));
          var L = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(S),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(R),
              },
              v,
            ),
            E =
              m.length === 1
                ? [
                    o("WAWap").wap(
                      "to",
                      { jid: o("WAWebCommsWapMd").DEVICE_JID(p) },
                      L,
                    ),
                  ]
                : [].concat(
                    m.map(function (e) {
                      return o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(e),
                      });
                    }),
                    [L],
                  ),
            k = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
              a || h,
              null,
              l,
            ),
            I = o("WAWap").wap(
              "bot",
              {
                type: c ? "feedback" : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  k != null
                    ? o("WAWap").CUSTOM_STRING(k)
                    : o("WAWap").DROP_ATTR,
              },
              E,
            );
          return [I, S === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg];
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      var r = B(e.invokedBotWid);
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
    function M(e, t, n, r) {
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
    function w(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.isBotFeedbackMessage,
        a = e.isBotRespOrInvocationRevoke,
        i = e.isOpenBotGroupSend,
        l = e.msg,
        s = e.shouldGateInvokedBot;
      if (r) {
        var u = F(l, r, a);
        return u == null ? [] : [u];
      }
      var c = new Map();
      if (a) {
        var d = F(l, r, a);
        return (
          d != null && c.set(d.toString(), d),
          n.forEach(function (e) {
            c.set(e.toString(), e);
          }),
          Array.from(c.values())
        );
      }
      var m = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i,
        p = !m || A(l),
        _ = m && p;
      _ &&
        c.set(
          o("WAWebBotUtils").META_BOT_FBID_WID.toString(),
          o("WAWebBotUtils").META_BOT_FBID_WID,
        );
      var f = O({
        configuredGroupAgentParticipants: t,
        groupAgentParticipants: n,
        msg: l,
        shouldGateInvokedBot: s,
      });
      return (
        f != null &&
          (n.some(function (e) {
            return e.equals(f);
          }) ||
            !m) &&
          c.set(f.toString(), f),
        n.forEach(function (e) {
          e.isBot() && c.set(e.toString(), e);
        }),
        p || c.delete(o("WAWebBotUtils").META_BOT_FBID_WID.toString()),
        Array.from(c.values())
      );
    }
    function A(t) {
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
    function F(e, t, n) {
      if (t) {
        var r;
        return B((r = e.protocolMessageKey) == null ? void 0 : r.participant);
      }
      return n ? B(e.botRespOrInvocationRevokeBotWid) : null;
    }
    function O(e) {
      var t = e.configuredGroupAgentParticipants,
        n = e.groupAgentParticipants,
        r = e.msg,
        o = e.shouldGateInvokedBot,
        a = B(r.invokedBotWid);
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
    function B(e) {
      return e != null && e.isBot() ? e : null;
    }
    ((l.encryptAndSendSenderKeyMsg = S), (l.createBotFanoutNode = $));
  },
  98,
);
