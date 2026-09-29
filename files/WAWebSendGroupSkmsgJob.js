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
    function y(e, t, n, r, o, a, i, l, s) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, u) {
            var c,
              d,
              m,
              p,
              _,
              f =
                o("WAWebBotBaseGating").isBotEnabled() &&
                ((c = e.invokedBotWid) == null ? void 0 : c.isBot()) === !0,
              g =
                o("WAWebBotBaseGating").isBotEnabled() &&
                o("WAWebMsgGetters").getIsBotFeedbackMessage(e),
              h = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(e),
              y =
                i.isCag === !0 || i.isAnnouncementGroup === !0
                  ? []
                  : (d = i.groupAgentParticipants) != null
                    ? d
                    : [],
              C =
                y.length === 0
                  ? []
                  : yield o(
                      "WAWebResolveGroupAgentParticipants",
                    ).resolveGroupAgentFanoutParticipants(y),
              b = e.invokedBotWid;
            (m = l.sendPerfReporter) == null || m.startClientEncryptStage();
            var v = o("WAWebSendMsgCommonApi").encodeAndPad(a),
              S =
                (u == null ? void 0 : u.kind) === "schedule"
                  ? u.originalMediaType
                  : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a),
              R = yield o("WAWebEncryptMsgProtobuf").encryptMsgSenderKey(
                e,
                t,
                v,
                i,
              ),
              L = R.ciphertext,
              E = R.senderKeyBytes,
              k;
            (n.length > 0 &&
              (k = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(e, t, n, E, !1)),
              (p = l.sendPerfReporter) == null || p.postClientEncryptStage());
            var I = null,
              T = !1;
            k && k.length > 0 && !g
              ? (I = o("WAWap").wap(
                  "participants",
                  null,
                  k.map(function (e) {
                    var t = e.ciphertext,
                      n = e.participant,
                      r = e.type;
                    r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                      (T = !0);
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
                (I = o("WAWap").wap(
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
            var x = g
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
                      ).encodeMaybeMediaType(S),
                      "decrypt-fail": o(
                        "WAWebBackendJobsCommon",
                      ).encodeMaybeDecryptFail(
                        o(
                          "WAWebE2EProtoUtils",
                        ).decryptFailAttributeFromProtobuf(a),
                      ),
                    },
                    L,
                  ),
              $ = null,
              P =
                f &&
                b != null &&
                !o("WAWebBotUtils").isAnyMetaAiBot(b) &&
                (yield o(
                  "WAWebResolveGroupAgentParticipants",
                ).isGroupAgentProfile(b)),
              N = C.length > 0,
              M =
                f ||
                g ||
                h ||
                (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                  i.isOpenBotGroup === !0) ||
                N
                  ? yield D({
                      configuredGroupAgentParticipants: y,
                      groupAgentParticipants: C,
                      isOpenBotGroupSend:
                        (_ = i.isOpenBotGroup) != null ? _ : !1,
                      msg: e,
                      msgProtobuf: a,
                      shouldGateInvokedBot: P,
                    })
                  : [null, !1],
              w = M[0],
              A = M[1];
            if (T || A) {
              var F = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              $ = o("WAWap").wap("device-identity", null, F);
            }
            return {
              keyDistributionMsg: I,
              skeyEncryptedGroupMsg: x,
              identityNode: $,
              botMsgNode: w,
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
              D,
              x,
              $ = e.data,
              P = $.id,
              N = $.to,
              M = e.data;
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendSenderKeyMsg: sending ",
                    "",
                  ])),
                P,
              )
              .tags("messaging");
            var w = P.id,
              A = a.rotateKey,
              F = a.skDistribList,
              O = a.skList,
              B = ((h = i.groupAgentParticipants) != null ? h : []).map(k),
              W = new Set(B.map(I)),
              q = E(F, W),
              U = E(O, W);
            (T(N, l),
              (C = l.sendPerfReporter) == null ||
                C.setSenderKeyDistributionCount(q.length));
            var V = U.concat(q),
              H = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              G = yield o("WAWebPhashUtils").phashV2(
                [].concat(V, [H], B),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  i.isOpenBotGroup === !0,
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  i.isTeeBotGroup === !0,
              ),
              z = o("WAWebMsgGetters").getIsBotFeedbackMessage(M);
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              V.map(function (e) {
                return { msgKey: P, receiverId: e };
              }),
            ),
              A &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(N, H)),
              yield g({ groupData: i, metricReporter: l, skDistribList: q }));
            var j = yield y(M, N, q, U, t, i, l, p, _),
              K = j.botMsgNode,
              Q = j.identityNode,
              X = j.keyDistributionMsg,
              Y = j.skeyEncryptedGroupMsg,
              J =
                p == null
                  ? void 0
                  : p.get(
                      o("WAWebWidToJid").widToUserJid(
                        o("WAWebWidFactory").asUserWidOrThrow(H),
                      ),
                    ),
              Z =
                J != null
                  ? o("WAWap").wap("sender_content_binding", null, J)
                  : null,
              ee =
                i.isLidAddressingMode === !0
                  ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
                  : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn,
              te = yield o(
                "WAWebReportingTokenUtils",
              ).genReportingTokenBodyForStanza(M, t, P.toString()),
              ne = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(w),
                  to: o("WAWebCommsWapMd").CHAT_JID(N),
                  phash: z ? o("WAWap").DROP_ATTR : o("WAWap").CUSTOM_STRING(G),
                  type:
                    (v = _ == null ? void 0 : _.originalStanzaType) != null
                      ? v
                      : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(t, M.subtype),
                  addressing_mode: o("WAWap").CUSTOM_STRING(ee),
                },
                X,
                Y,
                Q,
                b(t, e),
                o("WAWebSendMsgMetaNode").genMetaNode({
                  chatId: N,
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
                K,
                Z,
                te,
              );
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, V),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (S = l.sendPerfReporter) == null || S.postReadyToSendStage(),
              (L = l.sendPerfReporter) == null || L.startWrittenWireStage(),
              n("cr:10199") == null || n("cr:10199").printEncNode(t));
            var re = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              ne,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: w,
                class: "message",
                from: N,
                participant: null,
              }),
            );
            if (X) {
              var oe;
              (oe = l.sendReporter) == null ||
                oe.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                );
            }
            ((D = l.sendPerfReporter) == null || D.postWrittenWireStage(),
              (l.sendPerfReporter = null),
              (x = l.sendReporter) == null || x.postSuccess(),
              (l.sendReporter = null));
            var ae = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(re);
            if (ae.error)
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendSenderKeyMsg: invalid ack from server for ",
                        "",
                      ])),
                    M.id,
                  )
                  .tags("messaging"),
                (f || (f = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server",
                  ),
                )
              );
            var ie = ae.success.error;
            if (
              ie != null &&
              (ie ===
                o("WAWebCreateNackFromStanza").NackReason
                  .StaleGroupAddressingMode ||
                ie ===
                  o("WAWebCreateNackFromStanza").NackReason.MessageNotAllowed)
            )
              return R(N, e, ie);
            yield o("WAWebApiParticipantStore").markHasSenderKey(N, q);
            var le = ae.success,
              se = le.addressingMode,
              ue = le.count,
              ce = le.phash;
            return (
              ce != null && ce !== G
                ? (o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "encryptAndSendSenderKeyMsg: phash mismatch ",
                          " server=",
                          "",
                        ])),
                      M.id,
                      ce,
                    )
                    .tags("messaging"),
                  o("WAWebResendGroupMsg")
                    .resendPersistedGroupMsgWrapper({
                      isDirect: !1,
                      msgRecord: e,
                      msgProtobuf: t,
                      oldList: V,
                      ackTime: o("WATimeUtils").unixTime(),
                      groupData: i,
                      metricReporter: l,
                      serverAddressingMode: se,
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
                : se != null &&
                  se !== ee &&
                  o(
                    "WAWebGroupHandleAddressingModeMismatch",
                  ).handleAddressingModeMismatch(N, {
                    localAddressingMode: ee,
                    serverAddressingMode: se,
                    mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                      .MISMATCH_ORIGIN_TYPE.ACK_OUTGOING_MESSAGE,
                  }),
              ue != null &&
                o("WAWebSchemaMessage")
                  .getMessageTable()
                  .merge(String(P), { count: ue }),
              ae.success
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
            n = e.groupAgentParticipants,
            r = e.isOpenBotGroupSend,
            a = e.msg,
            i = e.msgProtobuf,
            l = e.shouldGateInvokedBot,
            s = o("WAWebMsgGetters").getIsBotFeedbackMessage(a),
            u = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(a),
            c = N({
              configuredGroupAgentParticipants: t,
              groupAgentParticipants: n,
              isBotFeedbackMessage: s,
              isBotRespOrInvocationRevoke: u,
              isOpenBotGroupSend: r,
              msg: a,
              shouldGateInvokedBot: l,
            }),
            d = c[0];
          if (d == null) return [null, !1];
          var m = c.some(function (e) {
              return e.equals(o("WAWebBotUtils").META_BOT_FBID_WID);
            }),
            p = $(a, n),
            _ = !m && !p && P(c, n, s, u);
          (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
            c.map(function (e) {
              return { msgKey: a.id, receiverId: e };
            }),
          ),
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: [d],
            }));
          var f = yield o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: i,
            messageSecret: a.messageSecret,
            botMessageSecret: a.botMessageSecret,
            isGroupAgentParticipantSend: _,
            isOpenBotGroup:
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && r,
            mentionedJidList: _ ? null : a.mentionedJidList,
          });
          (d.isFbidBot() &&
            (f = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(f)),
            u &&
              d.isFbidBot() &&
              (f = o("WAWebE2EProtoGenerator").updateFbidBotInvokeProtobuf(f)));
          var g = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              d,
              0,
              f,
              a,
              0,
            ),
            h = g.ciphertext,
            y = g.type,
            C = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(y),
              },
              h,
            ),
            b =
              c.length === 1
                ? [
                    o("WAWap").wap(
                      "to",
                      { jid: o("WAWebCommsWapMd").DEVICE_JID(d) },
                      C,
                    ),
                  ]
                : [].concat(
                    c.map(function (e) {
                      return o("WAWap").wap("to", {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(e),
                      });
                    }),
                    [C],
                  ),
            v = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(
              r || (_ && !p),
              null,
              a,
            ),
            S = o("WAWap").wap(
              "bot",
              {
                type: s ? "feedback" : o("WAWap").DROP_ATTR,
                agent_engagement_type:
                  v != null
                    ? o("WAWap").CUSTOM_STRING(v)
                    : o("WAWap").DROP_ATTR,
              },
              b,
            );
          return [S, y === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg];
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      var n = A(e.invokedBotWid);
      return (
        n != null &&
        !t.some(function (e) {
          return e.equals(n);
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
      if (r || a) {
        var u = M(l, r, a);
        return u == null ? [] : [u];
      }
      var c = new Map(),
        d = o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && i;
      d &&
        c.set(
          o("WAWebBotUtils").META_BOT_FBID_WID.toString(),
          o("WAWebBotUtils").META_BOT_FBID_WID,
        );
      var m = w({
        configuredGroupAgentParticipants: t,
        groupAgentParticipants: n,
        msg: l,
        shouldGateInvokedBot: s,
      });
      return (
        m != null &&
          (n.some(function (e) {
            return e.equals(m);
          }) ||
            !d) &&
          c.set(m.toString(), m),
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
    l.encryptAndSendSenderKeyMsg = v;
  },
  98,
);
