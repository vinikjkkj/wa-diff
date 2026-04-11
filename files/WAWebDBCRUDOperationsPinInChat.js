__d(
  "WAWebDBCRUDOperationsPinInChat",
  [
    "WAWebModelStorageUtils",
    "WAWebPinInChatSchema",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "WAWebPinsDbSerialization",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var r = new Map();
      return (
        t.forEach(function (e) {
          var t = e.parentMsgKey,
            n = t,
            o = r.get(n);
          (!o ||
            (o == null ? void 0 : o.senderTimestampMs) <=
              e.senderTimestampMs) &&
            r.set(n, e);
        }),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["pinned-messages"],
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t[0],
                    a = yield n.anyOf(["chatId"], [e.toString()]);
                  a.forEach(function (e) {
                    var t = e.parentMsgKey,
                      n = r.get(t);
                    n &&
                      n.senderTimestampMs <= e.senderTimestampMs &&
                      r.delete(t);
                  });
                  var i = new Map(
                    a.map(function (e) {
                      return [e.parentMsgKey, e];
                    }),
                  );
                  r.forEach(function (e, t) {
                    i.set(t, e);
                  });
                  var l = Array.from(i.values()),
                    s = l
                      .filter(function (e) {
                        return (
                          e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN
                        );
                      })
                      .sort(function (e, t) {
                        return t.senderTimestampMs - e.senderTimestampMs;
                      })
                      .slice(o("WAWebPinMsgGatingUtils").getMaxPins());
                  s.forEach(function (e) {
                    r.set(
                      e.parentMsgKey,
                      babelHelpers.extends({}, e, {
                        pinType: o("WAWebPinMsgConstants").PIN_STATE.UNPIN,
                      }),
                    );
                  });
                  var u = Array.from(r.values());
                  return (yield n.bulkCreateOrReplace(u), u);
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          )
      );
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebPinInChatSchema").getTable().get(e.toString());
          return t == null
            ? null
            : o("WAWebPinsDbSerialization").deserializePinInChat(t);
        })),
        u.apply(this, arguments)
      );
    }
    ((l.createOrUpdatePinInChat = e), (l.getPinInChatByParentKey = s));
  },
  98,
);
