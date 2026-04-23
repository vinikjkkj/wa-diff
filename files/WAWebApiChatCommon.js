__d(
  "WAWebApiChatCommon",
  [
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaChat").getChatTable().get(e.toString(), !1);
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat")
            .getChatTable()
            .equals(["historyChatId"], e, { shouldDecrypt: !1, limit: 1 });
          return t[0];
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!r("WAWebWid").isWid(t)) return null;
          var n = o("WAWebWidFactory").createWid(t);
          return n.isRegularUserPn() &&
            o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
            ? s(n.toString())
            : e(n);
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getChatRecord = e),
      (l.getChatRecordByHistoryChatId = s),
      (l.getChatMaybeByHistory = c));
  },
  98,
);
