__d(
  "WAWebConversationDeprecatedLidChatUtils",
  ["WAWebABProps", "WAWebApiContact", "WAWebLid1X1MigrationGating"],
  function (t, n, r, o, a, i, l) {
    var e = { isLidDeprecated: !1 };
    function s(e) {
      return o("WAWebABProps").getABPropConfigValue(
        "web_disable_compose_box_for_deprecated_chats",
      )
        ? u(e).isLidDeprecated
        : !1;
    }
    function u(t) {
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
    ((l.isDeprecatedLidChatSendBlocked = s), (l.getLidDeprecatedInfo = u));
  },
  98,
);
