__d(
  "WAWebPinMessageProcessor",
  [
    "WANullthrows",
    "WAWebBackendApi",
    "WAWebDBCRUDOperationsPinInChat",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBStoreMessageOrphans",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinsDbSerialization",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = r("compactMap")(e, function (e) {
          return e.pinParentKey;
        }),
        n = t.map(function (e) {
          return e.toString();
        }),
        a = await o("WAWebDBMsgUtils").getMsgsByMsgKey(n),
        i = new Map(
          a.map(function (e) {
            return [e.id.toString(), e];
          }),
        );
      return i;
    }
    async function s(e) {
      await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
        e,
        function (e) {
          return r("WANullthrows")(e.pinParentKey);
        },
      );
    }
    async function u(t, n) {
      var a = await e(n),
        i = [],
        l = [];
      for (var u of n) {
        var d = a.get(r("WANullthrows")(u.pinParentKey).toString());
        d ? l.push(u) : i.push(u);
      }
      await Promise.all([
        (async function () {
          i.length !== 0 &&
            (await s(i),
            await o(
              "WAWebDBMarkFutureproofMessagesReparsed",
            ).markFutureproofMessagesReparsed(
              i.map(function (e) {
                return e.id.toString();
              }),
            ));
        })(),
        (async function () {
          if (l.length !== 0) {
            var e = await o("WAWebBackendApi").frontendSendAndReceive(
              "updatePinCollection",
              { msgs: l, removeMsgs: [] },
            );
            e &&
              (await o(
                "WAWebDBCRUDOperationsPinInChat",
              ).createOrUpdatePinInChat(
                t,
                e.map(function (e) {
                  return o("WAWebPinsDbSerialization").serializePinInChat(e);
                }),
              ),
              await o(
                "WAWebDBMarkFutureproofMessagesReparsed",
              ).markFutureproofMessagesReparsed(
                e.map(function (e) {
                  return e.msgKey.toString();
                }),
              ));
            var n = await Promise.all(
                r("compactMap")(l, function (e) {
                  return e.pinMessageType ===
                    o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                      .PIN_FOR_ALL
                    ? c(
                        t,
                        r("WANullthrows")(e.t),
                        r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
                      )
                    : null;
                }),
              ),
              a = await o("WAWebBackendApi").frontendSendAndReceive(
                "processMultipleMessages",
                {
                  chatId: t,
                  msgObjs: n,
                  meta: { add: "after", isHistory: !1 },
                  processMessagesOrigin: "pinMessage",
                },
              );
            a && (await o("WAWebDBProcessMessage").storeMessages(n, t));
          }
        })(),
      ]);
    }
    async function c(e, t, n) {
      var a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        i = o("WAWebUserPrefsMeUser").isMeAccount(n);
      return {
        id: new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          fromMe: i,
          remote: e,
          participant: n,
        }),
        author: n,
        from: e,
        to: a,
        recipients: [],
        t,
        type: o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE,
        kind: o("WAWebMsgType").MsgKind.PinnedMessage,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        templateParams: [n],
      };
    }
    ((l.processPinMessages = u), (l.genSystemMessage = c));
  },
  98,
);
