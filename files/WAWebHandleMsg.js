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
        C = l === void 0 ? !1 : l,
        b = i.isStatusStanza,
        v = b === void 0 ? !1 : b,
        S = o("WAWebHandleMsgParser").incomingMsgParser.parse(t);
      if (S.error)
        return f(
          t,
          o("WAWebHandleMsgUnparsableStanza").handleUnparsableMsgStanza(
            t,
            S.error,
          ),
          v,
        );
      var R = S.success;
      (C && (R.msgMeta.isGroupStatus = !0),
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
      if (
        ((I.clientReceivedTsMillis = o("WATimeUtils").unixTimeMs()),
        I.offline != null &&
          (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.addOfflinePendingMessage(),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete() &&
          delete R.msgInfo.offline,
        n("cr:4122") != null &&
          n("cr:4122").isNextMessagePostponed(t, _, {
            isGroupStatusStanza: C,
            isStatusStanza: v,
          }))
      )
        return (
          o("WAWebHandleMsgSendReceipt").sendReceipt(R.msgInfo, R.msgMeta, {
            result: o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
          }),
          null
        );
      var D = !!R.msgInfo.offline,
        x = I.externalId,
        $ = o("WAWebMessageQueue").isWorkerOnlineMessageQueueTrackingEnabled();
      return o("WAWebMessageReceiveFlow").trackMessageReceive(
        {
          chatType: I.type,
          isOffline: D,
          queueDepth: o("WAWebMessageQueue").getMessageQueueDepth(),
          queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
          stanzaId: x,
          stanzaType: T.type,
        },
        function (e, t) {
          var n = t.onInboundDrainWaited;
          return o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: I.chat,
              isOffline: D,
              msgCategory: I.category,
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
          var i = o("WAWebCoexV2PeerRelayAdmission").getCoexV2PeerRelaySender(
            I,
          );
          if (i != null) {
            var l = await o(
              "WAWebCoexV2PeerRelayAdmission",
            ).checkCoexV2PeerRelayAdmission(t, I, i);
            if (l != null) return (y(I.offline), f(t, l, v));
          }
          var b = o(
            "WAWebCoexV2UsernameInfoUpdate",
          ).maybeGetCoexV2UsernameInfoUpdatePlan(I, T);
          (await h(),
            await o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
              entryPoint: "handle-msg",
              msgInfo: I,
              msgMeta: T,
            }));
          var S = o(
            "WAWebLearnUsernamesFromIncomingMsg",
          ).collectUsernameInfoUpdatesFromIncomingMsg(I, b);
          S.length > 0 &&
            (await o(
              "WAWebLearnUsernamesFromIncomingMsg",
            ).storeUsernamesLearnedFromIncomingMsg(S));
          var D = o("WAWebMsgProcessingApiUtils").messageInfoToKey(I);
          if (
            (E != null &&
              E.length > 0 &&
              (await o(
                "WAWebGroupHistoryReportingTokenDBUtils",
              ).storeGroupHistoryReportingTokenInfos(D.toString(), E, !1),
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Stored ",
                      " reporting tokens for bundle ",
                      "",
                    ])),
                  E.length,
                  D.toString(),
                )
                .tags("messaging", "wa-ice", "group-history")),
            T.isUnavailable)
          ) {
            (o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
              msgKey: D,
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
              N = await p.load(),
              M = N.processPlaceholderMsg;
            return (
              await M({
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                msgMeta: T,
                msgInfo: I,
                placeholderType: P,
              }),
              o("WAWebMessageReceiveFlow")
                .trackMessageReceiveReceipt(
                  x,
                  o("WAWebHandleMsgSendReceipt").sendReceipt(I, T, {
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
                  isGroupStatusStanza: C,
                  isStatusStanza: v,
                })) === !0
          ) {
            var w = await p.load(),
              A = w.processPlaceholderMsg;
            return (
              await A({
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                msgMeta: T,
                msgInfo: I,
                placeholderType: o("WAWebHandleMsgTypes").PlaceholderType.E2E,
              }),
              o("WAWebHandleMsgSendReceipt")
                .sendReceipt(I, T, {
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
                ).shouldUseStatusSessionForIncomingMessage(T.metaSessionScope)
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
          var q = await p.load(),
            U = q.processDecryptedMessageProto,
            V = $ ? g(D) : r("WAWebNoop");
          if (V == null) return null;
          var H = !1;
          try {
            var G = await o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(
              R,
              U,
              B,
              {
                awaitMessageWrites:
                  o("WAWebMessageQueueImpl").getMessageQueueImpl() ===
                  "one_queue",
                deferCheckpointUntilMessageStaged: $,
              },
            );
            return (
              ($ &&
                o("WAWebGetMessageCache").getMessageCache().isFailClosed()) ||
                (H = await o("WAWebHandleMsgDecryptResult").handleDecryptResult(
                  {
                    decryptResult: G,
                    deferCheckpointUntilMessageStaged: $,
                    input: R,
                    msgKey: D,
                    node: t,
                    releaseCheckpointHold: V,
                  },
                )),
              null
            );
          } finally {
            H || V();
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
