__d(
  "WAWebHistorySyncLidChatGating",
  ["WALogger", "WAWebUserPrefsIndexedDBStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WAForceHistoryLidChat";
    function u() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) === !0;
    }
    async function c() {
      if (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s) != null) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] persistForceHistoryLidChatSetting called when value already set",
              ])),
          )
          .sendLogs("persist-force-history-lid-chat-called-twice");
        return;
      }
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, !0);
    }
    ((l.isForcedHistoryLidChat = u), (l.persistForceHistoryLidChatSetting = c));
  },
  98,
);
