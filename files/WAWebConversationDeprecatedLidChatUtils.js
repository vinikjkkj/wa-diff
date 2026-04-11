__d(
  "WAWebConversationDeprecatedLidChatUtils",
  ["WAWebApiContact", "WAWebLid1X1MigrationGating"],
  function (t, n, r, o, a, i, l) {
    var e = { isLidDeprecated: !1 };
    function s(t) {
      if (
        !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ||
        !t.id.isRegularUser() ||
        !t.accountLid
      )
        return e;
      var n = t.accountLid,
        r = o("WAWebApiContact").getLatestLid(n),
        a = n.equals(r);
      return a || r == null ? e : { isLidDeprecated: !0, latestLid: r };
    }
    l.getLidDeprecatedInfo = s;
  },
  98,
);
