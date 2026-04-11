__d(
  "WAWebUserPrefsModelStorage",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.INITIAL_GROUP_PHASH,
        JSON.stringify(e),
      );
    }
    function s(e) {
      var t;
      return (t = u()) == null ? void 0 : t[e];
    }
    function u() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.INITIAL_GROUP_PHASH,
      );
      if (typeof e != "string") return null;
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    ((l.setInitialGroupPhash = e),
      (l.getInitialGroupPhash = s),
      (l.getInitialGroupPhashMap = u));
  },
  98,
);
