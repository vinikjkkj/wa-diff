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
    "WAWebDbEncryptionKey",
    "WAWebGetMessageCache",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebHandleMsgDecryptResult",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
    "WAWebHandleMsgUnparsableStanza",
    "WAWebJobsMigrationGating",
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
    async function _(t, a) {
      var i = a === void 0 ? {} : a,
        l = i.isGroupStatusStanza,
        b = l === void 0 ? !1 : l,
        v = i.isStatusStanza,
        S = v === void 0 ? !1 : v,
        R = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
      if (R.error)
        return f(
          t,
          o("WAWebHandleMsgUnparsableStanza").handleUnparsableMsgStanza(
            t,
            R.error,
          ),
          S,
        );
      var L = R.success;
      (b && (L.msgMeta.isGroupStatus = !0),
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
      T.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs();
      var x = T.offline != null;
      if (
        (x &&
          (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.addOfflinePendingMessage(),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete(),
          o("WAWebOfflineHandler").OfflineMessageHandler.queueOfflineMessage(
            T.category,
          )),
        o("WAWebOfflineHandler").OfflineMessageHandler.checkForRcodChunk(L),
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete() &&
          delete L.msgInfo.offline,
        n("cr:4122") != null &&
          n("cr:4122").isNextMessagePostponed(t, _, {
            isGroupStatusStanza: b,
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
        N = o("WAWebMessageQueue").isWorkerOnlineMessageQueueTrackingEnabled();
      return o("WAWebMessageReceiveFlow").trackMessageReceive(
        {
          chatType: T.type,
          isOffline: $,
          queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
          queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
          stanzaId: P,
          stanzaType: D.type,
        },
        function (e, t) {
          var n = t.onInboundDrainWaited;
          return o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: T.chat,
              isOffline: $,
              msgCategory: T.category,
              action: e,
              onInboundDrainWaited: n,
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "msg",
              );
            });
        },
        async function () {
          var a;
          (y(x, T.category),
            o("WALogger")
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
          var i = o("WAWebCoexV2PeerRelayAdmission").getCoexV2PeerRelaySender(
            T,
          );
          if (i != null) {
            var l = await o(
              "WAWebCoexV2PeerRelayAdmission",
            ).checkCoexV2PeerRelayAdmission(t, T, i);
            if (l != null) return (C(T.offline), f(t, l, S));
          }
          var v = o(
            "WAWebCoexV2UsernameInfoUpdate",
          ).maybeGetCoexV2UsernameInfoUpdatePlan(T, D);
          (await h(),
            await o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
              entryPoint: "handle-msg",
              msgInfo: T,
              msgMeta: D,
            }));
          var R = o(
            "WAWebLearnUsernamesFromIncomingMsg",
          ).collectUsernameInfoUpdatesFromIncomingMsg(T, v);
          R.length > 0 &&
            (await o(
              "WAWebLearnUsernamesFromIncomingMsg",
            ).storeUsernamesLearnedFromIncomingMsg(R));
          var $ = o("WAWebMsgProcessingApiUtils").messageInfoToKey(T);
          if (
            (k != null &&
              k.length > 0 &&
              (await o(
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
              w = await p.load(),
              A = w.processPlaceholderMsg;
            return (
              await A({
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                msgMeta: D,
                msgInfo: T,
                placeholderType: M,
              }),
              o("WAWebMessageReceiveFlow")
                .trackMessageReceiveReceipt(
                  P,
                  o("WAWebHandleMsgSendReceipt").sendReceipt(T, D, {
                    result: o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL,
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
                  isGroupStatusStanza: b,
                  isStatusStanza: S,
                })) === !0
          ) {
            var F = await p.load(),
              O = F.processPlaceholderMsg;
            return (
              await O({
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                msgMeta: D,
                msgInfo: T,
                placeholderType: o("WAWebHandleMsgTypes").PlaceholderType.E2E,
              }),
              o("WAWebHandleMsgSendReceipt")
                .sendReceipt(T, D, {
                  result: o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL,
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
                ).shouldUseStatusSessionForIncomingMessage(D.metaSessionScope)
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
          var V = await p.load(),
            H = V.processDecryptedMessageProto,
            G = N ? g($) : r("WAWebNoop");
          if (G == null) return null;
          var z = !1;
          try {
            var j = await o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
              L,
              H,
              q,
              {
                awaitMessageWrites:
                  o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                  "one_queue",
                deferCheckpointUntilMessageStaged: N,
              },
            );
            return (
              (N &&
                o("WAWebGetMessageCache").getMessageCache().isFailClosed()) ||
                (z = await o("WAWebHandleMsgDecryptResult").handleDecryptResult(
                  {
                    decryptResult: j,
                    deferCheckpointUntilMessageStaged: N,
                    input: L,
                    msgKey: $,
                    node: t,
                    releaseCheckpointHold: G,
                  },
                )),
              null
            );
          } finally {
            z || G();
          }
        },
      );
    }
    function f(e, t, n) {
      return o("WAWebCreateNackFromStanza").createNackFromStanza(
        n ? new (o("WAWap").WapNode)("status", e.attrs, e.content) : e,
        t,
      );
    }
    function g(e) {
      return o("WAWebMessageQueue").isWorkerOnlineMessageQueueTrackingEnabled()
        ? o("WAWebGetMessageCache")
            .getMessageCache()
            .holdCheckpointUntilMessageStaged(e)
        : null;
    }
    async function h() {
      o("WAWebJobsMigrationGating").isJobsManagerDecommissioned() &&
        (await o(
          "WAWebDbEncryptionKey",
        ).DbEncKeyStore.waitForFinalDbMsgEncKey());
    }
    function y(e, t) {
      e &&
        o("WAWebOfflineHandler").OfflineMessageHandler.startOfflineMessage(t);
    }
    function C(e) {
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
