__d(
  "WAWebHandleMsgProcessUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgValidate",
    "WAWebIcdcHandlerApi",
    "WAWebOfflineDeviceCache",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10197",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
            !t.isHsm && n.highlyStructuredMessage)
          )
            throw new (o("WAWebHandleMsgCommon").HsmMismatchError)();
          var r = null;
          if (
            !(yield o("WAWebHandleMsgValidate").isFromKnownDevice(t.author))
          ) {
            var a = o("WAWebWidFactory").asUserWidOrThrow(t.author);
            throw (
              t.offline == null
                ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                    [a],
                    null,
                    null,
                  )
                : o(
                    "WAWebOfflineDeviceCache",
                  ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                    String(a),
                    null,
                  ),
              new (o("WAWebHandleMsgError").UnknownDeviceMessageError)(
                "[messaging] msgId::" +
                  t.externalId +
                  ", processDecryptedMessageProto: reject message from unknown device",
              )
            );
          }
          return (
            n.messageContextInfo &&
              ((r = t.chat.isUser()
                ? yield o("WAWebIcdcHandlerApi").handleHostedIcdcMetadataInline(
                    t.chat,
                    t.author,
                    n.messageContextInfo,
                  )
                : null),
              o("WAWebIcdcHandlerApi").handleICDCData(
                t.author,
                t.chat.isUser() ? t.chat : null,
                n.messageContextInfo,
              )),
            r
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msg,
            n = e.msgInfo,
            r = e.msgMeta,
            a = e.reparsing;
          if (n.offline != null && !a) return s(t, n, r);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processEphemeralSyncResponse",
            { msg: t },
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
          if (n.offline != null && !a) return s(t, n, r);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processKeepInChatMessage",
            { keepInChatMessage: t, allowNotification: !0 },
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
            a = e.reparsing,
            i = t;
          if (n.offline != null && !a) return s(i, n, r);
          yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
            [i],
            a,
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.preProcessMsg = u),
      (l.processEphemeralSyncResponseMsg = d),
      (l.processKeepInChatMsg = p),
      (l.processEditProtocolMsg = f));
  },
  98,
);
