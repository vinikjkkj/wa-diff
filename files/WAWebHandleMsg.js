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
                result: o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
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
              yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
                msgInfo: I,
                msgMeta: T,
              });
              var S = o(
                "WAWebLearnUsernamesFromIncomingMsg",
              ).collectUsernameInfoUpdatesFromIncomingMsg(I, b);
              S.length > 0 &&
                (yield o(
                  "WAWebLearnUsernamesFromIncomingMsg",
                ).storeUsernamesLearnedFromIncomingMsg(S));
              var x = o("WAWebMsgProcessingApiUtils").messageInfoToKey(I);
              if (
                (E != null &&
                  E.length > 0 &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(x.toString(), E, !1),
                  o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Stored ",
                          " reporting tokens for bundle ",
                          "",
                        ])),
                      E.length,
                      x.toString(),
                    )
                    .tags("messaging", "wa-ice", "group-history")),
                T.isUnavailable)
              ) {
                (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                  msgKey: x,
                  stanzaId: I.externalId,
                  msgTs: I.ts,
                  incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                }),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "handleMessage: msgId::",
                          ", get fanout placeholder",
                        ])),
                      I.externalId,
                    )
                    .tags("messaging"));
                var P = o(
                    "WAWebUnavailableFanoutPlaceholderType",
                  ).getUnavailableFanoutPlaceholderType({
                    msgBotInfo: k,
                    msgMeta: T,
                  }),
                  N = yield _.load(),
                  M = N.processPlaceholderMsg;
                return (
                  yield M({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: T,
                    msgInfo: I,
                    placeholderType: P,
                  }),
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      $,
                      o("WAWebHandleMsgSendReceipt").sendReceipt(I, T, {
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
                      isStatusStanza: v,
                    })) === !0
              ) {
                var w = yield _.load(),
                  A = w.processPlaceholderMsg;
                return (
                  yield A({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: T,
                    msgInfo: I,
                    placeholderType: o("WAWebHandleMsgTypes").PlaceholderType
                      .E2E,
                  }),
                  o("WAWebHandleMsgSendReceipt")
                    .sendReceipt(I, T, {
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
              var F = o("WAWebMsgProcessingApiUtils").getFrom(I),
                O = o(
                  "WAWebStatusSessionGatingUtils",
                ).isIncomingStatusSessionContext({
                  from: F,
                  isGroupStatus: T.isGroupStatus,
                  metaSessionScope: T.metaSessionScope,
                }),
                B;
              if (
                (O
                  ? (B = o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      T.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0)
                  : L.some(function (e) {
                      return e.sessionType === "pq";
                    }) && (B = o("WAWebSessionScope").SessionScope.PQ),
                F.isStatus() || T.isGroupStatus === !0)
              ) {
                var W;
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[status-session] grpStatus=",
                        " scope=",
                        " metaScope=",
                        "",
                      ])),
                    String(T.isGroupStatus === !0),
                    B != null ? B : o("WAWebSessionScope").SessionScope.DEFAULT,
                    (W = T.metaSessionScope) != null ? W : "none",
                  )
                  .tags("messaging");
              }
              var q = yield _.load(),
                U = q.processDecryptedMessageProto,
                V = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
                  R,
                  U,
                  B,
                  {
                    awaitMessageWrites:
                      o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                      "one_queue",
                  },
                );
              if (
                V.result === o("WAWebHandleMsgTypes").E2EProcessResult.DEFERRED
              )
                return (
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: x,
                    stanzaId: I.externalId,
                    msgTs: I.ts,
                    incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                  }),
                  yield o(
                    "WAWebHandleDeferredBotOrphan",
                  ).handleDeferredBotOrphan({
                    canNack: y(R),
                    decryptResult: V,
                    input: R,
                    node: t,
                  }),
                  null
                );
              (I.offline != null &&
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.processMessageDecryptResult(V.result),
                V.result !==
                  o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: x,
                    stanzaId: I.externalId,
                    msgTs: I.ts,
                    incomingMsgReportingTokenInfo: R.reportingTokenInfo,
                  }));
              var H =
                  V.result ===
                    o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
                  o(
                    "WAWebGroupAgentReceipts",
                  ).shouldSendGroupAgentDeliveryReceipt(R),
                G = y(R);
              e: {
                var z = o(
                  "WAWebIncomingMsgReceiptPlan",
                ).getIncomingMsgReceiptPlan({
                  canNack: G,
                  decryptResult: V,
                  msgInfo: I,
                  msgMeta: T,
                  sendsGroupAgentDeliveryReceipt: H,
                });
                if (
                  z ===
                  o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                    .AggregateDuplicateCheck
                ) {
                  o("WAWebGetMessageCache")
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
                            enc: V.failedEnc || L[0],
                            hasHideFailEnc: L.some(function (e) {
                              return e.hideFail;
                            }),
                            msgReceivedTimes: D,
                          },
                        },
                      ],
                      I.offline == null,
                    );
                  break e;
                }
                if (
                  z ===
                  o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                    .SendNow
                ) {
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      $,
                      o("WAWebHandleMsgSendReceipt").sendReceipt(I, T, V, {
                        canNack: G,
                        sendsGroupAgentDeliveryReceipt: H,
                      }),
                      V.result,
                    )
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "sendReceipt failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("send-receipt-error", { sampling: 0.01 });
                    });
                  break e;
                }
                if (
                  z ===
                  o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                    .AggregateDeliveryReceipt
                ) {
                  o("WAWebGetMessageCache")
                    .getMessageCache()
                    .addMessages(
                      [
                        {
                          receiptInfo: {
                            externalId: I.externalId,
                            from: o("WAWebMsgProcessingApiUtils").getFrom(I),
                            author: I.author,
                            receiptClass: o(
                              "WAWebDeliveryReceiptClassUtils",
                            ).getDeliveryReceiptClass(F, T),
                          },
                        },
                      ],
                      !1,
                    );
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    z,
                );
              }
              return null;
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
          o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
        );
    }
    l.default = f;
  },
  98,
);
