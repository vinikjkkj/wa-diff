__d(
  "WAWebScheduledMsgStore",
  [
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
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
          var t = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).countPendingKeysForChat(e.chatId);
          return t >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT
            ? !1
            : (yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                chatId: e.chatId,
                encIv: new Uint8Array(0),
                encPayload: new Uint8Array(0),
                isOrphan: 0,
                msgId: e.msgId,
                revealKey: e.revealKey,
                revealKeyId: e.revealKeyId,
                scheduledTimestampS: e.scheduledTimestampS,
                status: "PENDING",
                createdAt: o("WATimeUtils").unixTime(),
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
          var t = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).getRevealKeysForChat(e);
          return t
            .filter(function (e) {
              return e.status === "PENDING";
            })
            .sort(function (e, t) {
              return e.scheduledTimestampS - t.scheduledTimestampS;
            });
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
          return o("WAWebScheduledMsgRevealKeyStore").countPendingKeysForChat(
            e,
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
          var t = yield o(
            "WAWebScheduledMsgRevealKeyStore",
          ).countPendingKeysForChat(e);
          return (
            t >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
              "WAWebSchemaScheduledMsgRevealKey",
            ).getScheduledMsgRevealKeyTable(),
            t = yield e.equals(["status"], "PENDING");
          return t.sort(function (e, t) {
            return e.scheduledTimestampS - t.scheduledTimestampS;
          });
        })),
        g.apply(this, arguments)
      );
    }
    ((l.storeScheduledMessage = e),
      (l.getScheduledMessagesForChat = u),
      (l.getScheduledMessageCount = d),
      (l.isChatAtScheduleLimit = p),
      (l.getAllScheduledMessages = f));
  },
  98,
);
