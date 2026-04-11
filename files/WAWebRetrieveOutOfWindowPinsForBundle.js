__d(
  "WAWebRetrieveOutOfWindowPinsForBundle",
  [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        (s = o("WAWebMsgType")).MSG_TYPE.IMAGE,
        s.MSG_TYPE.VIDEO,
        s.MSG_TYPE.AUDIO,
        s.MSG_TYPE.PTT,
        s.MSG_TYPE.PTV,
        s.MSG_TYPE.DOCUMENT,
        s.MSG_TYPE.STICKER,
      ]);
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          if (!o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(t))
            return [];
          var l = t.toString(),
            s = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["pinned-messages", "message"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        c = yield t.anyOf(["chatId"], [l]),
                        d = c
                          .filter(function (e) {
                            return (
                              e.pinType ===
                              o("WAWebPinMsgConstants").PIN_STATE.PIN
                            );
                          })
                          .sort(function (e, t) {
                            return t.senderTimestampMs - e.senderTimestampMs;
                          })
                          .slice(0, o("WAWebPinMsgGatingUtils").getMaxPins())
                          .map(function (e) {
                            return e.parentMsgKey;
                          })
                          .filter(function (e) {
                            return !i.has(e);
                          }),
                        m = yield n.bulkGet(d);
                      m.forEach(function (e) {
                        e != null &&
                          (e.t == null ||
                            e.t >= a ||
                            (r("WAWebGroupHistorySupportedMessageTypesUtil")(
                              e.type,
                            ) &&
                              (u.has(e.type) || s.push(e))));
                      });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Retrieved ",
                  " out-of-window pinned messages",
                ])),
              s.length,
            ),
            s
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.retrieveOutOfWindowPinsForBundle = c;
  },
  98,
);
