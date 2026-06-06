__d(
  "WAWebScheduledMsgStore",
  [
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaScheduledMsgRevealKey",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return (await d(e.chatId))
        ? !1
        : (await o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
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
    }
    async function s(e) {
      if (e.revealKey.byteLength === 0) return null;
      var t = await o(
        "WAWebScheduledMsgDecryptInnerProto",
      ).decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
      return t == null
        ? null
        : o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
    }
    async function u(e) {
      var t = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeysForChat(
        e,
      );
      return t
        .filter(function (e) {
          return e.status === "PENDING" && e.scheduledTimestampS > 0;
        })
        .sort(function (e, t) {
          return e.scheduledTimestampS - t.scheduledTimestampS;
        });
    }
    async function c(e) {
      var t = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeysForChat(
        e,
      );
      return r("countWhere")(t, function (e) {
        return e.status === "PENDING" && e.scheduledTimestampS > 0;
      });
    }
    async function d(e) {
      var t = await c(e);
      return t >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT;
    }
    async function m() {
      var e = o(
          "WAWebSchemaScheduledMsgRevealKey",
        ).getScheduledMsgRevealKeyTable(),
        t = await e.equals(["status"], "PENDING");
      return t
        .filter(function (e) {
          return e.scheduledTimestampS > 0;
        })
        .sort(function (e, t) {
          return e.scheduledTimestampS - t.scheduledTimestampS;
        });
    }
    ((l.storeScheduledMessage = e),
      (l.decryptScheduledMsgBody = s),
      (l.getScheduledMessagesForChat = u),
      (l.getScheduledMessageCount = c),
      (l.isChatAtScheduleLimit = d),
      (l.getAllScheduledMessages = m));
  },
  98,
);
