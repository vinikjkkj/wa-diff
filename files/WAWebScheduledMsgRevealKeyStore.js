__d(
  "WAWebScheduledMsgRevealKeyStore",
  [
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebScheduledMsgConstants",
    "WAWebSchemaScheduledMsgRevealKey",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      (await t.createOrReplace(e),
        o("WAWebBackendApi").frontendFireAndForget(
          "triggerScheduledMsgChangedFromBridge",
          { chatId: e.chatId },
        ));
    }
    async function s(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      return t.get(e);
    }
    async function u(e) {
      var t,
        n = o(
          "WAWebSchemaScheduledMsgRevealKey",
        ).getScheduledMsgRevealKeyTable(),
        r = await n.equals(["revealKeyId"], e);
      return (t = r[0]) != null ? t : null;
    }
    async function c(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      return t.equals(["chatId"], e);
    }
    async function d(e, t) {
      var n = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      await n.merge(e, { status: t });
      var r = await n.get(e);
      r != null &&
        o("WAWebBackendApi").frontendFireAndForget(
          "triggerScheduledMsgChangedFromBridge",
          { chatId: r.chatId },
        );
    }
    async function m(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      (await t.remove(e),
        o("WAWebBackendApi").frontendFireAndForget(
          "triggerScheduledMsgRevealedFromBridge",
          { msgId: e },
        ));
    }
    async function p(e) {
      var t = o(
          "WAWebSchemaScheduledMsgRevealKey",
        ).getScheduledMsgRevealKeyTable(),
        n = await t.equals(["chatId"], e);
      if (n.length === 0) return [];
      var r = n.map(function (e) {
        return e.msgId;
      });
      return (await t.bulkRemove(r), r);
    }
    async function _() {
      var e = o(
          "WAWebSchemaScheduledMsgRevealKey",
        ).getScheduledMsgRevealKeyTable(),
        t =
          o("WATimeUtils").unixTime() -
          o("WAWebScheduledMsgConstants")
            .SCHEDULED_MSG_REVEAL_KEY_RETENTION_DAYS *
            o("WATimeUtils").DAY_SECONDS,
        n = await e.all(),
        r = n
          .filter(function (e) {
            var n =
              e.scheduledTimestampS > 0 ? e.scheduledTimestampS : e.createdAt;
            return n < t;
          })
          .map(function (e) {
            return e.msgId;
          });
      r.length > 0 && (await e.bulkRemove(r));
    }
    ((l.storeRevealKey = e),
      (l.getRevealKeyByMsgId = s),
      (l.getRevealKeyByRevealKeyId = u),
      (l.getRevealKeysForChat = c),
      (l.updateRevealKeyStatus = d),
      (l.deleteRevealKey = m),
      (l.deleteRevealKeysForChat = p),
      (l.cleanupExpiredRevealKeys = _));
  },
  98,
);
