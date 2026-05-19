__d(
  "WAWebStatusEphemeralBadgeUtils",
  [
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebEphemeralityFrontendUtils",
    "WAWebLidMigrationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      if (t == null && e.isRegularUser != null && e.isRegularUser())
        try {
          var n =
            e.isLid != null && e.isLid()
              ? o("WAWebLidMigrationUtils").toPn(e)
              : o("WAWebLidMigrationUtils").toLid(e);
          n && (t = o("WAWebChatCollection").ChatCollection.get(n));
        } catch (e) {}
      if (
        t != null &&
        o("WAWebChatEphemerality").isEphemeralSettingOn(t) &&
        !o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForChat(
          t,
        )
      )
        return { type: "discreet" };
    }
    l.getStatusRingEphemeralBadge = e;
  },
  98,
);
