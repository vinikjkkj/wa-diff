__d(
  "WAWebDBCRUDOperationsPinInChat",
  [
    "WAWebModelStorageUtils",
    "WAWebPinInChatSchema",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "WAWebPinsDbSerialization",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new Map();
      return (
        t.forEach(function (e) {
          var t = e.parentMsgKey,
            r = t,
            o = n.get(r);
          (!o ||
            (o == null ? void 0 : o.senderTimestampMs) <=
              e.senderTimestampMs) &&
            n.set(r, e);
        }),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["pinned-messages"], async function (t) {
            var r = t[0],
              a = await r.anyOf(["chatId"], [e.toString()]);
            a.forEach(function (e) {
              var t = e.parentMsgKey,
                r = n.get(t);
              r && r.senderTimestampMs <= e.senderTimestampMs && n.delete(t);
            });
            var i = new Map(
              a.map(function (e) {
                return [e.parentMsgKey, e];
              }),
            );
            n.forEach(function (e, t) {
              i.set(t, e);
            });
            var l = Array.from(i.values()),
              s = l
                .filter(function (e) {
                  return e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN;
                })
                .sort(function (e, t) {
                  return t.senderTimestampMs - e.senderTimestampMs;
                })
                .slice(o("WAWebPinMsgGatingUtils").getMaxPins());
            s.forEach(function (e) {
              n.set(
                e.parentMsgKey,
                babelHelpers.extends({}, e, {
                  pinType: o("WAWebPinMsgConstants").PIN_STATE.UNPIN,
                }),
              );
            });
            var u = Array.from(n.values());
            return (await r.bulkCreateOrReplace(u), u);
          })
      );
    }
    async function s(e) {
      var t = await o("WAWebPinInChatSchema").getTable().get(e.toString());
      return t == null
        ? null
        : o("WAWebPinsDbSerialization").deserializePinInChat(t);
    }
    ((l.createOrUpdatePinInChat = e), (l.getPinInChatByParentKey = s));
  },
  98,
);
