__d(
  "WAWebHandleMsg",
  [
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebApiContact",
    "WAWebCoexV2GatingUtils",
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
    "WAWebPostIncomingMessageDropMetric",
    "WAWebProcessMsgInfoForLid",
    "WAWebSessionScope",
    "WAWebSetUsernameJob",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            f = l === void 0 ? !1 : l,
            g = i.isStatusStanza,
            y = g === void 0 ? !1 : g,
            S = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (S.error)
            return C(
              t,
              o("WAWebHandleMsgUnparsableStanza").handleUnparsableMsgStanza(
                t,
                S.error,
              ),
              y,
            );
          var R = S.success;
          (f && (R.msgMeta.isGroupStatus = !0),
            y && (R.msgMeta.isStatusStanza = !0),
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
              n("cr:4122").isNextMessagePostponed(t, h, {
                isGroupStatusStanza: f,
                isStatusStanza: y,
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
              var i = I.metaFrom;
              if (
                i != null &&
                o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(I.author, i) &&
                !o("WAWebUserPrefsMeUser").isMeAccount(i)
              ) {
                var l = yield v(t, I, i, y);
                if (l != null) return l.response;
              }
              var g = o(
                "WAWebCoexV2UsernameInfoUpdate",
              ).maybeGetCoexV2UsernameInfoUpdatePlan(I, T);
              if (
                (yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid(
                  { msgInfo: I, msgMeta: T },
                ),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
              ) {
                var C = [];
                if (
                  I.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                ) {
                  var S = o(
                    "WAWebSetUsernameJob",
                  ).maybeCreateSetUsernameInfoJobArg({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(I.author),
                    username: I.participantUsername,
                  });
                  S && C.push(S);
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
                    n && C.push(n);
                  });
                else if (
                  I.type ===
                  o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST
                ) {
                  var x,
                    P =
                      I.participantLid ||
                      ((x = I.participant) != null && x.isLid())
                        ? I.participant
                        : null,
                    N = P
                      ? o(
                          "WAWebSetUsernameJob",
                        ).maybeCreateSetUsernameInfoJobArg({
                          userId: o("WAWebWidFactory").asUserWidOrThrow(P),
                          username: I.participantUsername,
                        })
                      : null;
                  N && C.push(N);
                } else {
                  var M, w;
                  if (g == null) {
                    var A = o("WAWebWidFactory").asUserWidOrThrow(I.author);
                    if (I.username == null && I.senderPn != null && A.isLid()) {
                      var F;
                      C.push({
                        userId: A,
                        deleteUsername: !0,
                        usernameCountryCode:
                          (F = I.senderCountryCode) != null ? F : void 0,
                      });
                    } else {
                      var O = o(
                        "WAWebSetUsernameJob",
                      ).maybeCreateSetUsernameInfoJobArg({
                        userId: A,
                        username: I.username,
                        usernameCountryCode: I.senderCountryCode,
                      });
                      O && C.push(O);
                    }
                    (I.peerRecipientLid
                      ? (w = o("WAWebWidFactory").asUserWidOrThrow(
                          I.peerRecipientLid,
                        ))
                      : I.chat.isLid() &&
                        (w = o("WAWebWidFactory").asUserWidOrThrow(I.chat)),
                      (M = I.peerRecipientUsername));
                  } else {
                    var B, W;
                    (g.usernameInfoUpdate != null &&
                      C.push(g.usernameInfoUpdate),
                      (w =
                        (B = g.peerRecipientUsernameInfo) == null
                          ? void 0
                          : B.userId),
                      (M =
                        (W = g.peerRecipientUsernameInfo) == null
                          ? void 0
                          : W.username));
                  }
                  var q = o(
                    "WAWebSetUsernameJob",
                  ).maybeCreateSetUsernameInfoJobArg({
                    userId: w,
                    username: M,
                  });
                  q && C.push(q);
                }
                if (C.length > 0)
                  try {
                    var U = yield o("WAWebSetUsernameJob").setUsernamesJob(C);
                    yield o(
                      "WAWebInsertUsernameChangeSystemMsg",
                    ).maybeInsertUsernameChangeSystemMsgs(C, U, "handleMsg");
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
              var V = o("WAWebMsgProcessingApiUtils").messageInfoToKey(I);
              if (
                (E != null &&
                  E.length > 0 &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(V.toString(), E, !1),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Stored ",
                          " reporting tokens for bundle ",
                          "",
                        ])),
                      E.length,
                      V.toString(),
                    )
                    .tags("messaging", "wa-ice", "group-history")),
                T.isUnavailable)
              ) {
                (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                  msgKey: V,
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
                var H = o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT;
                return (
                  k != null
                    ? (H = o("WAWebHandleMsgTypes.flow").PlaceholderType
                        .BOT_UNAVAILABLE_FANOUT)
                    : T.isHostedMsgUnavailable === !0
                      ? (H = o("WAWebHandleMsgTypes.flow").PlaceholderType
                          .HOSTED_UNAVAILABLE_FANOUT)
                      : T.isViewOnceUnavailable === !0
                        ? (H = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .VIEW_ONCE_UNAVAILABLE_FANOUT)
                        : T.isAcpUnavailable === !0 &&
                          (H = o("WAWebHandleMsgTypes.flow").PlaceholderType
                            .ACP_UNAVAILABLE_FANOUT),
                  yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: T,
                    msgInfo: I,
                    placeholderType: H,
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
                  : n("cr:4122").consumeSkipDecryptRequest(t, h, {
                      isGroupStatusStanza: f,
                      isStatusStanza: y,
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
              var G = o("WAWebMsgProcessingApiUtils").getFrom(I),
                z = o(
                  "WAWebStatusSessionGatingUtils",
                ).isIncomingStatusSessionContext({
                  from: G,
                  isGroupStatus: T.isGroupStatus,
                  metaSessionScope: T.metaSessionScope,
                }),
                j;
              if (
                (z
                  ? (j = o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      T.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0)
                  : L.some(function (e) {
                      return e.sessionType === "pq";
                    }) && (j = o("WAWebSessionScope").SessionScope.PQ),
                G.isStatus() || T.isGroupStatus === !0)
              ) {
                var K;
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
                    j != null ? j : o("WAWebSessionScope").SessionScope.DEFAULT,
                    (K = T.metaSessionScope) != null ? K : "none",
                  )
                  .tags("messaging");
              }
              var Q = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
                R,
                o("WAWebHandleMsgProcess").processDecryptedMessageProto,
                j,
                {
                  awaitMessageWrites:
                    o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                    "one_queue",
                },
              );
              if (
                Q.result ===
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.DEFERRED
              )
                return (
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: V,
                    stanzaId: I.externalId,
                    msgTs: I.ts,
                    incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                  }),
                  yield o(
                    "WAWebHandleDeferredBotOrphan",
                  ).handleDeferredBotOrphan({
                    canNack: b(R),
                    decryptResult: Q,
                    input: R,
                    node: t,
                  }),
                  null
                );
              (I.offline != null &&
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.processMessageDecryptResult(Q.result),
                Q.result !==
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: V,
                    stanzaId: I.externalId,
                    msgTs: I.ts,
                    incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                  }));
              var X =
                Q.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS &&
                o(
                  "WAWebGroupAgentReceipts",
                ).shouldSendGroupAgentDeliveryReceipt(R);
              return (
                Q.result ===
                  o("WAWebHandleMsgTypes.flow").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR && b(R)
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
                              enc: Q.failedEnc || L[0],
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
                      X ||
                      (Q.result !==
                        o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .SUCCESS &&
                        Q.result !==
                          o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .SIGNAL_OLD_COUNTER_ERROR)
                    ? o("WAWebMessageReceiveFlow")
                        .trackMessageReceiveReceipt(
                          $,
                          o("WAWebHandleMsgSendReceipt").sendReceipt(I, T, Q, {
                            canNack: b(R),
                            sendsGroupAgentDeliveryReceipt: X,
                          }),
                          Q.result,
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
                                ).getDeliveryReceiptClass(G, T),
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
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return o("WAWebCreateNackFromStanza").createNackFromStanza(
        n ? new (o("WAWap").WapNode)("status", e.attrs, e.content) : e,
        t,
      );
    }
    function b(e) {
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
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i;
            try {
              var l;
              i =
                (l = yield o("WAWebApiContact").getContactRecord(n)) == null
                  ? void 0
                  : l.isHosted;
            } catch (n) {
              return (
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] failed to read peer hosted state",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("coexv2-peer-hosted-state-read-failed"),
                o(
                  "WAWebPostIncomingMessageDropMetric",
                ).postIncomingMessageDropDBOperationFailed(e),
                R(t.offline),
                {
                  response: C(
                    e,
                    o("WAWebCreateNackFromStanza").NackReason.DBOperationFailed,
                    a,
                  ),
                }
              );
            }
            return i === !1
              ? (o("WALogger")
                  .WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] relay dropped: peer is not hosted",
                      ])),
                  )
                  .sendLogs("coexv2-relay-peer-not-hosted"),
                o(
                  "WAWebPostIncomingMessageDropMetric",
                ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                  e,
                  o("WAWebMsgProcessingApiUtils").getFrom(t),
                ),
                R(t.offline),
                {
                  response: C(
                    e,
                    o("WAWebCreateNackFromStanza").NackReason
                      .InvalidHostedCompanionStanza,
                    a,
                  ),
                })
              : null;
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
        );
    }
    l.default = h;
  },
  98,
);
