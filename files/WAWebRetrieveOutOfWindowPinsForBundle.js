__d(
  "WAWebRetrieveOutOfWindowPinsForBundle",
  [
    "WALogger",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
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
    async function c(t) {
      var n = t.chatId,
        a = t.inWindowMessageKeys,
        i = t.messagesNotOlderThanTimestamp,
        l = t.targetJoinTime,
        s = n.toString(),
        c = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["pinned-messages", "message"], async function (e) {
            var t = e[0],
              n = e[1],
              d = await t.anyOf(["chatId"], [s]),
              m = d
                .filter(function (e) {
                  return e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN;
                })
                .sort(function (e, t) {
                  return t.senderTimestampMs - e.senderTimestampMs;
                })
                .slice(0, o("WAWebPinMsgGatingUtils").getMaxPins())
                .map(function (e) {
                  return e.parentMsgKey;
                })
                .filter(function (e) {
                  return !a.has(e);
                }),
              p = await n.bulkGet(m);
            p.forEach(function (e) {
              e != null &&
                (e.t == null ||
                  e.t >= i ||
                  (l != null && e.t >= l) ||
                  (r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type) &&
                    (u.has(e.type) || c.push(e))));
            });
          }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-history] Retrieved ",
              " out-of-window pinned messages",
            ])),
          c.length,
        ),
        c
      );
    }
    l.retrieveOutOfWindowPinsForBundle = c;
  },
  98,
);
