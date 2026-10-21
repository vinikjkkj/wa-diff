__d(
  "WAWebHandleMsgProcessUtils",
  [
    "Promise",
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
    "WAWebOfflineDeviceCache",
    "WAWebPaymentsGatingUtils",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "cr:402",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
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
      o("WAWebGetMessageCache").getMessageCache().addMessages([i], !1);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (e.offline == null &&
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "processDecryptedMessageProto: msgId::",
                      ", message decrypted: ",
                    ])),
                  e.externalId,
                )
                .tags("messaging"),
            !e.isHsm && t.highlyStructuredMessage)
          )
            throw new (o("WAWebHandleMsgCommon").HsmMismatchError)();
          var a = null;
          if (
            !(yield o("WAWebHandleMsgValidate").isFromKnownDevice(e.author))
          ) {
            var i = o("WAWebWidFactory").asUserWidOrThrow(e.author);
            throw (
              e.offline == null
                ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                    [i],
                    null,
                    null,
                  )
                : o(
                    "WAWebOfflineDeviceCache",
                  ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                    String(i),
                    null,
                  ),
              new (o("WAWebHandleMsgError").UnknownDeviceMessageError)(
                "[messaging] msgId::" +
                  e.externalId +
                  ", processDecryptedMessageProto: reject message from unknown device",
              )
            );
          }
          var l = t.messageContextInfo;
          if (l) {
            a = e.chat.isUser()
              ? yield o("WAWebIcdcHandlerApi").handleHostedIcdcMetadataInline(
                  e.chat,
                  e.author,
                  l,
                )
              : null;
            var c =
              n("cr:402") == null
                ? void 0
                : n("cr:402").monitorAeaMessageGossip(e, l);
            if (c != null) {
              var d = c.catch(function (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] failed to monitor message gossip",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aea-message-gossip-fail");
              });
              e.offline != null && (yield d);
            }
            o("WAWebIcdcHandlerApi").handleICDCData(
              e.author,
              e.chat.isUser() ? e.chat : null,
              l,
            );
          }
          return a;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.msgInfo,
            r = e.msgMeta,
            a = e.reparsing;
          if (n.offline != null && !a) return d(t, n, r);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processEphemeralSyncResponse",
            { msg: t },
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.msgInfo,
            r = e.msgMeta,
            a = e.reparsing;
          if (n.offline != null && !a) return d(t, n, r);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processKeepInChatMessage",
            { keepInChatMessage: t, allowNotification: !0 },
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.msgInfo,
            r = e.msgMeta,
            a = e.reparsing,
            i = t;
          if (n.offline != null && !a) return d(i, n, r);
          yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
            [i],
            a,
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = e.msg,
        r = e.msgInfo,
        a = e.msgMeta,
        i = e.reparsing;
      return t == null ||
        !o(
          "WAWebKeepAndApplyBrazilPaymentStateUpdates",
        ).isRoutedBrazilPaymentStateUpdateMsg(t)
        ? null
        : r.offline != null && !i
          ? (d(t, r, a), (c || (c = n("Promise"))).resolve())
          : o(
              "WAWebKeepAndApplyBrazilPaymentStateUpdates",
            ).keepAndApplyBrazilPaymentStateUpdate(t, i);
    }
    function v(t) {
      return S(t).catch(function (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not set the update aside",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("br-payment-state-set-aside-failed"),
          t.msgs
        );
      });
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo,
            n = e.msgMeta,
            r = e.msgs,
            a = e.reparsing;
          L(t, a);
          var i =
            r.length === 1
              ? b({ msg: r[0], msgInfo: t, msgMeta: n, reparsing: a })
              : null;
          return i == null
            ? [].concat(
                o(
                  "WAWebBrazilPaymentStateUpdateMsgUtils",
                ).hideAwaitedBrazilPaymentReceipts(r),
              )
            : (yield i, []);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      (e.offline != null && !t) ||
        (o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported() &&
          o(
            "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
          ).replayPendingBrazilPaymentStateUpdates([]));
    }
    ((l.preProcessMsg = m),
      (l.processEphemeralSyncResponseMsg = _),
      (l.processKeepInChatMsg = g),
      (l.processEditProtocolMsg = y),
      (l.maybeProcessBrazilPaymentStateUpdateMsg = b),
      (l.withoutProcessedBrazilPaymentStateUpdate = v));
  },
  98,
);
