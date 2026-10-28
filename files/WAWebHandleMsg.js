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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = a === void 0 ? {} : a,
            l = i.isGroupStatusStanza,
            f = l === void 0 ? !1 : l,
            C = i.isStatusStanza,
            b = C === void 0 ? !1 : C,
            v = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
          if (v.error)
            return g(
              t,
              o("WAWebHandleMsgUnparsableStanza").handleUnparsableMsgStanza(
                t,
                v.error,
              ),
              b,
            );
          var S = v.success;
          (f && (S.msgMeta.isGroupStatus = !0),
            b && (S.msgMeta.isStatusStanza = !0),
            o(
              "WAWebMaybePostOfflineCountTooHighMetric",
            ).maybePostOfflineCountTooHigh(S),
            S.dehydratedPaymentNode === "pay"
              ? o("WAWebPaymentsODS").logDehydratedPayNodeFutureproofed()
              : S.dehydratedPaymentNode === "transaction" &&
                o("WAWebPaymentsODS").logDehydratedTransactionNodeSkipped());
          var R = S.encs,
            L = S.ghsReportingTokenInfos,
            E = S.msgBotInfo,
            k = S.msgInfo,
            I = S.msgMeta;
          ((k.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            k.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()));
          var T = 1;
          if (
            (o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete() &&
              delete S.msgInfo.offline,
            n("cr:4122") != null &&
              n("cr:4122").isNextMessagePostponed(t, _, {
                isGroupStatusStanza: f,
                isStatusStanza: b,
              }))
          )
            return (
              o("WAWebHandleMsgSendReceipt").sendReceipt(S.msgInfo, S.msgMeta, {
                result: o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
              }),
              null
            );
          var D = !!S.msgInfo.offline,
            x = k.externalId;
          return o("WAWebMessageReceiveFlow").trackMessageReceive(
            {
              chatType: k.type,
              isOffline: D,
              queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
              queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              stanzaId: x,
              stanzaType: I.type,
            },
            function (e) {
              return o("WAWebMessageQueue")
                .onMessageQueue({
                  chatWid: k.chat,
                  isOffline: D,
                  msgCategory: k.category,
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
                  k.chat.toLogString(),
                  k.externalId,
                  (a = k.offline) != null ? a : "",
                )
                .tags("messaging"),
                (k.msgProcessStartTsMillis = o("WATimeUtils").unixTimeMs()));
              var i = o(
                "WAWebCoexV2PeerRelayAdmission",
              ).getCoexV2PeerRelaySender(k);
              if (i != null) {
                var l = yield o(
                  "WAWebCoexV2PeerRelayAdmission",
                ).checkCoexV2PeerRelayAdmission(t, k, i);
                if (l != null) return (y(k.offline), g(t, l, b));
              }
              var C = o(
                "WAWebCoexV2UsernameInfoUpdate",
              ).maybeGetCoexV2UsernameInfoUpdatePlan(k, I);
              yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
                msgInfo: k,
                msgMeta: I,
              });
              var v = o(
                "WAWebLearnUsernamesFromIncomingMsg",
              ).collectUsernameInfoUpdatesFromIncomingMsg(k, C);
              v.length > 0 &&
                (yield o(
                  "WAWebLearnUsernamesFromIncomingMsg",
                ).storeUsernamesLearnedFromIncomingMsg(v));
              var D = o("WAWebMsgProcessingApiUtils").messageInfoToKey(k);
              if (
                (L != null &&
                  L.length > 0 &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(D.toString(), L, !1),
                  o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Stored ",
                          " reporting tokens for bundle ",
                          "",
                        ])),
                      L.length,
                      D.toString(),
                    )
                    .tags("messaging", "wa-ice", "group-history")),
                I.isUnavailable)
              ) {
                (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                  msgKey: D,
                  stanzaId: k.externalId,
                  msgTs: k.ts,
                  incomingMsgReportingTokenInfo: S.reportingTokenInfo,
                }),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "handleMessage: msgId::",
                          ", get fanout placeholder",
                        ])),
                      k.externalId,
                    )
                    .tags("messaging"));
                var $ = o(
                  "WAWebUnavailableFanoutPlaceholderType",
                ).getUnavailableFanoutPlaceholderType({
                  msgBotInfo: E,
                  msgMeta: I,
                });
                return (
                  yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: I,
                    msgInfo: k,
                    placeholderType: $,
                  }),
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      x,
                      o("WAWebHandleMsgSendReceipt").sendReceipt(k, I, {
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
                  : n("cr:4122").consumeSkipDecryptRequest(t, _, {
                      isGroupStatusStanza: f,
                      isStatusStanza: b,
                    })) === !0
              )
                return (
                  yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: I,
                    msgInfo: k,
                    placeholderType: o("WAWebHandleMsgTypes").PlaceholderType
                      .E2E,
                  }),
                  o("WAWebHandleMsgSendReceipt")
                    .sendReceipt(k, I, {
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
              var P = o("WAWebMsgProcessingApiUtils").getFrom(k),
                N = o(
                  "WAWebStatusSessionGatingUtils",
                ).isIncomingStatusSessionContext({
                  from: P,
                  isGroupStatus: I.isGroupStatus,
                  metaSessionScope: I.metaSessionScope,
                }),
                M;
              if (
                (N
                  ? (M = o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      I.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0)
                  : R.some(function (e) {
                      return e.sessionType === "pq";
                    }) && (M = o("WAWebSessionScope").SessionScope.PQ),
                P.isStatus() || I.isGroupStatus === !0)
              ) {
                var w;
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[status-session] grpStatus=",
                        " scope=",
                        " metaScope=",
                        "",
                      ])),
                    String(I.isGroupStatus === !0),
                    M != null ? M : o("WAWebSessionScope").SessionScope.DEFAULT,
                    (w = I.metaSessionScope) != null ? w : "none",
                  )
                  .tags("messaging");
              }
              var A = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
                S,
                o("WAWebHandleMsgProcess").processDecryptedMessageProto,
                M,
                {
                  awaitMessageWrites:
                    o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                    "one_queue",
                },
              );
              if (
                A.result === o("WAWebHandleMsgTypes").E2EProcessResult.DEFERRED
              )
                return (
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: D,
                    stanzaId: k.externalId,
                    msgTs: k.ts,
                    incomingMsgReportingTokenInfo: S.reportingTokenInfo,
                  }),
                  yield o(
                    "WAWebHandleDeferredBotOrphan",
                  ).handleDeferredBotOrphan({
                    canNack: h(S),
                    decryptResult: A,
                    input: S,
                    node: t,
                  }),
                  null
                );
              (k.offline != null &&
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.processMessageDecryptResult(A.result),
                A.result !==
                  o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
                  o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                    msgKey: D,
                    stanzaId: k.externalId,
                    msgTs: k.ts,
                    incomingMsgReportingTokenInfo: S.reportingTokenInfo,
                  }));
              var F =
                  A.result ===
                    o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
                  o(
                    "WAWebGroupAgentReceipts",
                  ).shouldSendGroupAgentDeliveryReceipt(S),
                O = h(S);
              e: {
                var B = o(
                  "WAWebIncomingMsgReceiptPlan",
                ).getIncomingMsgReceiptPlan({
                  canNack: O,
                  decryptResult: A,
                  msgInfo: k,
                  msgMeta: I,
                  sendsGroupAgentDeliveryReceipt: F,
                });
                if (
                  B ===
                  o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                    .AggregateDuplicateCheck
                ) {
                  o("WAWebGetMessageCache")
                    .getMessageCache()
                    .addMessages(
                      [
                        {
                          duplicateMsgReceiptInfo: {
                            externalId: k.externalId,
                            from: o("WAWebMsgProcessingApiUtils").getFrom(k),
                            author: k.author,
                            msgInfo: k,
                            msgMeta: I,
                            enc: A.failedEnc || R[0],
                            hasHideFailEnc: R.some(function (e) {
                              return e.hideFail;
                            }),
                            msgReceivedTimes: T,
                          },
                        },
                      ],
                      k.offline == null,
                    );
                  break e;
                }
                if (
                  B ===
                  o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                    .SendNow
                ) {
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      x,
                      o("WAWebHandleMsgSendReceipt").sendReceipt(k, I, A, {
                        canNack: O,
                        sendsGroupAgentDeliveryReceipt: F,
                      }),
                      A.result,
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
                  B ===
                  o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
                    .AggregateDeliveryReceipt
                ) {
                  o("WAWebGetMessageCache")
                    .getMessageCache()
                    .addMessages(
                      [
                        {
                          receiptInfo: {
                            externalId: k.externalId,
                            from: o("WAWebMsgProcessingApiUtils").getFrom(k),
                            author: k.author,
                            receiptClass: o(
                              "WAWebDeliveryReceiptClassUtils",
                            ).getDeliveryReceiptClass(P, I),
                          },
                        },
                      ],
                      !1,
                    );
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    B,
                );
              }
              return null;
            }),
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return o("WAWebCreateNackFromStanza").createNackFromStanza(
        n ? new (o("WAWap").WapNode)("status", e.attrs, e.content) : e,
        t,
      );
    }
    function h(e) {
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
    function y(e) {
      e != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(
          o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
        );
    }
    l.default = _;
  },
  98,
);
