__d(
  "WAWebApiChatCommon",
  [
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaChat").getChatTable().get(e.toString(), !1);
    }
    async function s(e) {
      var t = await o("WAWebSchemaChat")
        .getChatTable()
        .equals(["historyChatId"], e, { shouldDecrypt: !1, limit: 1 });
      return t[0];
    }
    async function u(t) {
      if (!r("WAWebWid").isWid(t)) return null;
      var n = o("WAWebWidFactory").createWid(t);
      return n.isRegularUserPn() &&
        o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
        ? s(n.toString())
        : e(n);
    }
    ((l.getChatRecord = e),
      (l.getChatRecordByHistoryChatId = s),
      (l.getChatMaybeByHistory = u));
  },
  98,
);
