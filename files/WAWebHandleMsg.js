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
    "WAWebGetMessageCache",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebHandleMsgDecryptResult",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
    "WAWebHandleMsgUnparsableStanza",
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
      p = r("requireDeferred")("WAWebHandleMsgProcess").__setRef(
        "WAWebHandleMsg",
      );
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
          if (
            ((k.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
            k.offline != null &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
            o(
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
          var T = !!S.msgInfo.offline,
            D = k.externalId,
            x =
              o(
                "WAWebMessageQueue",
              ).isWorkerOnlineMessageQueueTrackingEnabled();
          return o("WAWebMessageReceiveFlow").trackMessageReceive(
            {
              chatType: k.type,
              isOffline: T,
              queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
              queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              stanzaId: D,
              stanzaType: I.type,
            },
            function (e, t) {
              var n = t.onInboundDrainWaited;
              return o("WAWebMessageQueue")
                .onMessageQueue({
                  chatWid: k.chat,
                  isOffline: T,
                  msgCategory: k.category,
                  action: e,
                  onInboundDrainWaited: n,
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
                entryPoint: "handle-msg",
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
              var T = o("WAWebMsgProcessingApiUtils").messageInfoToKey(k);
              if (
                (L != null &&
                  L.length > 0 &&
                  (yield o(
                    "WAWebGroupHistoryReportingTokenDBUtils",
                  ).storeGroupHistoryReportingTokenInfos(T.toString(), L, !1),
                  o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Stored ",
                          " reporting tokens for bundle ",
                          "",
                        ])),
                      L.length,
                      T.toString(),
                    )
                    .tags("messaging", "wa-ice", "group-history")),
                I.isUnavailable)
              ) {
                (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
                  msgKey: T,
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
                  }),
                  P = yield p.load(),
                  N = P.processPlaceholderMsg;
                return (
                  yield N({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: I,
                    msgInfo: k,
                    placeholderType: $,
                  }),
                  o("WAWebMessageReceiveFlow")
                    .trackMessageReceiveReceipt(
                      D,
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
              ) {
                var M = yield p.load(),
                  w = M.processPlaceholderMsg;
                return (
                  yield w({
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
              }
              var A = o("WAWebMsgProcessingApiUtils").getFrom(k),
                F = o(
                  "WAWebStatusSessionGatingUtils",
                ).isIncomingStatusSessionContext({
                  from: A,
                  isGroupStatus: I.isGroupStatus,
                  metaSessionScope: I.metaSessionScope,
                }),
                O;
              if (
                (F
                  ? (O = o(
                      "WAWebStatusSessionGatingUtils",
                    ).shouldUseStatusSessionForIncomingMessage(
                      I.metaSessionScope,
                    )
                      ? o("WAWebSessionScope").SessionScope.STATUS
                      : void 0)
                  : R.some(function (e) {
                      return e.sessionType === "pq";
                    }) && (O = o("WAWebSessionScope").SessionScope.PQ),
                A.isStatus() || I.isGroupStatus === !0)
              ) {
                var B;
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
                    O != null ? O : o("WAWebSessionScope").SessionScope.DEFAULT,
                    (B = I.metaSessionScope) != null ? B : "none",
                  )
                  .tags("messaging");
              }
              var W = yield p.load(),
                q = W.processDecryptedMessageProto,
                U = x ? h(T) : r("WAWebNoop");
              if (U == null) return null;
              var V = !1;
              try {
                var H = yield o(
                  "WAWebMsgProcessingDecryptApi",
                ).decryptE2EPayload(S, q, O, {
                  awaitMessageWrites:
                    o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                    "one_queue",
                  deferCheckpointUntilMessageStaged: x,
                });
                return (
                  (x &&
                    o("WAWebGetMessageCache")
                      .getMessageCache()
                      .isFailClosed()) ||
                    (V = yield o(
                      "WAWebHandleMsgDecryptResult",
                    ).handleDecryptResult({
                      decryptResult: H,
                      deferCheckpointUntilMessageStaged: x,
                      input: S,
                      msgKey: T,
                      node: t,
                      releaseCheckpointHold: U,
                    })),
                  null
                );
              } finally {
                V || U();
              }
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
      return o("WAWebMessageQueue").isWorkerOnlineMessageQueueTrackingEnabled()
        ? o("WAWebGetMessageCache")
            .getMessageCache()
            .holdCheckpointUntilMessageStaged(e)
        : null;
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
