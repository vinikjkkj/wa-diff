__d(
  "WAWebStatusEphemeralBadgeUtils",
  [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebLidMigrationUtils",
    "useWAWebChatValues",
    "useWAWebGroupMetadataValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = o("WAWebChatCollection").ChatCollection.get(e);
      if (s == null && e.isRegularUser != null && e.isRegularUser())
        try {
          var u =
            e.isLid != null && e.isLid()
              ? o("WAWebLidMigrationUtils").toPn(e)
              : o("WAWebLidMigrationUtils").toLid(e);
          u != null && (s = o("WAWebChatCollection").ChatCollection.get(u));
        } catch (e) {}
      var c =
          (n = o("useWAWebChatValues").useOptionalChatValues(
            (r = (a = s) == null ? void 0 : a.id) != null ? r : e,
            [o("WAWebFrontendChatGetters").getEphemeralDuration],
          )) != null
            ? n
            : [],
        d = c[0],
        m =
          (i = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(
            (l = s) == null || (l = l.groupMetadata) == null ? void 0 : l.id,
            [o("WAWebGroupMetadataGetters").getEphemeralDuration],
          )) != null
            ? i
            : [],
        p = m[0],
        _ = s != null && o("WAWebChatGetters").getIsGroup(s) ? p : d,
        f = t && _ != null && _ > 0;
      return f
        ? { type: "discreet", testid: "disappearing-messages-refreshed" }
        : void 0;
    }
    l.useStatusRingEphemeralBadge = e;
  },
  98,
);
