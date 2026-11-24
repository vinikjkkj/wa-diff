__d(
  "WAWebHandleMsgProcessUtils",
  [
    "WALogger",
    "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
    "WAWebBackendApi",
    "WAWebBrazilPaymentStateUpdateMsgUtils",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgValidate",
    "WAWebIcdcHandlerApi",
    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
    "WAWebNullFunc",
    "WAWebOfflineDeviceCache",
    "WAWebPaymentsGatingUtils",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "cr:10197",
    "cr:402",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      var r = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
        a = {
          externalId: e.id.id,
          from: e.from,
          author: t.author,
          receiptClass: o(
            "WAWebDeliveryReceiptClassUtils",
          ).getDeliveryReceiptClass(e.from, n),
        },
        i = r ? { msg: e } : { msg: e, receiptInfo: a };
      return {
        written: o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages([i], !1),
      };
    }
    async function d(t, a) {
      if (
        (t.offline == null &&
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "processDecryptedMessageProto: msgId::",
                  ", message decrypted: ",
                ])),
              t.externalId,
            )
            .tags("messaging"),
        !t.isHsm && a.highlyStructuredMessage)
      )
        throw new (o("WAWebHandleMsgCommon").HsmMismatchError)();
      var i = null;
      if (!(await o("WAWebHandleMsgValidate").isFromKnownDevice(t.author))) {
        var l = o("WAWebWidFactory").asUserWidOrThrow(t.author);
        throw (
          t.offline == null
            ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                [l],
                null,
                null,
              )
            : o(
                "WAWebOfflineDeviceCache",
              ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                String(l),
                null,
              ),
          new (o("WAWebHandleMsgError").UnknownDeviceMessageError)(
            "[messaging] msgId::" +
              t.externalId +
              ", processDecryptedMessageProto: reject message from unknown device",
          )
        );
      }
      var u = a.messageContextInfo;
      if (u) {
        i = t.chat.isUser()
          ? await o("WAWebIcdcHandlerApi").handleHostedIcdcMetadataInline(
              t.chat,
              t.author,
              u,
            )
          : null;
        var c =
          n("cr:402") == null
            ? void 0
            : n("cr:402").monitorAeaMessageGossip(t, u);
        if (c != null) {
          var d = c.catch(function (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to monitor message gossip",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-message-gossip-fail");
          });
          t.offline != null && (await d);
        }
        o("WAWebIcdcHandlerApi").handleICDCData(
          t.author,
          t.chat.isUser() ? t.chat : null,
          u,
        );
      }
      return i;
    }
    async function m(e) {
      var t = e.msg,
        n = e.msgInfo,
        r = e.msgMeta,
        a = e.reparsing;
      return n.offline != null && !a
        ? c(t, n, r)
        : (await o("WAWebBackendApi").frontendSendAndReceive(
            "processEphemeralSyncResponse",
            { msg: t },
          ),
          null);
    }
    async function p(e) {
      var t = e.msg,
        n = e.msgInfo,
        r = e.msgMeta,
        a = e.reparsing;
      return n.offline != null && !a
        ? c(t, n, r)
        : (await o("WAWebBackendApi").frontendSendAndReceive(
            "processKeepInChatMessage",
            { keepInChatMessage: t, allowNotification: !0 },
          ),
          null);
    }
    async function _(e) {
      var t = e.msg,
        n = e.msgInfo,
        r = e.msgMeta,
        a = e.reparsing,
        i = t;
      return n.offline != null && !a
        ? c(i, n, r)
        : (await o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
            [i],
            a,
          ),
          null);
    }
    function f(e) {
      var t = e.msg,
        n = e.msgInfo,
        r = e.msgMeta,
        a = e.reparsing;
      return t == null ||
        !o(
          "WAWebKeepAndApplyBrazilPaymentStateUpdates",
        ).isRoutedBrazilPaymentStateUpdateMsg(t)
        ? null
        : (o(
            "WAWebBrazilPaymentStateUpdateMsgUtils",
          ).awaitBrazilPaymentStateUpdateReceipt(t),
          n.offline != null && !a
            ? Promise.resolve(c(t, n, r))
            : o("WAWebKeepAndApplyBrazilPaymentStateUpdates")
                .keepAndApplyBrazilPaymentStateUpdate(t, a)
                .then(o("WAWebNullFunc").returnNull));
    }
    function g(e) {
      return h(e).catch(function (t) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not set the update aside",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("br-payment-state-set-aside-failed"),
          { msgs: e.msgs, staged: null }
        );
      });
    }
    async function h(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = e.msgs,
        a = e.reparsing;
      y(t, a);
      var i =
        r.length === 1
          ? f({ msg: r[0], msgInfo: t, msgMeta: n, reparsing: a })
          : null;
      return i == null
        ? {
            msgs: [].concat(
              o(
                "WAWebBrazilPaymentStateUpdateMsgUtils",
              ).hideAwaitedBrazilPaymentReceipts(r),
            ),
            staged: null,
          }
        : { msgs: [], staged: await i };
    }
    function y(e, t) {
      (e.offline != null && !t) ||
        (o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported() &&
          o(
            "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
          ).replayPendingBrazilPaymentStateUpdates([]));
    }
    ((l.preProcessMsg = d),
      (l.processEphemeralSyncResponseMsg = m),
      (l.processKeepInChatMsg = p),
      (l.processEditProtocolMsg = _),
      (l.maybeProcessBrazilPaymentStateUpdateMsg = f),
      (l.withoutProcessedBrazilPaymentStateUpdate = g));
  },
  98,
);
