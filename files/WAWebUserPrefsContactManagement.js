__d(
  "WAWebUserPrefsContactManagement",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs.SyncContactToAddressbookCounts,
        ),
        t = typeof e == "object" ? e : null,
        n =
          typeof (t == null ? void 0 : t.enabledCount) == "number"
            ? t.enabledCount
            : 0,
        a =
          typeof (t == null ? void 0 : t.disabledCount) == "number"
            ? t.disabledCount
            : 0;
      return { enabledCount: n, disabledCount: a };
    }
    function u(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.SyncContactToAddressbookCounts,
        e,
      );
    }
    function c(t) {
      var n = s(),
        r = d();
      (r !== t
        ? t
          ? (n.enabledCount++, n.enabledCount >= e && (n.disabledCount = 0))
          : (n.disabledCount++, n.disabledCount >= e && (n.enabledCount = 0))
        : !t && n.enabledCount < e
          ? (n.enabledCount = 0)
          : t && n.disabledCount < e && (n.disabledCount = 0),
        u(n));
    }
    function d() {
      var t = s();
      return t.enabledCount >= e;
    }
    ((l.setSyncToAddressbookLastSetting = c),
      (l.getSyncToAddressbookDefaultSetting = d));
  },
  98,
);
