__d(
  "WAWebHandleMsgDecryptResult",
  [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebDBReportingTokenUtils",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebGetMessageCache",
    "WAWebGroupAgentReceipts",
    "WAWebHandleDeferredBotOrphan",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
    "WAWebIncomingMsgReceiptPlan",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebNoop",
    "WAWebOfflineHandler",
    "cr:22371",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var a = t.decryptResult,
        i = t.deferCheckpointUntilMessageStaged,
        l = i === void 0 ? !1 : i,
        s = t.input,
        u = t.msgKey,
        m = t.node,
        p = t.releaseCheckpointHold,
        _ = p === void 0 ? r("WAWebNoop") : p,
        f = s.encs,
        g = s.msgBotInfo,
        h = s.msgInfo,
        y = s.msgMeta,
        C = h.externalId,
        b = 1;
      if (a.result === o("WAWebHandleMsgTypes").E2EProcessResult.DEFERRED)
        return (
          _(),
          o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
            msgKey: u,
            stanzaId: h.externalId,
            msgTs: h.ts,
            incomingMsgReportingTokenInfo: s.reportingTokenInfo,
          }),
          await o("WAWebHandleDeferredBotOrphan").handleDeferredBotOrphan({
            canNack: d(s),
            decryptResult: a,
            input: s,
            node: m,
          }),
          !1
        );
      (h.offline != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.processMessageDecryptResult(a.result),
        n("cr:22371") == null ||
          n("cr:22371").noteWindowsDecryptResult(h, a.result, f),
        a.result !== o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
          o("WAWebDBReportingTokenUtils").maybeStoreReportingTag({
            msgKey: u,
            stanzaId: h.externalId,
            msgTs: h.ts,
            incomingMsgReportingTokenInfo: s.reportingTokenInfo,
          }));
      var v = d(s);
      e: {
        var S = o("WAWebIncomingMsgReceiptPlan").getIncomingMsgReceiptPlan({
          canNack: v,
          decryptResult: a,
          msgInfo: h,
          msgMeta: y,
          sendsGroupAgentDeliveryReceipt: c(s, a),
        });
        if (
          S ===
          o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
            .AggregateDuplicateCheck
        ) {
          o("WAWebGetMessageCache")
            .getMessageCache()
            .addMessages(
              [
                {
                  duplicateMsgReceiptInfo: {
                    externalId: h.externalId,
                    from: o("WAWebMsgProcessingApiUtils").getFrom(h),
                    author: h.author,
                    msgInfo: h,
                    msgMeta: y,
                    msgBotInfo: g,
                    enc: a.failedEnc || f[0],
                    hasHideFailEnc: f.some(function (e) {
                      return e.hideFail;
                    }),
                    msgReceivedTimes: b,
                  },
                },
              ],
              h.offline == null,
            );
          break e;
        }
        if (
          S === o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan.SendNow
        ) {
          var R = o("WAWebMessageReceiveFlow")
            .trackMessageReceiveReceipt(
              C,
              o("WAWebHandleMsgSendReceipt").sendReceipt(h, y, a, {
                canNack: v,
                sendsGroupAgentDeliveryReceipt: c(s, a),
              }),
              a.result,
            )
            .then(o("WAWebBoolFunc").returnTrue, function (t) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "sendReceipt failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("send-receipt-error", { sampling: 0.01 }),
                !1
              );
            });
          if (l && !(await R)) return !0;
          break e;
        }
        if (
          S ===
          o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan
            .AggregateDeliveryReceipt
        ) {
          o("WAWebGetMessageCache")
            .getMessageCache()
            .addMessages(
              [
                {
                  receiptInfo: {
                    externalId: h.externalId,
                    from: o("WAWebMsgProcessingApiUtils").getFrom(h),
                    author: h.author,
                    receiptClass: o(
                      "WAWebDeliveryReceiptClassUtils",
                    ).getDeliveryReceiptClass(
                      o("WAWebMsgProcessingApiUtils").getFrom(h),
                      y,
                    ),
                  },
                },
              ],
              !1,
            );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            S,
        );
      }
      return !1;
    }
    function u(e, t) {
      return (
        o("WAWebIncomingMsgReceiptPlan").getIncomingMsgReceiptPlan({
          canNack: d(e),
          decryptResult: t,
          msgInfo: e.msgInfo,
          msgMeta: e.msgMeta,
          sendsGroupAgentDeliveryReceipt: c(e, t),
        }) === o("WAWebIncomingMsgReceiptPlan").IncomingMsgReceiptPlan.SendNow
      );
    }
    function c(e, t) {
      return (
        t.result === o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS &&
        o("WAWebGroupAgentReceipts").shouldSendGroupAgentDeliveryReceipt(e)
      );
    }
    function d(e) {
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
    ((l.handleDecryptResult = s),
      (l.shouldSendImmediateReceipt = u),
      (l.sendsGroupAgentDeliveryReceipt = c),
      (l.canNackMessage = d));
  },
  98,
);
