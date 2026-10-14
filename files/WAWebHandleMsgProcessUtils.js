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
      o("WAWebGetMessageCache").getMessageCache().addMessages([i], !1);
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var n = null;
          if (
            !(yield o("WAWebHandleMsgValidate").isFromKnownDevice(e.author))
          ) {
            var r = o("WAWebWidFactory").asUserWidOrThrow(e.author);
            throw (
              e.offline == null
                ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                    [r],
                    null,
                    null,
                  )
                : o(
                    "WAWebOfflineDeviceCache",
                  ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                    String(r),
                    null,
                  ),
              new (o("WAWebHandleMsgError").UnknownDeviceMessageError)(
                "[messaging] msgId::" +
                  e.externalId +
                  ", processDecryptedMessageProto: reject message from unknown device",
              )
            );
          }
          return (
            t.messageContextInfo &&
              ((n = e.chat.isUser()
                ? yield o("WAWebIcdcHandlerApi").handleHostedIcdcMetadataInline(
                    e.chat,
                    e.author,
                    t.messageContextInfo,
                  )
                : null),
              o("WAWebIcdcHandlerApi").handleICDCData(
                e.author,
                e.chat.isUser() ? e.chat : null,
                t.messageContextInfo,
              )),
            n
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.msgInfo,
            r = e.msgMeta,
            a = e.reparsing;
          if (n.offline != null && !a) return c(t, n, r);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processEphemeralSyncResponse",
            { msg: t },
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.msgInfo,
            r = e.msgMeta,
            a = e.reparsing;
          if (n.offline != null && !a) return c(t, n, r);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processKeepInChatMessage",
            { keepInChatMessage: t, allowNotification: !0 },
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.msgInfo,
            r = e.msgMeta,
            a = e.reparsing,
            i = t;
          if (n.offline != null && !a) return c(i, n, r);
          yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
            [i],
            a,
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
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
          ? (c(t, r, a), (u || (u = n("Promise"))).resolve())
          : o(
              "WAWebKeepAndApplyBrazilPaymentStateUpdates",
            ).keepAndApplyBrazilPaymentStateUpdate(t, i);
    }
    function b(t) {
      return v(t).catch(function (n) {
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo,
            n = e.msgMeta,
            r = e.msgs,
            a = e.reparsing;
          R(t, a);
          var i =
            r.length === 1
              ? C({ msg: r[0], msgInfo: t, msgMeta: n, reparsing: a })
              : null;
          return i == null
            ? [].concat(
                o(
                  "WAWebBrazilPaymentStateUpdateMsgUtils",
                ).hideAwaitedBrazilPaymentReceipts(r),
              )
            : (yield i, []);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      (e.offline != null && !t) ||
        (o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported() &&
          o(
            "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
          ).replayPendingBrazilPaymentStateUpdates([]));
    }
    ((l.preProcessMsg = d),
      (l.processEphemeralSyncResponseMsg = p),
      (l.processKeepInChatMsg = f),
      (l.processEditProtocolMsg = h),
      (l.maybeProcessBrazilPaymentStateUpdateMsg = C),
      (l.withoutProcessedBrazilPaymentStateUpdate = b));
  },
  98,
);
