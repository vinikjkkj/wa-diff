__d(
  "WAWebHandleMsg",
  [
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebBoolFunc",
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
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
    "WAWebHandleMsgUnparsableStanza",
    "WAWebIncomingMsgReceiptPlan",
    "WAWebLearnUsernamesFromIncomingMsg",
    "WAWebMaybePostOfflineCountTooHighMetric",
    "WAWebMessageQueue",
    "WAWebMessageQueueImpl",
    "WAWebMessageQueueTimeout",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptApi",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOfflineHandler",
    "WAWebPaymentsODS",
    "WAWebProcessMsgInfoForLid",
    "WAWebSessionScope",
    "WAWebStatusSessionGatingUtils",
    "WAWebUnavailableFanoutPlaceholderType",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferred")("WAWebHandleMsgProcess").__setRef(
        "WAWebHandleMsg",
      );
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            g = l === void 0 ? !1 : l,
            v = i.isStatusStanza,
            S = v === void 0 ? !1 : v,
            R = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (R.error)
            return h(
              t,
              o("WAWebHandleMsgUnparsableStanza").handleUnparsableMsgStanza(
                t,
                R.error,
              ),
              S,
            );
          var L = R.success;
          (g && (L.msgMeta.isGroupStatus = !0),
            S && (L.msgMeta.isStatusStanza = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(L),
            L.dehydratedPaymentNode === "pay"
              ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
              : L.dehydratedPaymentNode === "transaction" &&
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
          var E = L.encs,
            k = L.ghsReportingTokenInfos,
            I = L.msgBotInfo,
            T = L.msgInfo,
            D = L.msgMeta;
          ((T.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            T.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var x = 1;
          if (
            (o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete L.msgInfo.offline,
            n("cr:4122") != null &&
              n("cr:4122").isNextMessagePostponed(t, f, {
                isGroupStatusStanza: g,
                isStatusStanza: S,
              }))
          )
            return (
              o("WAWebHandleMsgSendReceipt").sendReceipt(L.msgInfo, L.msgMeta, {
                result: o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
              }),
              null
            );
          var $ = !!L.msgInfo.offline,
            P = T.externalId,
            N =
              o(
                "WAWebMessageQueue",
              ).isWorkerOnlineMessageQueueTrackingEnabled();
          return o("WAWebMessageReceiveFlow").trackMessageReceive(
            {
              chatType: T.type,
              isOffline: $,
              queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
              queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              stanzaId: P,
              stanzaType: D.type,
            },
            function (e) {
              return o("WAWebMessageQueue")
                .onMessageQueue({
                  chatWid: T.chat,
                  isOffline: $,
                  msgCategory: T.category,
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
                  T.chat.toLogString(),
                  T.externalId,
                  (a = T.offline) != null ? a : "",
                )
                .tags("messaging"),
                (T.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs()));
              var i = o(
                "WAWebCoexV2PeerRelayAdmission",
              ).getCoexV2PeerRelaySender(T);
              if (i != null) {
                var l = yield o(
                  "WAWebCoexV2PeerRelayAdmission",
                ).checkCoexV2PeerRelayAdmission(t, T, i);
                if (l != null) return (b(T.offline), h(t, l, S));
              }
              var v = o(
                "WAWebCoexV2UsernameInfoUpdate",
              ).maybeGetCoexV2UsernameInfoUpdatePlan(T, D);
              yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
                entryPoint: "handle-msg",
                msgInfo: T,
                msgMeta: D,
              });
              var R = o(
                "WAWebLearnUsernamesFromIncomingMsg",
              ).collectUsernameInfoUpdatesFromIncomingMsg(T, v);
              R.length > 0 &&
                (yield o(
                  "WAWebLearnUsernamesFromIncomingMsg",
                ).storeUsernamesLearnedFromIncomingMsg(R));
              var $ = o("WAWebMsgProcessingApiUtils").messageInfoToKey(T);
              if (
                (k != null &&
                  k.length > 0 &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos($.toString(), k, !1),
                  o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Stored ",
                          " reporting tokens for bundle ",
                          "",
                        ])),
                      k.length,
                      $.toString(),
                    )
                    .tags("messaging", "wa-ice", "group-history")),
                D.isUnavailable)
              ) {
                (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                  msgKey: $,
                  stanzaId: T.externalId,
                  msgTs: T.ts,
                  incomingMsgReportingTokenInfo: L.reportingTokenInfo,
                }),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "handleMessage: msgId::",
                          ", get fanout placeholder",
                        ])),
                      T.externalId,
                    )
                    .tags("messaging"));
                var M = o(
                    "WAWebUnavailableFanoutPlaceholderType",
                  ).getUnavailableFanoutPlaceholderType({
                    msgBotInfo: I,
                    msgMeta: D,
                  }),
                  w = yield _.load(),
                  A = w.processPlaceholderMsg;
                return (
                  yield A({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: D,
                    msgInfo: T,
                    placeholderType: M,
                  }),
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      P,
                      o("WAWebHandleMsgSendReceipt").sendReceipt(T, D, {
                        result: o("WAWebHandleMsgTypes").E2EProcessResult
                          .BACKFILL,
                      }),
                      o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL,
                    )
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
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
                      isStatusStanza: S,
                    })) === !0
              ) {
                var F = yield _.load(),
                  O = F.processPlaceholderMsg;
                return (
                  yield O({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: D,
                    msgInfo: T,
                    placeholderType: o("WAWebHandleMsgTypes").PlaceholderType
                      .E2E,
                  }),
                  o("WAWebHandleMsgSendReceipt")
                    .sendReceipt(T, D, {
                      result: o("WAWebHandleMsgTypes").E2EProcessResult
                        .BACKFILL,
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
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
              }
              var B = o("WAWebMsgProcessingApiUtils").getFrom(T),
                W = o(
                  "WAWebStatusSessionGatingUtils",
                ).isIncomingStatusSessionContext({
                  from: B,
                  isGroupStatus: D.isGroupStatus,
                  metaSessionScope: D.metaSessionScope,
                }),
                q;
              if (
                (W
                  ? (q = o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      D.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0)
                  : E.some(function (e) {
                      return e.sessionType === "pq";
                    }) && (q = o("WAWebSessionScope").SessionScope.PQ),
                B.isStatus() || D.isGroupStatus === !0)
              ) {
                var U;
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[status-session] grpStatus=",
                        " scope=",
                        " metaScope=",
                        "",
                      ])),
                    String(D.isGroupStatus === !0),
                    q != null ? q : o("WAWebSessionScope").SessionScope.DEFAULT,
                    (U = D.metaSessionScope) != null ? U : "none",
                  )
                  .tags("messaging");
              }
              var V = yield _.load(),
                H = V.processDecryptedMessageProto,
                G = N ? y($) : r("WAWebNoop");
              if (G == null) return null;
              var z = !1;
              try {
                var j = yield o(
                  "WAWebMsgProcessingDecryptApi",
                ).decryptE2EPayload(L, H, q, {
                  awaitMessageWrites:
                    o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                    "one_queue",
                  deferCheckpointUntilMessageStaged: N,
                });
                if (
                  N &&
                  o("WAWebGetMessageCache")
                    .getMessageCache()
                    .hasCheckpointHoldExpired()
                )
                  return null;
                if (
                  j.result ===
                  o("WAWebHandleMsgTypes").E2EProcessResult.DEFERRED
                )
                  return (
                    G(),
                    o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                      msgKey: $,
                      stanzaId: T.externalId,
                      msgTs: T.ts,
                      incomingMsgReportingTokenInfo: L.reportingTokenInfo,
                    }),
                    yield o(
                      "WAWebHandleDeferredBotOrphan",
                    ).handleDeferredBotOrphan({
                      canNack: C(L),
                      decryptResult: j,
                      input: L,
                      node: t,
                    }),
                    null
                  );
                (T.offline != null &&
                  o(
                    "WAWebOfflineHandler",
                  ).OfflineMessageHandler.processMessageDecryptResult(j.result),
                  j.result !==
                    o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
                    o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                      msgKey: $,
                      stanzaId: T.externalId,
                      msgTs: T.ts,
                      incomingMsgReportingTokenInfo: L.reportingTokenInfo,
                    }));
                var K =
                    j.result ===
                      o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
                    o(
                      "WAWebGroupAgentReceipts",
                    ).shouldSendGroupAgentDeliveryReceipt(L),
                  Q = C(L);
                e: {
                  var X = o(
                    "WAWebIncomingMsgReceiptPlan",
                  ).getIncomingMsgReceiptPlan({
                    canNack: Q,
                    decryptResult: j,
                    msgInfo: T,
                    msgMeta: D,
                    sendsGroupAgentDeliveryReceipt: K,
                  });
                  if (
                    X ===
                    o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                      .AggregateDuplicateCheck
                  ) {
                    o("WAWebGetMessageCache")
                      .getMessageCache()
                      .addMessages(
                        [
                          {
                            duplicateMsgReceiptInfo: {
                              externalId: T.externalId,
                              from: o("WAWebMsgProcessingApiUtils").getFrom(T),
                              author: T.author,
                              msgInfo: T,
                              msgMeta: D,
                              msgBotInfo: I,
                              enc: j.failedEnc || E[0],
                              hasHideFailEnc: E.some(function (e) {
                                return e.hideFail;
                              }),
                              msgReceivedTimes: x,
                            },
                          },
                        ],
                        T.offline == null,
                      );
                    break e;
                  }
                  if (
                    X ===
                    o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                      .SendNow
                  ) {
                    var Y = o("WAWebMessageReceiveFlow")
                      .trackMessageReceiveReceipt(
                        P,
                        o("WAWebHandleMsgSendReceipt").sendReceipt(T, D, j, {
                          canNack: Q,
                          sendsGroupAgentDeliveryReceipt: K,
                        }),
                        j.result,
                      )
                      .then(o("WAWebBoolFunc").returnTrue, function (e) {
                        return (
                          o("WALogger")
                            .ERROR(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "sendReceipt failed",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("send-receipt-error", { sampling: 0.01 }),
                          !1
                        );
                      });
                    N && !(yield Y) && (z = !0);
                    break e;
                  }
                  if (
                    X ===
                    o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                      .AggregateDeliveryReceipt
                  ) {
                    o("WAWebGetMessageCache")
                      .getMessageCache()
                      .addMessages(
                        [
                          {
                            receiptInfo: {
                              externalId: T.externalId,
                              from: o("WAWebMsgProcessingApiUtils").getFrom(T),
                              author: T.author,
                              receiptClass: o(
                                "WAWebDeliveryReceiptClassUtils",
                              ).getDeliveryReceiptClass(B, D),
                            },
                          },
                        ],
                        !1,
                      );
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      X,
                  );
                }
                return null;
              } finally {
                z || G();
              }
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
      return o("WAWebMessageQueue").isWorkerOnlineMessageQueueTrackingEnabled()
        ? o("WAWebGetMessageCache")
            .getMessageCache()
            .holdCheckpointUntilMessageStaged(e)
        : null;
    }
    function C(e) {
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
    function b(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
        );
    }
    l.default = f;
  },
  98,
);
