__d(
  "WAWebHandleMsgProcessUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBProcessEditProtocolMsgs",
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
    function s(e, t) {
      var n = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
        r = n
          ? { msg: e }
          : {
              msg: e,
              receiptInfo: {
                externalId: e.id.id,
                from: e.from,
                author: t.author,
              },
            };
      o("WAWebGetMessageCache").getMessageCache().addMessages([r], !1);
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
            r = e.reparsing;
          if (n.offline != null && !r) return s(t, n);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processEphemeralSyncResponse",
            { msg: t },
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (t.offline != null && !n) return s(e, t);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "processKeepInChatMessage",
            { keepInChatMessage: e, allowNotification: !0 },
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e;
          if (t.offline != null && !n) return s(r, t);
          yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
            [r],
            n,
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
