__d(
  "WAWebScheduledMsgStore",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBuildScheduledMsgModel",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgRevealKeyStore",
    "asyncToGeneratorRuntime",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield y(e.chatId))
            ? !1
            : (yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                chatId: e.chatId,
                encIv: e.encIv,
                encPayload: e.encPayload,
                msgId: e.msgId,
                revealKey: e.revealKey,
                revealKeyId: e.revealKeyId,
                scheduledTimestampS: e.scheduledTimestampS,
                status: "PENDING",
                createdAt: o("WATimeUtils").unixTime(),
                senderJid: null,
              }),
              !0);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.revealKey.byteLength === 0) return null;
          var t = yield o(
            "WAWebScheduledMsgDecryptInnerProto",
          ).decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
          return t == null
            ? null
            : o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).getRevealKeysForChat(e);
          return t
            .filter(function (e) {
              return (
                (e.status === "PENDING" || e.status === "FAILED") &&
                e.scheduledTimestampS > 0
              );
            })
            .sort(function (e, t) {
              return e.scheduledTimestampS - t.scheduledTimestampS;
            });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield m(t),
            a = yield (e || (e = n("Promise"))).all(
              r.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (e.revealKey.byteLength === 0) return null;
                      var t = yield o(
                        "WAWebScheduledMsgDecryptInnerProto",
                      ).decryptAndDecodeRevealPayload(
                        e.encPayload,
                        e.encIv,
                        e.revealKey,
                      );
                      if (t == null) return null;
                      var n = o(
                        "WAWebBuildScheduledMsgModel",
                      ).buildScheduledMsgDataFromRecord(e, t);
                      return n == null
                        ? null
                        : {
                            msgData: n,
                            msgId: e.msgId,
                            status: e.status,
                            scheduledTimestampS: e.scheduledTimestampS,
                          };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            i = [];
          for (var l of a) l != null && i.push(l);
          return i;
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
          var t = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).getRevealKeysForChat(e);
          return r("countWhere")(t, function (e) {
            return e.status === "PENDING" && e.scheduledTimestampS > 0;
          });
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
          var t = yield g(e);
          return (
            t >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT
          );
        })),
        C.apply(this, arguments)
      );
    }
    ((l.storeScheduledMessage = s),
      (l.decryptScheduledMsgBody = c),
      (l.getScheduledMessagesForChat = m),
      (l.getScheduledMsgDataForChat = _),
      (l.getScheduledMessageCount = g),
      (l.isChatAtScheduleLimit = y));
  },
  98,
);
