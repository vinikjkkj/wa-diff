__d(
  "WAWebHandleMsg",
  [
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebCoexV2PeerRelayAdmission",
    "WAWebCoexV2UsernameInfoUpdate",
    "WAWebCreateNackFromStanza",
    "WAWebDBReportingTokenUtils",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebGetMessageCache",
    "WAWebGroupAgentReceipts",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebHandleDeferredBotOrphan",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgUnparsableStanza",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebMaybePostOfflineCountTooHighMetric",
    "WAWebMessageQueue",
    "WAWebMessageQueueImpl",
    "WAWebMessageQueueTimeout",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptApi",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPaymentsODS",
    "WAWebProcessMsgInfoForLid",
    "WAWebSessionScope",
    "WAWebSetUsernameJob",
    "WAWebStatusSessionGatingUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            g = l === void 0 ? !1 : l,
            b = i.isStatusStanza,
            v = b === void 0 ? !1 : b,
            S = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (S.error)
            return h(
              t,
              o("WAWebHandleMsgUnparsableStanza").handleUnparsableMsgStanza(
                t,
                S.error,
              ),
              v,
            );
          var R = S.success;
          (g && (R.msgMeta.isGroupStatus = !0),
            v && (R.msgMeta.isStatusStanza = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(R),
            R.dehydratedPaymentNode === "pay"
              ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
              : R.dehydratedPaymentNode === "transaction" &&
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
          var L = R.encs,
            E = R.ghsReportingTokenInfos,
            k = R.msgBotInfo,
            I = R.msgInfo,
            T = R.msgMeta;
          ((I.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            I.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var D = 1;
          if (
            (o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete R.msgInfo.offline,
            n("cr:4122") != null &&
              n("cr:4122").isNextMessagePostponed(t, f, {
                isGroupStatusStanza: g,
                isStatusStanza: v,
              }))
          )
            return (
              o("WAWebHandleMsgSendReceipt").sendReceipt(R.msgInfo, R.msgMeta, {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
              }),
              null
            );
          var x = !!R.msgInfo.offline,
            $ = I.externalId;
          return o("WAWebMessageReceiveFlow").trackMessageReceive(
            {
              chatType: I.type,
              isOffline: x,
              queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
              queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              stanzaId: $,
              stanzaType: T.type,
            },
            function (e) {
              return o("WAWebMessageQueue")
                .onMessageQueue({
                  chatWid: I.chat,
                  isOffline: x,
                  msgCategory: I.category,
                  action: e,
                })
                .catch(function (e) {
                  return o(
                    "WAWebMessageQueueTimeout",
                  ).handleMessageQueueTimeout(e, "msg");
                });
            },
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var a;
              (o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleMsg: chat=",
                      " id=",
                      " offline=",
                      "",
                    ])),
                  I.chat.toLogString(),
                  I.externalId,
                  (a = I.offline) != null ? a : "",
                )
                .tags("messaging"),
                (I.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs()));
              var i = o(
                "WAWebCoexV2PeerRelayAdmission",
              ).getCoexV2PeerRelaySender(I);
              if (i != null) {
                var l = yield o(
                  "WAWebCoexV2PeerRelayAdmission",
                ).checkCoexV2PeerRelayAdmission(t, I, i);
                if (l != null) return (C(I.offline), h(t, l, v));
              }
              var b = o(
                "WAWebCoexV2UsernameInfoUpdate",
              ).maybeGetCoexV2UsernameInfoUpdatePlan(I, T);
              if (
                (yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid(
                  { msgInfo: I, msgMeta: T },
                ),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
              ) {
                var S = [];
                if (
                  I.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                ) {
                  var x = o(
                    "WAWebSetUsernameJob",
                  ).maybeCreateSetUsernameInfoJobArg({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(I.author),
                    username: I.participantUsername,
                  });
                  x && S.push(x);
                } else if (
                  I.type ===
                  o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                )
                  I.bclParticipants.forEach(function (e) {
                    var t,
                      n = o(
                        "WAWebSetUsernameJob",
                      ).maybeCreateSetUsernameInfoJobArg({
                        userId: o("WAWebWidFactory").asUserWidOrThrow(
                          (t = e.peerRecipientLid) != null ? t : e.wid,
                        ),
                        username: e.peerRecipientUsername,
                      });
                    n && S.push(n);
                  });
                else if (
                  I.type ===
                  o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST
                ) {
                  var P,
                    N =
                      I.participantLid ||
                      ((P = I.participant) != null && P.isLid())
                        ? I.participant
                        : null,
                    M = N
                      ? o(
                          "WAWebSetUsernameJob",
                        ).maybeCreateSetUsernameInfoJobArg({
                          userId: o("WAWebWidFactory").asUserWidOrThrow(N),
                          username: I.participantUsername,
                        })
                      : null;
                  M && S.push(M);
                } else {
                  var w, A;
                  if (b == null) {
                    var F = o("WAWebWidFactory").asUserWidOrThrow(I.author);
                    if (I.username == null && I.senderPn != null && F.isLid()) {
                      var O;
                      S.push({
                        userId: F,
                        deleteUsername: !0,
                        usernameCountryCode:
                          (O = I.senderCountryCode) != null ? O : void 0,
                      });
                    } else {
                      var B = o(
                        "WAWebSetUsernameJob",
                      ).maybeCreateSetUsernameInfoJobArg({
                        userId: F,
                        username: I.username,
                        usernameCountryCode: I.senderCountryCode,
                      });
                      B && S.push(B);
                    }
                    (I.peerRecipientLid
                      ? (A = o("WAWebWidFactory").asUserWidOrThrow(
                          I.peerRecipientLid,
                        ))
                      : I.chat.isLid() &&
                        (A = o("WAWebWidFactory").asUserWidOrThrow(I.chat)),
                      (w = I.peerRecipientUsername));
                  } else {
                    var W, q;
                    (b.usernameInfoUpdate != null &&
                      S.push(b.usernameInfoUpdate),
                      (A =
                        (W = b.peerRecipientUsernameInfo) == null
                          ? void 0
                          : W.userId),
                      (w =
                        (q = b.peerRecipientUsernameInfo) == null
                          ? void 0
                          : q.username));
                  }
                  var U = o(
                    "WAWebSetUsernameJob",
                  ).maybeCreateSetUsernameInfoJobArg({
                    userId: A,
                    username: w,
                  });
                  U && S.push(U);
                }
                if (S.length > 0)
                  try {
                    var V = yield o("WAWebSetUsernameJob").setUsernamesJob(S);
                    yield o(
                      "WAWebInsertUsernameChangeSystemMsg",
                    ).maybeInsertUsernameChangeSystemMsgs(S, V, "handleMsg");
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "handleMsg: failed to learn usernames",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .tags("messaging", "username")
                      .sendLogs("handle-msg-username-learning-failed");
                  }
              }
              var H = o("WAWebMsgProcessingApiUtils").messageInfoToKey(I);
              if (
                (E != null &&
                  E.length > 0 &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(H.toString(), E, !1),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Stored ",
                          " reporting tokens for bundle ",
                          "",
                        ])),
                      E.length,
                      H.toString(),
                    )
                    .tags("messaging", "wa-ice", "group-history")),
                T.isUnavailable)
              ) {
                (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                  msgKey: H,
                  stanzaId: I.externalId,
                  msgTs: I.ts,
                  incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                }),
                  o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "handleMessage: msgId::",
                          ", get fanout placeholder",
                        ])),
                      I.externalId,
                    )
                    .tags("messaging"));
                var G = o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT;
                return (
                  k != null
                    ? (G = o("WAWebHandleMsgTypes.flow").PlaceholderType
                        .BOT_UNAVAILABLE_FANOUT)
                    : T.isHostedMsgUnavailable === !0
                      ? (G = o("WAWebHandleMsgTypes.flow").PlaceholderType
                          .HOSTED_UNAVAILABLE_FANOUT)
                      : T.isViewOnceUnavailable === !0
                        ? (G = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .VIEW_ONCE_UNAVAILABLE_FANOUT)
                        : T.isAcpUnavailable === !0 &&
                          (G = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .ACP_UNAVAILABLE_FANOUT),
                  yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: T,
                    msgInfo: I,
                    placeholderType: G,
                  }),
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      $,
                      o("WAWebHandleMsgSendReceipt").sendReceipt(I, T, {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .BACKFILL,
                      }),
                      o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL,
                    )
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "sendReceipt failed for unavailable/backfill message",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("send-receipt-backfill-error", {
                          sampling: 0.01,
                        });
                    }),
                  null
                );
              }
              if (
                (n("cr:4122") == null
                  ? void 0
                  : n("cr:4122").consumeSkipDecryptRequest(t, f, {
                      isGroupStatusStanza: g,
                      isStatusStanza: v,
                    })) === !0
              )
                return (
                  yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: T,
                    msgInfo: I,
                    placeholderType: o("WAWebHandleMsgTypes.flow")
                      .PlaceholderType.E2E,
                  }),
                  o("WAWebHandleMsgSendReceipt")
                    .sendReceipt(I, T, {
                      result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                        .BACKFILL,
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "sendReceipt failed for a debug-held message",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("send-receipt-debug-held-error", {
                          sampling: 0.01,
                        });
                    }),
                  null
                );
              var z = o("WAWebMsgProcessingApiUtils").getFrom(I),
                j = o(
                  "WAWebStatusSessionGatingUtils",
                ).isIncomingStatusSessionContext({
                  from: z,
                  isGroupStatus: T.isGroupStatus,
                  metaSessionScope: T.metaSessionScope,
                }),
                K;
              if (
                (j
                  ? (K = o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      T.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0)
                  : L.some(function (e) {
                      return e.sessionType === "pq";
                    }) && (K = o("WAWebSessionScope").SessionScope.PQ),
                z.isStatus() || T.isGroupStatus === !0)
              ) {
                var Q;
                o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[status-session] grpStatus=",
                        " scope=",
                        " metaScope=",
                        "",
                      ])),
                    String(T.isGroupStatus === !0),
                    K != null ? K : o("WAWebSessionScope").SessionScope.DEFAULT,
                    (Q = T.metaSessionScope) != null ? Q : "none",
                  )
                  .tags("messaging");
              }
              var X = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
                R,
                o("WAWebHandleMsgProcess").processDecryptedMessageProto,
                K,
                {
                  awaitMessageWrites:
                    o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                    "one_queue",
                },
              );
              if (
                X.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
                return (
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: H,
                    stanzaId: I.externalId,
                    msgTs: I.ts,
                    incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                  }),
                  yield o(
                    "WAWebHandleDeferredBotOrphan",
                  ).handleDeferredBotOrphan({
                    canNack: y(R),
                    decryptResult: X,
                    input: R,
                    node: t,
                  }),
                  null
                );
              (I.offline != null &&
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.processMessageDecryptResult(X.result),
                X.result !==
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: H,
                    stanzaId: I.externalId,
                    msgTs: I.ts,
                    incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                  }));
              var Y =
                X.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                o(
                  "WAWebGroupAgentReceipts",
                ).shouldSendGroupAgentDeliveryReceipt(R);
              return (
                X.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR && y(R)
                  ? o("WAWebGetMessageCache")
                      .getMessageCache()
                      .addMessages(
                        [
                          {
                            duplicateMsgReceiptInfo: {
                              externalId: I.externalId,
                              from: o("WAWebMsgProcessingApiUtils").getFrom(I),
                              author: I.author,
                              msgInfo: I,
                              msgMeta: T,
                              enc: X.failedEnc || L[0],
                              hasHideFailEnc: L.some(function (e) {
                                return e.hideFail;
                              }),
                              msgReceivedTimes: D,
                            },
                          },
                        ],
                        I.offline == null,
                      )
                  : I.offline == null ||
                      I.category ===
                        o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
                      o(
                        "WAWebHandleMsgSendReceipt",
                      ).isCoexV2SenderReceiptMessage(I) ||
                      o(
                        "WAWebHandleMsgSendReceipt",
                      ).isCoexV2PeerDeliveryReceiptMessage(I) ||
                      T.type ===
                        o("WAWebHandleMsgCommon").STANZA_MSG_TYPES
                          .medianotify ||
                      Y ||
                      (X.result !==
                        o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .SUCCESS &&
                        X.result !==
                          o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .SIGNAL_OLD_COUNTER_ERROR)
                    ? o("WAWebMessageReceiveFlow")
                        .trackMessageReceiveReceipt(
                          $,
                          o("WAWebHandleMsgSendReceipt").sendReceipt(I, T, X, {
                            canNack: y(R),
                            sendsGroupAgentDeliveryReceipt: Y,
                          }),
                          X.result,
                        )
                        .catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "sendReceipt failed",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("send-receipt-error", { sampling: 0.01 });
                        })
                    : o("WAWebGetMessageCache")
                        .getMessageCache()
                        .addMessages(
                          [
                            {
                              receiptInfo: {
                                externalId: I.externalId,
                                from: o("WAWebMsgProcessingApiUtils").getFrom(
                                  I,
                                ),
                                author: I.author,
                                receiptClass: o(
                                  "WAWebDeliveryReceiptClassUtils",
                                ).getDeliveryReceiptClass(z, T),
                              },
                            },
                          ],
                          !1,
                        ),
                null
              );
            }),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return o("WAWebCreateNackFromStanza").createNackFromStanza(
        n ? new (o("WAWap").WapNode)("status", e.attrs, e.content) : e,
        t,
      );
    }
    function y(e) {
      var t = e.encs,
        n = e.msgMeta,
        r = t.some(function (e) {
          return e.hideFail;
        });
      return r
        ? o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(n) ||
            o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(n)
        : n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text ||
            n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media ||
            n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify ||
            n.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll;
    }
    function C(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
        );
    }
    l.default = f;
  },
  98,
);
