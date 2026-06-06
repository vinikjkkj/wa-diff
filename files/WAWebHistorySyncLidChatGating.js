__d(
  "WAWebHistorySyncLidChatGating",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebLid1X1MigrationGating",
    "WAWebUserPrefsIndexedDBStorage",
  ],
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
      var t =
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_force_lid_chats_in_history",
        );
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, t);
    }
    ((l.isForcedHistoryLidChat = u), (l.persistForceHistoryLidChatSetting = c));
  },
  98,
);
