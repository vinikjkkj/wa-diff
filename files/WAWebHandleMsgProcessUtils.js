__d(
  "WAWebHandleMsgProcessUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebGetMessageCache",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgValidate",
    "WAWebIcdcHandlerApi",
    "WAWebLastAddOnDBSerialization",
    "WAWebOfflineDeviceCache",
    "WAWebReactionDataUtils",
    "WAWebShouldUpdateLastAddOnPreview",
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebShouldUpdateLastAddOnPreview",
          ).filterChatsWithAddOnPreviewUpdates(e);
          t.size > 0 &&
            (yield o(
              "WAWebDBUpdateLastAddOnPreviewChat",
            ).updateDatabaseForLastAddOnPreview(t),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateChatLastAddOnPreview",
              { chatMap: t },
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return o(
                "WAWebReactionDataUtils",
              ).webMsgInfoReactionTypeToReactionsRow(e);
            }),
            n =
              "reaction received: " +
              t
                .map(function (e) {
                  return e.msgKey.toString() + " to " + e.parentMsgKey;
                })
                .toString() +
              ";",
            r = yield o(
              "WAWebDBCreateOrUpdateReactions",
            ).createOrUpdateReactions(t);
          return (
            r &&
              (yield h(
                r.map(function (e) {
                  return o(
                    "WAWebLastAddOnDBSerialization",
                  ).lastAddOnPreviewCandidateFromReactionRowType(e);
                }),
              )),
            r
          );
        })),
        b.apply(this, arguments)
      );
    }
    ((l.preProcessMsg = u),
      (l.processEphemeralSyncResponseMsg = d),
      (l.processKeepInChatMsg = p),
      (l.processEditProtocolMsg = f),
      (l.storeReactionMsgBulk = C));
  },
  98,
);
