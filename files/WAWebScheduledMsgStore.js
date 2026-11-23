__d(
  "WAWebScheduledMsgStore",
  [
    "WATimeUtils",
    "WAWebBuildScheduledMsgModel",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgRevealKeyStore",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return e.isAssociationChild !== !0 && (await p(e.chatId))
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
            outerMessageSecret: e.outerMessageSecret,
            isAssociationChild: e.isAssociationChild === !0 ? !0 : void 0,
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
      if (e.revealKey.byteLength === 0)
        return { body: null, isImage: !1, mentionedJidList: null };
      var t = await o(
        "WAWebScheduledMsgDecryptInnerProto",
      ).decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
      if (t == null) return { body: null, isImage: !1, mentionedJidList: null };
      var n = o(
          "WAWebExtractMentionFieldsFromScheduledMsg",
        ).extractMentionFieldsFromScheduledMsg(t),
        r = n.mentionedJidList,
        a = t.imageMessage,
        i =
          a != null
            ? a.caption
            : o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
      return {
        body: i,
        isImage: a != null,
        mentionedJidList: r != null ? r : null,
      };
    }
    async function c(e) {
      var t = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeysForChat(
        e,
      );
      return t
        .filter(function (e) {
          return (
            (e.status === "PENDING" || e.status === "FAILED") &&
            e.scheduledTimestampS > 0 &&
            e.isAssociationChild !== !0
          );
        })
        .sort(function (e, t) {
          return e.scheduledTimestampS - t.scheduledTimestampS;
        });
    }
    async function d(e) {
      var t = await c(e),
        n = await Promise.all(
          t.map(async function (e) {
            if (e.revealKey.byteLength === 0) return null;
            var t = await o(
              "WAWebScheduledMsgDecryptInnerProto",
            ).decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
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
          }),
        ),
        r = [];
      for (var a of n) a != null && r.push(a);
      return r;
    }
    async function m(e) {
      var t = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeysForChat(
        e,
      );
      return r("countWhere")(t, function (e) {
        return (
          e.status === "PENDING" &&
          e.scheduledTimestampS > 0 &&
          e.isAssociationChild !== !0
        );
      });
    }
    async function p(e) {
      var t = await m(e);
      return t >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT;
    }
    ((l.storeScheduledMessage = e),
      (l.decryptScheduledMsgBody = s),
      (l.decryptScheduledMsgPreview = u),
      (l.getScheduledMessagesForChat = c),
      (l.getScheduledMsgDataForChat = d),
      (l.getScheduledMessageCount = m),
      (l.isChatAtScheduleLimit = p));
  },
  98,
);
