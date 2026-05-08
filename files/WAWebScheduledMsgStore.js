__d(
  "WAWebScheduledMsgStore",
  [
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaScheduledMsgRevealKey",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield f(e.chatId))
            ? !1
            : (yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                chatId: e.chatId,
                encIv: e.encIv,
                encPayload: e.encPayload,
                isOrphan: 0,
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
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.encPayload == null ||
            e.encIv == null ||
            e.revealKey == null ||
            e.encPayload.byteLength === 0 ||
            e.encIv.byteLength === 0 ||
            e.revealKey.byteLength === 0
          )
            return null;
          var t = yield o(
            "WAWebScheduledMsgDecryptInnerProto",
          ).decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
          return t == null
            ? null
            : o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
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
          var t = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).getRevealKeysForChat(e);
          return t
            .filter(function (e) {
              return e.status === "PENDING" && e.scheduledTimestampS > 0;
            })
            .sort(function (e, t) {
              return e.scheduledTimestampS - t.scheduledTimestampS;
            });
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
          var t = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).getRevealKeysForChat(e);
          return t.filter(function (e) {
            return e.status === "PENDING" && e.scheduledTimestampS > 0;
          }).length;
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
          var t = yield p(e);
          return (
            t >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
              "WAWebSchemaScheduledMsgRevealKey",
            ).getScheduledMsgRevealKeyTable(),
            t = yield e.equals(["status"], "PENDING");
          return t
            .filter(function (e) {
              return e.scheduledTimestampS > 0;
            })
            .sort(function (e, t) {
              return e.scheduledTimestampS - t.scheduledTimestampS;
            });
        })),
        y.apply(this, arguments)
      );
    }
    ((l.storeScheduledMessage = e),
      (l.decryptScheduledMsgBody = u),
      (l.getScheduledMessagesForChat = d),
      (l.getScheduledMessageCount = p),
      (l.isChatAtScheduleLimit = f),
      (l.getAllScheduledMessages = h));
  },
  98,
);
