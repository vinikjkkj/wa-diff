__d(
  "WAWebThreadMetadataUtil",
  ["WALogger", "WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.accountLid,
        r = t.chatId,
        a = t.chatTimestamp;
      if (a != null) {
        if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(r))
          if (n == null)
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getOfflineMetaPreviewForChat] accountLid null, migrated",
                  ])),
              )
              .sendLogs("account-lid-null-offline-metadata");
          else {
            var i = a[n.toString({ legacy: !0 })];
            if (i) return i;
          }
        return a[r.toString({ legacy: !0 })];
      }
    }
    l.getOfflineMetaPreviewForChat = s;
  },
  98,
);
